import { createFileRoute, Link } from "@tanstack/react-router";
import heroImg from "@/assets/wendy-hero.jpg";
import { useReveal } from "@/components/site/Reveal";
import { PageHeader } from "@/components/site/SiteChrome";

export const Route = createFileRoute("/sobre-mi")({
  head: () => ({
    meta: [
      { title: "Sobre mí — Wendy Padilla" },
      {
        name: "description",
        content:
          "Wendy Padilla, psicóloga, autora y facilitadora. Un enfoque que integra desarrollo personal y filosofía Kaizen.",
      },
      {
        property: "og:title",
        content: "Sobre mí — Wendy Padilla",
      },
      {
        property: "og:description",
        content:
          "Un enfoque que integra desarrollo personal y filosofía Kaizen.",
      },
    ],
  }),
  component: SobreMi,
});

function SobreMi() {
  useReveal();

  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto max-w-5xl px-6">

        {/* Encabezado */}
        <PageHeader
          eyebrow="Sobre mí"
          title={
            <>
              Habitarse es el{" "}
              <span className="italic">camino más real</span>
            </>
          }
        />

        {/* Contenido principal */}
        <div className="mt-16 grid gap-12 md:grid-cols-[0.9fr_1.1fr] md:items-start">

          {/* Imagen */}
          <div className="reveal">
            <div className="relative mx-auto max-w-md">
              
              {/* Fondo decorativo */}
              <div className="absolute -inset-4 -z-10 rounded-[2rem] bg-secondary/60" />

              {/* Imagen */}
              <div className="overflow-hidden rounded-[1.75rem] bg-secondary/20 shadow-sm">
                <img
                  src={heroImg}
                  alt="Wendy Padilla, psicóloga y facilitadora"
                  className="block h-auto w-full object-contain"
                />
              </div>

            </div>
          </div>

          {/* Texto */}
          <div className="reveal space-y-6 text-base leading-relaxed text-foreground/85">

            <p>
              Soy{" "}
              <strong className="font-medium text-foreground">
                Wendy Padilla
              </strong>
              , psicóloga, autora y facilitadora de desarrollo personal.
            </p>

            <p>
              Mi trabajo nace de una convicción: para aprender a amarte,
              primero necesitas conocerte; para conocerte, necesitas
              reconocerte; y para mejorar aquello de ti que no te gusta,
              necesitas hacerlo desde el amor y no desde el rechazo.
            </p>

            <p>
              De esa convicción nació{" "}
              <span className="italic text-primary">Habitarte</span>: un
              concepto que invita a dejar de abandonarte en medio de los
              roles, las exigencias y las circunstancias de la vida, para
              comenzar a hacer de ti tu propio lugar.
            </p>

            <p>
              Habitarte es también el propósito que atraviesa mi libro{" "}
              <span className="italic">Cuando me amé de verdad</span>, una
              obra creada para mujeres que, aun amándose, se han ido dejando
              de lado mientras intentaban cumplir con todo y con todos.
            </p>

            <p>
              Hoy, mi propósito es acompañar a más mujeres a conocerse,
              amarse y mejorarse para aprender, finalmente, a habitarse.
            </p>

            <p>
              Si sientes que es momento de conocerte, de amarte de verdad y
              de mejorar sin perder tu esencia en el intento, este es tu
              lugar.
            </p>

            {/* Frase */}
            <blockquote className="border-l-2 border-accent pl-5 font-serif text-lg italic text-foreground/80">
              <p>Siempre se puede ser y estar mejor.</p>

              <footer className="mt-2 text-sm not-italic text-muted-foreground">
                — Wendy Padilla · Kaizen ❤️
              </footer>
            </blockquote>

            {/* Botón */}
            <div className="pt-4">
              <Link
                to="/servicios"
                className="inline-flex items-center rounded-full bg-primary px-7 py-3.5 text-sm text-primary-foreground transition-opacity hover:opacity-90"
              >
                Conoce mis servicios
              </Link>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}