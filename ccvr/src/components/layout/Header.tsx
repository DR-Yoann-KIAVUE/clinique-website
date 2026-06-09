"use client";

import { useState, useEffect, useRef } from "react";
import { Logo } from "@/components/ui/Logo";
import { Button } from "@/components/ui/Button";
import { MobileDrawer } from "./MobileDrawer";
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
      <header className="sticky top-0 z-[100] px-4 pt-3 sm:px-6 lg:px-8">
        <div
          className={cn(
            "mx-auto flex h-14 max-w-[1280px] items-center justify-between rounded-full px-5 transition-all duration-300",
            scrolled
              ? "bg-blanc/90 shadow-lg shadow-anthracite/5 backdrop-blur-[12px] ring-1 ring-separateur/50"
              : "bg-blanc/60 backdrop-blur-[6px]"
          )}
        >
          {/* Logo */}
          <a href="/" className="flex items-center gap-2.5" aria-label="Accueil CCVR">
            <Logo className="h-8 w-8" />
            <span className="hidden font-display text-xs font-bold uppercase tracking-[0.12em] text-anthracite sm:block">
              CCVR
            </span>
          </a>

          {/* Desktop nav */}
          <nav className="hidden items-center gap-1 lg:flex" aria-label="Navigation principale">
            {navigation.map((link) =>
              "children" in link && link.children ? (
                <div key={link.href} className="relative" ref={submenuRef}>
                  <button
                    onClick={() => setSubmenuOpen(!submenuOpen)}
                    className={cn(
                      "flex items-center gap-1 rounded-full px-3.5 py-2 text-[13px] font-medium transition-colors",
                      submenuOpen
                        ? "bg-perle text-anthracite"
                        : "text-gris-moyen hover:bg-perle hover:text-anthracite"
                    )}
                  >
                    {link.label}
                    <ChevronDown
                      size={13}
                      strokeWidth={1.5}
                      className={cn(
                        "transition-transform",
                        submenuOpen && "rotate-180"
                      )}
                    />
                  </button>
                  {submenuOpen && (
                    <div className="absolute left-0 top-full mt-2 w-60 rounded-2xl border border-separateur/50 bg-blanc p-2 shadow-xl shadow-anthracite/5">
                      {link.children.map((child) => (
                        <a
                          key={child.href}
                          href={child.href}
                          onClick={() => setSubmenuOpen(false)}
                          className="block rounded-xl px-3.5 py-2.5 text-[13px] font-medium text-gris-moyen transition-colors hover:bg-perle hover:text-anthracite"
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
                  className="rounded-full px-3.5 py-2 text-[13px] font-medium text-gris-moyen transition-colors hover:bg-perle hover:text-anthracite"
                >
                  {link.label}
                </a>
              )
            )}
          </nav>

          {/* Right */}
          <div className="flex items-center gap-2">
            <Button href={siteConfig.rdvUrl} size="sm" className="hidden rounded-full sm:inline-flex">
              Prendre RDV
            </Button>
            <button
              onClick={() => setDrawerOpen(true)}
              className="flex h-10 w-10 items-center justify-center rounded-full transition-colors hover:bg-perle lg:hidden"
              aria-label="Ouvrir le menu"
            >
              <Menu size={20} strokeWidth={1.5} />
            </button>
          </div>
        </div>
      </header>

      <MobileDrawer open={drawerOpen} onClose={() => setDrawerOpen(false)} />
    </>
  );
}
