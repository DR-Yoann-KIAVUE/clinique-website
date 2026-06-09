"use client";

import { useState, useEffect, useRef } from "react";
import { Logo } from "@/components/ui/Logo";
import { Button } from "@/components/ui/Button";
import { MobileDrawer } from "./MobileDrawer";
import { Container } from "./Container";
import { navigation, siteConfig } from "@/content/site";
import { Menu, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [submenuOpen, setSubmenuOpen] = useState(false);
  const submenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (submenuRef.current && !submenuRef.current.contains(e.target as Node)) {
        setSubmenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <>
      <header
        className={cn(
          "sticky top-0 z-[100] h-14 transition-all duration-200 lg:h-14",
          scrolled
            ? "bg-[rgba(255,255,255,0.92)] shadow-sm backdrop-blur-[8px]"
            : "bg-blanc"
        )}
      >
        <Container className="flex h-full items-center justify-between">
          <a href="/" className="flex items-center gap-3" aria-label="Accueil CCVR">
            <Logo className="h-9 w-9" />
            <span className="hidden font-display text-sm font-bold uppercase tracking-[0.1em] text-anthracite sm:block">
              CCVR
            </span>
          </a>

          <nav className="hidden items-center gap-5 lg:flex" aria-label="Navigation principale">
            {navigation.map((link) =>
              "children" in link && link.children ? (
                <div key={link.href} className="relative" ref={submenuRef}>
                  <button
                    onClick={() => setSubmenuOpen(!submenuOpen)}
                    className="flex items-center gap-1 body-m text-gris-moyen transition-colors hover:text-anthracite"
                  >
                    {link.label}
                    <ChevronDown
                      size={14}
                      strokeWidth={1.2}
                      className={cn(
                        "transition-transform",
                        submenuOpen && "rotate-180"
                      )}
                    />
                  </button>
                  {submenuOpen && (
                    <div className="absolute left-0 top-full mt-2 w-64 rounded-[var(--radius-card)] border border-separateur bg-blanc py-2 shadow-lg">
                      {link.children.map((child) => (
                        <a
                          key={child.href}
                          href={child.href}
                          onClick={() => setSubmenuOpen(false)}
                          className="block px-4 py-2.5 body-m text-gris-moyen transition-colors hover:bg-perle hover:text-anthracite"
                        >
                          {child.label}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <a
                  key={link.href}
                  href={link.href}
                  className="body-m text-gris-moyen transition-colors hover:text-anthracite"
                >
                  {link.label}
                </a>
              )
            )}
          </nav>

          <div className="flex items-center gap-3">
            <Button href={siteConfig.rdvUrl} size="sm" className="hidden sm:inline-flex">
              Prendre RDV
            </Button>
            <button
              onClick={() => setDrawerOpen(true)}
              className="flex h-11 w-11 items-center justify-center lg:hidden"
              aria-label="Ouvrir le menu"
            >
              <Menu size={24} strokeWidth={1.2} />
            </button>
          </div>
        </Container>
      </header>

      <MobileDrawer open={drawerOpen} onClose={() => setDrawerOpen(false)} />
    </>
  );
}
