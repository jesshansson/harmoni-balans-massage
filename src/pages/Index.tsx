import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Treatments from "@/components/Treatments";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import MobileBookingBar from "@/components/MobileBookingBar";
import StructuredData from "@/components/StructuredData";

const Index = () => (
  <div className="min-h-screen">
    <StructuredData />
    <a
      href="#huvudinnehall"
      className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-background focus:px-5 focus:py-3 focus:text-foreground focus:shadow-lg focus:outline-none focus:ring-2 focus:ring-ring"
    >
      Hoppa till innehållet
    </a>
    <Navbar />
    <main id="huvudinnehall">
      <Hero />
      <About />
      <Treatments />
      <Contact />
    </main>
    <Footer />
    <div className="h-20 md:hidden" aria-hidden="true" />
    <MobileBookingBar />
  </div>
);

export default Index;
