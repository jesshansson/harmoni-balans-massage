import { siteInfo } from "@/data/siteData";
import { ExternalLink } from "lucide-react";

const MobileBookingBar = () => (
  <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 border-t border-border/60 bg-background/90 backdrop-blur-md px-4 py-3 pb-[calc(0.75rem+env(safe-area-inset-bottom))]">
    <a
      href={siteInfo.bookingUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center justify-center gap-2 w-full min-h-11 rounded-full bg-hero-gradient text-primary-foreground font-medium shadow-md"
    >
      <ExternalLink className="h-4 w-4" aria-hidden="true" />
      Boka tid
      <span className="sr-only">(öppnas i ny flik på Bokadirekt)</span>
    </a>
  </div>
);

export default MobileBookingBar;
