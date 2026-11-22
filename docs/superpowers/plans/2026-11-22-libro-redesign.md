# Rediseño de /libro — Plan de implementación

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Aplicar a `/libro` el diseño aprobado "Opción B, ajustada": título caligráfico en dorado de la portada, texto café, botón Amazon café y botón Instagram con degradado suave, sin ramitas lilas.

**Architecture:** Los colores y la fuente nuevos se definen una vez en `src/styles.css` (tokens + utilidades de Tailwind v4) y la fuente se carga en el enlace de Google Fonts de `__root.tsx`. `src/routes/libro.tsx` solo usa esas clases.

**Tech Stack:** TanStack Start + React, Tailwind CSS v4 (`@theme inline`, `@utility`), Google Fonts.

**Spec:** `docs/superpowers/specs/2026-11-22-libro-redesign-design.md`

## Global Constraints
- Fuente del título: Great Vibes (Google Fonts), solo para el título.
- Degradado del título: `oklch(0.74 0.11 80)` 0% → `oklch(0.64 0.11 70)` 55% → `oklch(0.55 0.10 60)` 100%, vertical.
- Degradado Instagram suave: `oklch(0.66 0.10 50)` 0% → `oklch(0.58 0.11 0)` 50% → `oklch(0.50 0.11 305)` 100%, horizontal; letra blanca.
- Dorado de detalles (separador, borde de la cita): `oklch(0.66 0.10 70)`.
- Sin ramitas ni flores lilas en ninguna parte de la página.
- No cambiar textos, enlaces (`LIBRO_URL`, `IG_URL`) ni metadatos `head`.
- El proyecto está conectado a Lovable: no reescribir historia; commit solo si la usuaria lo pide.

## Review Focus
- Ancho de móvil (375px): el título de 64px no debe provocar scroll horizontal y la foto va antes que el texto.
- Las curvas de la letra caligráfica no deben cortarse con `background-clip: text` (la "C" inicial y la "d" final).
- Si Great Vibes no carga, el título debe seguir viéndose (con `cursive` de respaldo y el degradado).
- El título dorado debe leerse sobre el fondo lila en escritorio y móvil.
- `prefers-reduced-motion`: las secciones `.reveal` siguen apareciendo (no se toca `useReveal`).

---

### Task 1: Fuente, tokens y página /libro

**Files:**
- Modify: `src/routes/__root.tsx:110` (URL de Google Fonts)
- Modify: `src/styles.css` (`@theme inline`, `:root`, utilidades nuevas)
- Modify: `src/routes/libro.tsx:26-112` (componente `LibroPage`)

**Interfaces:**
- Produces (CSS): token `--font-script` → clase `font-script`; token `--book-gold-ink` → clases `text-book-gold-ink`, `border-book-gold-ink`, `bg-book-gold-ink`; utilidades `text-gold-gradient` y `bg-instagram-soft`.

- [ ] **Step 1: Cargar Great Vibes** — añadir `&family=Great+Vibes` a la URL de fuentes en `__root.tsx`.
- [ ] **Step 2: Tokens y utilidades en `styles.css`**
  - `@theme inline`: `--font-script: "Great Vibes", cursive;` y `--color-book-gold-ink: var(--book-gold-ink);`
  - `:root`: `--book-gold-ink: oklch(0.66 0.10 70);`
  - `@utility text-gold-gradient`: degradado del título con `background-clip: text`, `color: transparent`, `padding-inline: 0.15em; margin-inline-start: -0.15em;` (evita el corte de las curvas) y `filter: drop-shadow(0 1px 0 oklch(0.45 0.06 55 / .18))`.
  - `@utility bg-instagram-soft`: degradado Instagram suave.
- [ ] **Step 3: Rediseñar `LibroPage` en `libro.tsx`** según el spec:
  - Fondo: quitar la imagen difuminada; usar `radial-gradient(50% 65% at 78% 45%, oklch(0.92 0.05 305), transparent 70%)` sobre `bg-background`.
  - `h1`: `font-script text-gold-gradient text-[64px] md:text-[86px] leading-[0.98]`, mismo texto con `<br />`.
  - Separador: dos líneas de 46px + ramita SVG pequeña (tallo y dos hojas, `currentColor`), color `text-book-gold-ink`, `aria-hidden`.
  - Subtítulo `font-serif` ~29px en `text-book/90`; párrafo en `text-book/85`; cita con `border-book-gold-ink` y `text-book`.
  - Botón Amazon: `bg-book text-book-cream`, ícono `ShoppingCart` en `text-book-gold`.
  - Botón Instagram: `bg-instagram-soft text-white`, sombra suave.
  - Foto: `rounded-[28px]`, sombra lila suave, `ring-1 ring-white/70`; se conserva el enlace a Amazon y el `alt`.
- [ ] **Step 4: Verificar compilación**
  Run: `npm run lint` y `npm run build`
  Expected: sin errores nuevos en `libro.tsx`, `styles.css` ni `__root.tsx`.
- [ ] **Step 5: Verificar en el navegador** (servidor `wendy-dev`, `/libro`)
  - Escritorio (≥1024px): coincide con la maqueta aprobada; la "C" y la "d" del título no se cortan; sin ramitas lilas.
  - Móvil (375px): foto primero, sin scroll horizontal (`document.documentElement.scrollWidth === innerWidth`).
  - Consola sin errores; `document.fonts` incluye "Great Vibes" cargada.
- [ ] **Step 6: Commit (solo si la usuaria lo pide)**
  ```bash
  git add src/routes/__root.tsx src/styles.css src/routes/libro.tsx docs/superpowers
  git commit -m "Rediseña la página del libro con los colores y letras de la portada"
  ```
