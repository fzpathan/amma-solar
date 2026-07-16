const fs = require("fs");

const en = JSON.parse(fs.readFileSync("messages/en.json", "utf8"));
Object.assign(en.meta, {
  siteName: "Amma Solar",
  defaultTitle:
    "Amma Solar | Solar Installation & PM Surya Ghar Subsidy Maharashtra",
  defaultDescription:
    "Trusted rooftop solar partner across Maharashtra. Authorised MSEDCL vendor. Residential subsidy up to ₹78,000, commercial & industrial solar for lower operating costs. Free consultation.",
  homeTitle: "Home | Amma Solar Maharashtra",
  subsidyDescription:
    "Check eligibility, subsidy amounts, documents, and process for PM Surya Ghar Muft Bijli Yojana in Maharashtra with Amma Solar.",
  galleryDescription:
    "Residential solar installations and project photos by Amma Solar Maharashtra.",
  contactTitle: "Contact | Amma Solar",
  contactDescription:
    "Book a free site survey. Call or WhatsApp Amma Solar — installation across any city in Maharashtra.",
  commercialTitle: "Commercial & Industrial Solar | Amma Solar",
  commercialDescription:
    "Solar for factories, warehouses, shops and offices in Maharashtra. Net metering, tax benefits, open access guidance. Contact munirahmedkhannsk@gmail.com or alimkhan1@gmail.com.",
});
en.nav.commercial = "Commercial & Industrial";
en.footer.copyright = "© {year} Amma Solar. All rights reserved.";
en.footer.vendor =
  "Authorised MSEDCL vendor — Maharashtra statewide installation";
en.whatsapp.consultationMessage =
  "Hello Amma Solar, I want a free consultation for solar installation in Maharashtra.";
en.whatsapp.surveyMessage =
  "Hello, I want to book a free site survey with Amma Solar.";
en.whatsapp.calculatorMessage =
  "Hello Amma Solar,\nI checked the calculator:\nRecommended: {kw} kW\nEst. cost: ₹{cost}\nSubsidy: ₹{subsidy}\nEMI: ₹{emi}/mo\nMonthly bill: ₹{bill}\nPlease share a detailed quotation.";
en.whatsapp.commercialMessage =
  "Hello Amma Solar,\nI am interested in Commercial / Industrial solar for our facility in Maharashtra.\nPlease contact me with a project consultation.";
en.hero.brand = "Amma Solar";
en.hero.subhead =
  "Authorised MSEDCL vendor for Maharashtra. Installation across any city in the state — subsidy support, transparent pricing, expert teams.";
en.hero.vendorBadge = "Authorised vendor of MSEDCL · Maharashtra";
en.whyUs.title = "Why choose Amma Solar";
en.ctaBanner.body =
  "Book a free survey with Amma Solar — Call or WhatsApp. We install across Maharashtra.";
en.subsidyPage.intro =
  "A clear guide to eligibility, subsidy amounts, documents, loans, and timelines — with Amma Solar assistance across Maharashtra.";
en.contactPage.title = "Contact Amma Solar";
en.contactPage.subtitle =
  "Talk to us for a free consultation or site survey. Residential, commercial & industrial — any city in Maharashtra.";
en.contactPage.emailsLabel = "Email";
en.contactPage.vendorNote =
  "Authorised vendor of MSEDCL (Maharashtra State Electricity Distribution Co. Ltd.) for Maharashtra state.";
en.privacy.body =
  "Amma Solar collects only the information you share via contact forms or WhatsApp (such as name, phone, city, and electricity bill details) to respond to your inquiry and arrange surveys. We do not sell your data. Messages may be processed on WhatsApp and, when configured, email. Contact us to request deletion of inquiry data we hold.";
en.terms.body =
  "Website content is for general information about Amma Solar services and government solar schemes. Subsidy figures, interest rates, and deadlines shown are based on our marketing materials and current publicly promoted scheme details; they are not a legal offer. Final quotations, warranties, and scheme benefits are confirmed in writing after survey and eligibility checks. Maharashtra jurisdiction applies.";

