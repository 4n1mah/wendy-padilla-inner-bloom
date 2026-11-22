export const WA_NUMBER = "18094871559";
export const WA_BASE = `https://wa.me/${WA_NUMBER}`;
export const waLink = (msg: string) =>
  `${WA_BASE}?text=${encodeURIComponent(msg)}`;

export const IG_HANDLE = "soywendypadilla";
export const IG_URL = `https://instagram.com/${IG_HANDLE}`;

// Libro "Cuando me amé de verdad" en Amazon
export const LIBRO_URL =
  "https://www.amazon.com/dp/B0H4BVMGQJ?lv=shuf&language=es&channelId=500&plpRedirect=mhFallback&th=1";

export const navLinks = [
  { to: "/", label: "Inicio" },
  { to: "/habitarte", label: "Habitarte" },
  { to: "/sobre-mi", label: "Sobre mí" },
  { to: "/servicios", label: "Servicios" },
  { to: "/libro", label: "Libro" },
  { to: "/agenda", label: "Agenda" },
  { to: "/contacto", label: "Contacto" },
] as const;
