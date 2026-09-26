"use client";
import { Suspense, useState } from "react";
import { useSearchParams } from "next/navigation";
import { contact, serviceDetails } from "@/lib/site";
function RequestFields() {
  const params = useSearchParams();
  const preset = serviceDetails.find(s => s.slug === params.get("service"))?.slug ?? serviceDetails[0].slug;
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("");
  function prepare(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault(); const data = new FormData(event.currentTarget);
    const text = `طلب عرض خدمات إعاشة — قافلة الغذاء\nالجهة: ${data.get("company")}\nالخدمة: ${serviceDetails.find(s => s.slug === data.get("service"))?.short}\nعدد المستفيدين: ${data.get("count")}\nتاريخ البدء: ${data.get("date")}\nالموقع: ${data.get("location")}\nالتفاصيل: ${data.get("details") || "لم تذكر"}`;
    setMessage(text); setStatus("تم تجهيز ملخص الطلب على جهازك. لم يُرسل إلى الشركة.");
  }
  async function copy() { try { await navigator.clipboard.writeText(message); setStatus("تم نسخ الملخص. لم يتم إرسال الطلب."); } catch { setStatus("تعذّر النسخ التلقائي؛ حدد النص وانسخه يدويًا."); } }
  return <><form className="quote-form" onSubmit={prepare} onChange={() => { setMessage(""); setStatus(""); }}><label>اسم الجهة<input name="company" required maxLength={120} autoComplete="organization" /></label><label>الخدمة<select name="service" defaultValue={preset} key={preset}>{serviceDetails.map(s => <option value={s.slug} key={s.slug}>{s.short}</option>)}</select></label><label>عدد المستفيدين<input name="count" type="number" min="1" max="1000000" required /></label><label>تاريخ البدء<input name="date" type="date" required /></label><label className="full-field">موقع الخدمة<input name="location" required maxLength={200} /></label><label className="full-field">تفاصيل إضافية<textarea name="details" rows={4} maxLength={2000} placeholder="مدة الخدمة، عدد الوجبات، طريقة التقديم، والاحتياجات الغذائية" /></label><p className="full-field form-note">تُستخدم هذه البيانات لتجهيز ملخص محلي فقط؛ لا تُرسل أو تُحفظ على الموقع.</p><button className="button button-gold" type="submit">تجهيز ملخص الطلب</button></form><p role="status" aria-live="polite">{status}</p>{message && <div className="request-result"><h3>ملخص طلبك</h3><textarea aria-label="ملخص الطلب" value={message} readOnly rows={9} /><button className="button button-gold" onClick={copy}>نسخ الملخص</button>{contact.email && <a className="button" href={`mailto:${contact.email}?subject=${encodeURIComponent("طلب عرض إعاشة")}&body=${encodeURIComponent(message)}`}>فتح البريد لإرسال الطلب</a>}</div>}</>;
}

export default function RequestForm() {
  return <Suspense fallback={<p>جارٍ تجهيز النموذج… يلزم تفعيل JavaScript لاستخدام أداة تجهيز الطلب.</p>}><RequestFields /></Suspense>;
}
