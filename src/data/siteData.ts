// ============================================
// REDIGERA DENNA FIL FÖR ATT UPPDATERA WEBBSIDAN
// ============================================

export const siteInfo = {
  businessName: "Harmoni och Balans",
  tagline: "Hitta din inre balans genom helande beröring",
  bookingUrl: "https://www.bokadirekt.se", // Uppdatera med din Bokadirekt-länk
};

export const aboutMe = {
  name: "Ditt Namn",
  title: "Diplomerad massageterapeut",
  description: `Välkommen till Harmoni och Balans! Jag heter Annica och är en passionerad massageterapeut med flera års erfarenhet.

Min resa inom massage började med en djup önskan att hjälpa människor att hitta lugn och välmående i sin vardag. Jag har utbildat mig inom flera massagetekniker och skräddarsyr varje behandling efter dina individuella behov.

Mitt mål är att skapa en trygg och avkopplande miljö där du kan släppa vardagens stress och hitta tillbaka till balans.`,
};

export interface Treatment {
  id: string;
  name: string;
  duration: string;
  price: string;
  description: string;
  icon: string; // Lucide icon name
}

export const treatments: Treatment[] = [
  {
    id: "klassisk",
    name: "Klassisk massage",
    duration: "60 min",
    price: "850 kr",
    description:
      "En helkroppsmassage som löser spänningar, förbättrar blodcirkulationen och ger djup avslappning. Perfekt för dig som vill koppla av och ladda om.",
    icon: "Hand",
  },
  {
    id: "djupverkande",
    name: "Djupverkande massage",
    duration: "60 min",
    price: "950 kr",
    description:
      "Fokuserar på djupare muskelskikt för att lösa kroniska spänningar och smärta. Rekommenderas vid besvär i nacke, rygg och axlar.",
    icon: "Zap",
  },
  {
    id: "avslappning",
    name: "Avslappningsmassage",
    duration: "50 min",
    price: "750 kr",
    description:
      "En mjuk och lugn massage med fokus på avslappning och stressreducering. Ger sinnesro och välbefinnande.",
    icon: "Leaf",
  },
  {
    id: "hot-stone",
    name: "Hot Stone-massage",
    duration: "75 min",
    price: "1 100 kr",
    description:
      "Varma basaltstenar placeras på kroppen och används för att massera musklerna. Värmen tränger djupt in och löser spänningar effektivt.",
    icon: "Flame",
  },
  {
    id: "gravidmassage",
    name: "Gravidmassage",
    duration: "50 min",
    price: "800 kr",
    description:
      "Anpassad massage för gravida som lindrar vanliga besvär som ryggont, svullna ben och spänningar. Trygg och skonsam.",
    icon: "Heart",
  },
];

export const contactInfo = {
  phone: "070-XXX XX XX",
  email: "info@harmoniochbalans.se",
  address: "Gatuadress 1, Stad",
  instagram: "", // t.ex. "https://instagram.com/harmoniochbalans"
  facebook: "", // t.ex. "https://facebook.com/harmoniochbalans"
};
