// SOIPOI — Jiangsu Suyuan Baiyi Trading Co., Ltd.
// Interactions: sticky header, mobile nav, scroll reveal, i18n (6 languages),
// locale theming, and a frictionless inquiry form (FormSubmit backend).

(function () {
  "use strict";

  // ============================================================
  // 1. i18n — languages & translations
  // ============================================================
  var LANGUAGES = [
    { code: "en", label: "English" },
    { code: "zh", label: "中文" },
    { code: "es", label: "Español" },
    { code: "ja", label: "日本語" },
    { code: "ko", label: "한국어" },
    { code: "de", label: "Deutsch" }
  ];

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
    },
    es: {
      "meta.title": "SOIPOI — Fabricante y exportador de hilados premium | Jiangsu Suyuan Baiyi Trading Co., Ltd.",
      "meta.description": "SOIPOI (Jiangsu Suyuan Baiyi Trading Co., Ltd.) es un fabricante y exportador de hilados verticalmente integrado en Jiangsu, China — especialista en hilado de fantasía, hilado con alma, hilado peinado y tejidos de punto/plano.",
      "a11y.skip": "Saltar al contenido",
      "nav.about": "Nosotros",
      "nav.products": "Hilados",
      "nav.capabilities": "Capacidades",
      "nav.markets": "Alcance global",
      "nav.quote": "Solicitar cotización",
      "hero.eyebrow": "Desde 2012 · Jiangsu, China",
      "hero.title": "Hilados premium para las mejores prendas de punto del mundo.",
      "hero.sub": "SOIPOI es un fabricante y exportador de hilados verticalmente integrado — elaboramos <strong>hilado de fantasía</strong>, <strong>hilado con alma</strong> y <strong>hilado peinado</strong> en nuestras propias plantas de Zhangjiagang, para marcas de confección y punto de Estados Unidos, Europa y Asia.",
      "hero.cta.products": "Ver nuestros hilados",
      "hero.cta.quote": "Solicitar cotización",
      "hero.stat1": "toneladas / año",
      "hero.stat2": "ventas anuales",
      "hero.stat3": "plantas propias",
      "hero.stat4": "fábricas asociadas",
      "about.kicker": "Quiénes somos",
      "about.title": "Un especialista en hilados, de la fibra al hilado terminado.",
      "about.lede": "Jiangsu Suyuan Baiyi Trading Co., Ltd. (SOIPOI) tiene su sede en <strong>Zhangjiagang, Jiangsu</strong> — una de las regiones textiles más maduras de China — donde desarrollamos, diseñamos y fabricamos hilados y tejidos para mercados internacionales.",
      "about.p2": "Operamos <strong>tres plantas de propiedad total</strong> (hilado de fantasía, hilado con alma y peinado/lanería), cuatro empresas conjuntas y una red de <strong>más de 100 bases de producción asociadas de largo plazo</strong>. Como agente de primer nivel de los principales productores de fibra acrílica, controlamos nuestro suministro de materia prima desde el origen — ofreciendo a los clientes calidad confiable y mejores precios.",
      "about.p3": "Cada año entregamos <strong>más de 20.000 toneladas</strong> de hilado a marcas y fabricantes de Norteamérica, Europa y Asia, con el respaldo de una alianza de I+D con la <strong>Universidad Donghua</strong> y plantas auditadas por múltiples marcas internacionales.",
      "about.f1.label": "Fundación",
      "about.f1.value": "2012",
      "about.f2.label": "Sede",
      "about.f2.value": "Zhangjiagang, Jiangsu",
      "about.f3.label": "Plantas",
      "about.f3.value": "3 propias · 4 JV · 100+ socios",
      "about.f4.label": "I+D",
      "about.f4.value": "Universidad Donghua",
      "products.kicker": "Nuestros productos",
      "products.title": "Hilados diseñados para cada tejido.",
      "products.lead": "Desde hilados de fantasía con textura hasta hilado con alma de alto rendimiento y peinado de galga fina — desarrollados internamente y producidos a escala.",
      "product1.title": "Hilado de fantasía",
      "product1.desc": "Hilados bouclé, con botones (slub), de lazo, pluma y cinta que aportan textura, profundidad y tacto a la moda de punto, suéteres y accesorios.",
      "product1.link": "Consultar por hilado de fantasía →",
      "product2.title": "Hilado con alma (Core-Spun)",
      "product2.desc": "Núcleo de elastano o filamento envuelto en fibras suaves — aporta elasticidad controlada, recuperación y durabilidad para ropa deportiva y de punto.",
      "product2.link": "Consultar por hilado con alma →",
      "product3.title": "Hilado peinado",
      "product3.desc": "Hilados peinados y semipeinados premium con superficie lisa, uniforme y lujosa — ideales para tejidos de punto de galga fina y prendas entalladas.",
      "product3.link": "Consultar por hilado peinado →",
      "product4.title": "Tejidos de punto y plano",
      "product4.desc": "Producción complementaria de tejidos de punto y plano — permitiéndonos respaldar programas textiles completos, del hilado al tejido.",
      "product4.link": "Consultar por tejidos →",
      "cap.kicker": "Por qué SOIPOI",
      "cap.title": "Escala, control y alianza — de la fibra al acabado.",
      "cap1.title": "Integración vertical",
      "cap1.desc": "Somos dueños de toda la cadena — abastecimiento de materia prima, hilatura y acabado — de modo que calidad, costo y plazos quedan bajo nuestro control.",
      "cap2.title": "Agente acrílico de primer nivel",
      "cap2.desc": "Como agente de primer nivel de los principales productores de fibra acrílica, aseguramos suministro constante y precios favorables desde el origen.",
      "cap3.title": "I+D universitaria",
      "cap3.desc": "Nuestra alianza con la Universidad Donghua impulsa nuevas mezclas de fibra, acabados e hilados funcionales antes de que lleguen al mercado.",
      "cap4.title": "Plantas auditadas por marcas",
      "cap4.desc": "Nuestras plantas han pasado auditorías de múltiples marcas internacionales — cumpliendo los estándares de cumplimiento, calidad y ética que esperan los compradores globales.",
      "cap5.title": "Producción a escala",
      "cap5.desc": "Más de 20.000 toneladas de producción anual entre plantas propias y asociadas — capacidad para grandes programas sin sacrificar consistencia.",
      "cap6.title": "Servicio global",
      "cap6.desc": "Experiencia de exportación a EE. UU., Europa, Japón, Corea y el Sudeste Asiático — con opciones de fabricación en el extranjero en Bangladesh.",
      "markets.kicker": "Alcance global",
      "markets.title": "Exportando a los principales mercados del mundo.",
      "market1": "Estados Unidos",
      "market2": "Europa",
      "market3": "Japón",
      "market4": "Corea del Sur",
      "market5": "Hong Kong y Taiwán",
      "market6": "Sudeste Asiático",
      "markets.note.title": "Más allá de las fronteras",
      "markets.note.desc": "A través de nuestra entidad en Singapur y el <strong>Parque Industrial Textil Suyuan (Bangladesh)</strong> en Daca, ofrecemos a los compradores opciones flexibles de producción y abastecimiento que van más allá de China.",
      "contact.kicker": "Iniciemos la conversación",
      "contact.title": "Cuéntanos qué tejes. Encontraremos el hilado.",
      "contact.lead": "Envíanos tus especificaciones, precio objetivo o solicitud de muestras — nuestro equipo de ventas responde en un día hábil.",
      "contact.info.title": "Datos de contacto",
      "contact.company.label": "Empresa",
      "contact.company.value": "Jiangsu Suyuan Baiyi Trading Co., Ltd.",
      "contact.address.label": "Dirección",
      "contact.address.value": "20F, Edificio A, Huajian Mansion, Shazhou West Road, Zhangjiagang, Jiangsu, China",
      "contact.phone.label": "Teléfono",
      "contact.fax.label": "Fax",
      "contact.email.label": "Correo",
      "contact.note": "¿Prefieres hablar? Llámanos en horario laboral (GMT+8) o escríbenos en inglés o chino.",
      "form.title": "Solicitar cotización",
      "form.name.label": "Nombre completo *",
      "form.name.ph": "Tu nombre",
      "form.company.label": "Empresa",
      "form.company.ph": "Nombre de la empresa",
      "form.email.label": "Correo *",
      "form.email.ph": "tu@empresa.com",
      "form.country.label": "País / Región",
      "form.country.ph": "p. ej. Estados Unidos",
      "form.interest.label": "Producto de interés",
      "form.interest.placeholder": "— Seleccione —",
      "form.interest.fancy": "Hilado de fantasía",
      "form.interest.corespun": "Hilado con alma",
      "form.interest.worsted": "Hilado peinado",
      "form.interest.fabric": "Tejidos de punto / plano",
      "form.interest.other": "Otro / aún no estoy seguro",
      "form.message.label": "Tu requerimiento *",
      "form.message.ph": "Cuéntanos sobre título de hilado, fibra, cantidad, precio objetivo o necesidades de muestras…",
      "form.submit": "Enviar consulta",
      "form.sending": "Enviando…",
      "form.error": "Por favor completa tu nombre, correo y requerimiento.",
      "form.success": "¡Gracias! Tu consulta ha sido enviada. Responderemos en un día hábil.",
      "form.fail": "Algo salió mal. Escríbenos directamente a hedy_wang@soipoi.com.",
      "form.fineprint": "Tu consulta se envía de forma segura a nuestro equipo de ventas. Te responderemos en un día hábil.",
      "footer.tagline": "Fabricante y exportador de hilados premium — Jiangsu Suyuan Baiyi Trading Co., Ltd.",
      "footer.explore": "Explorar",
      "footer.contact": "Contacto",
      "footer.address": "Zhangjiagang, Jiangsu, China",
      "footer.copyright": "Jiangsu Suyuan Baiyi Trading Co., Ltd. Todos los derechos reservados."
    },
    ja: {
      "meta.title": "SOIPOI — 高品質糸メーカー・輸出業者 | 江蘇蘇源百宜貿易有限公司",
      "meta.description": "SOIPOI（江蘇蘇源百宜貿易有限公司）は、中国江蘇省に拠点を置く垂直統合型の糸メーカー・輸出業者です。ファンシーヤーン、コアヤーン、梳毛糸、ニット・織物を専門としています。",
      "a11y.skip": "本文へスキップ",
      "nav.about": "会社概要",
      "nav.products": "製品",
      "nav.capabilities": "当社の強み",
      "nav.markets": "グローバル展開",
      "nav.quote": "お見積り依頼",
      "hero.eyebrow": "2012年創業 · 中国江蘇省",
      "hero.title": "世界最高峰のニットのための高品質な糸。",
      "hero.sub": "SOIPOIは垂直統合型の糸メーカー・輸出業者です。張家港の自社工場で<strong>ファンシーヤーン</strong>、<strong>コアヤーン</strong>、<strong>梳毛糸</strong>を生産し、米国・欧州・アジアのアパレル・ニットブランドへお届けしています。",
      "hero.cta.products": "製品を見る",
      "hero.cta.quote": "お見積り依頼",
      "hero.stat1": "トン / 年",
      "hero.stat2": "年間売上高",
      "hero.stat3": "自社工場",
      "hero.stat4": "提携生産拠点",
      "about.kicker": "会社概要",
      "about.title": "繊維から完成糸まで。糸の専門メーカー。",
      "about.lede": "江蘇蘇源百宜貿易有限公司（SOIPOI）は、中国で最も成熟した繊維産地のひとつである<strong>江蘇省張家港市</strong>に本社を置き、海外市場向けに糸・生地の開発・設計・製造を行っています。",
      "about.p2": "当社は<strong>完全子会社の工場を3つ</strong>（ファンシーヤーン、コアヤーン、梳毛・紡毛）、合弁企業4社、そして<strong>100を超える長期提携生産拠点</strong>を有しています。主要アクリル繊維メーカーの一次代理店として、原料供給を源流から管理し、安定した品質と競争力ある価格をお客様に提供します。",
      "about.p3": "毎年<strong>2万トン以上</strong>の糸を北米・欧州・アジアのブランドやメーカーへ納入しており、<strong>東華大学</strong>との研究開発提携と、複数の国際ブランドによる工場監査に支えられています。",
      "about.f1.label": "創業",
      "about.f1.value": "2012年",
      "about.f2.label": "本社",
      "about.f2.value": "江蘇省張家港市",
      "about.f3.label": "工場",
      "about.f3.value": "自社3 · 合弁4 · 提携100+",
      "about.f4.label": "研究開発",
      "about.f4.value": "東華大学",
      "products.kicker": "製品ラインナップ",
      "products.title": "あらゆるニットのための糸。",
      "products.lead": "テクスチャー感のあるファンシーヤーンから高機能コアヤーン、細番手の梳毛糸まで——自社開発・大規模生産。",
      "product1.title": "ファンシーヤーン",
      "product1.desc": "ブークレ、スラブ、ループ、フェザー、テープヤーンなど、ファッションニット、セーター、小物に風合いと表情を与えます。",
      "product1.link": "ファンシーヤーンについて問い合わせる →",
      "product2.title": "コアヤーン",
      "product2.desc": "柔らかな繊維で芯（ポリウレタンまたはフィラメント）を包み、スポーツウェアやニットに適度なストレッチ性・回復性・耐久性をもたらします。",
      "product2.link": "コアヤーンについて問い合わせる →",
      "product3.title": "梳毛糸",
      "product3.desc": "表面が滑らかで均一、高級感のある梳毛・半梳毛糸。細番手ニットや仕立てアイテムに最適です。",
      "product3.link": "梳毛糸について問い合わせる →",
      "product4.title": "ニット・織物",
      "product4.desc": "ニットと織物の補完的な生地生産により、糸から生地までのトータルなテキスタイルプログラムをサポートします。",
      "product4.link": "生地について問い合わせる →",
      "cap.kicker": "SOIPOIが選ばれる理由",
      "cap.title": "繊維から仕上げまで——規模・管理・パートナーシップ。",
      "cap1.title": "垂直統合",
      "cap1.desc": "原料調達から紡績、仕上げまで全工程を自社で管理し、品質・コスト・納期をコントロールします。",
      "cap2.title": "アクリル一次代理店",
      "cap2.desc": "主要アクリル繊維メーカーの一次代理店として、源流からの安定供給と有利な価格を確保します。",
      "cap3.title": "大学との研究開発",
      "cap3.desc": "東華大学との提携により、新たな混紡、仕上げ、機能性糸を市場より先に開発します。",
      "cap4.title": "ブランド監査済み工場",
      "cap4.desc": "複数の国際ブランドによる工場監査を通過し、グローバルバイヤーが求めるコンプライアンス・品質・倫理基準を満たしています。",
      "cap5.title": "大規模生産",
      "cap5.desc": "自社工場と提携工場で年間2万トン以上の生産能力——一貫性を損なわず大規模なプログラムに対応します。",
      "cap6.title": "グローバルサービス",
      "cap6.desc": "米国・欧州・日本・韓国・東南アジアへの輸出実績と、バングラデシュでの海外生産オプションを備えています。",
      "markets.kicker": "グローバル展開",
      "markets.title": "世界の主要市場へ輸出。",
      "market1": "米国",
      "market2": "欧州",
      "market3": "日本",
      "market4": "韓国",
      "market5": "香港・台湾",
      "market6": "東南アジア",
      "markets.note.title": "国境を越えて",
      "markets.note.desc": "シンガポール法人とダッカの<strong>蘇源（バングラデシュ）繊維産業パーク</strong>を通じて、中国を超えた柔軟な生産・調達オプションをご提供します。",
      "contact.kicker": "お問い合わせ",
      "contact.title": "何を編んでいるか教えてください。最適な糸を見つけます。",
      "contact.lead": "仕様、目標価格、サンプル依頼をお送りください——営業チームが1営業日以内に返信します。",
      "contact.info.title": "連絡先",
      "contact.company.label": "社名",
      "contact.company.value": "江蘇蘇源百宜貿易有限公司",
      "contact.address.label": "住所",
      "contact.address.value": "中国江蘇省張家港市沙洲西路華建大厦A座20階",
      "contact.phone.label": "電話",
      "contact.fax.label": "FAX",
      "contact.email.label": "メール",
      "contact.note": "直接お話しになりたい場合は、営業時間（GMT+8）にお電話いただくか、英語または中国語でメールをお送りください。",
      "form.title": "お見積り依頼",
      "form.name.label": "お名前 *",
      "form.name.ph": "お名前",
      "form.company.label": "会社名",
      "form.company.ph": "会社名",
      "form.email.label": "メール *",
      "form.email.ph": "you@company.com",
      "form.country.label": "国 / 地域",
      "form.country.ph": "例：米国",
      "form.interest.label": "ご希望の製品",
      "form.interest.placeholder": "— 選択してください —",
      "form.interest.fancy": "ファンシーヤーン",
      "form.interest.corespun": "コアヤーン",
      "form.interest.worsted": "梳毛糸",
      "form.interest.fabric": "ニット / 織物",
      "form.interest.other": "その他 / 未定",
      "form.message.label": "ご要望 *",
      "form.message.ph": "番手、繊維、数量、目標価格、サンプルのご要望など…",
      "form.submit": "送信する",
      "form.sending": "送信中…",
      "form.error": "お名前・メール・ご要望をご記入ください。",
      "form.success": "ありがとうございます！お問い合わせを送信しました。1営業日以内にご返信します。",
      "form.fail": "送信に失敗しました。直接 hedy_wang@soipoi.com までメールをお送りください。",
      "form.fineprint": "お問い合わせは営業チームへ安全に送信されます。1営業日以内にご返信します。",
      "footer.tagline": "高品質糸メーカー・輸出業者 —— 江蘇蘇源百宜貿易有限公司",
      "footer.explore": "メニュー",
      "footer.contact": "連絡先",
      "footer.address": "中国 · 江蘇省 · 張家港市",
      "footer.copyright": "江蘇蘇源百宜貿易有限公司 無断転載を禁じます。"
    },
    ko: {
      "meta.title": "SOIPOI — 프리미엄 원사 제조·수출 | 장쑤 쑤위안바이이 무역 유한공사",
      "meta.description": "SOIPOI(장쑤 쑤위안바이이 무역 유한공사)는 중국 장쑤성에 기반을 둔 수직 계열화 원사 제조·수출 기업으로, 팬시 얀, 코어 스펀 얀, 소모사, 편직·직물을 전문으로 합니다.",
      "a11y.skip": "본문으로 건너뛰기",
      "nav.about": "회사 소개",
      "nav.products": "원사 제품",
      "nav.capabilities": "기업 역량",
      "nav.markets": "글로벌 네트워크",
      "nav.quote": "견적 요청",
      "hero.eyebrow": "2012년 설립 · 중국 장쑤성",
      "hero.title": "세계 최고의 니트를 위한 프리미엄 원사.",
      "hero.sub": "SOIPOI는 수직 계열화된 원사 제조·수출 기업입니다. 장자강 자체 공장에서 <strong>팬시 얀</strong>, <strong>코어 스펀 얀</strong>, <strong>소모사</strong>를 생산하여 미국·유럽·아시아의 의류 및 니트 브랜드에 공급합니다.",
      "hero.cta.products": "원사 둘러보기",
      "hero.cta.quote": "견적 요청",
      "hero.stat1": "톤 / 연",
      "hero.stat2": "연간 매출",
      "hero.stat3": "자체 공장",
      "hero.stat4": "협력 생산기지",
      "about.kicker": "회사 소개",
      "about.title": "섬유에서 완성 원사까지, 원사 전문 기업.",
      "about.lede": "장쑤 쑤위안바이이 무역 유한공사(SOIPOI)는 중국에서 가장 성숙한 섬유 산지 중 하나인 <strong>장쑤성 장자강시</strong>에 본사를 두고, 해외 시장을 위한 원사와 직물을 개발·설계·생산합니다.",
      "about.p2": "당사는 <strong>3개의 완전 자회사 공장</strong>(팬시 얀, 코어 스펀 얀, 소모/방모), 4개의 합작 기업, 그리고 <strong>100개 이상의 장기 협력 생산기지</strong>를 운영합니다. 주요 아크릴 섬유 생산업체의 1급 대리점으로서 원자재 공급을 원천에서 관리하여 고객에게 안정적인 품질과 경쟁력 있는 가격을 제공합니다.",
      "about.p3": "매년 <strong>2만 톤 이상</strong>의 원사를 북미·유럽·아시아의 브랜드와 제조업체에 납품하며, <strong>둥화대학</strong>과의 R&D 협력과 다수 국제 브랜드의 공장 심사를 통과한 생산 체계를 갖추고 있습니다.",
      "about.f1.label": "설립",
      "about.f1.value": "2012",
      "about.f2.label": "본사",
      "about.f2.value": "장쑤성 장자강",
      "about.f3.label": "공장",
      "about.f3.value": "자체 3 · 합작 4 · 협력 100+",
      "about.f4.label": "R&D",
      "about.f4.value": "둥화대학",
      "products.kicker": "주요 제품",
      "products.title": "모든 니트를 위한 원사.",
      "products.lead": "텍스처가 살아 있는 팬시 얀부터 고성능 코어 스펀 얀, 가는 게이지의 소모사까지 — 자체 개발·대량 생산.",
      "product1.title": "팬시 얀",
      "product1.desc": "부클레, 슬럽, 루프, 페더, 테이프 얀 등으로 패션 니트, 스웨터, 액세서리에 질감과 입체감, 촉감을 더합니다.",
      "product1.link": "팬시 얀 문의하기 →",
      "product2.title": "코어 스펀 얀",
      "product2.desc": "부드러운 섬유로 심(스판덱스 또는 필라멘트)을 감싸, 액티브웨어와 니트에 제어된 신축성·회복성·내구성을 제공합니다.",
      "product2.link": "코어 스펀 얀 문의하기 →",
      "product3.title": "소모사",
      "product3.desc": "표면이 매끄럽고 균일하며 고급스러운 소모·반소모 원사 — 가는 게이지 니트와 정장 아이템에 이상적입니다.",
      "product3.link": "소모사 문의하기 →",
      "product4.title": "편직 · 직물",
      "product4.desc": "편직과 직물의 보완적인 원단 생산으로 원사부터 원단까지 완전한 텍스타일 프로그램을 지원합니다.",
      "product4.link": "원단 문의하기 →",
      "cap.kicker": "SOIPOI를 선택하는 이유",
      "cap.title": "섬유부터 완성까지 — 규모, 관리, 파트너십.",
      "cap1.title": "수직 계열화",
      "cap1.desc": "원자재 조달부터 방적, 후가공까지 전 공정을 직접 관리하여 품질·비용·납기를 통제합니다.",
      "cap2.title": "아크릴 1급 대리점",
      "cap2.desc": "주요 아크릴 섬유 생산업체의 1급 대리점으로서 원천에서 안정적인 공급과 유리한 가격을 확보합니다.",
      "cap3.title": "대학 R&D",
      "cap3.desc": "둥화대학과의 협력으로 새로운 혼방, 후가공, 기능성 원사를 시장보다 먼저 개발합니다.",
      "cap4.title": "브랜드 심사 통과 공장",
      "cap4.desc": "다수의 국제 브랜드 공장 심사를 통과하여 글로벌 바이어가 요구하는 규정 준수·품질·윤리 기준을 충족합니다.",
      "cap5.title": "대량 생산",
      "cap5.desc": "자체 및 협력 공장에서 연간 2만 톤 이상 생산 — 일관성을 유지하면서 대규모 주문을 지원합니다.",
      "cap6.title": "글로벌 서비스",
      "cap6.desc": "미국·유럽·일본·한국·동남아시아 수출 경험과 방글라데시 해외 생산 옵션을 갖추고 있습니다.",
      "markets.kicker": "글로벌 네트워크",
      "markets.title": "세계 주요 시장으로 수출합니다.",
      "market1": "미국",
      "market2": "유럽",
      "market3": "일본",
      "market4": "한국",
      "market5": "홍콩 · 대만",
      "market6": "동남아시아",
      "markets.note.title": "국경을 넘어",
      "markets.note.desc": "싱가포르 법인과 다카의 <strong>쑤위안(방글라데시) 섬유산업단지</strong>를 통해 중국을 넘어선 유연한 생산·소싱 옵션을 제공합니다.",
      "contact.kicker": "상담 시작하기",
      "contact.title": "무엇을 뜨고 계신지 알려주세요. 맞는 원사를 찾아드립니다.",
      "contact.lead": "사양, 목표 가격 또는 샘플 요청을 보내주세요 — 영업팀이 1영업일 이내에 회신합니다.",
      "contact.info.title": "연락처",
      "contact.company.label": "회사",
      "contact.company.value": "장쑤 쑤위안바이이 무역 유한공사",
      "contact.address.label": "주소",
      "contact.address.value": "중국 장쑤성 장자강시 사저우시루 화젠빌딩 A동 20층",
      "contact.phone.label": "전화",
      "contact.fax.label": "팩스",
      "contact.email.label": "이메일",
      "contact.note": "직접 통화를 원하시면 업무 시간(GMT+8)에 전화하시거나 영어 또는 중국어로 메일을 보내주세요.",
      "form.title": "견적 요청",
      "form.name.label": "성명 *",
      "form.name.ph": "이름",
      "form.company.label": "회사",
      "form.company.ph": "회사명",
      "form.email.label": "이메일 *",
      "form.email.ph": "you@company.com",
      "form.country.label": "국가 / 지역",
      "form.country.ph": "예: 미국",
      "form.interest.label": "관심 제품",
      "form.interest.placeholder": "— 선택하세요 —",
      "form.interest.fancy": "팬시 얀",
      "form.interest.corespun": "코어 스펀 얀",
      "form.interest.worsted": "소모사",
      "form.interest.fabric": "편직 / 직물",
      "form.interest.other": "기타 / 아직 모름",
      "form.message.label": "요구사항 *",
      "form.message.ph": "번수, 섬유, 수량, 목표 가격 또는 샘플 요청 사항을 알려주세요…",
      "form.submit": "문의 보내기",
      "form.sending": "전송 중…",
      "form.error": "성명, 이메일, 요구사항을 입력해 주세요.",
      "form.success": "감사합니다! 문의가 전송되었습니다. 1영업일 이내에 회신하겠습니다.",
      "form.fail": "전송에 실패했습니다. hedy_wang@soipoi.com 으로 직접 메일을 보내주세요.",
      "form.fineprint": "문의는 영업팀에 안전하게 전송됩니다. 1영업일 이내에 회신하겠습니다.",
      "footer.tagline": "프리미엄 원사 제조·수출 기업 — 장쑤 쑤위안바이이 무역 유한공사",
      "footer.explore": "탐색",
      "footer.contact": "연락처",
      "footer.address": "중국 · 장쑤성 · 장자강",
      "footer.copyright": "장쑤 쑤위안바이이 무역 유한공사. 모든 권리 보유."
    },
    de: {
      "meta.title": "SOIPOI — Premium-Garn-Hersteller & -Exporteur | Jiangsu Suyuan Baiyi Trading Co., Ltd.",
      "meta.description": "SOIPOI (Jiangsu Suyuan Baiyi Trading Co., Ltd.) ist ein vertikal integrierter Garn-Hersteller und -Exporteur in Jiangsu, China — Spezialist für Effektgarne, Core-Spun-Garne, Kammgarne sowie Gestricke/Webwaren.",
      "a11y.skip": "Zum Inhalt springen",
      "nav.about": "Über uns",
      "nav.products": "Garne",
      "nav.capabilities": "Leistungen",
      "nav.markets": "Globale Reichweite",
      "nav.quote": "Angebot anfordern",
      "hero.eyebrow": "Seit 2012 · Jiangsu, China",
      "hero.title": "Premium-Garne für die feinste Strickware der Welt.",
      "hero.sub": "SOIPOI ist ein vertikal integrierter Garn-Hersteller und -Exporteur — wir fertigen <strong>Effektgarne</strong>, <strong>Core-Spun-Garne</strong> und <strong>Kammgarne</strong> in unseren eigenen Werken in Zhangjiagang, für Bekleidungs- und Strickmarken in den USA, Europa und Asien.",
      "hero.cta.products": "Unsere Garne entdecken",
      "hero.cta.quote": "Angebot anfordern",
      "hero.stat1": "Tonnen / Jahr",
      "hero.stat2": "Jahresumsatz",
      "hero.stat3": "eigene Werke",
      "hero.stat4": "Partnerfabriken",
      "about.kicker": "Über uns",
      "about.title": "Ein Garn-Spezialist, von der Faser bis zum fertigen Garn.",
      "about.lede": "Jiangsu Suyuan Baiyi Trading Co., Ltd. (SOIPOI) hat seinen Hauptsitz in <strong>Zhangjiagang, Jiangsu</strong> — einer der ausgereiftesten Textilregionen Chinas — wo wir Garne und Stoffe für internationale Märkte entwickeln, gestalten und fertigen.",
      "about.p2": "Wir betreiben <strong>drei hundertprozentige Werke</strong> (Effektgarne, Core-Spun-Garne sowie Kammgarn/Streichgarn), vier Joint-Venture-Unternehmen und ein Netzwerk von <strong>über 100 langjährigen Partner-Produktionsstandorten</strong>. Als Erstrang-Agent führender Acrylfaser-Hersteller kontrollieren wir unsere Rohstoffversorgung von der Quelle — und bieten Kunden verlässliche Qualität und schärfere Preise.",
      "about.p3": "Jedes Jahr liefern wir <strong>über 20.000 Tonnen</strong> Garn an Marken und Hersteller in Nordamerika, Europa und Asien — gestützt auf eine F&E-Partnerschaft mit der <strong>Donghua-Universität</strong> und Werke, die von mehreren internationalen Marken auditiert wurden.",
      "about.f1.label": "Gegründet",
      "about.f1.value": "2012",
      "about.f2.label": "Hauptsitz",
      "about.f2.value": "Zhangjiagang, Jiangsu",
      "about.f3.label": "Werke",
      "about.f3.value": "3 eigene · 4 JV · 100+ Partner",
      "about.f4.label": "F&E",
      "about.f4.value": "Donghua-Universität",
      "products.kicker": "Unsere Produkte",
      "products.title": "Garne, entwickelt für jeden Strick.",
      "products.lead": "Von texturierten Effektgarnen über leistungsstarke Core-Spun-Garne bis zu feingestrickten Kammgarnen — intern entwickelt und in großem Maßstab produziert.",
      "product1.title": "Effektgarn",
      "product1.desc": "Bouclé-, Slub-, Loop-, Feather- und Bandgarne, die Modestrickwaren, Pullovern und Accessoires Textur, Tiefe und Griff verleihen.",
      "product1.link": "Effektgarn anfragen →",
      "product2.title": "Core-Spun-Garn",
      "product2.desc": "Elastan- oder Filamentkern, ummantelt mit weichen Fasern — für kontrollierte Dehnung, Rückstellung und Strapazierfähigkeit bei Aktiv- und Strickbekleidung.",
      "product2.link": "Core-Spun-Garn anfragen →",
      "product3.title": "Kammgarn",
      "product3.desc": "Hochwertige Kamm- und Halbkammgarne mit glatter, gleichmäßiger, edler Oberfläche — ideal für feingestrickte und maßgeschneiderte Stücke.",
      "product3.link": "Kammgarn anfragen →",
      "product4.title": "Gestricke & Webwaren",
      "product4.desc": "Ergänzende Stoffproduktion in Strick- und Webkonstruktionen — so unterstützen wir komplette Textilprogramme, vom Garn bis zum Stoff.",
      "product4.link": "Stoffe anfragen →",
      "cap.kicker": "Warum SOIPOI",
      "cap.title": "Maßstab, Kontrolle und Partnerschaft — von der Faser bis zum Finish.",
      "cap1.title": "Vertikale Integration",
      "cap1.desc": "Wir besitzen die gesamte Kette — Rohstoffbeschaffung, Spinnen und Veredelung — sodass Qualität, Kosten und Lieferzeiten in unserer Hand bleiben.",
      "cap2.title": "Erstrang-Acryl-Agent",
      "cap2.desc": "Als Erstrang-Agent führender Acrylfaser-Hersteller sichern wir konstante Versorgung und günstige Preise an der Quelle.",
      "cap3.title": "Universitäre F&E",
      "cap3.desc": "Unsere Partnerschaft mit der Donghua-Universität treibt neue Fasermischungen, Ausrüstungen und Funktionsgarne voran, bevor sie auf den Markt kommen.",
      "cap4.title": "Marken-auditierte Werke",
      "cap4.desc": "Unsere Werke haben Audits mehrerer internationaler Marken bestanden — sie erfüllen die Compliance-, Qualitäts- und Ethikstandards, die globale Einkäufer erwarten.",
      "cap5.title": "Produktion in großem Maßstab",
      "cap5.desc": "Über 20.000 Tonnen Jahresproduktion in eigenen und Partnerwerken — die Kapazität für große Programme ohne Einbußen bei der Konsistenz.",
      "cap6.title": "Globaler Service",
      "cap6.desc": "Exporterfahrung in den USA, Europa, Japan, Korea und Südostasien — mit Produktionsoptionen im Ausland in Bangladesch.",
      "markets.kicker": "Globale Reichweite",
      "markets.title": "Export in die führenden Märkte der Welt.",
      "market1": "USA",
      "market2": "Europa",
      "market3": "Japan",
      "market4": "Südkorea",
      "market5": "Hongkong & Taiwan",
      "market6": "Südostasien",
      "markets.note.title": "Über Grenzen hinaus",
      "markets.note.desc": "Über unsere Niederlassung in Singapur und den <strong>Suyuan (Bangladesch) Textile Industrial Park</strong> in Dhaka bieten wir Einkäufern flexible Produktions- und Beschaffungsoptionen über China hinaus.",
      "contact.kicker": "Beginnen wir das Gespräch",
      "contact.title": "Sagen Sie uns, was Sie stricken. Wir finden das passende Garn.",
      "contact.lead": "Senden Sie uns Ihre Spezifikationen, Ihren Zielpreis oder Ihre Musteranfrage — unser Vertriebsteam antwortet innerhalb eines Werktags.",
      "contact.info.title": "Kontaktdaten",
      "contact.company.label": "Firma",
      "contact.company.value": "Jiangsu Suyuan Baiyi Trading Co., Ltd.",
      "contact.address.label": "Adresse",
      "contact.address.value": "20F, Building A, Huajian Mansion, Shazhou West Road, Zhangjiagang, Jiangsu, China",
      "contact.phone.label": "Telefon",
      "contact.fax.label": "Fax",
      "contact.email.label": "E-Mail",
      "contact.note": "Möchten Sie lieber sprechen? Rufen Sie uns während der Geschäftszeiten (GMT+8) an oder schreiben Sie uns auf Englisch oder Chinesisch.",
      "form.title": "Angebot anfordern",
      "form.name.label": "Vollständiger Name *",
      "form.name.ph": "Ihr Name",
      "form.company.label": "Firma",
      "form.company.ph": "Firmenname",
      "form.email.label": "E-Mail *",
      "form.email.ph": "sie@firma.com",
      "form.country.label": "Land / Region",
      "form.country.ph": "z. B. USA",
      "form.interest.label": "Produktinteresse",
      "form.interest.placeholder": "— Bitte wählen —",
      "form.interest.fancy": "Effektgarn",
      "form.interest.corespun": "Core-Spun-Garn",
      "form.interest.worsted": "Kammgarn",
      "form.interest.fabric": "Gestricke / Webwaren",
      "form.interest.other": "Sonstiges / noch unsicher",
      "form.message.label": "Ihre Anforderung *",
      "form.message.ph": "Teilen Sie uns Garnfeinheit, Faser, Menge, Zielpreis oder Musterbedarf mit…",
      "form.submit": "Anfrage senden",
      "form.sending": "Wird gesendet…",
      "form.error": "Bitte füllen Sie Name, E-Mail und Anforderung aus.",
      "form.success": "Vielen Dank! Ihre Anfrage wurde gesendet. Wir antworten innerhalb eines Werktags.",
      "form.fail": "Etwas ist schiefgelaufen. Schreiben Sie uns direkt an hedy_wang@soipoi.com.",
      "form.fineprint": "Ihre Anfrage wird sicher an unser Vertriebsteam gesendet. Wir melden uns innerhalb eines Werktags.",
      "footer.tagline": "Premium-Garn-Hersteller & -Exporteur — Jiangsu Suyuan Baiyi Trading Co., Ltd.",
      "footer.explore": "Entdecken",
      "footer.contact": "Kontakt",
      "footer.address": "Zhangjiagang, Jiangsu, China",
      "footer.copyright": "Jiangsu Suyuan Baiyi Trading Co., Ltd. Alle Rechte vorbehalten."
    }
  };

  var LANG_KEY = "soipoi.lang";
  var currentLang = "en";

  function getLang() {
    try {
      var saved = localStorage.getItem(LANG_KEY);
      if (saved && I18N[saved]) return saved;
    } catch (e) {}
    return "en";
  }

  function langLabel(code) {
    for (var i = 0; i < LANGUAGES.length; i++) {
      if (LANGUAGES[i].code === code) return LANGUAGES[i].label;
    }
    return code;
  }

  function t(key) {
    return (I18N[currentLang] && I18N[currentLang][key]) || key;
  }

  function applyLang() {
    var lang = currentLang;

    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      var val = I18N[lang][el.getAttribute("data-i18n")];
      if (val == null) return;
      if (el.tagName === "META") el.setAttribute("content", val);
      else el.textContent = val;
    });

    document.querySelectorAll("[data-i18n-html]").forEach(function (el) {
      var val = I18N[lang][el.getAttribute("data-i18n-html")];
      if (val != null) el.innerHTML = val;
    });

    document.querySelectorAll("[data-i18n-ph]").forEach(function (el) {
      var val = I18N[lang][el.getAttribute("data-i18n-ph")];
      if (val != null) el.setAttribute("placeholder", val);
    });

    document.documentElement.setAttribute("lang", lang === "zh" ? "zh-CN" : lang);
    // Locale theming: CSS reads this to apply the culture's color palette
    document.documentElement.setAttribute("data-lang", lang);

    var label = document.getElementById("langLabel");
    if (label) label.textContent = langLabel(lang);

    var menu = document.getElementById("langMenu");
    if (menu) {
      menu.querySelectorAll("li").forEach(function (li) {
        li.classList.toggle("active", li.getAttribute("data-lang") === lang);
      });
    }
  }

  function setLang(lang) {
    if (!I18N[lang]) return;
    currentLang = lang;
    try { localStorage.setItem(LANG_KEY, lang); } catch (e) {}
    applyLang();
  }

  // ---- Build the language dropdown ----
  var langMenu = document.getElementById("langMenu");
  var langToggle = document.getElementById("langToggle");

  if (langMenu) {
    LANGUAGES.forEach(function (lang) {
      var li = document.createElement("li");
      li.setAttribute("role", "option");
      li.setAttribute("data-lang", lang.code);
      li.textContent = lang.label;
      li.addEventListener("click", function () {
        setLang(lang.code);
        closeMenu();
      });
      langMenu.appendChild(li);
    });
  }

  function closeMenu() {
    if (langMenu) langMenu.classList.remove("open");
    if (langToggle) langToggle.setAttribute("aria-expanded", "false");
  }

  if (langToggle) {
    langToggle.addEventListener("click", function (e) {
      e.stopPropagation();
      var open = langMenu.classList.toggle("open");
      langToggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
  }

  document.addEventListener("click", closeMenu);

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
