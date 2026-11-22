import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Check } from "lucide-react";
import { useReveal } from "@/components/site/Reveal";
import { PageHeader } from "@/components/site/SiteChrome";
import type { ReactNode } from "react";

export const Route = createFileRoute("/habitarte")({
  head: () => ({
    meta: [
      { title: "Conoce Habitarte — Wendy Padilla" },
      {
        name: "description",
        content:
          "HABITARTE es trabajar en ti mientras atraviesas tu propia vida. Talleres grupales y mentorías Kaizen con Wendy Padilla.",
      },
      { property: "og:title", content: "Conoce Habitarte — Wendy Padilla" },
      {
        property: "og:description",
        content:
          "Aprender a permanecer contigo cuando las circunstancias no son como quisieras.",
      },
    ],
  }),
  component: HabitartePage,
});

const pilares = [
  {
    n: "01",
    title: "Aceptar tu realidad",
    text: "Reconocer dónde estás y lo que estás viviendo, sin negarlo ni esperar a que todo cambie para comenzar.",
  },
  {
    n: "02",
    title: "Trabajar en ti",
    text: "Fortalecer tu autoestima, autenticidad, límites, autocuidado y aquello que necesitas sanar o transformar.",
  },
  {
    n: "03",
    title: "Prepararte para tu próxima etapa",
    text: "Seguir construyéndote mientras atraviesas el proceso, para llegar a la siguiente etapa con mayor conciencia, fortaleza y claridad.",
  },
];

const Resaltado = ({ children }: { children: ReactNode }) => (
  <strong className="font-semibold text-foreground">{children}</strong>
);

const caminos: { title: string; extra: { text: string; lang?: string }; text: ReactNode }[] = [
  {
    title: "Habitarte, talleres",
    extra: { text: "❤️" },
    text: "Espacios grupales creados para reconstruir la autoestima, recuperar la autenticidad y aprender a amarse de verdad.",
  },
  {
    title: "Mentorías Kaizen",
    extra: { text: "改善", lang: "ja" },
    text: (
      <>
        Un acompañamiento individual y profundo basado en el proceso de{" "}
        <Resaltado>Conocerte</Resaltado>, <Resaltado>Amarte</Resaltado> y{" "}
        <Resaltado>Mejorarte</Resaltado>, diseñado de forma 100% personalizada a tu ritmo y
        situación actual.
      </>
    ),
  },
];

const paraQuien = [
  "Cambios en sus relaciones.",
  "Divorcios o separaciones.",
  "Etapas de soledad.",
  "Cambios familiares.",
  "Maternidad y transformación de roles.",
  "Nuevas etapas de la vida.",
  "Procesos de cambio personal.",
  "Circunstancias que todavía no pueden o no desean cambiar.",
  "Etapas en las que quieren seguir construyéndose sin perderse a sí mismas.",
];

