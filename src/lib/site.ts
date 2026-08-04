export const siteConfig = {
  name: "Amma Solar",
  contactPerson: "Sabir Khan",
  phone: "9588478692",
  phoneDisplay: "+91 95884 78692",
  whatsapp: "919588478692",
  email: "munirahmedkhannsk@gmail.com",
  emails: ["munirahmedkhannsk@gmail.com", "alimkhan1@gmail.com"] as const,
  commercialEmails: [
    "munirahmedkhannsk@gmail.com",
    "alimkhan1@gmail.com",
  ] as const,
  city: "Nashik",
  serviceArea: "Maharashtra",
  pincode: "422006",
  state: "Maharashtra",
  country: "India",
  vendorNote: {
    en: "Authorised vendor of MSEDCL (Maharashtra State Electricity Distribution Co. Ltd.) for Maharashtra state. Installation available across any city in Maharashtra.",
    mr: "महाराष्ट्र राज्यासाठी एमएसईडीसीएल (महाराष्ट्र राज्य विद्युत वितरण कंपनी मर्यादित) चे अधिकृत विक्रेता. महाराष्ट्रातील कोणत्याही शहरात इंस्टॉलेशन उपलब्ध.",
  },
  addresses: [
    {
      id: "ashoka",
      line: "Flat No 1, Ozon Apartment, Mamta Nagar, Ashoka Marg, Nashik - 422006",
      mapsQuery: "Ozon Apartment Mamta Nagar Ashoka Marg Nashik 422006",
    },
    {
      id: "khode",
      line: "Ali Mention Row House, Khode Nagar, Nashik - 422006",
      mapsQuery: "Khode Nagar Nashik 422006",
    },
  ],
  taglines: {
    en: "Clean Energy | Brighter Future",
    mr: "सुरक्षित भविष्य, सोलरसोबत",
  },
  slogan: {
    en: "Powering Your Future with the Sun",
    mr: "सूर्याची ऊर्जा, समृद्धीची दिशा!",
  },
  values: {
    en: ["Trust", "Quality", "Service", "Satisfaction"],
    mr: ["विश्वास", "गुणवत्ता", "सेवा", "समाधान"],
  },
  subsidyDeadline: "2027-03-31",
  subsidyDeadlineDisplay: {
    en: "31 March 2027",
    mr: "३१ मार्च २०२७",
  },
  subsidyTable: [
    { capacity: "1 kW", amount: 30000 },
    { capacity: "2 kW", amount: 60000 },
    { capacity: "3 kW+", amount: 78000 },
  ],
  sizingTable: [
    { units: "0–150", kw: "1–2 kW" },
    { units: "151–300", kw: "2–3 kW" },
    { units: "301+", kw: "3 kW+" },
  ],
  loanInterestPercent: 6,
  panelWarrantyYears: 25,
  inverterWarrantyYears: 2,
  documents: ["aadhaar", "pan", "electricityBill", "bankDetails"] as const,
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.ammasolar.com",
} as const;

export function whatsappUrl(text?: string): string {
  const base = `https://wa.me/${siteConfig.whatsapp}`;
  if (!text) return base;
  return `${base}?text=${encodeURIComponent(text)}`;
}

export function telHref(): string {
  return `tel:+91${siteConfig.phone}`;
}

export function mapsUrl(query: string): string {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;
}

export function mailto(email: string, subject?: string): string {
  const q = subject ? `?subject=${encodeURIComponent(subject)}` : "";
  return `mailto:${email}${q}`;
}
