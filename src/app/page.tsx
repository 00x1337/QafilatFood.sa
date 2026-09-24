import Image from "next/image";

const ArrowIcon = ({ className = "" }: { className?: string }) => (
  <svg className={className} aria-hidden="true" viewBox="0 0 24 24" fill="none">
    <path d="M19 12H5m0 0 6 6m-6-6 6-6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const CheckIcon = () => (
  <svg aria-hidden="true" viewBox="0 0 20 20" fill="none">
    <path d="m5.2 10.3 3 3 6.7-7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const services = [
  {
    number: "01",
    title: "إعاشة المشاعر المقدسة",
    description: "تشغيل متكامل لخدمات الطعام والشراب في منى وعرفات، بخطط توزيع دقيقة تناسب كثافة الموسم وتنوّع الجنسيات.",
    image: "/images/kitchen-operations-v2.webp",
    alt: "فريق مطبخ احترافي يجهز وجبات الإعاشة وفق معايير السلامة",
    points: ["وجبات ساخنة وجافة", "بوفيهات كبار الشخصيات", "إدارة التوزيع الميداني"],
  },
  {
    number: "02",
    title: "تشغيل مطابخ الفنادق",
    description: "فرق تشغيل وطهاة متخصصون لإدارة مطابخ ومطاعم فنادق مكة خلال مواسم الحج والعمرة بكفاءة عالية.",
    image: "/images/hotel-buffet.webp",
    alt: "بوفيه فندقي أنيق مجهز لخدمات الإعاشة",
    points: ["كوادر تشغيل مؤهلة", "قوائم متعددة الثقافات", "رقابة جودة يومية"],
  },
  {
    number: "03",
    title: "الوجبات المغلفة والولائم",
    description: "إعداد وتغليف وتوريد الوجبات للجهات والشركات والمناسبات، مع المحافظة على جودة المنتج حتى لحظة التقديم.",
    image: "/images/hero-catering.webp",
    alt: "تقديم فاخر لوجبات سعودية وعالمية",
    points: ["تغليف حراري محكم", "نقل مبرد ومجهز", "خيارات حسب احتياج العميل"],
  },
];

const projects = [
  { total: "4,600", label: "حاج VIP", client: "حجاج باكستان", detail: "إعاشة فندقية وبوفيهات مفتوحة" },
  { total: "4,200", label: "حاج", client: "مشارق ركين", detail: "إعاشة حجاج إندونيسيا" },
  { total: "4,200", label: "حاج", client: "طيران ناس", detail: "خدمة المشاعر المقدسة" },
  { total: "3,800", label: "حاج VIP", client: "مشارق الماسية", detail: "بوفيهات ومأكولات آسيوية" },
  { total: "3,500", label: "حاج", client: "حجاج إندونيسيا", detail: "مؤسسة جنوب شرق آسيا" },
  { total: "4,500", label: "حاج", client: "حجاج باكستان", detail: "مؤسسة جنوب آسيا" },
];

const certificates = [
  { code: "ISO", name: "ISO 22000:2018", detail: "نظام إدارة سلامة الغذاء", ref: "SCC/INT/2309NL/2561" },
  { code: "HACCP", name: "HACCP Certified", detail: "تحليل المخاطر ونقاط التحكم", ref: "SA23/244517" },
  { code: "568", name: "أمانة العاصمة المقدسة", detail: "تأهيل متعهد إعاشة", ref: "طاقة 18,000 وجبة" },
  { code: "A+", name: "تصنيف بلدي", detail: "مقدمو خدمات المدن", ref: "2023011791" },
];

const partners = [
  { name: "طيران ناس", logo: "/partners/flynas.webp" },
  { name: "مشارق", logo: "/partners/mashariq.webp" },
  { name: "ركين", logo: "/partners/rakeen.webp" },
  { name: "ضيوف البيت", logo: "/partners/al-bait-guests.webp" },
  { name: "إكرام الضيف للسياحة", logo: "/partners/ikram-aldiyafa.webp" },
  { name: "الماسية", logo: "/partners/almasiah.webp" },
  { name: "Tabung Haji Travel", logo: "/partners/tabung-haji-travel.webp" },
  { name: "JAD Travel & Tours", logo: "/partners/jad.webp" },
  { name: "MKM Ticketing Travel & Tours", logo: "/partners/mkm.webp" },
  { name: "Andalusia Travel & Tours", logo: "/partners/andalusia.webp" },
  { name: "Tabung Haji", logo: "/partners/tabung-haji.webp" },
  { name: "TRI-D Travel & Tours", logo: "/partners/tri-d.webp" },
];

