import logo from "@/assets/logo.png";
import { siteInfo } from "@/data/siteData";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-[60vh] flex items-center justify-center bg-section-gradient overflow-hidden">
      {/* Decorative circles */}
      <div className="absolute top-20 right-10 w-72 h-72 rounded-full bg-primary/5 blur-3xl" />
      <div className="absolute bottom-10 left-10 w-96 h-96 rounded-full bg-accent/5 blur-3xl" />

      <div className="container mx-auto px-6 py-12 text-center relative z-10">
        <img
          src={logo}
          alt={`${siteInfo.businessName} logotyp`}
          className="w-36 h-36 md:w-44 md:h-44 mx-auto mb-5 object-contain drop-shadow-lg"
        />
        <h1 className="font-display text-4xl md:text-6xl font-semibold text-gradient mb-3 tracking-tight">
          {siteInfo.businessName}
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-xl mx-auto mb-10 font-light">
          {siteInfo.tagline}
        </p>
        <a href={siteInfo.bookingUrl} target="_blank" rel="noopener noreferrer">
          <Button size="lg" className="bg-hero-gradient text-primary-foreground hover:opacity-90 transition-opacity text-base px-8 py-6 rounded-full shadow-lg">
            Boka behandling
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </a>
      </div>
    </section>
  );
};

export default Hero;
