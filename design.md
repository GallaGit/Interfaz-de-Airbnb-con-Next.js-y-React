# Diseño — Identidad Visual

Documento de referencia para la capa visual del clon de Airbnb. La implementación vive en `agenthub-admin/src/app/globals.css` y en los componentes bajo `src/components/`.

---

## Paleta de colores

| Token | Valor | Uso |
|---|---|---|
| Primario (`brand`) | `#FF5A5F` | Botones CTA, precios destacados, filtros activos, rating |
| Hover primario | `#E04E52` | Estados hover de botones |
| Fondo principal | `#FFFFFF` | Superficie base de la app |
| Fondo secundario | `#FBF9F8` | Inputs, pills inactivas, estados vacíos |
| Texto principal | `#222222` | Títulos y contenido |
| Texto secundario | `#717171` | Metadatos, subtítulos |
| Borde sutil | `#EBEBEB` | Divisores, bordes de tarjetas e inputs |

Contraste suficiente para accesibilidad en texto y controles interactivos.

---

## Tipografía

- **Fuente:** Plus Jakarta Sans (pesos 400–800), cargada en `layout.tsx` vía `next/font/google`.
- **Títulos:** `font-extrabold` o `font-bold` con `tracking-tight`.
- **Cuerpo:** `font-normal` / `font-medium`.
- **Datos secundarios:** tamaños `text-sm` / `text-xs` en color `text-muted`.

---

## Sistema de redondeo

| Elemento | Clase Tailwind |
|---|---|
| Tarjetas e imágenes | `rounded-2xl` |
| Botones e inputs | `rounded-xl` |
| Pills / filtros | `rounded-full` |
| Avatar | `rounded-full` |

---

## Sombras y profundidad

Definidas como variables CSS en `globals.css`:

- `--shadow-card` — tarjetas en reposo
- `--shadow-card-hover` — elevación en hover
- `--shadow-nav` — barra de navegación inferior

Efectos hover discretos: `hover:-translate-y-0.5`, `transition duration-200/300`.

---

## Estilo general

- Diseño **mobile-first** (viewport base **375px**).
- Mucho espacio en blanco y jerarquía clara.
- Inspiración Airbnb / SaaS moderno.
- **Sin librerías de componentes** (shadcn, MUI, Ant Design, Chakra): solo Tailwind y componentes propios.

---

## Componentes clave (implementación)

| Patrón de diseño | Componente |
|---|---|
| Barra superior con logo, búsqueda y avatar | `HomeNavbar` |
| Filtros horizontales (pills) | `CategoryFilterRow` |
| Tarjeta de alojamiento | `StayCard` (placeholder foto, título, precio, ★ rating) |
| Barra inferior móvil | `MobileBottomNav` |
| Breadcrumb de detalle | `RoomBreadcrumb` |
| Panel de reserva | `RoomBookingPanel` |
| Placeholder de mapa | `MapPlaceholder` |

### Navegación superior

- Fondo blanco con borde inferior suave (`border-border-subtle`).
- Logo + campo de búsqueda + avatar de usuario.
- Sin menú hamburguesa.

### Navegación inferior (móvil)

- Fija al fondo (`lg:hidden`).
- Iconos de línea fina: Explorar, Buscar, Catálogo.
- Estado activo en color primario.
- Sombra superior ligera y soporte `safe-area-inset-bottom`.

### Tarjetas de alojamiento

- Placeholder de foto en gradiente gris.
- Precio en color primario.
- Rating con estrella ★ en `brand`.
- Hover: elevación y sombra ampliada.

### Página Catálogo

- Botón «Ir a Home» (`CatalogBackLink`).
- Cabecera de resultados + orden por precio.
- Grid de `StayCard` + panel «Mapa» (placeholder gris).

---

## Responsive

| Viewport | Comportamiento |
|---|---|
| 375px (móvil) | 1 columna, bottom nav visible |
| ≥ 768px (`md`) | Grid de 2 columnas en listados |
| ≥ 1024px (`lg`) | Grid de 3 columnas; mapa lateral en catálogo; bottom nav oculta |

---

## Documentación relacionada

- Arquitectura y flujos: [`context.md`](./context.md)
- Guía de ejecución: [`README.md`](./README.md)