export default function Home() {
  return (
    <main>
      <a className="skip-link" href="#main-content">انتقل إلى المحتوى</a>

      <div className="announcement">
        <div className="shell announcement-inner">
          <p><span className="pulse" /> معتمدون في سلامة الغذاء وفق ISO 22000 وHACCP</p>
          <p className="announcement-meta">مكة المكرمة · نخدم المواسم على مدار العام</p>
        </div>
      </div>

      <header className="site-header">
        <div className="shell nav-wrap">
          <a href="#top" className="brand" aria-label="قافلة الغذاء - الصفحة الرئيسية">
            <span className="brand-mark" aria-hidden="true">
              <svg viewBox="0 0 48 48" fill="none">
                <path d="M10 29.5c7.5-1 11.5-4.4 14-11.5 2.2 6.6 6.8 10.5 14 11.5-6.7 1.3-11.5 4.8-14 11.5-2.4-6.6-6.9-10.3-14-11.5Z" fill="currentColor" />
                <path d="M16 11h16M19 15h10" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
              </svg>
            </span>
            <span className="brand-copy">
              <strong>قافلة الغذاء</strong>
              <small>QAFILAT ALGHIDHA</small>
            </span>
          </a>

          <nav className="desktop-nav" aria-label="التنقل الرئيسي">
            <a href="#about">عن الشركة</a>
            <a href="#services">خدماتنا</a>
            <a href="#experience">خبراتنا</a>
            <a href="#partners">شركاؤنا</a>
            <a href="#quality">الجودة</a>
          </nav>

          <a className="nav-cta" href="#contact">اطلب عرضًا <ArrowIcon /></a>

          <details className="mobile-nav">
            <summary aria-label="فتح القائمة"><span /><span /></summary>
            <div className="mobile-menu">
              <a href="#about">عن الشركة</a>
              <a href="#services">خدماتنا</a>
              <a href="#experience">خبراتنا</a>
              <a href="#partners">شركاؤنا</a>
              <a href="#quality">الجودة</a>
              <a href="#contact">اطلب عرضًا</a>
            </div>
          </details>
        </div>
      </header>

      <section id="top" className="hero">
        <Image className="hero-image" src="/images/hero-catering.webp" alt="تجربة ضيافة وإعاشة راقية من قافلة الغذاء" fill priority loading="eager" sizes="100vw" />
        <div className="hero-shade" />
        <div className="hero-pattern" aria-hidden="true" />
        <div className="shell hero-content" id="main-content">
          <div className="hero-copy">
            <p className="eyebrow light"><span />من مكة إلى ضيوف الرحمن</p>
            <h1>إعاشة تُدار<br />بـ<span>إتقان.</span></h1>
            <p className="hero-lead">نصنع تجربة غذائية آمنة وموثوقة للبعثات والفنادق والجهات، بطاقة تشغيلية تصل إلى 18,000 وجبة يوميًا.</p>
            <div className="hero-actions">
              <a className="button button-gold" href="#contact">تحدث مع فريقنا <ArrowIcon /></a>
              <a className="text-link" href="#services">اكتشف قدراتنا <ArrowIcon /></a>
            </div>
          </div>

          <aside className="hero-proof" aria-label="ملخص الاعتمادات">
            <p>جاهزية تشغيلية موثقة</p>
            <strong>18,000</strong>
            <span>وجبة يوميًا</span>
            <div className="proof-line" />
            <div className="proof-badges"><b>ISO 22000</b><b>HACCP</b></div>
          </aside>
        </div>

        <div className="shell hero-stats" aria-label="أرقام الشركة">
          <div><strong>+25,000</strong><span>حاج تمت خدمتهم</span></div>
          <div><strong>4</strong><span>اعتمادات رئيسية</span></div>
          <div><strong>A+</strong><span>تصنيف مقدمي الخدمات</span></div>
          <div><strong>1444هـ</strong><span>بداية رحلتنا</span></div>
        </div>
      </section>

      <section id="about" className="section about-section">
        <div className="shell about-grid">
          <div className="about-heading">
            <p className="eyebrow"><span />من نحن</p>
            <h2>شريك تشغيلي يعرف<br />خصوصية <em>الموسم.</em></h2>
          </div>
          <div className="about-copy">
            <p className="lead">تأسست قافلة الغذاء في مكة المكرمة لتقدّم حلول إعاشة تليق بضيوف الرحمن، وتمنح شركاءنا ثقة التشغيل حتى في أكثر المواسم كثافة.</p>
            <p>نجمع بين الطهاة المتخصصين، والكوادر التشغيلية المؤهلة، وأنظمة سلامة الغذاء، وسلسلة إمداد منضبطة. النتيجة: وجبة متوازنة تصل في موعدها وبالجودة نفسها كل مرة.</p>
            <a className="inline-link" href="#quality">اعرف معايير الجودة لدينا <ArrowIcon /></a>
          </div>
        </div>

        <div className="shell values-grid">
          <article><span>01</span><h3>السلامة أولًا</h3><p>إجراءات موثقة من الاستلام والتخزين حتى التحضير والتسليم.</p></article>
          <article><span>02</span><h3>دقة التشغيل</h3><p>تخطيط للكميات والمواقع والتوقيت يواكب ذروة الموسم.</p></article>
          <article><span>03</span><h3>تنوع مدروس</h3><p>قوائم تراعي اختلاف الأذواق والثقافات والاحتياجات الغذائية.</p></article>
          <article><span>04</span><h3>شراكة طويلة</h3><p>فريق قريب من العميل، من مرحلة التخطيط حتى آخر وجبة.</p></article>
        </div>
      </section>

      <section id="services" className="section services-section">
        <div className="shell section-heading row-heading">
          <div><p className="eyebrow light"><span />خدماتنا</p><h2>حلول تُبنى حول<br /><em>احتياجك.</em></h2></div>
          <p>من مطابخ المشاعر إلى تشغيل الفنادق وتوريد الوجبات؛ نتولى دورة الإعاشة كاملة بمعيار واحد.</p>
        </div>

        <div className="shell service-list">
          {services.map((service) => (
            <article className="service-card" key={service.number}>
              <div className="service-image-wrap">
                <Image src={service.image} alt={service.alt} fill sizes="(max-width: 900px) 100vw, 38vw" className="service-image" />
                <span className="service-number">{service.number}</span>
              </div>
              <div className="service-body">
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <ul>{service.points.map((point) => <li key={point}><CheckIcon />{point}</li>)}</ul>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section process-section">
        <div className="shell process-grid">
          <div className="process-visual">
            <Image src="/images/kitchen-operations-v2.webp" alt="عمليات تحضير وجبات منظمة داخل مطبخ قافلة الغذاء" fill sizes="(max-width: 900px) 100vw, 50vw" />
            <div className="visual-note"><strong>من المصدر</strong><span>إلى موقع التقديم</span></div>
          </div>
          <div className="process-content">
            <p className="eyebrow"><span />منهجية العمل</p>
            <h2>سلسلة واحدة.<br /><em>جودة بلا انقطاع.</em></h2>
            <div className="steps">
              <div><b>01</b><span><strong>نفهم الاحتياج</strong><small>عدد الضيوف، المواقع، التوقيت، والأنماط الغذائية.</small></span></div>
              <div><b>02</b><span><strong>نخطط ونختبر</strong><small>قوائم معتمدة، توريد منضبط، وخطة تشغيل واضحة.</small></span></div>
              <div><b>03</b><span><strong>ننتج ونراقب</strong><small>تحضير آمن مع نقاط تحكم وقياس جودة مستمرة.</small></span></div>
              <div><b>04</b><span><strong>نُسلّم في الموعد</strong><small>نقل مجهز وتوزيع يتوافق مع حركة الموسم.</small></span></div>
            </div>
          </div>
        </div>
      </section>

      <section id="experience" className="section experience-section">
        <div className="shell section-heading centered">
          <p className="eyebrow"><span />سجل الإنجاز</p>
          <h2>أرقام تحكي عن <em>الثقة.</em></h2>
          <p>خبرة ميدانية مع بعثات وشركات طوافة في مواسم الحج.</p>
        </div>
        <div className="shell project-grid">
          {projects.map((project) => (
            <article key={`${project.client}-${project.total}`}>
              <div><strong>{project.total}</strong><span>{project.label}</span></div>
              <h3>{project.client}</h3>
              <p>{project.detail}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="partners" className="section partners-section">
        <div className="shell partners-heading">
          <div>
            <p className="eyebrow"><span />شركاء النجاح</p>
            <h2>ثقة نعتز بها.<br /><em>وشراكات نصنع بها الأثر.</em></h2>
          </div>
          <p>نفخر بالعمل مع جهات محلية ودولية لخدمة ضيوف الرحمن وتقديم تجربة إعاشة موثوقة.</p>
        </div>

        <div className="shell partners-grid" aria-label="شعارات شركاء النجاح">
          {partners.map((partner) => (
            <article className="partner-card" key={partner.name}>
              <div className="partner-logo">
                <Image src={partner.logo} alt={`شعار ${partner.name}`} fill sizes="(max-width: 680px) 45vw, (max-width: 980px) 30vw, 18vw" />
              </div>
              <span>{partner.name}</span>
            </article>
          ))}
        </div>
      </section>

      <section id="quality" className="section quality-section">
        <div className="shell quality-grid">
          <div className="quality-intro">
            <p className="eyebrow light"><span />الجودة والامتثال</p>
            <h2>الثقة ليست وعدًا.<br />إنها <em>معيار.</em></h2>
            <p>اعتماداتنا تعكس التزامًا يوميًا بسلامة الغذاء وكفاءة التشغيل والامتثال للجهات المنظمة.</p>
          </div>
          <div className="certificate-grid">
            {certificates.map((certificate) => (
              <article key={certificate.name}>
                <span className="certificate-code">{certificate.code}</span>
                <div><h3>{certificate.name}</h3><p>{certificate.detail}</p><small>{certificate.ref}</small></div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="contact-section">
        <div className="shell contact-card">
          <div>
            <p className="eyebrow light"><span />ابدأ معنا</p>
            <h2>خطّط لموسمك القادم<br />مع فريق <em>قافلة الغذاء.</em></h2>
          </div>
          <div className="contact-info">
            <p>مكة المكرمة — حي ولي العهد<br />حي المحمدية، شارع الشهيد ياسر بن حسب الله المولد</p>
            <a className="button button-gold" href="#company-details">بيانات الشركة <ArrowIcon /></a>
          </div>
        </div>
      </section>

      <footer id="company-details" className="footer">
        <div className="shell footer-top">
          <div className="brand footer-brand">
            <span className="brand-mark" aria-hidden="true"><svg viewBox="0 0 48 48" fill="none"><path d="M10 29.5c7.5-1 11.5-4.4 14-11.5 2.2 6.6 6.8 10.5 14 11.5-6.7 1.3-11.5 4.8-14 11.5-2.4-6.6-6.9-10.3-14-11.5Z" fill="currentColor" /><path d="M16 11h16M19 15h10" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" /></svg></span>
            <span className="brand-copy"><strong>قافلة الغذاء</strong><small>لخدمات الإعاشة</small></span>
          </div>
          <div className="company-data">
            <div><span>السجل التجاري</span><strong>4031275121</strong></div>
            <div><span>الرقم الضريبي</span><strong>311967702900003</strong></div>
            <div><span>رخصة بلدي</span><strong>440511147377</strong></div>
          </div>
        </div>
        <div className="shell footer-bottom">
          <p>شركة قافلة الغذاء لخدمات الإعاشة (شركة شخص واحد)</p>
          <p>© {new Date().getFullYear()} جميع الحقوق محفوظة</p>
        </div>
      </footer>
    </main>
  );
}
