import { siteConfig } from "@/lib/site";

export function JsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: siteConfig.name,
    image: `${siteConfig.url}/images/flyer-subsidy.png`,
    telephone: `+91${siteConfig.phone}`,
    email: siteConfig.emails.join(", "),
    address: [
      {
        "@type": "PostalAddress",
        streetAddress: "Flat No 1, Ozon Apartment, Mamta Nagar, Ashoka Marg",
        addressLocality: "Nashik",
        postalCode: "422006",
        addressRegion: "Maharashtra",
        addressCountry: "IN",
      },
      {
        "@type": "PostalAddress",
        streetAddress: "Ali Mention Row House, Khode Nagar",
        addressLocality: "Nashik",
        postalCode: "422006",
        addressRegion: "Maharashtra",
        addressCountry: "IN",
      },
    ],
    url: siteConfig.url,
    areaServed: {
      "@type": "State",
      name: "Maharashtra",
    },
    priceRange: "₹₹",
    description: siteConfig.vendorNote.en,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
