
export const siteInfo = {
  businessName: "Harmoni och Balans",
  tagline: "Hitta din inre balans genom helande beröring",
  bookingUrl: "https://www.bokadirekt.se/places/harmoni-och-balans-134675",
};

export const aboutMe = {
  name: "Annica Hansson",
  title: "ANNICA HANSSON - CERTIFIERAD MASSAGETERAPEUT",
  description: `Välkommen till Harmoni och Balans! Jag heter Annica och är en passionerad massageterapeut med flera års erfarenhet.

Min resa inom massage började med en djup önskan att hjälpa människor att hitta lugn och välmående i sin vardag. Jag ser alltid till helheten men skräddarsyr varje behandling efter dina individuella behov.

Mitt mål är att skapa en trygg och avkopplande miljö där du kan släppa vardagens stress och hitta tillbaka till balans.`,
};

/** Grupp som behandlingen visas under på sidan. */
export type TreatmentGroup = "standard" | "fotmassage";

export interface Treatment {
  id: string;
  name: string;
  duration: string;
  price: string;
  description: string;
  icon: string; // Lucide icon name - Zap, Hand, Leaf, Heart.
  group: TreatmentGroup; // "standard" eller "fotmassage"
}

export const treatments: Treatment[] = [
  {
    id: "relax-ansikte-kropp-fot",
    name: "Relax - Ansikte, kropp och fot",
    duration: "80 min",
    price: "1100 kr",
    description:
      "Unna dig en av centrets mest uppskattade behandlingar. Behandlingen börjar med en stund på vår vibrerande madrass med skön nack- och underbensmassage samt värmande infrarött ljus. \nDärefter ges en rogivande ansiktsmassage som hjälper dig att släppa spänningar och landa i lugnet. Vi avrundar med en mjuk och avslappnande massage för dina fötter. \nEn perfekt stund för total återhämtning",
    group: "standard",
    icon: "Hand",
  },
  {
    id: "relax-kropp-fot",
    name: "Relax - kropp och fot",
    duration: "45 min",
    price: "700 kr",
    description:
      "Ta en paus från vardagen och låt kroppen få vila. Du ligger bekvämt på en madrass med lugnande vibrationer som masserar nacke och ben, medan värmande infrarött ljus hjälper dig att slappna av ännu mer. \nSom avslutning får du en mjuk fotmassage i 25 minuter - en stund bara för dig..",
    group: "standard",
    icon: "Hand",
  },
  {
    id: "ansiktsmassage",
    name: "Ansiktsmassage/Naturlig Facelift",
    duration: "45 min",
    price: "750 kr",
    description: `En varsam och behaglig ansiktsmassage som löser upp spänningar och ger ansiktet ett riktigt lyft.

Genom varsamma och medvetna grepp löser vi upp spänningar i ansikte och käkar, vilket hjälper hela din kropp att komma ner i varv.

Positiva effekter av behandlingen:
- Blodcirkulationen och syresättningen ökar.
- Det lymfatiska flödet förbättras - gifter transporteras bort från huden.
- Muskelspänningar löses upp.
- Ger huden finare färg & lyster.
- Ansiktsmusklerna stärks.
- Nervsystemet stimuleras och balanseras.

Vi använder en mild ekologisk olja med näring samt återuppbyggande effekt på huden. Kom gärna utan smink om möjligt, annars ingår lätt rengöring. Ögon makeup är ok.`,
    group: "standard",
    icon: "Leaf",
  },
   {
    id: "harmonistunden",
    name: "Harmonistunden",
    duration: "45 min",
    price: "750 kr",
    description:
      "70 minuter av värme, beröring och djup återhämtning. \nHarmonistunden är vår signaturbehandling för dig som längtar efter att få stänga ute vardagen och bli omhändertagen från topp till tå.\nBehandlingen inleds med en varsam och behaglig ansiktsmassage som löser upp spänningar och ger ansiktet ett riktigt lyft samt hjälper dig att landa i lugn och ro. Genom mjuka, medvetna grepp frigörs spänningar i ansikte och käkar, vilket bidrar till att hela kroppen sjunker djupare in i avslappning, avslutas med rogivande skalpmassage. Därefter massage för armar och händer, sänker stresshormonerna i kroppen. Avslutar med fotmassage som tar dig ännu en nivå djupare i avslappning och återhämtning. Varma handdukar, och mjuka rörelser förstärker känslan av vila och hjälper kroppen att växla ner. \nI Harmonistunden ingår \n• Ansiktsmassage  \n• Skalpmassage \n• Massage av armar och händer \n• Fotmassage \n• Varma handdukar \n• En lugn avslutning med vatten eller en kopp te. \nDu lämnar behandlingen med mjukare muskler, lättare fötter och en behaglig känsla av lugn i hela kroppen.",
    group: "standard",
    icon: "Heart",
  },
  {
    id: "fotmassage",
    name: "Fotmassage",
    duration: "30 min",
    price: "400 kr",
    description:
      "Ge dig själv en stunds lugn i vardagen. Jag tar hand om dina fötter med en mjuk och avslappnande massage som hjälper dig att släppa stressen och bara vara en stund.",
    group: "fotmassage",
    icon: "Heart",
  },
  {
    id: "fotmassage-fotbad",
    name: "Fotmassage inkl. fotbad i balja",
    duration: "45 min",
    price: "500 kr",
    description:
      "Avkopplande fotmassage som mjukar upp trötta fötter, ökar cirkulationen och ger dig en stund av total lugn och återhämtning. \nVi startar med ett fotbad i balja inkl vibrerande massage och infraljus.",
    group: "fotmassage",
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
