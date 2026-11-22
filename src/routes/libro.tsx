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

/* Usa los colores de la portada (marrón, dorado) sobre el fondo lila del sitio.
   El título lleva la letra script de la portada (Great Vibes). */
function LibroPage() {
  useReveal();
  return (
    <section
      className="relative isolate overflow-hidden bg-background"
      style={{
        backgroundImage:
          "radial-gradient(50% 65% at 78% 45%, oklch(0.92 0.05 305), transparent 70%)",
      }}
    >
      <div className="mx-auto grid max-w-6xl gap-14 px-6 py-16 md:grid-cols-[1.05fr_0.95fr] md:items-center md:py-24">
        {/* Texto */}
        <div className="reveal order-2 md:order-1">
          <p className="flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-primary">
            <span className="h-px w-8 bg-primary/60" />
            Libro
          </p>

          <h1 className="mt-5 font-script text-gold-gradient text-[64px] leading-[0.98] md:text-[86px]">
            Cuando me
            <br />
            amé de verdad
          </h1>

          {/* Separador dorado con ramita */}
          <div aria-hidden="true" className="mt-5 flex items-center gap-2.5 text-book-gold-ink">
            <span className="h-px w-[46px] bg-current opacity-70" />
            <svg viewBox="0 0 24 24" className="h-[18px] w-[18px]">
              <g
                fill="currentColor"
                fillOpacity="0.25"
                stroke="currentColor"
                strokeWidth="1.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path fill="none" d="M4 20 C10 14 14 10 20 4" />
                <path d="M11 13 C9 9 10 6 13 4 C14 8 13 11 11 13Z" />
                <path d="M11 13 C15 15 18 14 20 11 C16 10 13 11 11 13Z" />
              </g>
            </svg>
            <span className="h-px w-[46px] bg-current opacity-70" />
          </div>

          <p className="mt-4 font-serif text-2xl leading-tight text-book/90 md:text-[29px]">
            Cómo dejar de abandonarte y empezar a habitarte.
          </p>

          <p className="mt-6 max-w-md text-base leading-relaxed text-book/85">
            Una guía práctica y profunda para comenzar el camino del amor propio auténtico. Una obra
            nacida desde la experiencia personal y profesional, que invita a pausar, a mirar hacia
            adentro y a empezar a habitarte.
          </p>

          <blockquote className="mt-8 max-w-md border-l-2 border-book-gold-ink pl-5 font-serif text-xl italic text-book">
            «Es tiempo de parar, de dejar de abandonarte y empezar a habitarte».
          </blockquote>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            {/* Marrón y dorado de la portada */}
            <a
              href={LIBRO_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 rounded-full bg-book px-7 py-3.5 text-sm font-medium text-book-cream shadow-[0_14px_26px_-14px] shadow-book/70 transition-all hover:-translate-y-0.5 hover:bg-book-deep"
            >
              <ShoppingCart size={16} className="text-book-gold" /> Comprar en Amazon
            </a>
            {/* Instagram, en versión suave */}
            <a
              href={IG_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 rounded-full bg-instagram-soft px-7 py-3.5 text-sm font-medium text-white shadow-[0_14px_26px_-16px] shadow-[oklch(0.55_0.11_350/0.6)] transition-all hover:-translate-y-0.5 hover:brightness-110"
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
              className="w-full rounded-[28px] object-cover shadow-[0_34px_60px_-28px] shadow-primary/45 ring-1 ring-white/70 transition-transform duration-500 group-hover:-translate-y-1"
            />
          </a>
        </div>
      </div>
    </section>
  );
}
