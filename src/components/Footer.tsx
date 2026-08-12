import { Link } from "@tanstack/react-router";

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
            <Link to="/contact" className="transition-colors hover:text-foreground">
              Contact
            </Link>
          </nav>

          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Magency.in. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
