import { Link, useLocation } from "wouter";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";

const links = [
  { href: "/", label: "ホーム" },
  { href: "/services", label: "サービス" },
  { href: "/message", label: "想い" },
  { href: "/profile", label: "プロフィール" },
  { href: "/contact", label: "お問い合わせ" },
];

export function Navigation() {
  const [location] = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled || isOpen ? "bg-background/90 backdrop-blur-md shadow-sm border-b border-border/40" : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link href="/">
          <a className="font-serif text-2xl font-medium tracking-wider text-foreground hover:opacity-80 transition-opacity">
            Career Dialogue
          </a>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <Link key={link.href} href={link.href}>
              <a 
                className={`text-sm tracking-wide transition-colors relative py-1
                  ${location === link.href ? "text-primary font-medium" : "text-muted-foreground hover:text-foreground"}
                `}
              >
                {link.label}
                {location === link.href && (
                  <motion.div 
                    layoutId="underline"
                    className="absolute bottom-0 left-0 w-full h-[1px] bg-primary"
                  />
                )}
              </a>
            </Link>
          ))}
          <Link href="/contact">
            <Button variant="outline" className="ml-4 border-primary text-primary hover:bg-primary hover:text-white transition-colors duration-300 font-serif rounded-full px-6">
              相談する
            </Button>
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden p-2 text-foreground"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-background border-b border-border"
          >
            <nav className="flex flex-col p-6 space-y-6">
              {links.map((link) => (
                <Link key={link.href} href={link.href}>
                  <a className={`text-lg font-serif ${location === link.href ? "text-primary" : "text-foreground"}`}>
                    {link.label}
                  </a>
                </Link>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
