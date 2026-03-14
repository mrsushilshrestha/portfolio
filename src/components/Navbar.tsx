import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { navLinks } from "@/data/siteData";

const Navbar = ({ solid = false }: { solid?: boolean }) => {
  const [scrolled, setScrolled] = useState(solid);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const location = useLocation();
  const navigate = useNavigate();
  const isHome = location.pathname === "/";

  useEffect(() => {
    if (solid) { setScrolled(true); return; }
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [solid]);

  useEffect(() => {
    if (!isHome) return;
    const sections = ["hero", "about", "education", "projects", "gallery", "contact"];
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { rootMargin: "-40% 0px -40% 0px" }
    );
    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [isHome]);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    if (href.startsWith("/")) {
      navigate(href);
      return;
    }
    if (!isHome) {
      navigate("/" + href);
      return;
    }
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  const isActive = (href: string) => {
    // Highlight "Research" nav link on all project detail pages
    if (href === "#projects" && location.pathname.startsWith("/project")) return true;
    if (href.startsWith("/")) return location.pathname === href;
    return isHome && activeSection === href.replace("#", "");
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-background/95 backdrop-blur-md shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16">
        <button onClick={() => handleNavClick("#hero")} className="flex items-center gap-2">
          <span className={`font-heading text-lg font-semibold tracking-tight ${scrolled ? "text-foreground" : "text-white"}`}>
            Sushil Shrestha
          </span>
        </button>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <button
              key={link.label}
              onClick={() => handleNavClick(link.href)}
              className={`relative px-3 py-2 text-sm font-body font-medium transition-colors ${
                scrolled
                  ? isActive(link.href) ? "text-primary" : "text-muted-foreground hover:text-foreground"
                  : isActive(link.href) ? "text-white font-semibold" : "text-white/75 hover:text-white drop-shadow-[0_1px_4px_rgba(0,0,0,0.8)]"
              }`}
            >
              {link.label}
              {isActive(link.href) && (
                <motion.div
                  layoutId="nav-underline"
                  className="absolute bottom-0 left-3 right-3 h-0.5 bg-accent rounded-full"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
            </button>
          ))}
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? (
            <X className={scrolled ? "text-foreground" : "text-primary-foreground"} />
          ) : (
            <Menu className={scrolled ? "text-foreground" : "text-primary-foreground"} />
          )}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden absolute top-16 right-6 w-64 bg-card rounded-xl shadow-2xl border border-border"
          >
            {/* The little upwards triangle pointer */}
            <div className="absolute -top-2 right-6 w-4 h-4 bg-card rotate-45 border-t border-l border-border" />
            
            <div className="relative z-10 py-3 flex flex-col">
              <div className="px-6 py-2">
                <span className="text-xs text-muted-foreground uppercase font-body tracking-wider">Navigation</span>
              </div>
              
              {navLinks.map((link) => (
                <button
                  key={link.label}
                  onClick={() => handleNavClick(link.href)}
                  className={`block w-full text-left px-6 py-3 text-sm font-body uppercase transition-colors ${
                    isActive(link.href) ? "text-primary font-bold" : "text-muted-foreground hover:text-foreground hover:bg-muted/30"
                  }`}
                >
                  {link.label}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
