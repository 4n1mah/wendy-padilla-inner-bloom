import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowRight, ChevronDown } from "lucide-react";
import { useReveal } from "@/components/site/Reveal";
import { PageHeader } from "@/components/site/SiteChrome";
import { waLink } from "@/lib/site";

export const Route = createFileRoute("/servicios/")({
  head: () => ({
    meta: [
      { title: "Servicios — Wendy Padilla" },
      {
        name: "description",
        content:
          "Talleres Kaizen y consultorías personalizadas con Wendy Padilla. Espacios de autoconocimiento, amor propio y crecimiento personal.",
      },
      { property: "og:title", content: "Servicios — Wendy Padilla" },
      {
        property: "og:description",
        content:
          "Talleres grupales y consultorías individuales para conocerte, amarte y mejorar.",
      },
    ],
  }),
  component: ServiciosIndex,
});

const habitarteModules = [
  "Reconocer la voz crítica y comprender de dónde viene.",
  "Sanar la relación con tu historia y tu imagen personal.",
  "Cultivar autocompasión y una mirada más amable hacia ti.",
  "Construir un valor propio real para habitarte con confianza.",
];

function ServiciosIndex() {
  useReveal();
  const [showModules, setShowModules] = useState(false);

  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <PageHeader
          eyebrow="Servicios"
          title={
            <>
              Conócete, <span className="italic">ámate</span>, mejórate
            </>
          }
          intro="Espacios de transformación diseñados para acompañarte en tu proceso de desarrollo personal."
        />

        {/* Talleres Habitarte */}
        <div className="mt-20">
          <div className="reveal text-center">
            <p className="text-xs uppercase tracking-[0.25em] text-primary">
              Talleres Habitarte
            </p>
            <h2 className="mx-auto mt-4 max-w-2xl font-serif text-3xl leading-tight md:text-4xl">
              Espacios grupales de transformación
            </h2>
          </div>

          <div className="mt-12 grid gap-6">
            <article className="reveal mt-2 flex flex-col rounded-3xl border border-border bg-card p-8 transition-all hover:border-primary/40 hover:shadow-lg md:p-10">
              <p className="text-xs uppercase tracking-[0.25em] text-primary">Disponible</p>
              <h3 className="mt-5 font-serif text-2xl leading-tight md:text-3xl">
                HABITARTE — Taller de Autoestima
              </h3>
              <p className="mt-4 flex-1 text-sm leading-relaxed text-muted-foreground">
                Un proceso grupal de 4 semanas para sanar la relación contigo misma, desmontar tu voz crítica y construir un valor propio real.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <button
                  type="button"
                  onClick={() => setShowModules((visible) => !visible)}
                  aria-expanded={showModules}
                  className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm transition-colors hover:border-primary hover:text-primary"
                >
                  Conocer más
                  <ChevronDown size={15} className={showModules ? "rotate-180 transition-transform" : "transition-transform"} />
                </button>
                <a
                  href={waLink("Hola Wendy, quiero inscribirme en HABITARTE — Taller de Autoestima.")}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm text-primary-foreground transition-opacity hover:opacity-90"
                >
                  Inscribirme <ArrowRight size={14} />
                </a>
              </div>
              {showModules && (
                <div className="mt-8 border-t border-border pt-6">
                  <h4 className="font-serif text-xl">Los 4 módulos</h4>
                  <ol className="mt-4 space-y-3 text-sm leading-relaxed text-muted-foreground">
                    {habitarteModules.map((module, index) => (
                      <li key={module} className="flex gap-3">
                        <span className="font-serif text-primary">0{index + 1}</span>
                        <span>{module}</span>
                      </li>
                    ))}
                  </ol>
                </div>
              )}
            </article>

            <article className="reveal flex flex-col rounded-3xl border border-border bg-card p-8 transition-all hover:border-primary/40 hover:shadow-lg md:p-10">
              <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground">Próximamente</p>
              <h3 className="mt-5 font-serif text-2xl leading-tight md:text-3xl">
                HABITARTE — Taller de Autenticidad
              </h3>
              <p className="mt-4 flex-1 text-sm leading-relaxed text-muted-foreground">
                Un espacio para aprender a vivir sin máscaras, soltar la necesidad de complacer y expresarte con libertad.
              </p>
              <button
                type="button"
                className="mt-8 inline-flex w-fit items-center gap-2 rounded-full border border-border px-6 py-3 text-sm transition-colors hover:border-primary hover:text-primary"
                onClick={() => window.open(waLink("Hola Wendy, quiero conocer más sobre HABITARTE — Taller de Autenticidad."), "_blank", "noreferrer")}
              >
                Conocer más <ArrowRight size={14} />
              </button>
            </article>
          </div>
        </div>

        {/* Mentoría */}
        <div className="mt-24">
          <div className="reveal text-center">
            <p className="text-xs uppercase tracking-[0.25em] text-primary">
              Mentorías
            </p>
            <h2 className="mx-auto mt-4 max-w-2xl font-serif text-3xl leading-tight md:text-4xl">
              Mentoría Kaizen
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
              Un acompañamiento individual y 1:1 para aplicar la metodología (Conocerte, Amarte y Mejorarte) de forma 100% personalizada a tu ritmo y situación actual.
            </p>
          </div>

          <div className="reveal mt-10 text-center">
            <a
              href={waLink(
                "Hola Wendy, quiero agendar una cita o solicitar información sobre la Mentoría Kaizen."
              )}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-8 py-3.5 text-sm text-primary-foreground transition-opacity hover:opacity-90"
            >
              Agendar cita / Solicitar información <ArrowRight size={14} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
