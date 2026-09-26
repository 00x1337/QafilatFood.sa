import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import InnerPage from "@/components/inner-page";
import { pageMetadata, serviceDetails, siteUrl } from "@/lib/site";
export const dynamicParams = false;
export function generateStaticParams() { return serviceDetails.map(({ slug }) => ({ slug })); }
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params; const service = serviceDetails.find(s => s.slug === slug);
  return service ? pageMetadata(service.title, service.description, `/services/${slug}`) : {};
}
export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params; const s = serviceDetails.find(s => s.slug === slug); if (!s) notFound();
  const schema = { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "الرئيسية", item: siteUrl }, { "@type": "ListItem", position: 2, name: s.short, item: `${siteUrl}/services/${slug}` }] };
  return <InnerPage title={s.title} description={s.description}>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, "\\u003c") }} />
    <section className="shell detail-grid section"><div><p className="eyebrow">نطاق الخدمة</p><h2>من التخطيط<br />إلى التقديم.</h2><p className="detail-intro">{s.intro}</p>{s.items.map(([title, text]) => <article className="detail-item" key={title}><h3>{title}</h3><p>{text}</p></article>)}</div><aside><figure className="detail-photo"><Image src={s.image} alt={`صورة توضيحية لخدمة ${s.short}`} width={1000} height={680} /><figcaption>صورة توضيحية مولّدة؛ ليست توثيقًا لمرافق الشركة.</figcaption></figure><div className="request-checklist"><h3>لتجهيز عرض مناسب</h3><ul>{s.needs.map(n => <li key={n}>{n}</li>)}</ul><Link className="button button-gold" href={`/contact?service=${s.slug}`}>جهّز تفاصيل طلبك ←</Link></div></aside></section>
    <section className="shell faq-section"><h2>أسئلة عن الخدمة</h2>{s.faqs.map(([q, a]) => <details key={q}><summary>{q}</summary><p>{a}</p></details>)}</section>
    <section className="shell related-services"><h2>خدمات أخرى</h2>{serviceDetails.filter(x => x.slug !== s.slug).map(x => <Link key={x.slug} href={`/services/${x.slug}`}>{x.short} ←</Link>)}</section>
  </InnerPage>;
}
