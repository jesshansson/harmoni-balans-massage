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
  title: "ANNICA HANSSON - CERTIFIERAD MASSAGETERAPEUT",
  description: `Välkommen till Harmoni och Balans! Jag heter Annica och är en passionerad massageterapeut med flera års erfarenhet.

Min resa inom massage började med en djup önskan att hjälpa människor att hitta lugn och välmående i sin vardag. Jag ser alltid till helheten men skräddarsyr varje behandling efter dina individuella behov.

Mitt mål är att skapa en trygg och avkopplande miljö där du kan släppa vardagens stress och hitta tillbaka till balans.`,
};

export interface Treatment {
  id: string;
  name: string;
  duration: string;
  price: string;
  description: string;
  icon: string; // Lucide icon name - Zap, Hand, Leaf, Heart.
}

export const treatments: Treatment[] = [
  {
    id: "relax-ansikte-kropp-fot",
    name: "Relax - Ansikte, kropp och fot",
    duration: "80 min",
    price: "1100 kr",
    description:
      "Vi börjar med en avslappnande ansiktsmassage, därefter en skön fotmassage.Som avslutning ligger du på vår vibrerande madrass som har nackmassage och underbensmassage inkl infrarött ljus.",
    icon: "Hand",
  },
  {
    id: "relax-kropp-fot",
    name: "Relax - kropp och fot",
    duration: "45 min",
    price: "700 kr",
    description:
      "En skön avkopplande och avstressande behandling. Du ligger på en madrass med massagevibrationer för kroppen. Nacke och ben knådas och infraljus finns att tillgå. Samtidigt får du en mjuk fotmassage.",
    icon: "Hand",
  },
  {
    id: "ansiktsmassage",
    name: "Ansiktsmassage/Naturlig Facelift",
    duration: "45 min",
    price: "750 kr",
    description:
      "En varsam och behaglig ansiktsmassage som löser upp spänningar och ger ansiktet ett riktigt lyft. Du blir avslappnad och avstressad. Blodcirkulationen och den cellulära syresättningen ökar. Vi använder en mild ekologisk olja med näring samt återuppbyggande effekt på huden.",
    icon: "Leaf",
  },
  {
    id: "fotmassage",
    name: "Fotmassage",
    duration: "30 min",
    price: "400 kr",
    description:
      "Unna dig en skön och avkopplande fotmassage,\nsom lindrar trötta och stela fötter samt får igång blodcirkulationen. Mycket avslappnade.",
    icon: "Heart",
  },
  {
    id: "fotmassage-fotbad",
    name: "Fotmassage inkl. fotbad i balja",
    duration: "45 min",
    price: "550 kr",
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
