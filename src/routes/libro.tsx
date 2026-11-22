import { createFileRoute } from "@tanstack/react-router";
import { Instagram, ShoppingCart } from "lucide-react";
import bookImg from "@/assets/wendy-book.jpg";
import { useReveal } from "@/components/site/Reveal";
import { IG_HANDLE, IG_URL, LIBRO_URL } from "@/lib/site";

export const Route = createFileRoute("/libro")({
  head: () => ({
    meta: [
      { title: "Cuando me amé de verdad | Libro de Wendy Padilla" },
      {
        name: "description",
        content:
          "Una guía práctica y profunda para comenzar el camino del amor propio auténtico. Un libro de Wendy Padilla, disponible en Amazon.",
      },
      { property: "og:title", content: "Cuando me amé de verdad | Wendy Padilla" },
      {
        property: "og:description",
        content: "Cómo dejar de abandonarte y empezar a habitarte.",
      },
    ],
  }),
  component: LibroPage,
});

/* La misma foto del libro, muy difuminada, hace de fondo; encima un velo lila del sitio.
   El título usa el marrón de la portada (token book en styles.css). */
function LibroPage() {
  useReveal();
  return (
    <section className="relative isolate overflow-hidden">
      {/* Fondo difuminado */}
      <div aria-hidden="true" className="absolute inset-0 -z-10">
        <img
          src={bookImg}
          alt=""
          className="h-full w-full scale-110 object-cover opacity-60 blur-3xl saturate-150"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/85 to-background/30" />
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-b from-transparent to-background" />
      </div>

      <div className="mx-auto grid max-w-6xl gap-14 px-6 py-16 md:grid-cols-[1.05fr_0.95fr] md:items-center md:py-24">
        {/* Texto */}
        <div className="reveal order-2 md:order-1">
          <p className="flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-primary">
            <span className="h-px w-8 bg-primary/60" />
            Libro
          </p>

          <h1 className="mt-5 font-serif text-5xl italic leading-[1.05] text-book md:text-7xl">
            Cuando me amé
            <br />
            de verdad
          </h1>

          <p className="mt-5 font-serif text-2xl leading-snug text-foreground/85 md:text-3xl">
            Cómo dejar de abandonarte y empezar a habitarte.
          </p>

          <p className="mt-8 max-w-md text-base leading-relaxed text-foreground/80">
            Una guía práctica y profunda para comenzar el camino del amor propio auténtico. Una obra
            nacida desde la experiencia personal y profesional, que invita a pausar, a mirar hacia
            adentro y a empezar a habitarte.
          </p>

          <blockquote className="mt-8 max-w-md border-l-2 border-accent pl-5 font-serif text-xl italic text-foreground/80">
            «Es tiempo de parar, de dejar de abandonarte y empezar a habitarte».
          </blockquote>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            {/* Colores de Amazon */}
            <a
              href={LIBRO_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 rounded-full border border-[#FCD200] bg-[#FFD814] px-7 py-3.5 text-sm font-medium text-[#0F1111] shadow-sm transition-all hover:-translate-y-0.5 hover:bg-[#F7CA00] hover:shadow-md"
            >
              <ShoppingCart size={16} /> Comprar en Amazon
            </a>
            {/* Colores de Instagram */}
            <a
              href={IG_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-[#F58529] via-[#DD2A7B] to-[#8134AF] px-7 py-3.5 text-sm font-medium text-white shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md hover:brightness-110"
            >
              <Instagram size={16} /> @{IG_HANDLE}
            </a>
          </div>
        </div>

        {/* Portada */}
        <div className="reveal order-1 md:order-2">
          <a
            href={LIBRO_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Ver el libro en Amazon"
            className="group mx-auto block max-w-md"
          >
            <img
              src={bookImg}
              alt="Portada del libro Cuando me amé de verdad, de Wendy Padilla"
              className="w-full rounded-3xl object-cover shadow-2xl shadow-primary/25 ring-1 ring-white/60 transition-transform duration-500 group-hover:-translate-y-1"
            />
          </a>
        </div>
      </div>
    </section>
  );
}
