import { aboutMe } from "@/data/siteData";

const About = () => {
  return (
    <section id="om-mig" className="py-24 px-6">
      <div className="container mx-auto max-w-3xl text-center">
        <h2 className="font-display text-4xl md:text-5xl font-semibold text-gradient mb-3">
          Om mig
        </h2>
        <p className="text-sm uppercase tracking-widest text-muted-foreground mb-10">
          {aboutMe.title}
        </p>
        <div className="space-y-4 text-foreground/80 leading-relaxed text-base md:text-lg">
          {aboutMe.description.split("\n\n").map((paragraph, i) => (
            <p key={i}>{paragraph}</p>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
