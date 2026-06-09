"use client";

import { useEffect, useRef } from "react";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";
import { navigation, siteConfig } from "@/content/site";
import { Button } from "@/components/ui/Button";

interface MobileDrawerProps {
  open: boolean;
  onClose: () => void;
}

export function MobileDrawer({ open, onClose }: MobileDrawerProps) {
  const drawerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (open) {
      document.addEventListener("keydown", handleKeyDown);
      return () => document.removeEventListener("keydown", handleKeyDown);
    }
  }, [open, onClose]);

  return (
    <>
      {/* Overlay */}
      <div
        className={cn(
          "fixed inset-0 z-[200] transition-opacity duration-280",
          open
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        )}
        style={{ background: "var(--gradient-nuit-cardinale)", opacity: open ? 0.85 : 0 }}
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Drawer panel */}
      <div
        ref={drawerRef}
        role="dialog"
        aria-modal="true"
        aria-label="Menu de navigation"
        className={cn(
          "fixed right-0 top-0 z-[201] flex h-full w-[min(320px,85vw)] flex-col bg-blanc transition-transform duration-[280ms] ease-in-out",
          open ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="flex h-14 items-center justify-end px-4">
          <button
            onClick={onClose}
            className="flex h-11 w-11 items-center justify-center"
            aria-label="Fermer le menu"
          >
            <X size={24} strokeWidth={1.2} />
          </button>
        </div>

        <nav className="flex flex-1 flex-col gap-1 overflow-y-auto px-4" aria-label="Navigation mobile">
          {navigation.map((link) => (
            <div key={link.href}>
              <a
                href={link.href}
                onClick={onClose}
                className="flex h-12 items-center border-l-2 border-transparent px-4 text-base font-medium text-anthracite transition-colors hover:border-cardinal hover:text-cardinal"
              >
                {link.label}
              </a>
              {"children" in link && link.children && (
                <div className="ml-4 flex flex-col gap-1">
                  {link.children.map((child) => (
                    <a
                      key={child.href}
                      href={child.href}
                      onClick={onClose}
                      className="flex h-10 items-center border-l-2 border-transparent px-4 text-sm text-gris-moyen transition-colors hover:border-cardinal hover:text-cardinal"
                    >
                      {child.label}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>

        <div className="border-t border-separateur p-4">
          <Button href={siteConfig.rdvUrl} className="w-full">
            Prendre RDV
          </Button>
        </div>
      </div>
    </>
  );
}
