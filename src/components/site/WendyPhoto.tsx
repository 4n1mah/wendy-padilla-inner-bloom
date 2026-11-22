import heroImg from "@/assets/wendy-hero.jpg";

/**
 * Foto de Wendy en arco, con círculos lila detrás ("luz") y su firma debajo.
 * La foto se recorta siempre a 4:5 (anclada arriba), así el arco usa radios en %
 * y mantiene la forma en cualquier tamaño: radio vertical 40% del alto = mitad del ancho.
 */
export function WendyPhoto({ alt, src = heroImg }: { alt: string; src?: string }) {
  return (
    <figure className="relative mx-auto max-w-md">
      <div className="absolute -right-6 -top-6 h-36 w-36 rounded-full bg-primary/15 md:h-44 md:w-44" />
      <div className="absolute -left-5 bottom-16 h-20 w-20 rounded-full bg-accent/25 md:h-24 md:w-24" />

      <div
        className="relative overflow-hidden"
        style={{ borderRadius: "50% 50% 1.75rem 1.75rem / 40% 40% 1.75rem 1.75rem" }}
      >
        <img
          src={src}
          alt={alt}
          width={1024}
          height={1280}
          className="block aspect-[4/5] h-auto w-full object-cover object-top"
        />
      </div>

      <figcaption className="relative mt-5 text-center font-serif text-2xl italic text-primary">
        Wendy Padilla <span className="not-italic text-lg">❤️</span>
        <span className="mt-1 block font-sans text-[0.65rem] not-italic uppercase tracking-[0.28em] text-muted-foreground">
          Kaizen · <span lang="ja">改善</span>
        </span>
      </figcaption>
    </figure>
  );
}
