"use client";
import { Suspense, useState } from "react";
import { useSearchParams } from "next/navigation";
import { contact, serviceDetails } from "@/lib/site";

const waNumber = contact.whatsapp || contact.phone.replace(/\D/g, "");
// wa.me rejects very long query strings, so only the free-text field is shortened
// for the WhatsApp message; the copy and mail versions keep the full text.
const WA_DETAILS_LIMIT = 400;

function whatsappHref(text: string) {
  return `https://wa.me/${waNumber}?text=${encodeURIComponent(text)}`;
}

function buildText(fields: { company: string; service?: string; count: string; date: string; location: string; details: string }) {
  return [
    "*طلب عرض خدمات إعاشة — قافلة الغذاء*",
    `الجهة: ${fields.company}`,
    `الخدمة: ${fields.service}`,
    `عدد المستفيدين: ${fields.count}`,
    `تاريخ البدء: ${fields.date}`,
    `الموقع: ${fields.location}`,
    `التفاصيل: ${fields.details}`,
  ].join("\n");
}

const WhatsAppIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true" fill="currentColor">
    <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38a9.9 9.9 0 0 0 4.79 1.22c5.46 0 9.91-4.45 9.91-9.91S17.5 2 12.04 2Zm0 18.15a8.2 8.2 0 0 1-4.19-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.22 8.22 0 0 1-1.26-4.38c0-4.54 3.7-8.23 8.25-8.23a8.2 8.2 0 0 1 8.24 8.24c0 4.54-3.7 8.23-8.24 8.23Zm4.52-6.16c-.25-.12-1.47-.72-1.69-.81-.23-.08-.39-.12-.56.12-.16.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.12-1.05-.39-2-1.23-.74-.66-1.23-1.47-1.38-1.72-.14-.25-.01-.38.11-.5.11-.11.25-.29.37-.43.12-.14.16-.25.25-.41.08-.17.04-.31-.02-.43-.06-.12-.56-1.34-.76-1.84-.2-.48-.4-.42-.56-.43h-.48c-.17 0-.43.06-.66.31-.23.25-.86.85-.86 2.07 0 1.22.89 2.4 1.01 2.56.12.17 1.75 2.67 4.23 3.74.59.26 1.05.41 1.41.52.59.19 1.13.16 1.56.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.08.14-1.18-.06-.11-.22-.17-.47-.29Z" />
  </svg>
);

function RequestFields() {
  const params = useSearchParams();
  const preset = serviceDetails.find((s) => s.slug === params.get("service"))?.slug ?? serviceDetails[0].slug;
  const [message, setMessage] = useState("");
  const [waHref, setWaHref] = useState("");
  const [status, setStatus] = useState("");

  function prepare(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const details = String(data.get("details") ?? "").trim();
    const fields = {
      company: String(data.get("company") ?? ""),
      service: serviceDetails.find((s) => s.slug === data.get("service"))?.short,
      count: String(data.get("count") ?? ""),
      date: String(data.get("date") ?? ""),
      location: String(data.get("location") ?? ""),
    };

    setMessage(buildText({ ...fields, details: details || "لم تذكر" }));

    const condensed = details.length > WA_DETAILS_LIMIT ? `${details.slice(0, WA_DETAILS_LIMIT)}…` : details;
    const href = whatsappHref(buildText({ ...fields, details: condensed || "لم تذكر" }));
    setWaHref(href);

    // Same gesture as the submit, so the tab opens instead of being blocked.
    const link = document.createElement("a");
    link.href = href;
    link.target = "_blank";
    link.rel = "noopener noreferrer";
    link.click();

    setStatus("جهّزنا ملخصك وفتحنا واتساب لإرساله. إن لم تُفتح النافذة فاضغط زر واتساب أدناه.");
  }

  async function copy() {
    try {
      await navigator.clipboard.writeText(message);
      setStatus("تم نسخ الملخص. لم يتم إرسال الطلب.");
    } catch {
      setStatus("تعذّر النسخ التلقائي؛ حدد النص وانسخه يدويًا.");
    }
  }

  return (
    <>
      <form className="quote-form" onSubmit={prepare} onChange={() => { setMessage(""); setWaHref(""); setStatus(""); }}>
        <label>اسم الجهة<input name="company" required maxLength={120} autoComplete="organization" /></label>
        <label>الخدمة<select name="service" defaultValue={preset} key={preset}>{serviceDetails.map((s) => <option value={s.slug} key={s.slug}>{s.short}</option>)}</select></label>
        <label>عدد المستفيدين<input name="count" type="number" min="1" max="1000000" required /></label>
        <label>تاريخ البدء<input name="date" type="date" required /></label>
        <label className="full-field">موقع الخدمة<input name="location" required maxLength={200} /></label>
        <label className="full-field">تفاصيل إضافية<textarea name="details" rows={4} maxLength={2000} placeholder="مدة الخدمة، عدد الوجبات، طريقة التقديم، والاحتياجات الغذائية" /></label>
        <p className="full-field form-note">يُجهّز النموذج ملخصك على جهازك ثم يفتح واتساب لإرساله إلى الشركة؛ لا يُحفظ شيء على الموقع.</p>
        <button className="button button-gold" type="submit"><WhatsAppIcon />متابعة الطلب عبر واتساب</button>
      </form>
      <p role="status" aria-live="polite">{status}</p>
      {message && (
        <div className="request-result">
          <h3>ملخص طلبك</h3>
          <textarea aria-label="ملخص الطلب" value={message} readOnly rows={9} />
          <a className="button button-gold" href={waHref} target="_blank" rel="noopener noreferrer"><WhatsAppIcon />فتح واتساب</a>
          <button className="button" onClick={copy}>نسخ الملخص</button>
          {contact.email && <a className="button" href={`mailto:${contact.email}?subject=${encodeURIComponent("طلب عرض إعاشة")}&body=${encodeURIComponent(message)}`}>فتح البريد لإرسال الطلب</a>}
        </div>
      )}
    </>
  );
}

export default function RequestForm() {
  return <Suspense fallback={<p>جارٍ تجهيز النموذج… يلزم تفعيل JavaScript لاستخدام أداة تجهيز الطلب.</p>}><RequestFields /></Suspense>;
}
