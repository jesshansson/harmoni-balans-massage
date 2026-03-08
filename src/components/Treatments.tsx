import { treatments, siteInfo } from "@/data/siteData";
import { Hand, Zap, Leaf, Flame, Heart, LucideIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

const iconMap: Record<string, LucideIcon> = {
  Hand,
  Zap,
  Leaf,
  Flame,
  Heart,
};

const Treatments = () => {
  return (
    <section id="behandlingar" className="py-24 px-6 bg-section-gradient">
      <div className="container mx-auto max-w-5xl">
        <h2 className="font-display text-4xl md:text-5xl font-semibold text-gradient text-center mb-16">
          Behandlingar
        </h2>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {treatments.map((t) => {
            const Icon = iconMap[t.icon] || Leaf;
            return (
              <div
                key={t.id}
                className="bg-card rounded-2xl p-7 shadow-sm border border-border hover:shadow-md transition-shadow group"
              >
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/15 transition-colors">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-display text-xl font-semibold text-foreground mb-1">
                  {t.name}
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  {t.duration} · {t.price}
                </p>
                <p className="text-foreground/70 text-sm leading-relaxed">
                  {t.description}
                </p>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-14">
          <a href={siteInfo.bookingUrl} target="_blank" rel="noopener noreferrer">
            <Button size="lg" className="bg-hero-gradient text-primary-foreground hover:opacity-90 rounded-full px-8 py-6 shadow-lg">
              Boka på Bokadirekt
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Treatments;
