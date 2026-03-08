import { aboutMe } from "@/data/siteData";
import AnimateOnScroll from "@/components/AnimateOnScroll";

const About = () => {
  return (
    <section id="om-mig" className="py-14 px-6 relative">
      {/* Decorative line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-16 bg-gradient-to-b from-transparent via-primary/30 to-transparent" />

      <div className="container mx-auto max-w-3xl text-center">
        <AnimateOnScroll>
          <h2 className="font-display text-4xl md:text-5xl font-semibold text-gradient mb-2">
            Om mig
          </h2>
          <p className="text-sm uppercase tracking-widest text-muted-foreground mb-10">
            {aboutMe.title}
          </p>
        </AnimateOnScroll>

        <div className="space-y-3 text-foreground/80 leading-relaxed text-base md:text-lg">
          {aboutMe.description.split("\n\n").map((paragraph, i) => (
            <AnimateOnScroll key={i} delay={i * 150}>
              <p className="hover:text-foreground transition-colors duration-300">{paragraph}</p>
            </AnimateOnScroll>
          ))}
        </div>

        {/* Decorative botanical divider */}
        <AnimateOnScroll delay={300}>
          <div className="flex items-center justify-center gap-3 mt-12">
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-primary/30" />
            <svg className="w-6 h-6 text-primary/40" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17 8C8 10 5.9 16.17 3.82 21.34l1.89.66L7 18.65C9 14.5 13 10 17 8z" />
            </svg>
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-primary/30" />
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
};

export default About;
