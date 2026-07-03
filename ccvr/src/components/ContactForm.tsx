"use client";

import { useState, type FormEvent } from "react";
import { Button } from "@/components/ui/Button";
import { ArrowRight } from "lucide-react";

const inputClass =
  "w-full rounded-[var(--radius-btn)] border-[1.5px] border-separateur bg-blanc px-4 py-3 text-sm text-anthracite transition-all focus:border-anthracite focus:shadow-[0_0_0_3px_rgba(177,18,27,0.1)] focus:outline-none";

const labelClass =
  "mb-1 block text-[9.5px] font-semibold uppercase tracking-[0.08em] text-anthracite";

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle"
  );

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");

    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form));

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) throw new Error();

      setStatus("sent");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <div className="rounded-[var(--radius-card)] border border-separateur bg-blanc p-8 text-center">
        <p className="h3 text-anthracite">Merci pour votre message !</p>
        <p className="body-m mt-2 text-gris-moyen">
          Nous vous repondrons dans les meilleurs delais.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="nom" className={labelClass}>
            Nom <span className="text-cardinal">*</span>
          </label>
          <input
            type="text"
            id="nom"
            name="nom"
            required
            className={inputClass}
          />
        </div>
        <div>
          <label htmlFor="prenom" className={labelClass}>
            Prenom <span className="text-cardinal">*</span>
          </label>
          <input
            type="text"
            id="prenom"
            name="prenom"
            required
            className={inputClass}
          />
        </div>
      </div>

      <div>
        <label htmlFor="email" className={labelClass}>
          Email <span className="text-cardinal">*</span>
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          className={inputClass}
        />
      </div>

      <div>
        <label htmlFor="telephone" className={labelClass}>
          Telephone
        </label>
        <input
          type="tel"
          id="telephone"
          name="telephone"
          className={inputClass}
        />
      </div>

      <div>
        <label htmlFor="message" className={labelClass}>
          Message <span className="text-cardinal">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          className={inputClass}
        />
      </div>

      <p className="text-[11px] text-gris-moyen">
        En soumettant ce formulaire, vous acceptez que vos donnees soient
        traitees conformement a notre politique de confidentialite (RGPD).
      </p>

      {status === "error" && (
        <p className="text-sm text-cardinal">
          Une erreur est survenue. Veuillez reessayer.
        </p>
      )}

      <div>
        <Button type="submit" disabled={status === "sending"}>
          {status === "sending" ? "Envoi en cours..." : "Envoyer"}
          <ArrowRight size={14} strokeWidth={1.2} className="ml-2" />
        </Button>
      </div>
    </form>
  );
}
