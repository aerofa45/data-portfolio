import { Link, useLocation } from "wouter";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";

export function Navigation() {
  const [location] = useLocation();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500 border-b border-transparent",
        scrolled ? "bg-background/80 backdrop-blur-md border-white/5 py-4" : "bg-transparent py-8"
      )}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <Link href="/">
          <span className="font-display text-2xl tracking-widest cursor-pointer uppercase font-bold text-white hover:text-primary transition-colors">
            Analytica
          </span>
        </Link>

        <nav className="hidden md:flex items-center space-x-12">
          <NavLink href="/" active={location === "/"}>Home</NavLink>
          <NavLink href="/portfolios" active={location.startsWith("/portfolios")}>Portfolios</NavLink>
          <NavLink href="/about" active={location === "/about"}>Expertise</NavLink>
        </nav>

        <div className="md:hidden">
          {/* Mobile menu trigger could go here */}
          <span className="text-primary text-sm tracking-widest">MENU</span>
        </div>
      </div>
    </header>
  );
}

function NavLink({ href, children, active }: { href: string; children: React.ReactNode; active: boolean }) {
  return (
    <Link href={href}>
      <span className={cn(
        "text-xs uppercase tracking-[0.2em] font-medium cursor-pointer transition-colors duration-300 relative group",
        active ? "text-primary" : "text-white/70 hover:text-white"
      )}>
        {children}
        <span className={cn(
          "absolute -bottom-2 left-0 w-full h-[1px] bg-primary scale-x-0 transition-transform duration-300 origin-right group-hover:scale-x-100 group-hover:origin-left",
          active && "scale-x-100 origin-left"
        )} />
      </span>
    </Link>
  );
}
