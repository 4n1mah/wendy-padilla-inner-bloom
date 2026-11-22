import { Link, useRouterState } from "@tanstack/react-router";
import { Instagram, MessageCircle, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { navLinks, waLink, WA_BASE, IG_URL, IG_HANDLE } from "@/lib/site";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={[
        "fixed top-0 z-40 w-full border-b backdrop-blur-md transition-all duration-300",
        scrolled || open
          ? "border-border/70 bg-background/95 shadow-[0_6px_24px_-12px_rgba(80,40,110,0.25)]"
          : "border-border/70 bg-background/90",
      ].join(" ")}
    >
      <div className="mx-auto flex h-20 max-w-6xl items-center justify-between px-6">
        {/* Logo */}
        <Link to="/" className="group flex flex-col leading-none" aria-label="Wendy Padilla, inicio">
          <span className="font-serif text-[1.7rem] tracking-tight text-foreground md:text-3xl">
            Wendy{" "}
            <span className="italic text-primary transition-colors group-hover:text-primary/80">
              Padilla
            </span>
          </span>
          <span className="mt-1.5 text-[0.55rem] uppercase tracking-[0.2em] text-muted-foreground sm:text-[0.6rem] sm:tracking-[0.28em]">
            Psicóloga · Autora · Facilitadora
          </span>
        </Link>

        {/* Menú escritorio */}
        <nav className="hidden items-center gap-1 lg:flex" aria-label="Principal">
          {navLinks.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              activeOptions={{ exact: l.to === "/" }}
              className="relative px-3 py-2 text-sm text-muted-foreground transition-colors hover:text-primary data-[status=active]:text-primary after:absolute after:inset-x-3 after:-bottom-0.5 after:h-px after:origin-center after:scale-x-0 after:bg-primary after:transition-transform after:duration-300 hover:after:scale-x-100 data-[status=active]:after:scale-x-100"
            >
              {l.label}
            </Link>
          ))}
          <Link
            to="/agenda"
            className="ml-4 rounded-full bg-primary px-6 py-2.5 text-sm text-primary-foreground shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md"
          >
            Agendar
          </Link>
        </nav>

        {/* Botón menú móvil */}
        <button
          className="flex h-11 w-11 items-center justify-center rounded-full text-foreground transition-colors hover:bg-secondary lg:hidden"
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Menú móvil */}
      <div
        className={[
          "grid transition-[grid-template-rows,opacity] duration-300 ease-out lg:hidden",
          open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0",
        ].join(" ")}
      >
        <div className="overflow-hidden">
          <nav
            className="flex flex-col border-t border-border/50 px-6 pb-6 pt-2"
            aria-label="Principal móvil"
          >
            {navLinks.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                tabIndex={open ? 0 : -1}
                activeOptions={{ exact: l.to === "/" }}
                className="border-b border-border/40 py-3.5 font-serif text-xl text-foreground/80 transition-colors hover:text-primary data-[status=active]:italic data-[status=active]:text-primary"
              >
                {l.label}
              </Link>
            ))}
            <Link
              to="/agenda"
              tabIndex={open ? 0 : -1}
              className="mt-6 rounded-full bg-primary px-6 py-3.5 text-center text-sm text-primary-foreground shadow-sm"
            >
              Agendar sesión
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-secondary/30">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 py-16 md:grid-cols-[1.3fr_1fr_1fr] md:gap-10">
        {/* Marca */}
        <div>
          <Link to="/" className="inline-flex flex-col leading-none">
            <span className="font-serif text-3xl tracking-tight">
              Wendy <span className="italic text-primary">Padilla</span>
            </span>
            <span className="mt-2 text-[0.6rem] uppercase tracking-[0.28em] text-muted-foreground">
              Psicóloga · Autora · Facilitadora
            </span>
          </Link>
          <p className="mt-6 max-w-xs border-l-2 border-accent pl-4 font-serif text-lg italic leading-snug text-foreground/80">
            Siempre se puede ser y estar mejor.
          </p>
        </div>

        {/* Navegación */}
        <div>
          <p className="text-xs uppercase tracking-[0.25em] text-primary">Explora</p>
          <nav className="mt-5 grid grid-cols-2 gap-x-6 gap-y-3 text-sm" aria-label="Pie de página">
            {navLinks.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                activeOptions={{ exact: l.to === "/" }}
                className="w-fit text-muted-foreground transition-colors hover:text-primary data-[status=active]:text-primary"
              >
                {l.label}
              </Link>
            ))}
          </nav>
        </div>

        {/* Contacto */}
        <div>
          <p className="text-xs uppercase tracking-[0.25em] text-primary">Conversemos</p>
          <div className="mt-5 space-y-3 text-sm">
            <a
              href={WA_BASE}
              target="_blank"
              rel="noreferrer"
              className="group flex w-fit items-center gap-3 text-muted-foreground transition-colors hover:text-primary"
            >
              <span className="flex h-9 w-9 items-center justify-center rounded-full border border-border bg-background transition-colors group-hover:border-primary">
                <MessageCircle size={16} />
              </span>
              809-487-1559
            </a>
            <a
              href={IG_URL}
              target="_blank"
              rel="noreferrer"
              className="group flex w-fit items-center gap-3 text-muted-foreground transition-colors hover:text-primary"
            >
              <span className="flex h-9 w-9 items-center justify-center rounded-full border border-border bg-background transition-colors group-hover:border-primary">
                <Instagram size={16} />
              </span>
              @{IG_HANDLE}
            </a>
          </div>
          <Link
            to="/agenda"
            className="mt-6 inline-flex rounded-full bg-primary px-6 py-2.5 text-sm text-primary-foreground shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md"
          >
            Agendar sesión
          </Link>
        </div>
      </div>

      {/* Barra inferior */}
      <div className="border-t border-border/60">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-1 px-6 pb-24 pt-6 text-center text-xs text-muted-foreground sm:pb-6">
          <p>© {new Date().getFullYear()} Wendy Padilla. Todos los derechos reservados.</p>
          <p>
            Kaizen <span lang="ja">改善</span> ❤️
          </p>
        </div>
      </div>
    </footer>
  );
}

export function WhatsAppFloating() {
  return (
    <a
      href={waLink("Hola Wendy, me gustaría más información.")}
      target="_blank"
      rel="noreferrer"
      aria-label="Escribir por WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-accent text-accent-foreground shadow-lg transition-transform hover:scale-110"
    >
      <MessageCircle size={24} />
    </a>
  );
}

export function PageHeader({
  eyebrow,
  title,
  intro,
}: {
  eyebrow?: string;
  title: React.ReactNode;
  intro?: React.ReactNode;
}) {
  return (
    <div className="reveal mx-auto max-w-3xl text-center">
      {eyebrow && (
        <p className="text-xs uppercase tracking-[0.25em] text-primary">
          {eyebrow}
        </p>
      )}
      <h1 className="mt-4 font-serif text-4xl leading-tight md:text-6xl">
        {title}
      </h1>
      {intro && (
        <p className="mt-6 text-base leading-relaxed text-muted-foreground">
          {intro}
        </p>
      )}
    </div>
  );
}
