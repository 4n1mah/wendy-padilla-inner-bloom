# Rediseño de la página del libro (/libro)

Fecha: 2026-11-22 · Estado: aprobado (maqueta "Opción B, ajustada")

## Intención
La página del libro debe llevar los colores, la tipografía y el color de letra de la portada de
"Cuando me amé de verdad", sin dejar de verse como parte del sitio (fondo lila, encabezado y pie lilas).

## Objetivos
- Título con la letra caligráfica y el dorado de la portada.
- Texto en el café del libro en lugar de violeta.
- Botones con los colores del libro (Amazon) y de Instagram en versión suave.

## No objetivos
- No se cambia el adelanto del libro en Inicio (`src/routes/index.tsx`); queda como posible paso aparte.
- No se cambian el texto, los enlaces ni los metadatos de la página.

## Anti-objetivos
- Que la página parezca de otro sitio (todo café, como la opción C).
- Que el título dorado no se lea sobre el fondo lila.
- Adornos lilas de hojas (la usuaria pidió quitarlos).

## Opciones consideradas
- **A. La etiqueta del regalo:** tarjeta café dentro de la página lila. Descartada.
- **B. Tinta del libro sobre lila:** se mantiene el diseño actual y se cambian colores y letras. **Elegida.**
- **C. Noche de chocolate:** toda la sección en café. Descartada por alejarse del sitio.

## Diseño aprobado (opción B ajustada)
- **Fondo:** lila del sitio con un resplandor lila suave detrás de la foto. Reemplaza el fondo de foto difuminada.
- **Etiqueta "Libro":** igual que ahora (lila del sitio con línea).
- **Título:** fuente Great Vibes (nueva, Google Fonts), degradado dorado de la portada un poco más profundo
  (oklch 0.74→0.64→0.55, tono 80→60) para que se lea sobre lila. Unos 64px en móvil y 86px en escritorio.
- **Separador:** línea dorada con una ramita dorada pequeña en el centro.
- **Subtítulo:** Cormorant Garamond, café del libro.
- **Párrafo:** Inter, café del libro (más claro).
- **Cita:** Cormorant itálica, café, con borde izquierdo dorado.
- **Botón Amazon:** fondo café, letra crema, ícono de carrito dorado.
- **Botón Instagram:** degradado de Instagram apagado (naranja → rosa → morado, oklch con croma ~0.10), letra blanca.
- **Foto:** sin ramitas; esquinas redondeadas, sombra lila suave y borde blanco fino.
- **Móvil:** la foto va primero y el texto debajo, como ahora.

## Decisiones del constructor (Claude)
- Los colores nuevos van como tokens/utilidades en `src/styles.css`, junto a los del libro.
- La fuente se carga en el mismo enlace de Google Fonts de `src/routes/__root.tsx`.