en.commercialTeaser = {
  eyebrow: "Business & industry",
  title: "Commercial & industrial solar for lower operating costs",
  body: "Factories, warehouses, shops, offices and industrial parks can cut electricity spend with rooftop or ground-mounted solar — with net metering, tax benefits and project financing guidance.",
  cta: "Explore C&I solutions",
};

en.commercialPage = {
  eyebrow: "Commercial & Industrial",
  title: "Solar energy for businesses and industries",
  intro:
    "Amma Solar helps commercial and industrial consumers across Maharashtra adopt solar for long-term economy — lower bills, stronger energy security, and clearer project economics.",
  vendor:
    "Authorised vendor of MSEDCL for Maharashtra state. We support installation in any city across Maharashtra.",
  whoTitle: "Who this is for",
  who: {
    "1": "Factories & manufacturing units",
    "2": "Warehouses & logistics parks",
    "3": "Shops, malls & commercial complexes",
    "4": "Offices, hotels & institutions",
    "5": "Industrial estates & MSMEs",
  },
  whyTitle: "Why industries go solar",
  why: {
    "1": {
      title: "Lower operating costs",
      desc: "Offset high commercial/industrial tariffs with daytime solar generation.",
    },
    "2": {
      title: "Predictable energy spend",
      desc: "Reduce exposure to rising grid tariffs over 20+ years of plant life.",
    },
    "3": {
      title: "ESG & brand value",
      desc: "Demonstrate clean energy commitment to customers and auditors.",
    },
    "4": {
      title: "RPO / compliance support",
      desc: "Help larger HT/EHT consumers plan renewable purchase obligations where applicable.",
    },
  },
  financeTitle: "Subsidies & financial assistance (India & Maharashtra)",
  financeIntro:
    "Unlike residential PM Surya Ghar, commercial and industrial connections generally do not receive central capital subsidy (CFA). Savings come from policy incentives, tax treatment, net metering / open access, and financing. Always verify current MERC/MSEDCL/MNRE rules before committing.",
  noCfaTitle: "Important: no PM Surya Ghar CFA for C&I",
  noCfaBody:
    "Central Financial Assistance under PM Surya Ghar Muft Bijli Yojana is for residential (domestic) consumers. Commercial and industrial tariff categories are not eligible for that capital subsidy.",
  indiaTitle: "India-wide / central levers",
  india: {
    "1": {
      title: "Accelerated depreciation",
      desc: "Businesses can typically claim accelerated depreciation on solar assets (commonly cited around 40% in year one under current Income Tax rules for eligible plant — confirm with your CA).",
    },
    "2": {
      title: "Bank / NBFC project finance",
      desc: "Term loans and green financing products from banks and NBFCs for rooftop and captive C&I solar; rates and tenure depend on credit profile.",
    },
    "3": {
      title: "RESCO / OPEX models",
      desc: "Third-party ownership models can reduce upfront CapEx — power purchase at agreed tariffs (structure subject to regulation and contracts).",
    },
    "4": {
      title: "ALMM / quality compliance",
      desc: "MNRE ALMM-listed modules and compliant design improve bankability and DISCOM acceptance.",
    },
  },
  mhTitle: "Maharashtra-specific support",
  mh: {
    "1": {
      title: "MSEDCL net metering",
      desc: "Eligible C&I consumers can apply for grid-interactive rooftop solar with net metering / related metering arrangements under MERC regulations via MSEDCL processes.",
    },
    "2": {
      title: "Electricity duty relief (policy-linked)",
      desc: "Maharashtra renewable energy / storage policy frameworks have promoted duty exemptions for certain captive / BESS-linked projects (e.g. multi-year duty holidays where conditions are met). Eligibility is project-specific.",
    },
    "3": {
      title: "Green Energy Open Access",
      desc: "Consumers meeting contract-demand thresholds (commonly 100 kW+) may explore green open access; banking and charges follow MERC rules and change over time.",
    },
    "4": {
      title: "Grid support / ToD banking rules",
      desc: "MERC orders may apply grid support charges above certain sizes and time-of-day banking rules for non-residential consumers. We model these into project economics.",
    },
    "5": {
      title: "RPO for large consumers",
      desc: "Covered HT/EHT consumers may have renewable purchase obligations — onsite or contracted solar can support compliance planning.",
    },
  },
  processTitle: "How we deliver C&I projects",
  process: {
    "1": "Load & bill study",
    "2": "Site / roof assessment",
    "3": "Technical & financial proposal",
    "4": "MSEDCL / approvals support",
    "5": "Supply, install & commission",
    "6": "Handover & after-sales",
  },
  contactTitle: "For commercial & industrial solar projects",
  contactBody:
    "Please email your unit location, sanctioned load / monthly bill, and roof or land details. We will respond with a project consultation.",
  email1: "munirahmedkhannsk@gmail.com",
  email2: "alimkhan1@gmail.com",
  orCall: "Or call / WhatsApp",
  footnote:
    "Incentives, charges, and eligibility depend on current central and Maharashtra (MERC/MSEDCL/MNRE) policy and may change. This page is informational, not a legal or tax opinion.",
};

