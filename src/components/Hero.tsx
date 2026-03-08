import logo from "@/assets/logo.png";
import { siteInfo } from "@/data/siteData";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-[65vh] flex items-center justify-center bg-section-gradient overflow-hidden">
      {/* Animated decorative blobs */}
      <div className="absolute top-10 right-0 w-80 h-80 rounded-full bg-primary/8 blur-3xl animate-pulse-soft" />
      <div className="absolute bottom-0 left-0 w-[30rem] h-[30rem] rounded-full bg-accent/6 blur-3xl animate-pulse-soft" style={{ animationDelay: "2s" }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40rem] h-[40rem] rounded-full bg-primary/3 blur-3xl" />

      {/* Floating leaf decorations */}
      <svg className="absolute top-16 left-[15%] w-8 h-8 text-primary/20 animate-leaf-drift" viewBox="0 0 24 24" fill="currentColor" style={{ animationDelay: "0s" }}>
        <path d="M17 8C8 10 5.9 16.17 3.82 21.34l1.89.66L7 18.65C9 14.5 13 10 17 8z" />
      </svg>
      <svg className="absolute top-32 right-[20%] w-6 h-6 text-accent/25 animate-leaf-drift" viewBox="0 0 24 24" fill="currentColor" style={{ animationDelay: "1.5s" }}>
        <path d="M17 8C8 10 5.9 16.17 3.82 21.34l1.89.66L7 18.65C9 14.5 13 10 17 8z" />
      </svg>
      <svg className="absolute bottom-24 left-[25%] w-5 h-5 text-primary/15 animate-leaf-drift" viewBox="0 0 24 24" fill="currentColor" style={{ animationDelay: "3s" }}>
        <path d="M17 8C8 10 5.9 16.17 3.82 21.34l1.89.66L7 18.65C9 14.5 13 10 17 8z" />
      </svg>

      <div className="container mx-auto px-6 py-12 text-center relative z-10">
        <div className="animate-float">
          <img
            src={logo}
            alt={`${siteInfo.businessName} logotyp`}
            className="w-36 h-36 md:w-44 md:h-44 mx-auto mb-5 object-contain drop-shadow-xl"
          />
        </div>
        <h1 className="font-display text-4xl md:text-6xl font-semibold text-gradient mb-3 tracking-tight animate-fade-up">
          {siteInfo.businessName}
        </h1>
        <p className="text-base md:text-lg text-muted-foreground max-w-xl mx-auto mb-8 font-light animate-fade-up" style={{ animationDelay: "200ms" }}>
          {siteInfo.tagline}
        </p>
        <div className="animate-fade-up" style={{ animationDelay: "400ms" }}>
          <a href={siteInfo.bookingUrl} target="_blank" rel="noopener noreferrer">
            <Button size="lg" className="group bg-hero-gradient text-primary-foreground hover:opacity-90 hover:scale-105 active:scale-95 transition-all duration-300 text-base px-8 py-6 rounded-full shadow-lg hover:shadow-xl">
              <Sparkles className="mr-2 h-4 w-4 group-hover:animate-spin" />
              Boka behandling
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </a>
        </div>
      </div>

      {/* Bottom wave divider */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path d="M0 40C240 80 480 0 720 40C960 80 1200 0 1440 40V80H0V40Z" fill="hsl(0 0% 100% / 0.5)" />
          <path d="M0 50C240 80 480 20 720 50C960 80 1200 20 1440 50V80H0V50Z" fill="hsl(80 25% 97%)" />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
