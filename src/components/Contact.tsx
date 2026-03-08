import { contactInfo, siteInfo } from "@/data/siteData";
import { Phone, Mail, MapPin, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import AnimateOnScroll from "@/components/AnimateOnScroll";

const Contact = () => {
  return (
    <section id="kontakt" className="py-24 px-6 relative">
      {/* Top wave */}
      <div className="absolute top-0 left-0 right-0 -translate-y-[99%]">
        <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path d="M0 60H1440V30C1200 60 960 0 720 30C480 60 240 0 0 30V60Z" fill="hsl(80 25% 97%)" />
        </svg>
      </div>

      <div className="container mx-auto max-w-2xl text-center">
        <AnimateOnScroll>
          <h2 className="font-display text-4xl md:text-5xl font-semibold text-gradient mb-4">
            Kontakt
          </h2>
          <p className="text-muted-foreground mb-10">Tveka inte att höra av dig — jag hjälper gärna!</p>
        </AnimateOnScroll>

        <div className="space-y-4">
          <AnimateOnScroll delay={100}>
            <a
              href={`tel:${contactInfo.phone.replace(/[- ]/g, "")}`}
              className="flex items-center justify-center gap-3 text-foreground/80 hover:text-primary transition-all duration-300 text-lg group py-3 px-6 rounded-xl hover:bg-primary/5"
            >
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-hero-gradient group-hover:shadow-md transition-all duration-300">
                <Phone className="w-4 h-4 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
              </div>
              {contactInfo.phone}
            </a>
          </AnimateOnScroll>

          <AnimateOnScroll delay={200}>
            <a
              href={`mailto:${contactInfo.email}`}
              className="flex items-center justify-center gap-3 text-foreground/80 hover:text-primary transition-all duration-300 text-lg group py-3 px-6 rounded-xl hover:bg-primary/5"
            >
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-hero-gradient group-hover:shadow-md transition-all duration-300">
                <Mail className="w-4 h-4 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
              </div>
              {contactInfo.email}
            </a>
          </AnimateOnScroll>

          <AnimateOnScroll delay={300}>
            <div className="flex items-center justify-center gap-3 text-foreground/80 text-lg py-3 px-6">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                <MapPin className="w-4 h-4 text-primary" />
              </div>
              {contactInfo.address}
            </div>
          </AnimateOnScroll>
        </div>

        <AnimateOnScroll delay={400}>
          <div className="mt-12">
            <a href={siteInfo.bookingUrl} target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="group bg-hero-gradient text-primary-foreground hover:opacity-90 hover:scale-105 active:scale-95 transition-all duration-300 rounded-full px-8 py-6 shadow-lg hover:shadow-xl">
                <ExternalLink className="mr-2 h-4 w-4" />
                Boka tid på Bokadirekt
              </Button>
            </a>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
};

export default Contact;
