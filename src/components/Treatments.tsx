import type { ReactNode } from "react";
import { treatments, siteInfo } from "@/data/siteData";
import { Hand, Zap, Leaf, Flame, Heart, LucideIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import AnimateOnScroll from "@/components/AnimateOnScroll";

const iconMap: Record<string, LucideIcon> = {
  Hand, Zap, Leaf, Flame, Heart,
};

const renderDescription = (description: string) => {
  const blocks: ReactNode[] = [];
  let bulletItems: string[] = [];

  const flushBulletList = () => {
    if (bulletItems.length === 0) return;

    const items = bulletItems;
    bulletItems = [];

    blocks.push(
      <ul key={`list-${blocks.length}`} className="my-3 list-disc space-y-1 pl-5">
        {items.map((item, index) => (
          <li key={`${index}-${item}`}>{item}</li>
        ))}
      </ul>
    );
  };

  description
    .split("\n")
    .map((line) => line.trim())
    .filter(Boolean)
    .forEach((line) => {
      if (line.startsWith("- ")) {
        bulletItems.push(line.slice(2));
        return;
      }

      flushBulletList();

      blocks.push(
        <p key={`paragraph-${blocks.length}`} className="mb-3 last:mb-0">
          {line}
        </p>
      );
    });

  flushBulletList();

  return blocks;
};

const Treatments = () => {
  return (
    <section id="behandlingar" className="pt-12 pb-24 px-6 bg-section-gradient relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-20 right-0 w-64 h-64 rounded-full bg-primary/5 blur-3xl" />
      <div className="absolute bottom-20 left-0 w-48 h-48 rounded-full bg-accent/5 blur-3xl" />

      <div className="container mx-auto max-w-7xl relative z-10">
        <AnimateOnScroll>
          <h2 className="font-display text-4xl md:text-5xl font-semibold text-gradient text-center mb-16">
            Behandlingar
          </h2>
        </AnimateOnScroll>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {treatments.map((t, index) => {
            const Icon = iconMap[t.icon] || Leaf;
            return (
              <AnimateOnScroll key={t.id} delay={index * 100}>
                <div className="bg-card rounded-2xl p-7 shadow-sm border border-border group cursor-default
                  hover:shadow-lg hover:-translate-y-2 hover:border-primary/20
                  transition-all duration-500 ease-out relative overflow-hidden">
                  {/* Hover glow */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/0 to-accent/0 group-hover:from-primary/5 group-hover:to-accent/5 transition-all duration-500 rounded-2xl" />

                  <div className="relative z-10">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-5
                      group-hover:bg-hero-gradient group-hover:shadow-md
                      transition-all duration-500">
                      <Icon className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors duration-500" />
                    </div>
                    <h3 className="font-display text-xl font-semibold text-foreground mb-1">
                      {t.name}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-4 font-medium">
                      {t.duration} · <span className="text-primary">{t.price}</span>
                    </p>
                    <div className="text-foreground/70 text-sm leading-relaxed">
                      {renderDescription(t.description)}
                    </div>
                  </div>
                </div>
              </AnimateOnScroll>
            );
          })}
        </div>

        <AnimateOnScroll delay={200}>
          <div className="text-center mt-14">
            <a href={siteInfo.bookingUrl} target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="group bg-hero-gradient text-primary-foreground hover:opacity-90 hover:scale-105 active:scale-95 transition-all duration-300 rounded-full px-8 py-6 shadow-lg hover:shadow-xl">
                Boka på Bokadirekt
              </Button>
            </a>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
};

export default Treatments;
