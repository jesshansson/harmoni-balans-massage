// ============================================
// REDIGERA DENNA FIL FÖR ATT UPPDATERA WEBBSIDAN
// ============================================

export const siteInfo = {
  businessName: "Harmoni och Balans",
  tagline: "Hitta din inre balans genom helande beröring",
  bookingUrl: "https://www.bokadirekt.se/places/harmoni-och-balans-134675",
};

export const aboutMe = {
  name: "Ditt Namn",
  title: "CERTIFIERAD MASSAGETERAPEUTTT",
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
    id: "relax-ansikte-kropp-fot",
    name: "Relax - Ansikte, kropp och fot",
    duration: "80 min",
    price: "850 kr",
    description:
      "Unna d centrets skönaste behandling. Du ligger på en madrass med vibrerande massage för hela kroppen. Nacke, och ben knådas samt även infraljus finns att tillgå. Samtidigt får du först ansiktsmassage, därefter fotmassage.",
    icon: "Hand",
  },
  {
    id: "relax-kropp-fot",
    name: "Relax - kropp och fot",
    duration: "45 min",
    price: "950 kr",
    description:
      "En skön avkopplande och avstressande behandling.\ Du ligger på en madrass med massage vibrationer för kroppen. Nacke och ben knådas och infraljus finns att tillgå. Samtidigt får du en mjuk fotmassage",
    icon: "Zap",
  },
  {
    id: "ansiktsmassage",
    name: "Ansiktsmassage/Naturlig Facelift",
    duration: "45 min",
    price: "750 kr",
    description:
      "En varsam och behaglig ansiktsmassage som löser upp spänningar och ger ansiktet ett riktigt lyft.\nDu blir avslappnad och avstressad.\nBlodcirkulationen och den cellulära syresättningen ökar.\nVi använder en mild ekologisk olja med näring samt återuppbyggande effekt på huden.\n\n\nKom gärna utan smink om möjligt, annars ingår lätt rengöring. Ögon makeup är ok.",
    icon: "Leaf",
  },
  {
    id: "fotmassage",
    name: "Fotmassage",
    duration: "30 min · 400 45 min",
    price: "550 kr",
    description:
      "Unna dig en skön och avkopplande fotmassage,\nsom lindrar trötta och stela fötter samt får igång blodcirkulationen. Mycket avslappnade.",
    icon: "Flame",
  },
  {
    id: "fotmassage-fotbad",
    name: "Fotmassage inkl. fotbad i balja",
    duration: "45 min",
    price: "800 kr",
    description:
      "En skön och avslappnande fotmassage som startar med ett fotbad i balja inkl vibrerande massage och infraljus.",
    icon: "Heart",
  },
];

export const contactInfo = {
  phone: "073-958 75 25",
  email: "annica-hansson@hotmail.com",
  address: "Kungstensgatan 59, 113 29, Stockholm",
  instagram: "", // t.ex. "https://instagram.com/harmoniochbalans"
  facebook: "", // t.ex. "https://facebook.com/harmoniochbalans"
};
