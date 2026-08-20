import { contactInfo } from "@/data/siteData";
import { MapPin, BadgeCheck, CalendarCheck } from "lucide-react";

const items = [
  { icon: MapPin, label: contactInfo.address },
  { icon: BadgeCheck, label: "Certifierad massageterapeut" },
  { icon: CalendarCheck, label: "Bokning via Bokadirekt" },
];

const TrustRow = () => (
  <ul className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-sm text-muted-foreground">
    {items.map(({ icon: Icon, label }) => (
      <li key={label} className="flex items-center gap-2">
        <Icon className="h-4 w-4 text-primary shrink-0" aria-hidden="true" />
        <span>{label}</span>
      </li>
    ))}
  </ul>
);

export default TrustRow;
