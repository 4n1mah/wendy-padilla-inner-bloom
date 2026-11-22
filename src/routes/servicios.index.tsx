import { createFileRoute } from "@tanstack/react-router";
import { useRef, useState, type KeyboardEvent } from "react";
import { z } from "zod";
import { ArrowRight, Check, ChevronDown } from "lucide-react";
import { useReveal } from "@/components/site/Reveal";
import { PageHeader } from "@/components/site/SiteChrome";
import { waLink } from "@/lib/site";

const searchSchema = z.object({
  // Permite enlazar directo a una opción: /servicios?servicio=mentorias
  servicio: z.enum(["talleres", "mentorias"]).optional().catch(undefined),
});

export const Route = createFileRoute("/servicios/")({
  validateSearch: (s) => searchSchema.parse(s),
  head: () => ({
    meta: [
      { title: "Servicios — Wendy Padilla" },
      {
        name: "description",
        content:
          "Talleres Habitarte y Mentorías Kaizen con Wendy Padilla. Espacios de autoconocimiento, amor propio y crecimiento personal.",
      },
      { property: "og:title", content: "Servicios — Wendy Padilla" },
      {
        property: "og:description",
        content: "Talleres grupales Habitarte y Mentorías Kaizen individuales.",
      },
    ],
  }),
  component: ServiciosIndex,
});

type ServicioId = "talleres" | "mentorias";

const opciones: {
  id: ServicioId;
  title: string;
  extra: { text: string; lang?: string };
  tipo: string;
  text: string;
}[] = [
  {
    id: "talleres",
    title: "Habitarte, talleres",
    extra: { text: "❤️" },
    tipo: "Grupal",
    text: "Espacios grupales para reconstruir la autoestima, recuperar la autenticidad y aprender a amarte de verdad.",
  },
  {
    id: "mentorias",
    title: "Mentorías Kaizen",
    extra: { text: "改善", lang: "ja" },
    tipo: "Individual · 1:1",
    text: "Acompañamiento personalizado para conocerte, amarte y mejorarte a tu ritmo.",
  },
];

const habitarteModules = [
  "Reconocer la voz crítica y comprender de dónde viene.",
  "Sanar la relación con tu historia y tu imagen personal.",
  "Cultivar autocompasión y una mirada más amable hacia ti.",
  "Construir un valor propio real para habitarte con confianza.",
];

const mentoriaEtapas = [
  { title: "Conocerte", text: "Identificar tus patrones, creencias, valores y lo que de verdad quieres." },
  { title: "Amarte", text: "Sanar la relación contigo, poner límites sanos y cuidarte desde el amor." },
  { title: "Mejorarte", text: "Diseñar un plan real, con pequeños pasos sostenidos y seguimiento." },
];

