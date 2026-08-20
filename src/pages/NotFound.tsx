import { siteInfo } from "@/data/siteData";

const NotFound = () => (
  <main className="flex min-h-dvh items-center justify-center bg-section-gradient px-6">
    <div className="text-center max-w-md">
      <h1 className="font-display text-4xl md:text-5xl font-semibold text-gradient mb-4">
        Sidan hittades inte
      </h1>
      <p className="mb-8 text-muted-foreground">
        Sidan du letar efter finns inte längre. Gå tillbaka till startsidan eller boka din behandling
        direkt.
      </p>
      <div className="flex flex-col sm:flex-row gap-3 justify-center">
        <a
          href="/"
          className="inline-flex items-center justify-center min-h-11 px-6 rounded-full bg-hero-gradient text-primary-foreground font-medium"
        >
          Till startsidan
        </a>
        <a
          href={siteInfo.bookingUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center min-h-11 px-6 rounded-full border border-border text-foreground/80 hover:text-primary transition-colors"
        >
          Boka tid
          <span className="sr-only">(öppnas i ny flik på Bokadirekt)</span>
        </a>
      </div>
    </div>
  </main>
);

export default NotFound;
