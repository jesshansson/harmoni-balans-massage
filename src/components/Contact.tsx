import { contactInfo, siteInfo } from "@/data/siteData";
import { Phone, Mail, MapPin } from "lucide-react";

const Contact = () => {
  return (
    <section id="kontakt" className="py-24 px-6">
      <div className="container mx-auto max-w-2xl text-center">
        <h2 className="font-display text-4xl md:text-5xl font-semibold text-gradient mb-12">
          Kontakt
        </h2>

        <div className="space-y-6">
          <a
            href={`tel:${contactInfo.phone.replace(/[- ]/g, "")}`}
            className="flex items-center justify-center gap-3 text-foreground/80 hover:text-primary transition-colors text-lg"
          >
            <Phone className="w-5 h-5 text-primary" />
            {contactInfo.phone}
          </a>

          <a
            href={`mailto:${contactInfo.email}`}
            className="flex items-center justify-center gap-3 text-foreground/80 hover:text-primary transition-colors text-lg"
          >
            <Mail className="w-5 h-5 text-primary" />
            {contactInfo.email}
          </a>

          <div className="flex items-center justify-center gap-3 text-foreground/80 text-lg">
            <MapPin className="w-5 h-5 text-primary" />
            {contactInfo.address}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