fs.writeFileSync("messages/en.json", JSON.stringify(en, null, 2) + "\n");

const mr = JSON.parse(fs.readFileSync("messages/mr.json", "utf8"));
Object.assign(mr.meta, {
  siteName: "अम्मा सोलर",
  defaultTitle: "अम्मा सोलर | सोलर इंस्टॉलेशन व पीएम सूर्यघर सबसिडी महाराष्ट्र",
  defaultDescription:
    "महाराष्ट्रभर विश्वसनीय रूफटॉप सोलर पार्टनर. एमएसईडीसीएल अधिकृत विक्रेता. निवासी सबसिडी ₹७८,००० पर्यंत, व्यावसायिक व औद्योगिक सोलर. मोफत सल्ला.",
  homeTitle: "होम | अम्मा सोलर महाराष्ट्र",
  subsidyDescription:
    "महाराष्ट्रमध्ये पीएम सूर्यघर मोफत वीज योजनेची पात्रता, सबसिडी रक्कम, कागदपत्रे आणि प्रक्रिया — अम्मा सोलर.",
  galleryDescription:
    "अम्मा सोलर महाराष्ट्रच्या निवासी सोलर इंस्टॉलेशन आणि प्रोजेक्ट फोटो.",
  contactTitle: "संपर्क | अम्मा सोलर",
  contactDescription:
    "मोफत साइट सर्वे बुक करा. अम्मा सोलर — महाराष्ट्रातील कोणत्याही शहरात इंस्टॉलेशन.",
  commercialTitle: "व्यावसायिक व औद्योगिक सोलर | अम्मा सोलर",
  commercialDescription:
    "महाराष्ट्रातील कारखाने, वेअरहाऊस, दुकाने व ऑफिससाठी सोलर. नेट मिटरिंग, कर लाभ, ओपन अ‍ॅक्सेस मार्गदर्शन. संपर्क: munirahmedkhannsk@gmail.com किंवा alimkhan1@gmail.com.",
});
mr.nav.commercial = "व्यावसायिक व औद्योगिक";
mr.footer.copyright = "© {year} अम्मा सोलर. सर्व हक्क राखीव.";
mr.footer.vendor = "एमएसईडीसीएल अधिकृत विक्रेता — महाराष्ट्रभर इंस्टॉलेशन";
mr.whatsapp.consultationMessage =
  "नमस्कार अम्मा सोलर, मला महाराष्ट्रात सोलर इंस्टॉलेशनसाठी मोफत सल्ला हवा आहे.";
mr.whatsapp.surveyMessage =
  "नमस्कार, मला अम्मा सोलरसोबत मोफत साइट सर्वे बुक करायचे आहे.";
mr.whatsapp.calculatorMessage =
  "नमस्कार अम्मा सोलर,\nमी कॅल्क्युलेटर वापरले:\nशिफारस: {kw} kW\nअंदाजे खर्च: ₹{cost}\nसबसिडी: ₹{subsidy}\nईएमआय: ₹{emi}/महिना\nमासिक बिल: ₹{bill}\nकृपया तपशीलवार कोटेशन द्या.";
