import { createFileRoute, Link } from "@tanstack/react-router";
import { WendyPhoto } from "@/components/site/WendyPhoto";
import sobreMiImg from "@/assets/wendy-sobre-mi.jpg";
import { LIBRO_URL } from "@/lib/site";
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
              <span className="italic text-primary">Habitarme</span> es mi esencia
            </>
          }
        />

        {/* Contenido principal */}
        <div className="mt-16 grid gap-12 md:grid-cols-[0.9fr_1.1fr] md:items-start">

          {/* Imagen */}
          <div className="reveal">
            <WendyPhoto src={sobreMiImg} alt="Wendy Padilla, psicóloga y facilitadora" />

            {/* Frase bajo la foto (la firma ya está en el pie de la foto) */}
            <blockquote className="mx-auto mt-8 max-w-md text-center">
              <span className="mx-auto block h-px w-12 bg-accent" />
              <p className="mt-6 font-serif text-2xl italic leading-snug text-foreground/80">
                «Siempre se puede ser y estar mejor».
              </p>
            </blockquote>
          </div>

          {/* Texto */}
          <div className="reveal space-y-6 text-base leading-relaxed text-foreground/85">

            <p>
              Soy <strong className="font-medium text-foreground">Wendy Padilla</strong>,
              psicóloga, autora, facilitadora y fundadora de{" "}
              <span className="text-primary">HABITARTE ❤️</span>.
            </p>

            <p>
              Desde niña me apasionan el amor propio, el desarrollo personal y la comprensión
              profunda del ser.
            </p>

            <p>
              Mi trabajo nace de una convicción: para amarte, primero necesitas conocerte; para
              conocerte, necesitas reconocerte; y para mejorar aquello que no te gusta de ti,
              necesitas hacerlo desde el amor y no desde el rechazo.
            </p>

            <p>
              Porque no puedes amar lo que
              no conoces y no puedes mejorar lo que no entiendes.
            </p>

            <p>
              De esa convicción nació <span className="text-primary">HABITARTE ❤️</span>: una
              invitación a no abandonarte en medio de los roles, las exigencias y las
              circunstancias, y a hacer de ti tu propio refugio.
            </p>

            <p>
              Ese es también el propósito de mi libro{" "}
              <a
                href={LIBRO_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="italic text-primary underline decoration-primary/40 underline-offset-4 transition-colors hover:decoration-primary"
              >
                Cuando me amé de verdad
              </a>
              : una guía para amarte desde el ser, pensada para mujeres que, aun amándose, se han
              ido dejando de lado por cumplir con todo y con todos. Porque, incluso en medio de
              cualquier proceso, tú eres el lugar correcto.
            </p>

            <p>
              Hoy acompaño a mujeres a conocerse, amarse y mejorarse para, finalmente, habitarse.
            </p>

            <p>
              Si sientes que es momento de mejorar sin perder tu esencia en el intento, este es tu
              lugar. Deja de abandonarte y empieza a habitarte.
            </p>

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