"use client";

import React from "react";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-stone-50 text-stone-900 selection:bg-emerald-600 selection:text-white">
      {/* Top Banner */}
      <div className="bg-emerald-950 text-emerald-100 text-xs py-2 px-4 border-b border-emerald-900">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-2">
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1.5 text-amber-400 font-semibold">
              <span className="w-2 h-2 rounded-full bg-amber-400"></span>
              شهادة آيزو لسلامة الغذاء ISO 22000:2018 وشهادة HACCP الدولية
            </span>
            <span className="hidden md:inline text-emerald-800">|</span>
            <span className="hidden md:inline text-emerald-300">طاقة تشغيلية 18,000 وجبة يومياً بمكة والمشاعر</span>
          </div>
          <div className="flex items-center gap-4 text-xs font-sans">
            <span className="text-emerald-300">سجل تجاري: 4031275121</span>
            <span className="text-emerald-800">|</span>
            <span className="text-amber-400 font-medium">مكة المكرمة - حي ولي العهد</span>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-stone-200 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          {/* Logo Mark */}
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-700 via-emerald-800 to-emerald-950 flex items-center justify-center text-amber-300 font-bold shadow-md shadow-emerald-900/20 border border-emerald-600/30">
              <svg className="w-7 h-7 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            </div>
            <div>
              <span className="block text-xl font-black text-emerald-950 tracking-tight">قافلة الغذاء لخدمات الإعاشة</span>
              <span className="block text-xs font-bold text-amber-700 font-sans tracking-wider uppercase">Qafilat Alghidha Catering Co.</span>
            </div>
          </div>

          {/* Links */}
          <nav className="hidden lg:flex items-center gap-8 text-sm font-semibold text-stone-700">
            <a href="#about" className="hover:text-emerald-700 transition">عن القافلة</a>
            <a href="#services" className="hover:text-emerald-700 transition">خدمات الإعاشة</a>
            <a href="#track-record" className="hover:text-emerald-700 transition">أرقام وسابقة الأعمال</a>
            <a href="#certificates" className="hover:text-emerald-700 transition">الجودة والشهادات</a>
            <a href="#contact" className="hover:text-emerald-700 transition">تواصل معنا</a>
          </nav>

          {/* Action CTA */}
          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-700 to-emerald-900 text-white font-bold text-sm px-5 py-2.5 rounded-xl shadow-md shadow-emerald-900/20 hover:from-emerald-600 hover:to-emerald-800 transition transform active:scale-95"
          >
            <span>طلب خدمات الإعاشة</span>
            <svg className="w-4 h-4 rtl:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
          </a>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-emerald-950 via-emerald-900 to-emerald-950 text-white py-20 lg:py-28">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#34d399_1px,transparent_1px)] [background-size:24px_24px]"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-6 text-center lg:text-right">
            <div className="inline-flex items-center gap-2 bg-amber-400/10 border border-amber-400/30 text-amber-300 text-xs sm:text-sm font-semibold px-4 py-1.5 rounded-full">
              <span className="w-2 h-2 rounded-full bg-amber-400"></span>
              خدمة ضيوف الرحمن شرف وأمانة نحملها بأعلى معايير الإتقان
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-tight">
              إعداد وتوريد الوجبات <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-yellow-400">المطهية والجافة والولائم</span> بمكة والمشاعر المقدسة
            </h1>

            <p className="text-emerald-100/90 text-base sm:text-lg leading-relaxed">
              نقدم في شركة قافلة الغذاء حلول الإعاشة المتكاملة لبعثات الحج والعمرة وفنادق مكة المكرمة والمناسبات الكبرى، بكوادر سعودية مؤهلة وطهاة عالميين لتقديم نكهات تناسب شتى الثقافات.
            </p>

            <div className="pt-4 flex flex-wrap gap-4 justify-center lg:justify-start">
              <a
                href="#services"
                className="bg-amber-500 hover:bg-amber-400 text-emerald-950 font-bold px-8 py-3.5 rounded-xl shadow-lg shadow-amber-500/20 transition transform active:scale-95"
              >
                استكشف خدماتنا
              </a>
              <a
                href="#track-record"
                className="bg-emerald-900/60 hover:bg-emerald-800/80 border border-emerald-700/80 text-white font-semibold px-8 py-3.5 rounded-xl transition"
              >
                سابقة أعمالنا مع الحجاج
              </a>
            </div>

            {/* Capacity Highlights */}
            <div className="pt-8 grid grid-cols-2 sm:grid-cols-4 gap-4 border-t border-emerald-800/80">
              <div className="bg-emerald-900/40 p-4 rounded-xl border border-emerald-800">
                <span className="block text-2xl sm:text-3xl font-black text-amber-400 font-sans">18,000</span>
                <span className="text-xs text-emerald-200">طاقة وجبات يومية مرخصة</span>
              </div>
              <div className="bg-emerald-900/40 p-4 rounded-xl border border-emerald-800">
                <span className="block text-2xl sm:text-3xl font-black text-white font-sans">+25,000</span>
                <span className="text-xs text-emerald-200">حاج تم خدمتهم بنجاح</span>
              </div>
              <div className="bg-emerald-900/40 p-4 rounded-xl border border-emerald-800">
                <span className="block text-2xl sm:text-3xl font-black text-amber-400 font-sans">ISO 22000</span>
                <span className="text-xs text-emerald-200">شهادة سلامة الغذاء</span>
              </div>
              <div className="bg-emerald-900/40 p-4 rounded-xl border border-emerald-800">
                <span className="block text-2xl sm:text-3xl font-black text-white font-sans">HACCP</span>
                <span className="text-xs text-emerald-200">نظام تحليل المخاطر</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <span className="inline-block bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-bold px-3 py-1 rounded-md uppercase">
                من نحن • About Us
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-emerald-950 leading-tight">
                تأسست لترتقي بتجربة التغذية والإعاشة في أقدس البقاع
              </h2>
              <p className="text-stone-600 leading-relaxed text-sm sm:text-base">
                نحن شركة قافلة الغذاء لخدمات الإعاشة تأسست عام 1444هـ، كإحدى الشركات المتخصصة ذات التجارب الناجحة في تقديم خدمات الحج والعمرة. وإيماناً منا بأهمية تقديم خدمة مميزة لضيوف الرحمن، قمنا بتطوير فريقنا واستقطاب الكفاءات المؤهلة والمدربة محلياً وعالمياً.
              </p>
              <p className="text-stone-600 leading-relaxed text-sm sm:text-base">
                نسعى إلى رفع وتعزيز مكانة المملكة العربية السعودية وتحقيق رؤيتها في قطاع الحج والعمرة، وبناء شراكات قوية مع كبرى شركات الطوافة ومؤسسات خدمة حجاج الخارج لتقديم أفضل وأجود خدمات الإعاشة والخدمات اللوجستية.
              </p>

              {/* Mission & Vision */}
              <div className="grid sm:grid-cols-2 gap-4 pt-2">
                <div className="p-5 rounded-2xl bg-stone-50 border border-stone-200">
                  <h4 className="font-bold text-emerald-950 mb-1 flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-600"></span>
                    الرؤية (Vision)
                  </h4>
                  <p className="text-xs text-stone-600 leading-relaxed">
                    توفير غذاء عالي الجودة بأفضل مذاق لضيوف الرحمن والشركات، بما يضاهي أرقى المعايير العالمية.
                  </p>
                </div>
                <div className="p-5 rounded-2xl bg-stone-50 border border-stone-200">
                  <h4 className="font-bold text-emerald-950 mb-1 flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-600"></span>
                    الرسالة (Mission)
                  </h4>
                  <p className="text-xs text-stone-600 leading-relaxed">
                    التفرد بتقديم خدمات التغذية والإعاشة بشكل متميز للعملاء وبجودة عالية ومذاق فريد وتحقيق تنوع يناسب شتى الثقافات.
                  </p>
                </div>
              </div>
            </div>

            {/* Core Values 4 Grid */}
            <div className="lg:col-span-5 grid grid-cols-2 gap-4">
              <div className="bg-emerald-900 text-white p-6 rounded-2xl flex flex-col justify-between shadow-lg">
                <span className="text-amber-400 font-black text-2xl font-sans">100%</span>
                <div className="mt-8">
                  <h3 className="font-bold text-base text-white mb-1">الجودة الفائقة</h3>
                  <p className="text-xs text-emerald-200">مكونات طازجة مطابقة لمعايير الجودة والسلامة الأوروبية والخليجية.</p>
                </div>
              </div>

              <div className="bg-amber-600 text-white p-6 rounded-2xl flex flex-col justify-between shadow-lg">
                <span className="text-white font-black text-2xl font-sans">★</span>
                <div className="mt-8">
                  <h3 className="font-bold text-base text-white mb-1">الابتكار بالوجبات</h3>
                  <p className="text-xs text-amber-100">طرق تقديم راقية للوجبات الساخنة والجافة والبوفيهات المفتوحة.</p>
                </div>
              </div>

              <div className="bg-stone-100 border border-stone-200 p-6 rounded-2xl flex flex-col justify-between">
                <span className="text-emerald-800 font-black text-2xl font-sans">⏱</span>
                <div className="mt-8">
                  <h3 className="font-bold text-base text-emerald-950 mb-1">دقة المواعيد</h3>
                  <p className="text-xs text-stone-600">التزام صارم بجداول توريد الوجبات في أوقات الذروة والمشاعر.</p>
                </div>
              </div>

              <div className="bg-emerald-950 text-white p-6 rounded-2xl flex flex-col justify-between shadow-lg">
                <span className="text-amber-400 font-black text-2xl font-sans">🥗</span>
                <div className="mt-8">
                  <h3 className="font-bold text-base text-white mb-1">التوازن الغذائي</h3>
                  <p className="text-xs text-emerald-200">وجبات متكاملة صحية تمد الحاج بالطاقة اللازمة لأداء مناسكه.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-stone-100 border-y border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="text-emerald-700 font-bold text-xs uppercase tracking-wider">خدماتنا المتنوعة</span>
            <h2 className="text-3xl sm:text-4xl font-black text-emerald-950">حلول إعاشة متكاملة للمواسم والمناسبات</h2>
            <p className="text-stone-600 text-sm">
              خبراتنا تغطي سلسلة الإمداد الغذائي بالكامل لضيوف الرحمن والمؤسسات:
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl border border-stone-200 shadow-sm hover:shadow-xl transition">
              <div className="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold mb-6 text-xl">
                01
              </div>
              <h3 className="text-lg font-bold text-emerald-950 mb-2">إعاشة المشاعر المقدسة (عرفات ومنى)</h3>
              <p className="text-xs text-stone-600 leading-relaxed mb-4">
                إدارة خدمات الطعام والشراب بمخيمات الحجيج في مشعري عرفات ومنى، وتلبية كافة الرغبات من وجبات مخصصة ومعدلة ومشروبات طازجة على مدار الساعة.
              </p>
              <ul className="text-xs text-stone-700 space-y-2">
                <li>• وجبات طازجة ساخنة يومية</li>
                <li>• بوفيهات مفتوحة لكبار الشخصيات VIP</li>
                <li>• توريد وجبات جافة مخصصة لأيام التشريق</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-2xl border border-stone-200 shadow-sm hover:shadow-xl transition">
              <div className="w-12 h-12 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center font-bold mb-6 text-xl">
                02
              </div>
              <h3 className="text-lg font-bold text-emerald-950 mb-2">تشغيل مطابخ الفنادق الموسمية</h3>
              <p className="text-xs text-stone-600 leading-relaxed mb-4">
                إدارة وتشغيل مطابخ ومطاعم الفنادق بمكة المكرمة خلال مواسم الحج والعمرة، وتجاوز عقبات النقل والحركة بتجهيز مطابخ الفندق الداخلية بأعلى كفاءة.
              </p>
              <ul className="text-xs text-stone-700 space-y-2">
                <li>• كادر تشغيلي وطهاة متخصصون</li>
                <li>• التزام باشتراطات سلامة الغذاء العالمية</li>
                <li>• قوائم طعام عالمية تلائم نزلاء الفنادق</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-2xl border border-stone-200 shadow-sm hover:shadow-xl transition">
              <div className="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold mb-6 text-xl">
                03
              </div>
              <h3 className="text-lg font-bold text-emerald-950 mb-2">إعداد وتوصيل الوجبات المغلفة</h3>
              <p className="text-xs text-stone-600 leading-relaxed mb-4">
                تلبية كافة طلبات التموين مهما كان حجمها وتزويد العملاء بقوائم طعام معدة ومغلفة حرارياً ومحكمة الإغلاق لضمان النظافة التامة وسهولة التوزيع.
              </p>
              <ul className="text-xs text-stone-700 space-y-2">
                <li>• تغليف صحي يحافظ على حرارة الوجبة</li>
                <li>• أسطول سيارات نقل مبردة ومجهزة</li>
                <li>• قوائم طعام متنوعة للشركات والجهات</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Track Record Section */}
      <section id="track-record" className="py-20 bg-emerald-950 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="text-amber-400 font-bold text-xs uppercase tracking-wider">سجل الإنجاز والمواسم</span>
            <h2 className="text-3xl sm:text-4xl font-black text-white">سابقة أعمال شركة قافلة الغذاء</h2>
            <p className="text-emerald-200 text-sm">
              أرقام رسمية وموثقة في خدمة ضيوف الرحمن لعدة بعثات وشركات طوافة كبرى:
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-emerald-900/60 border border-emerald-800 space-y-2">
              <div className="text-3xl font-black text-amber-400 font-sans">3,500 حاج</div>
              <h4 className="font-bold text-white text-base">حجاج إندونيسيا</h4>
              <p className="text-xs text-emerald-200">تقديم خدمات الإعاشة لحجاج إندونيسيا بالمشاعر المقدسة التابعين لمؤسسة جنوب شرق آسيا.</p>
            </div>

            <div className="p-6 rounded-2xl bg-emerald-900/60 border border-emerald-800 space-y-2">
              <div className="text-3xl font-black text-amber-400 font-sans">4,500 حاج</div>
              <h4 className="font-bold text-white text-base">حجاج باكستان</h4>
              <p className="text-xs text-emerald-200">تقديم خدمات الإعاشة بالمشاعر المقدسة لحجاج دولة باكستان التابعين لمؤسسة جنوب آسيا.</p>
            </div>

            <div className="p-6 rounded-2xl bg-emerald-900/60 border border-emerald-800 space-y-2">
              <div className="text-3xl font-black text-amber-400 font-sans">4,200 حاج</div>
              <h4 className="font-bold text-white text-base">حجاج طيران ناس (Flynas)</h4>
              <p className="text-xs text-emerald-200">تقديم خدمة حجاج الإعاشة بالمشاعر المقدسة لصالح شركة طيران ناس لعدد 5650 حاج وحاجة.</p>
            </div>

            <div className="p-6 rounded-2xl bg-emerald-900/60 border border-emerald-800 space-y-2">
              <div className="text-3xl font-black text-amber-400 font-sans">4,200 حاج</div>
              <h4 className="font-bold text-white text-base">مشارق ركين</h4>
              <p className="text-xs text-emerald-200">تقديم إعاشة متكاملة لحجاج دولة إندونيسيا التابعين لشركة مشارق ركين.</p>
            </div>

            <div className="p-6 rounded-2xl bg-emerald-900/60 border border-emerald-800 space-y-2">
              <div className="text-3xl font-black text-amber-400 font-sans">4,600 حاج VIP</div>
              <h4 className="font-bold text-white text-base">حجاج كبار الشخصيات (باكستان)</h4>
              <p className="text-xs text-emerald-200">تقديم خدمات إعاشة فندقية وبوفيهات مفتوحة لحجاج VIP التابعين لشركة باكستان.</p>
            </div>

            <div className="p-6 rounded-2xl bg-emerald-900/60 border border-emerald-800 space-y-2">
              <div className="text-3xl font-black text-amber-400 font-sans">3,800 حاج VIP</div>
              <h4 className="font-bold text-white text-base">حجاج ماليزيا VIP (مشارق الماسية)</h4>
              <p className="text-xs text-emerald-200">تقديم إعاشة راقية بنظام البوفيه المفتوح ومأكولات آسيوية لحجاج ماليزيا VIP.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications & Licenses */}
      <section id="certificates" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-emerald-700 font-bold text-xs uppercase tracking-wider">الجودة والامتثال</span>
          <h2 className="text-3xl sm:text-4xl font-black text-emerald-950 mt-2 mb-12">شهادات واعتمادات سلامة الغذاء</h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 text-right">
            <div className="p-6 rounded-2xl border border-stone-200 bg-stone-50">
              <div className="text-xs font-bold text-emerald-700 mb-2">ISO 22000:2018</div>
              <h4 className="font-bold text-stone-900 mb-1">شهادة نظام إدارة سلامة الغذاء</h4>
              <p className="text-xs text-stone-500 mb-3">اعتماد رسمي دولي لتطبيق أعلى معايير حفظ وتحضير وتقديم الأغذية.</p>
              <span className="text-xs font-mono text-stone-400">رقم: SCC/INT/2309NL/2561</span>
            </div>

            <div className="p-6 rounded-2xl border border-stone-200 bg-stone-50">
              <div className="text-xs font-bold text-emerald-700 mb-2">HACCP CERTIFIED</div>
              <h4 className="font-bold text-stone-900 mb-1">شهادة تطبيق مبادئ نظام هاسب</h4>
              <p className="text-xs text-stone-500 mb-3">مبادئ النظافة الغذائية المعتمدة من بيت المجهر للاستشارات الغذائية.</p>
              <span className="text-xs font-mono text-stone-400">شهادة رقم: SA23/244517</span>
            </div>

            <div className="p-6 rounded-2xl border border-stone-200 bg-stone-50">
              <div className="text-xs font-bold text-emerald-700 mb-2">أمانة العاصمة المقدسة</div>
              <h4 className="font-bold text-stone-900 mb-1">شهادة تأهيل متعهد إعاشة</h4>
              <p className="text-xs text-stone-500 mb-3">مؤهل رسمياً لتقديم خدمات الإعاشة بالحج والعمرة بطاقة 18,000 وجبة.</p>
              <span className="text-xs font-mono text-stone-400">شهادة رقم: 568</span>
            </div>

            <div className="p-6 rounded-2xl border border-stone-200 bg-stone-50">
              <div className="text-xs font-bold text-emerald-700 mb-2">بلدي • MOMRAH</div>
              <h4 className="font-bold text-stone-900 mb-1">شهادة تصنيف مقدمي خدمات المدن</h4>
              <p className="text-xs text-stone-500 mb-3">تصنيف ممتاز (A+) لمطابخ إعداد الولائم ومتعهدي الإعاشة بالحج والعمرة.</p>
              <span className="text-xs font-mono text-stone-400">شهادة رقم: 2023011791</span>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-stone-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <span className="text-amber-400 font-bold text-xs uppercase tracking-wider">تواصل معنا</span>
          <h2 className="text-3xl sm:text-4xl font-black">يسعدنا التعاقد معكم لتقديم أرقى خدمات الإعاشة</h2>
          <p className="text-stone-400 max-w-2xl mx-auto text-sm">
            مكة المكرمة - حي ولي العهد / حي المحمدية - شارع الشهيد ياسر بن حسب الله المولد (3538).
          </p>
          <div className="pt-2 flex flex-wrap justify-center gap-4 text-xs font-mono">
            <span className="px-4 py-2 bg-stone-800 rounded-lg text-emerald-300">سجل تجاري: 4031275121</span>
            <span className="px-4 py-2 bg-stone-800 rounded-lg text-amber-300">رقم ضريبي: 311967702900003</span>
            <span className="px-4 py-2 bg-stone-800 rounded-lg text-emerald-300">رخصة بلدي: 440511147377</span>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-stone-500 py-8 border-t border-stone-800 text-xs text-center">
        <p className="text-stone-400 font-bold mb-1">شركة قافلة الغذاء لخدمات الإعاشة (شركة شخص واحد)</p>
        <p>جميع الحقوق محفوظة © {new Date().getFullYear()} • Qafilat Alghidha Catering Services Company</p>
      </footer>
    </div>
  );
}