mr.whatsapp.commercialMessage =
  "नमस्कार अम्मा सोलर,\nमला महाराष्ट्रातील आमच्या युनिटसाठी व्यावसायिक / औद्योगिक सोलरमध्ये रस आहे.\nकृपया प्रकल्प सल्ल्यासाठी संपर्क करा.";
mr.hero.brand = "अम्मा सोलर";
mr.hero.subhead =
  "महाराष्ट्रासाठी एमएसईडीसीएल अधिकृत विक्रेता. राज्यातील कोणत्याही शहरात इंस्टॉलेशन — सबसिडी मदत, पारदर्शक किंमत, अनुभवी टीम.";
mr.hero.vendorBadge = "एमएसईडीसीएल अधिकृत विक्रेता · महाराष्ट्र";
mr.whyUs.title = "अम्मा सोलर का निवडावे";
mr.ctaBanner.body =
  "अम्मा सोलरसोबत मोफत सर्वे बुक करा — कॉल किंवा व्हॉट्सअ‍ॅप. आम्ही महाराष्ट्रभर इंस्टॉल करतो.";
mr.subsidyPage.intro =
  "पात्रता, सबसिडी रक्कम, कागदपत्रे, कर्ज आणि टाइमलाइन — महाराष्ट्रभर अम्मा सोलरच्या मदतीने.";
mr.contactPage.title = "अम्मा सोलर संपर्क";
mr.contactPage.subtitle =
  "मोफत सल्ला किंवा साइट सर्वेसाठी बोला. निवासी, व्यावसायिक व औद्योगिक — महाराष्ट्रातील कोणतेही शहर.";
mr.contactPage.emailsLabel = "ईमेल";
mr.contactPage.vendorNote =
  "महाराष्ट्र राज्यासाठी एमएसईडीसीएल (महाराष्ट्र राज्य विद्युत वितरण कंपनी मर्यादित) चे अधिकृत विक्रेता.";
mr.privacy.body =
  "अम्मा सोलर फक्त आपण संपर्क फॉर्म किंवा व्हॉट्सअ‍ॅपवर दिलेली माहिती (नाव, फोन, शहर, वीज बिल तपशील) चौकशी उत्तर देण्यासाठी आणि सर्वे व्यवस्थित करण्यासाठी गोळा करतो. आम्ही आपला डेटा विकत नाही. संदेश व्हॉट्सअ‍ॅपवर आणि कॉन्फिगर केल्यास ईमेलवर प्रक्रिया होऊ शकतात. आमच्याकडील इनक्वायरी डेटा हटवण्यासाठी संपर्क करा.";
mr.terms.body =
  "वेबसाइटवरील मजकूर अम्मा सोलर सेवा आणि सरकारी सोलर योजनांबद्दल सामान्य माहितीसाठी आहे. दर्शवलेली सबसिडी, व्याजदर आणि मुदती आमच्या जाहिरात साहित्यावर व सध्या प्रचारित तपशीलांवर आधारित आहेत; हे कायदेशीर ऑफर नाहीत. अंतिम कोटेशन, वॉरंटी आणि योजनेचे लाभ सर्वे व पात्रता तपासणीनंतर लेखी निश्चित होतात. महाराष्ट्र अधिकारक्षेत्र लागू.";

mr.commercialTeaser = {
  eyebrow: "व्यवसाय व उद्योग",
  title: "व्यावसायिक व औद्योगिक सोलर — कमी ऑपरेटिंग खर्च",
  body: "कारखाने, वेअरहाऊस, दुकाने, ऑफिस आणि औद्योगिक परिसर रूफटॉप किंवा ग्राउंड-माउंटेड सोलरने वीज खर्च कमी करू शकतात — नेट मिटरिंग, कर लाभ आणि प्रकल्प फायनान्स मार्गदर्शनासह.",
  cta: "C&I उपाय पहा",
};

