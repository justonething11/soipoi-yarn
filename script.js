// SOIPOI — Jiangsu Suyuan Baiyi Trading Co., Ltd.
// Interactions: sticky header, mobile nav, scroll reveal, i18n (EN/中文),
// and a frictionless inquiry form (FormSubmit backend).

(function () {
  "use strict";

  // ============================================================
  // 1. i18n — translations
  // ============================================================
  var I18N = {
    en: {
      "meta.title": "SOIPOI — Premium Yarn Manufacturer & Exporter | Jiangsu Suyuan Baiyi Trading Co., Ltd.",
      "meta.description": "SOIPOI (Jiangsu Suyuan Baiyi Trading Co., Ltd.) is a vertically integrated yarn manufacturer and exporter in Jiangsu, China — specialist in fancy yarn, core-spun yarn, worsted yarn and knitted/woven fabrics.",
      "a11y.skip": "Skip to content",
      "nav.about": "About",
      "nav.products": "Yarns",
      "nav.capabilities": "Capabilities",
      "nav.markets": "Global Reach",
      "nav.quote": "Request a Quote",
      "hero.eyebrow": "Since 2012 · Jiangsu, China",
      "hero.title": "Premium yarns for the world's finest knitwear.",
      "hero.sub": "SOIPOI is a vertically integrated yarn manufacturer and exporter — crafting <strong>fancy yarn</strong>, <strong>core-spun yarn</strong> and <strong>worsted yarn</strong> from our own mills in Zhangjiagang, for apparel and knitwear brands across the United States, Europe and Asia.",
      "hero.cta.products": "Explore Our Yarns",
      "hero.cta.quote": "Request a Quote",
      "hero.stat1": "tons / year",
      "hero.stat2": "annual sales",
      "hero.stat3": "owned mills",
      "hero.stat4": "partner factories",
      "about.kicker": "Who we are",
      "about.title": "A yarn specialist, from fiber to finished yarn.",
      "about.lede": "Jiangsu Suyuan Baiyi Trading Co., Ltd. (SOIPOI) is headquartered in <strong>Zhangjiagang, Jiangsu</strong> — one of China's most mature textile regions — where we develop, design and manufacture yarns and fabrics for international markets.",
      "about.p2": "We operate <strong>three wholly-owned mills</strong> (fancy yarn, core-spun yarn and worsted/woolen), four joint-venture enterprises and a network of <strong>more than 100 long-term partner production bases</strong>. As a first-tier agent for major acrylic-fiber producers, we control our raw-material supply from the source — giving customers dependable quality and sharper pricing.",
      "about.p3": "Every year we deliver <strong>over 20,000 tons</strong> of yarn to brands and manufacturers across North America, Europe and Asia, supported by an R&D partnership with <strong>Donghua University</strong> and factories audited by multiple international brands.",
      "about.f1.label": "Founded",
      "about.f1.value": "2012",
      "about.f2.label": "Headquarters",
      "about.f2.value": "Zhangjiagang, Jiangsu",
      "about.f3.label": "Factories",
      "about.f3.value": "3 owned · 4 JV · 100+ partners",
      "about.f4.label": "R&D",
      "about.f4.value": "Donghua University",
      "products.kicker": "Our products",
      "products.title": "Yarns engineered for every knit.",
      "products.lead": "From textured fancy yarns to high-performance core-spun and fine-gauge worsted — developed in-house and produced at scale.",
      "product1.title": "Fancy Yarn",
      "product1.desc": "Bouclé, slub, loop, feather and tape yarns that bring texture, depth and hand-feel to fashion knitwear, sweaters and accessories.",
      "product1.link": "Enquire about fancy yarn →",
      "product2.title": "Core-Spun Yarn",
      "product2.desc": "Elastane or filament core wrapped in soft fibers — delivering controlled stretch, recovery and durability for activewear and knitwear.",
      "product2.link": "Enquire about core-spun yarn →",
      "product3.title": "Worsted Yarn",
      "product3.desc": "Premium combed and semi-worsted yarns with a smooth, even, luxurious surface — ideal for fine-gauge knitwear and tailored pieces.",
      "product3.link": "Enquire about worsted yarn →",
      "product4.title": "Knitted & Woven Fabrics",
      "product4.desc": "Complementary fabric production in knitted and woven constructions — letting us support complete textile programs from yarn to fabric.",
      "product4.link": "Enquire about fabrics →",
      "cap.kicker": "Why SOIPOI",
      "cap.title": "Scale, control and partnership — from fiber to finish.",
      "cap1.title": "Vertical Integration",
      "cap1.desc": "We own the full chain — raw-material sourcing, spinning and finishing — so quality, cost and lead time stay in our control.",
      "cap2.title": "First-Tier Acrylic Agent",
      "cap2.desc": "As a first-tier agent for leading acrylic-fiber producers, we secure consistent supply and favorable pricing at the source.",
      "cap3.title": "University R&D",
      "cap3.desc": "Our partnership with Donghua University powers new fiber blends, finishes and functional yarns before they reach the market.",
      "cap4.title": "Brand-Audited Mills",
      "cap4.desc": "Our factories have passed audits by multiple international brands — meeting the compliance, quality and ethical standards global buyers expect.",
      "cap5.title": "Production at Scale",
      "cap5.desc": "20,000+ tons of annual output across owned and partner mills — the capacity to support large programs without sacrificing consistency.",
      "cap6.title": "Global Service",
      "cap6.desc": "Export experience across the US, Europe, Japan, Korea and Southeast Asia — with overseas manufacturing options in Bangladesh.",
      "markets.kicker": "Global reach",
      "markets.title": "Exporting to the world's leading markets.",
      "market1": "United States",
      "market2": "Europe",
      "market3": "Japan",
      "market4": "South Korea",
      "market5": "Hong Kong & Taiwan",
      "market6": "Southeast Asia",
      "markets.note.title": "Beyond borders",
      "markets.note.desc": "Through our Singapore entity and the <strong>Suyuan (Bangladesh) Textile Industrial Park</strong> in Dhaka, we offer buyers flexible production and sourcing options that extend beyond China.",
      "contact.kicker": "Start a conversation",
      "contact.title": "Tell us what you're knitting. We'll find the yarn.",
      "contact.lead": "Send your specifications, target price or sampling request — our sales team replies within one business day.",
      "contact.info.title": "Contact details",
      "contact.company.label": "Company",
      "contact.company.value": "Jiangsu Suyuan Baiyi Trading Co., Ltd.",
      "contact.address.label": "Address",
      "contact.address.value": "20F, Building A, Huajian Mansion, Shazhou West Road, Zhangjiagang, Jiangsu, China",
      "contact.phone.label": "Phone",
      "contact.fax.label": "Fax",
      "contact.email.label": "Email",
      "contact.note": "Prefer to talk? Call us during business hours (GMT+8) or write to us in English or Chinese.",
      "form.title": "Request a quote",
      "form.name.label": "Full name *",
      "form.name.ph": "Your name",
      "form.company.label": "Company",
      "form.company.ph": "Company name",
      "form.email.label": "Email *",
      "form.email.ph": "you@company.com",
      "form.country.label": "Country / Region",
      "form.country.ph": "e.g. United States",
      "form.interest.label": "Product interest",
      "form.interest.placeholder": "— Please select —",
      "form.interest.fancy": "Fancy Yarn",
      "form.interest.corespun": "Core-Spun Yarn",
      "form.interest.worsted": "Worsted Yarn",
      "form.interest.fabric": "Knitted / Woven Fabrics",
      "form.interest.other": "Other / Not sure yet",
      "form.message.label": "Your requirement *",
      "form.message.ph": "Tell us about yarn count, fiber, quantity, target price, or sampling needs…",
      "form.submit": "Send Inquiry",
      "form.sending": "Sending…",
      "form.error": "Please fill in your name, email and requirement.",
      "form.success": "Thank you! Your inquiry has been sent. We'll reply within one business day.",
      "form.fail": "Something went wrong. Please email us directly at hedy_wang@soipoi.com.",
      "form.fineprint": "Your inquiry is sent securely to our sales team. We'll get back to you within one business day.",
      "footer.tagline": "Premium yarn manufacturer & exporter — Jiangsu Suyuan Baiyi Trading Co., Ltd.",
      "footer.explore": "Explore",
      "footer.contact": "Contact",
      "footer.address": "Zhangjiagang, Jiangsu, China",
      "footer.copyright": "Jiangsu Suyuan Baiyi Trading Co., Ltd. All rights reserved."
    },
    zh: {
      "meta.title": "SOIPOI — 优质纱线制造商与出口商 | 江苏苏源百宜贸易有限公司",
      "meta.description": "SOIPOI（江苏苏源百宜贸易有限公司）是一家位于中国江苏的垂直一体化纱线制造商与出口商，专注于花式纱、包芯纱、精纺纱线及针织/梭织面料。",
      "a11y.skip": "跳至正文",
      "nav.about": "关于我们",
      "nav.products": "纱线产品",
      "nav.capabilities": "企业实力",
      "nav.markets": "全球布局",
      "nav.quote": "获取报价",
      "hero.eyebrow": "始于 2012 · 中国江苏",
      "hero.title": "为全球顶级针织品提供优质纱线。",
      "hero.sub": "SOIPOI 是一家垂直一体化的纱线制造商与出口商——在张家港自有工厂生产 <strong>花式纱</strong>、<strong>包芯纱</strong> 与 <strong>精纺纱线</strong>，服务美国、欧洲及亚洲的服装与针织品牌。",
      "hero.cta.products": "查看我们的纱线",
      "hero.cta.quote": "获取报价",
      "hero.stat1": "吨 / 年",
      "hero.stat2": "年销售额",
      "hero.stat3": "自有工厂",
      "hero.stat4": "合作生产基地",
      "about.kicker": "关于我们",
      "about.title": "从纤维到成纱的一站式纱线专家。",
      "about.lede": "江苏苏源百宜贸易有限公司（SOIPOI）总部位于 <strong>江苏张家港</strong>——中国最成熟的纺织产区之一，面向国际市场开发、设计与生产各类纱线和面料。",
      "about.p2": "我们拥有 <strong>三家全资工厂</strong>（花式纱、包芯纱与精纺/毛纺）、四家参股企业，以及 <strong>上百家长期合作生产基地</strong>。作为国内外主要腈纶原料厂商的一级代理，我们从源头掌控原料供应，为客户提供稳定品质与更具竞争力的价格。",
      "about.p3": "我们每年向北美洲、欧洲和亚洲的品牌与制造商交付 <strong>超过两万吨</strong> 纱线，依托与 <strong>东华大学</strong> 的产学研合作，以及通过多家国际品牌验厂的工厂体系。",
      "about.f1.label": "成立时间",
      "about.f1.value": "2012",
      "about.f2.label": "总部",
      "about.f2.value": "江苏张家港",
      "about.f3.label": "生产布局",
      "about.f3.value": "3 家全资 · 4 家参股 · 100+ 合作基地",
      "about.f4.label": "研发合作",
      "about.f4.value": "东华大学",
      "products.kicker": "我们的产品",
      "products.title": "为每一种针织品而生的纱线。",
      "products.lead": "从具有肌理感的花式纱，到高性能包芯纱与细针距精纺纱线——自主开发、规模化生产。",
      "product1.title": "花式纱",
      "product1.desc": "圈圈纱、竹节纱、圈纱、羽毛纱、扁带纱等，为时尚针织、毛衣与配饰带来肌理、层次与手感。",
      "product1.link": "咨询花式纱 →",
      "product2.title": "包芯纱",
      "product2.desc": "以氨纶或长丝为芯、外层包覆柔软纤维——为运动服与针织品带来可控弹力、回复性与耐用性。",
      "product2.link": "咨询包芯纱 →",
      "product3.title": "精纺纱线",
      "product3.desc": "优质精梳与半精纺纱线，表面光洁均匀、质感高级——是细针距针织与精裁单品的理想之选。",
      "product3.link": "咨询精纺纱线 →",
      "product4.title": "针织 / 梭织面料",
      "product4.desc": "配套的针织与梭织面料生产，支持客户从纱线到面料的完整纺织品方案。",
      "product4.link": "咨询面料 →",
      "cap.kicker": "为什么选择 SOIPOI",
      "cap.title": "从纤维到成品——规模、掌控与伙伴关系。",
      "cap1.title": "垂直一体化",
      "cap1.desc": "我们掌控全产业链——原料采购、纺纱到后整理，让品质、成本与交期尽在掌握。",
      "cap2.title": "腈纶一级代理",
      "cap2.desc": "作为主流腈纶纤维厂商的一级代理，我们从源头保障稳定供应与优惠价格。",
      "cap3.title": "产学研研发",
      "cap3.desc": "与东华大学合作，在新型混纺、后整理与功能纱线领域先于市场布局。",
      "cap4.title": "国际品牌验厂",
      "cap4.desc": "我们的工厂已通过多家国际品牌验厂，符合全球买家所要求的合规、品质与道德标准。",
      "cap5.title": "规模化产能",
      "cap5.desc": "自有与伙伴工厂年产能两万余吨——足以支撑大批量订单而不牺牲一致性。",
      "cap6.title": "全球化服务",
      "cap6.desc": "在美国、欧洲、日本、韩国及东南亚拥有丰富出口经验，并具备孟加拉的海外生产选择。",
      "markets.kicker": "全球布局",
      "markets.title": "出口至全球领先市场。",
      "market1": "美国",
      "market2": "欧洲",
      "market3": "日本",
      "market4": "韩国",
      "market5": "中国香港 / 台湾",
      "market6": "东南亚",
      "markets.note.title": "跨越国界",
      "markets.note.desc": "依托新加坡公司与位于达卡的 <strong>苏源（孟加拉）纺织产业园</strong>，我们为客户提供超越中国的灵活生产与采购选择。",
      "contact.kicker": "开启沟通",
      "contact.title": "告诉我们您在织什么，我们来匹配合适的纱线。",
      "contact.lead": "发送您的规格、目标价或打样需求——销售团队一个工作日内回复。",
      "contact.info.title": "联系方式",
      "contact.company.label": "公司",
      "contact.company.value": "江苏苏源百宜贸易有限公司",
      "contact.address.label": "地址",
      "contact.address.value": "中国江苏省张家港市沙洲西路华建大厦A座20楼",
      "contact.phone.label": "电话",
      "contact.fax.label": "传真",
      "contact.email.label": "邮箱",
      "contact.note": "更想直接沟通？请在工作时间（GMT+8）致电，或用中英文给我们写信。",
      "form.title": "获取报价",
      "form.name.label": "姓名 *",
      "form.name.ph": "您的姓名",
      "form.company.label": "公司",
      "form.company.ph": "公司名称",
      "form.email.label": "邮箱 *",
      "form.email.ph": "you@company.com",
      "form.country.label": "国家 / 地区",
      "form.country.ph": "如：美国",
      "form.interest.label": "意向产品",
      "form.interest.placeholder": "— 请选择 —",
      "form.interest.fancy": "花式纱",
      "form.interest.corespun": "包芯纱",
      "form.interest.worsted": "精纺纱线",
      "form.interest.fabric": "针织 / 梭织面料",
      "form.interest.other": "其他 / 暂不确定",
      "form.message.label": "您的需求 *",
      "form.message.ph": "请描述纱支、纤维、数量、目标价或打样需求…",
      "form.submit": "提交询盘",
      "form.sending": "发送中…",
      "form.error": "请填写您的姓名、邮箱与需求。",
      "form.success": "谢谢！您的询盘已发送，我们会在一个工作日内回复。",
      "form.fail": "发送失败，请直接邮件联系我们：hedy_wang@soipoi.com。",
      "form.fineprint": "您的询盘将安全地发送给我们的销售团队，我们会在一个工作日内回复。",
      "footer.tagline": "优质纱线制造商与出口商 —— 江苏苏源百宜贸易有限公司",
      "footer.explore": "探索",
      "footer.contact": "联系",
      "footer.address": "中国 · 江苏 · 张家港",
      "footer.copyright": "江苏苏源百宜贸易有限公司 版权所有。"
    }
  };

  var LANG_KEY = "soipoi.lang";
  var currentLang = "en";

  function getLang() {
    try {
      var saved = localStorage.getItem(LANG_KEY);
      if (saved === "zh" || saved === "en") return saved;
    } catch (e) {}
    return "en";
  }

  function t(key) {
    return (I18N[currentLang] && I18N[currentLang][key]) || key;
  }

  function applyLang() {
    var lang = currentLang;

    // text nodes
    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      var val = I18N[lang][el.getAttribute("data-i18n")];
      if (val == null) return;
      if (el.tagName === "META") el.setAttribute("content", val);
      else el.textContent = val;
    });

    // rich (HTML) nodes
    document.querySelectorAll("[data-i18n-html]").forEach(function (el) {
      var val = I18N[lang][el.getAttribute("data-i18n-html")];
      if (val != null) el.innerHTML = val;
    });

    // placeholders
    document.querySelectorAll("[data-i18n-ph]").forEach(function (el) {
      var val = I18N[lang][el.getAttribute("data-i18n-ph")];
      if (val != null) el.setAttribute("placeholder", val);
    });

    document.documentElement.setAttribute("lang", lang === "zh" ? "zh-CN" : "en");

    // toggle button label shows the OTHER language
    var toggle = document.getElementById("langToggle");
    if (toggle) toggle.textContent = lang === "en" ? "中文" : "EN";
  }

  function setLang(lang) {
    currentLang = lang;
    try { localStorage.setItem(LANG_KEY, lang); } catch (e) {}
    applyLang();
  }

  var toggleBtn = document.getElementById("langToggle");
  if (toggleBtn) {
    toggleBtn.addEventListener("click", function () {
      setLang(currentLang === "en" ? "zh" : "en");
    });
  }
  currentLang = getLang();
  applyLang();

  // ============================================================
  // 2. Sticky header
  // ============================================================
  var header = document.getElementById("siteHeader");
  var onScroll = function () {
    if (!header) return;
    header.classList.toggle("scrolled", window.scrollY > 30);
  };
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  // ============================================================
  // 3. Mobile nav toggle
  // ============================================================
  var navToggle = document.getElementById("navToggle");
  var nav = document.querySelector(".main-nav");
  if (navToggle && nav) {
    navToggle.addEventListener("click", function () {
      var open = nav.classList.toggle("open");
      navToggle.classList.toggle("open", open);
      navToggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
    nav.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        nav.classList.remove("open");
        navToggle.classList.remove("open");
        navToggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  // ============================================================
  // 4. Scroll reveal
  // ============================================================
  var revealEls = document.querySelectorAll(
    ".section-head, .about-grid, .product-card, .capability, .markets-grid, .contact-grid"
  );
  if ("IntersectionObserver" in window) {
    var io = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    revealEls.forEach(function (el) {
      el.classList.add("reveal");
      io.observe(el);
    });
  }

  // ============================================================
  // 5. Footer year
  // ============================================================
  var year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();

  // ============================================================
  // 6. Frictionless inquiry form (FormSubmit)
  //    To use a different backend (e.g. Formspree), change ENDPOINT.
  // ============================================================
  var CONTACT_EMAIL = "hedy_wang@soipoi.com";
  var ENDPOINT = "https://formsubmit.co/ajax/" + CONTACT_EMAIL;

  var form = document.getElementById("inquiryForm");
  var hint = document.getElementById("formHint");
  var submitBtn = form ? form.querySelector('button[type="submit"]') : null;

  function setHint(msg, isError) {
    if (!hint) return;
    hint.textContent = msg;
    hint.classList.toggle("error", !!isError);
    hint.classList.toggle("success", !isError && !!msg);
  }

  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();

      var name = form.elements["name"].value.trim();
      var email = form.elements["email"].value.trim();
      var message = form.elements["message"].value.trim();

      if (!name || !email || !message) {
        setHint(t("form.error"), true);
        return;
      }

      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.textContent = t("form.sending");
      }
      setHint("", false);

      var data = new FormData(form);
      // make sure the reply-to is the visitor's own email
      data.append("_replyto", email);

      fetch(ENDPOINT, { method: "POST", body: data, headers: { Accept: "application/json" } })
        .then(function (res) {
          if (!res.ok) throw new Error("bad status " + res.status);
          return res.json();
        })
        .then(function () {
          form.reset();
          setHint(t("form.success"), false);
        })
        .catch(function () {
          setHint(t("form.fail"), true);
        })
        .finally(function () {
          if (submitBtn) {
            submitBtn.disabled = false;
            submitBtn.textContent = t("form.submit");
          }
        });
    });
  }
})();