function HabitartePage() {
  useReveal();

  return (
    <>
      {/* ¿QUÉ SIGNIFICA? */}
      <section className="pb-16 pt-8 md:pb-24 md:pt-12">
        <div className="mx-auto max-w-3xl px-6">
          <PageHeader
            eyebrow="Conoce Habitarte ❤️"
            title={
              <span className="text-foreground/75">
                ¿Qué significa <span className="italic text-primary">Habitarte</span>?
              </span>
            }
          />

          <div className="reveal mx-auto mt-10 max-w-2xl text-center">
            <p className="font-serif text-2xl italic leading-snug text-foreground/85 md:text-3xl">
              Habitarte es trabajar en ti mientras atraviesas tu propia vida.
            </p>
          </div>

          <div className="reveal mx-auto mt-10 max-w-2xl space-y-5 text-base leading-relaxed text-muted-foreground text-justify">
            <p>
              Es aprender a permanecer contigo cuando las circunstancias no son como quisieras.
              No&nbsp;significa negar tu realidad ni esperar a que todo cambie para empezar a cuidarte.
            </p>
            <p>
              Significa aceptar dónde estás, trabajar en ti mientras lo atraviesas y prepararte
              para la&nbsp;próxima etapa.
            </p>
          </div>
        </div>
      </section>

      {/* PILARES */}
      <section className="border-t border-border/60 bg-secondary/40 py-20 md:py-24">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="reveal text-center font-serif text-3xl md:text-4xl">
            Los tres pilares de <span className="italic text-primary">Habitarte</span> ❤️
          </h2>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {pilares.map((p, i) => (
              <article
                key={p.n}
                className="reveal flex flex-col items-center rounded-3xl border border-border bg-card p-8 text-center"
                style={{ transitionDelay: `${i * 120}ms` }}
              >
                <span className="font-serif text-4xl italic text-primary/70">{p.n}</span>
                <h3 className="mt-6 font-serif text-xl">{p.title}</h3>
                <p className="mt-4 max-w-[18rem] text-sm leading-relaxed text-muted-foreground text-justify [text-align-last:center]">
                  {p.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ¿CÓMO TRABAJAMOS? */}
      <section className="py-20 md:py-24">
        <div className="mx-auto max-w-5xl px-6">
          <div className="reveal mx-auto max-w-2xl text-center">
            <h2 className="font-serif text-3xl md:text-4xl">
              ¿Cómo trabajamos <span className="italic text-primary">Habitarte</span> ❤️?
            </h2>
            <p className="mt-5 text-muted-foreground">
              Trabajamos a través de talleres grupales y de mis mentorías con el método Kaizen.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {caminos.map((c, i) => (
              <article
                key={c.title}
                className="reveal flex flex-col rounded-3xl border border-border bg-card p-8 md:p-10"
                style={{ transitionDelay: `${i * 120}ms` }}
              >
                <h3 className="font-serif text-2xl md:text-3xl">
                  {c.title}
                  <span
                    lang={c.extra.lang}
                    className="ml-3 font-sans text-xl text-primary/70 md:text-2xl"
                  >
                    {c.extra.text}
                  </span>
                </h3>
                <p className="mt-4 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {c.text}
                </p>
              </article>
            ))}
          </div>

          <p className="reveal mx-auto mt-14 max-w-2xl text-center font-serif leading-snug">
            <span className="block text-3xl italic text-primary md:text-4xl">
              Habitarte <span className="not-italic text-2xl md:text-3xl">❤️</span>
            </span>
            <span className="mt-2 block text-2xl text-foreground/75 md:text-3xl">
              Un espacio para volver a ti.
            </span>
          </p>

          <div className="reveal mt-10 text-center">
            <Link
              to="/servicios"
              viewTransition
              className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm text-primary-foreground transition-opacity hover:opacity-90"
            >
              Conocer servicios <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* ¿PARA QUIÉN? */}
      <section className="border-t border-border/60 bg-secondary/40 py-20 md:py-24">
        <div className="mx-auto max-w-3xl px-6">
          <div className="reveal text-center">
            <h2 className="font-serif text-3xl md:text-4xl">
              ¿Para quién es <span className="italic text-primary">Habitarte</span> ❤️?
            </h2>
            <p className="mt-5 text-muted-foreground">Para mujeres que están atravesando:</p>
          </div>

          <ul className="reveal mx-auto mt-10 max-w-xl space-y-4">
            {paraQuien.map((item) => (
              <li key={item} className="flex gap-3">
                <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-accent/20 text-accent">
                  <Check size={12} />
                </span>
                <span className="text-foreground/85">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* CIERRE */}
      <section className="py-24 md:py-28">
        <div className="reveal mx-auto max-w-3xl px-6 text-center">
          <h2 className="font-serif text-3xl italic text-primary md:text-4xl">
            Habitarte <span className="not-italic text-2xl md:text-3xl">❤️</span>
          </h2>
          <blockquote className="mt-5 font-serif text-xl italic leading-relaxed text-foreground/80 md:text-2xl">
            No nace de la idea de que las mujeres están rotas y alguien tiene que arreglarlas, sino
            de que pueden aprender a acompañarse mientras reconstruyen las partes de su vida que
            necesitan atención.
          </blockquote>
          <p className="mt-6 text-xs uppercase tracking-[0.25em] text-muted-foreground">
            Wendy Padilla · Kaizen ❤️
          </p>
        </div>
      </section>
    </>
  );
}
