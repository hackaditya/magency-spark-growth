import { Link } from "@tanstack/react-router";
import { Instagram, MessageCircle, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border bg-background py-12">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <Link to="/" className="text-xl font-extrabold tracking-tight font-display text-brand">
            Magency<span className="text-accent">.in</span>
          </Link>

          <nav className="flex flex-wrap justify-center gap-8 text-sm font-medium text-muted-foreground">
            <Link to="/" className="transition-colors hover:text-foreground">
              Home
            </Link>
            <Link to="/services" className="transition-colors hover:text-foreground">
              Services
            </Link>
            <Link to="/portfolio" className="transition-colors hover:text-foreground">
              Work
            </Link>
            <Link to="/about" className="transition-colors hover:text-foreground">
              About
            </Link>
            <Link to="/whatsapp" className="transition-colors hover:text-foreground">
              WhatsApp
            </Link>
            <Link to="/contact" className="transition-colors hover:text-foreground">
              Contact
            </Link>
          </nav>

          <div className="flex items-center gap-5">
            <a
              href="https://instagram.com/magency.in"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Magency.in on Instagram"
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              <Instagram className="h-5 w-5" />
            </a>
            <a
              href="https://wa.me/919199990766"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Message Magency.in on WhatsApp"
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              <MessageCircle className="h-5 w-5" />
            </a>
            <a
              href="mailto:teammagency19@gmail.com"
              aria-label="Email Magency.in"
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              <Mail className="h-5 w-5" />
            </a>
          </div>
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Magency.in — Patna, Bihar
          </p>
        </div>
      </div>
    </footer>
  );
}
