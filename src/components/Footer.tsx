import { Heart } from "lucide-react";

const Footer = () => (
  <footer className="py-8 text-center bg-background border-t border-border">
    <p className="font-body text-sm text-muted-foreground flex items-center justify-center gap-1">
      Feito com <Heart size={14} className="text-accent" fill="currentColor" />
    </p>
    <p className="font-body text-sm text-muted-foreground flex items-center justify-center gap-1">
      Isabela & Vinicius
    </p>
    <p className="font-body text-xs text-muted-foreground/60 mt-1">05/09/2026</p>
  </footer>
);

export default Footer;
