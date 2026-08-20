import { useEffect } from "react";
import { siteInfo, contactInfo, treatments } from "@/data/siteData";

const SITE_URL = "https://harmoniochbalans.netlify.app/";

/**
 * Injects LocalBusiness (HealthAndBeautyBusiness) structured data based only on
 * verified data from src/data/siteData.ts.
 */
const StructuredData = () => {
  useEffect(() => {
    const data = {
      "@context": "https://schema.org",
      "@type": "HealthAndBeautyBusiness",
      name: siteInfo.businessName,
      description: siteInfo.tagline,
      url: SITE_URL,
      telephone: contactInfo.phone,
      email: contactInfo.email,
      address: {
        "@type": "PostalAddress",
        streetAddress: "Kungstensgatan 59",
        postalCode: "113 29",
        addressLocality: "Stockholm",
        addressCountry: "SE",
      },
      areaServed: "Stockholm",
      currenciesAccepted: "SEK",
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Behandlingar",
        itemListElement: treatments.map((treatment) => ({
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: treatment.name,
          },
          url: siteInfo.bookingUrl,
        })),
      },
      potentialAction: {
        "@type": "ReserveAction",
        target: siteInfo.bookingUrl,
      },
    };

    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.dataset.source = "harmoni-local-business";
    script.textContent = JSON.stringify(data);
    document.head.appendChild(script);

    return () => {
      script.remove();
    };
  }, []);

  return null;
};

export default StructuredData;