function ServiciosIndex() {
  useReveal();
  const { servicio } = Route.useSearch();
  const navigate = Route.useNavigate();
  const activo: ServicioId = servicio ?? "talleres";
  const tabsRef = useRef<(HTMLButtonElement | null)[]>([]);

  const elegir = (id: ServicioId) =>
    navigate({ search: { servicio: id }, replace: true, resetScroll: false });

  // Flechas izquierda/derecha para moverse entre opciones con el teclado.
  const onKeyDown = (e: KeyboardEvent<HTMLButtonElement>, i: number) => {
    if (e.key !== "ArrowRight" && e.key !== "ArrowLeft") return;
    e.preventDefault();
    const next = (i + (e.key === "ArrowRight" ? 1 : -1) + opciones.length) % opciones.length;
    elegir(opciones[next].id);
    tabsRef.current[next]?.focus();
  };

  return (
    <section className="pb-16 pt-8 md:pb-24 md:pt-12">
      <div className="mx-auto max-w-5xl px-6">
        <PageHeader
          title={<span className="text-foreground/75">Servicios</span>}
          intro="Dos caminos para acompañarte. Elige uno para ver los detalles."
        />

        {/* Selector: las 2 opciones (el wrapper anima la entrada; los botones no) */}
        <div className="reveal mt-12">
          <div role="tablist" aria-label="Servicios" className="grid gap-4 sm:grid-cols-2">
            {opciones.map((o, i) => {
              const sel = activo === o.id;
              return (
                <button
                  key={o.id}
                  ref={(el) => {
                    tabsRef.current[i] = el;
                  }}
                  id={`tab-${o.id}`}
                  type="button"
                  role="tab"
                  aria-selected={sel}
                  aria-controls={`panel-${o.id}`}
                  tabIndex={sel ? 0 : -1}
                  onClick={() => elegir(o.id)}
                  onKeyDown={(e) => onKeyDown(e, i)}
                  className={`relative flex flex-col rounded-3xl border p-6 text-left transition-[border-color,background-color,box-shadow] duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 md:p-8 ${
                    sel
                      ? "border-primary bg-card shadow-lg shadow-primary/10"
                      : "border-border bg-card/60 hover:border-primary/40 hover:bg-card"
                  }`}
                >
                  <span className="flex items-center justify-between gap-3">
                    <span className="text-xs uppercase tracking-[0.25em] text-muted-foreground">
                      {o.tipo}
                    </span>
                    <span
                      aria-hidden="true"
                      className={`flex h-6 w-6 items-center justify-center rounded-full border transition-colors ${
                        sel ? "border-primary bg-primary text-primary-foreground" : "border-border"
                      }`}
                    >
                      {sel && <Check size={13} />}
                    </span>
                  </span>
                  <span className="mt-4 font-serif text-2xl leading-tight md:text-3xl">
                    {o.title}{" "}
                    <span lang={o.extra.lang} className="text-xl text-primary">
                      {o.extra.text}
                    </span>
                  </span>
                  <span className="mt-3 text-sm leading-relaxed text-muted-foreground">{o.text}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Detalle de la opción elegida (se reemplaza con un fundido suave) */}
        <div
          key={activo}
          id={`panel-${activo}`}
          role="tabpanel"
          aria-labelledby={`tab-${activo}`}
          className="panel-in mt-8 rounded-3xl border border-border bg-secondary/40 p-6 md:p-10"
        >
          {activo === "talleres" ? <PanelTalleres /> : <PanelMentorias />}
        </div>
      </div>
    </section>
  );
}

function PanelTalleres() {
  const [showModules, setShowModules] = useState(false);

  return (
    <>
      <p className="text-center text-xs uppercase tracking-[0.25em] text-primary">Talleres Habitarte ❤️</p>
      <h3 className="mx-auto mt-3 max-w-2xl text-center font-serif text-3xl leading-tight">
        Espacios grupales de transformación.
      </h3>

      <div className="mt-10 grid gap-6 md:grid-cols-2">
        <article className="flex flex-col rounded-3xl border border-border bg-card p-8">
          <p className="text-xs uppercase tracking-[0.25em] text-primary">Disponible</p>
          <h4 className="mt-4 font-serif text-2xl leading-tight">Taller de Autoestima</h4>
          <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
            Un proceso grupal de 4 semanas para sanar la relación contigo misma, desmontar tu voz crítica y
            construir un valor propio real.
          </p>

          <div
            className={`grid transition-all duration-300 ${
              showModules ? "mt-6 grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
            }`}
          >
            <div className="overflow-hidden">
              <div className="border-t border-border pt-5">
                <p className="font-serif text-lg">Los 4 módulos</p>
                <ol className="mt-3 space-y-2.5 text-sm leading-relaxed text-muted-foreground">
                  {habitarteModules.map((m, i) => (
                    <li key={m} className="flex gap-3">
                      <span className="font-serif text-primary">0{i + 1}</span>
                      <span>{m}</span>
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          </div>

          <div className="mt-6 flex flex-wrap gap-3">
            <button
              type="button"
              onClick={() => setShowModules((v) => !v)}
              aria-expanded={showModules}
              className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-2.5 text-sm transition-colors hover:border-primary hover:text-primary"
            >
              {showModules ? "Ocultar módulos" : "Ver módulos"}
              <ChevronDown size={15} className={`transition-transform ${showModules ? "rotate-180" : ""}`} />
            </button>
            <a
              href={waLink("Hola Wendy, quiero inscribirme en HABITARTE — Taller de Autoestima.")}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm text-primary-foreground transition-opacity hover:opacity-90"
            >
              Inscribirme <ArrowRight size={14} />
            </a>
          </div>
        </article>

        <article className="flex flex-col rounded-3xl border border-border bg-card p-8">
          <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground">Próximamente</p>
          <h4 className="mt-4 font-serif text-2xl leading-tight">Taller de Autenticidad</h4>
          <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
            Un espacio para aprender a vivir sin máscaras, soltar la necesidad de complacer y expresarte con
            libertad.
          </p>
          <a
            href={waLink("Hola Wendy, quiero conocer más sobre HABITARTE — Taller de Autenticidad.")}
            target="_blank"
            rel="noreferrer"
            className="mt-6 inline-flex w-fit items-center gap-2 rounded-full border border-border px-5 py-2.5 text-sm transition-colors hover:border-primary hover:text-primary"
          >
            Quiero saber más <ArrowRight size={14} />
          </a>
        </article>
      </div>
    </>
  );
}

function PanelMentorias() {
  return (
    <>
      <p className="text-center text-xs uppercase tracking-[0.25em] text-primary">
        Mentorías Kaizen <span lang="ja">改善</span>
      </p>
      <h3 className="mx-auto mt-3 max-w-2xl text-center font-serif text-3xl leading-tight">
        Un acompañamiento <span className="italic text-primary">solo para ti</span>.
      </h3>
      <p className="mx-auto mt-4 max-w-2xl text-center text-muted-foreground">
        Sesiones individuales 1:1, online, donde trabajamos la metodología a tu ritmo y según tu situación
        actual.
      </p>

      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {mentoriaEtapas.map((e, i) => (
          <div key={e.title} className="flex flex-col items-center rounded-3xl border border-border bg-card p-7 text-center">
            <span className="font-serif text-3xl italic text-primary/70">0{i + 1}</span>
            <h4 className="mt-3 font-serif text-xl">{e.title}</h4>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{e.text}</p>
          </div>
        ))}
      </div>

      <ul className="mx-auto mt-8 max-w-xl space-y-3">
        {["Plan de vida personalizado con metas claras.", "Seguimiento y acompañamiento constante.", "Hábitos desde la autocompasión, no desde la exigencia."].map(
          (t) => (
            <li key={t} className="flex gap-3">
              <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-accent/20 text-accent">
                <Check size={12} />
              </span>
              <span className="text-foreground/85">{t}</span>
            </li>
          ),
        )}
      </ul>

      <div className="mt-10 text-center">
        <a
          href={waLink("Hola Wendy, quiero agendar una cita o solicitar información sobre la Mentoría Kaizen.")}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 rounded-full bg-primary px-8 py-3.5 text-sm text-primary-foreground transition-opacity hover:opacity-90"
        >
          Agendar cita / Solicitar información <ArrowRight size={14} />
        </a>
      </div>
    </>
  );
}