mr.commercialPage = {
  eyebrow: "व्यावसायिक व औद्योगिक",
  title: "व्यवसाय आणि उद्योगांसाठी सौर ऊर्जा",
  intro:
    "अम्मा सोलर महाराष्ट्रातील व्यावसायिक व औद्योगिक ग्राहकांना दीर्घकालीन बचत आणि ऊर्जा सुरक्षिततेसाठी सोलर स्वीकारण्यास मदत करतो.",
  vendor:
    "महाराष्ट्र राज्यासाठी एमएसईडीसीएल अधिकृत विक्रेता. महाराष्ट्रातील कोणत्याही शहरात इंस्टॉलेशन सहाय्य.",
  whoTitle: "कोणासाठी?",
  who: {
    "1": "कारखाने व उत्पादन युनिट्स",
    "2": "वेअरहाऊस व लॉजिस्टिक्स पार्क",
    "3": "दुकाने, मॉल्स व कमर्शियल कॉम्प्लेक्स",
    "4": "ऑफिस, हॉटेल्स व संस्था",
    "5": "औद्योगिक वसाहती व एमएसएमई",
  },
  whyTitle: "उद्योग सोलर का घेतात",
  why: {
    "1": {
      title: "कमी ऑपरेटिंग खर्च",
      desc: "उच्च व्यावसायिक/औद्योगिक टॅरिफवर दिवसाच्या सोलर उत्पादनामुळे बचत.",
    },
    "2": {
      title: "अंदाजे ऊर्जा खर्च",
      desc: "२०+ वर्षांच्या प्लांट आयुष्यात वाढत्या ग्रिड दरांपासून संरक्षण.",
    },
    "3": {
      title: "ESG व ब्रँड मूल्य",
      desc: "ग्राहक व ऑडिटरसमोर स्वच्छ ऊर्जा वचनबद्धता दाखवा.",
    },
    "4": {
      title: "RPO / अनुपालन मदत",
      desc: "मोठ्या HT/EHT ग्राहकांसाठी नूतनीकरणीय खरेदी जबाबदाऱ्यांचे नियोजन.",
    },
  },
  financeTitle: "सबसिडी व आर्थिक मदत (भारत व महाराष्ट्र)",
  financeIntro:
    "निवासी पीएम सूर्यघराप्रमाणे, व्यावसायिक व औद्योगिक कनेक्शनला सामान्यतः केंद्रीय भांडवली सबसिडी (CFA) मिळत नाही. बचत धोरण प्रोत्साहन, कर लाभ, नेट मिटरिंग/ओपन अ‍ॅक्सेस आणि फायनान्समधून होते. वचनबद्ध होण्यापूर्वी सध्याचे MERC/MSEDCL/MNRE नियम नक्की करा.",
  noCfaTitle: "महत्त्वाचे: C&I साठी पीएम सूर्यघर CFA नाही",
  noCfaBody:
    "पीएम सूर्यघर मोफत वीज योजनेअंतर्गत केंद्रीय आर्थिक मदत निवासी (डोमेस्टिक) ग्राहकांसाठी आहे. व्यावसायिक व औद्योगिक टॅरिफ श्रेणी या भांडवली सबसिडीसाठी पात्र नाहीत.",
  indiaTitle: "भारत / केंद्र स्तरीय लाभ",
  india: {
    "1": {
      title: "प्रवेगित घसारा (Accelerated Depreciation)",
      desc: "व्यवसाय सोलर अॅसेट्सवर सामान्यतः पहिल्या वर्षी ~४०% प्रवेगित घसारा दावा करू शकतात (पात्र प्लांटसाठी सध्याच्या आयकर नियमांनुसार — आपल्या CA सोबत नक्की करा).",
    },
    "2": {
      title: "बँक / NBFC प्रकल्प कर्ज",
      desc: "रूफटॉप व कॅप्टिव्ह C&I सोलरसाठी टर्म लोन व ग्रीन फायनान्स; दर व मुदत क्रेडिट प्रोफाइलवर अवलंबून.",
    },
    "3": {
      title: "RESCO / OPEX मॉडेल",
      desc: "तिसऱ्या पक्ष्याच्या मालकीमुळे आगाऊ CapEx कमी होऊ शकतो — ठरलेल्या टॅरिफवर वीज खरेदी (नियमन व करारानुसार).",
    },
    "4": {
      title: "ALMM / गुणवत्ता अनुपालन",
      desc: "MNRE ALMM-लिस्टेड मॉड्यूल्स व अनुपालन डिझाइन बँकॅबिलिटी व डिस्कॉम स्वीकृती सुधारते.",
    },
  },
  mhTitle: "महाराष्ट्र-विशिष्ट मदत",
  mh: {
    "1": {
      title: "एमएसईडीसीएल नेट मिटरिंग",
      desc: "पात्र C&I ग्राहक MERC नियमांतर्गत एमएसईडीसीएल प्रक्रियांद्वारे ग्रिड-इंटरअ‍ॅक्टिव्ह रूफटॉप सोलर व नेट मिटरिंगसाठी अर्ज करू शकतात.",
    },
    "2": {
      title: "विद्युत शुल्क सवलत (धोरणानुसार)",
      desc: "महाराष्ट्र नूतनीकरणीय ऊर्जा / स्टोरेज धोरणांत काही कॅप्टिव्ह / BESS-लिंकड प्रकल्पांसाठी बहुवर्षीय शुल्क सूट प्रोत्साहित केली आहे. पात्रता प्रकल्पानुसार.",
    },
    "3": {
      title: "ग्रीन एनर्जी ओपन अ‍ॅक्सेस",
      desc: "ठराविक कॉन्ट्रॅक्ट डिमांड (सामान्यतः १०० kW+) असलेले ग्राहक ग्रीन ओपन अ‍ॅक्सेस पाहू शकतात; बँकिंग व शुल्क MERC नियमांनुसार.",
    },
    "4": {
      title: "ग्रिड सपोर्ट / ToD बँकिंग",
      desc: "ठराविक आकारानंतर ग्रिड सपोर्ट चार्जेस व गैर-निवासींसाठी वेळ-ब्लॉक बँकिंग नियम लागू होऊ शकतात. आम्ही अर्थशास्त्रात हे मॉडेल करतो.",
    },
    "5": {
      title: "मोठ्या ग्राहकांसाठी RPO",
      desc: "कव्हर HT/EHT ग्राहकांना नूतनीकरणीय खरेदी जबाबदारी असू शकते — ऑनसाइट किंवा करारबद्ध सोलर अनुपालन नियोजनास मदत करते.",
    },
  },
  processTitle: "आम्ही C&I प्रकल्प कसे पूर्ण करतो",
  process: {
    "1": "लोड व बिल अभ्यास",
    "2": "साइट / रूफ मूल्यांकन",
    "3": "तांत्रिक व आर्थिक प्रस्ताव",
    "4": "एमएसईडीसीएल / मंजुरी सहाय्य",
    "5": "पुरवठा, इंस्टॉल व कमिशन",
    "6": "हॅंडओव्हर व आफ्टर-सेल्स",
  },
  contactTitle: "व्यावसायिक व औद्योगिक सोलर प्रकल्पांसाठी",
  contactBody:
    "कृपया युनिट स्थान, सॅक्शन लोड / मासिक बिल आणि छप्पर किंवा जमीन तपशील ईमेल करा. आम्ही प्रकल्प सल्ल्यासह उत्तर देऊ.",
  email1: "munirahmedkhannsk@gmail.com",
  email2: "alimkhan1@gmail.com",
  orCall: "किंवा कॉल / व्हॉट्सअ‍ॅप",
  footnote:
    "प्रोत्साहन, शुल्क आणि पात्रता सध्याच्या केंद्र व महाराष्ट्र (MERC/MSEDCL/MNRE) धोरणावर अवलंबून असून बदलू शकते. हे पृष्ठ माहितीपर आहे, कायदेशीर किंवा कर सल्ला नाही.",
};

fs.writeFileSync("messages/mr.json", JSON.stringify(mr, null, 2) + "\n");
console.log("messages updated");
