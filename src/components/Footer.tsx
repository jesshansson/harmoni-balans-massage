import { siteInfo } from "@/data/siteData";

const Footer = () => (
  <footer className="py-8 px-6 border-t border-border text-center">
    <p className="text-sm text-muted-foreground">
      © {new Date().getFullYear()} {siteInfo.businessName}
    </p>
  </footer>
);

export default Footer;
