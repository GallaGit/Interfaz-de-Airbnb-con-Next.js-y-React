# Interfaz de Airbnb con Next.js y React

Clon parcial de Airbnb construido con **Next.js 16**, **React 19**, **TypeScript** y **Tailwind CSS v4**. El código de la aplicación está en `agenthub-admin/`.

## Documentación

| Archivo | Contenido |
|---|---|
| [`context.md`](./context.md) | Arquitectura, componentes, navegación, usuario y checklist de evaluación |
| [`design.md`](./design.md) | Identidad visual: colores, tipografía, radios, sombras y patrones UI |

## Rutas principales

| Ruta | Descripción |
|---|---|
| `/` | Home — búsqueda en tiempo real, filtros por categoría, grid de `StayCard` |
| `/catalog` | Catálogo — orden por precio, `StayCard` reutilizado, mapa placeholder |
| `/rooms/[id]` | Detalle — galería, cabecera, anfitrión, amenities y reserva |

Ruta adicional: `/search` (búsqueda con query params y `ListingCard`).

Toda la navegación interna usa `<Link>` de `next/link` — sin `<a href>` planos ni recargas completas.

## Objetivo

Recrear una arquitectura modular inspirada en Airbnb para practicar:

- Composición de componentes reutilizables con responsabilidad única.
- Estado local con `useState` y carga simulada con `useEffect`.
- Diseño **mobile-first** (375px).
- Navegación con App Router y rutas dinámicas.

## Usuario objetivo

Persona viajera que busca alojamiento: descubrir opciones, filtrar por categoría o texto, comparar precios y revisar el detalle antes de reservar.

## Vistas implementadas

### Home (`/`)

- `HomeNavbar` — logo, búsqueda (`useState`) y avatar.
- `CategoryFilterRow` — pills horizontales con categoría activa (`useState`).
- `ListingsSection` — grid responsivo de `StayCard`.
- Carga simulada 1 s con `ListingsLoading` (`useEffect` en `useHomeListings`).

### Catálogo (`/catalog`)

- `CatalogBackLink` — botón «Ir a Home».
- `CatalogResultsHeader` — contador y orden ascendente/descendente (`useState`).
- `CatalogListingsMap` — grid de `StayCard` + `MapPlaceholder`.

### Búsqueda (`/search`)

- `SearchInput` + `SearchFilters` con `<Link>`.
- `ListingGrid` con `ListingCard`.

### Detalle (`/rooms/[id]`)

- `RoomBreadcrumb` — vuelta al catálogo vía `<Link>`.
- `RoomPhotoCarousel` — placeholders con índice (`useState`).
- `RoomSummary`, `RoomHostCard`, `RoomAmenitiesSection`, `RoomBookingPanel`.
- Carga simulada con `useRoomDetail` (`useEffect`).

## Navegación

| Origen | Acción | Destino |
|---|---|---|
| Home / Catálogo / Búsqueda | Clic en tarjeta | `/rooms/[id]` |
| Detalle | Breadcrumb «Volver al catálogo» | `/catalog` |
| Catálogo | Botón «Ir a Home» | `/` |
| Bottom nav (móvil) | Tabs Explorar / Buscar / Catálogo | `/`, `/search`, `/catalog` |

## Arquitectura del proyecto

```text
agenthub-admin/src/
├── app/
│   ├── layout.tsx              # Plus Jakarta Sans, MobileBottomNav, viewport
│   ├── globals.css             # Tokens de diseño (brand, sombras, fondos)
│   ├── page.tsx                # Home
│   ├── catalog/page.tsx
│   ├── search/page.tsx
│   └── rooms/[id]/page.tsx
│
├── components/
│   ├── catalog/                # CatalogBackLink, CatalogResultsHeader, CatalogListingsMap, MapPlaceholder
│   ├── home/                   # HomeNavbar, CategoryFilterRow, ListingsSection, ListingsLoading
│   ├── layout/                 # MobileBottomNav, NavIcon, Navbar, Footer
│   ├── listing/                # StayCard, ListingCard, ListingGrid
│   ├── room/                   # RoomDetailView, RoomBreadcrumb, RoomPhotoCarousel, …
│   ├── search/                 # SearchFilters
│   └── ui/                     # Button, Badge, SearchInput, SectionTitle
│
├── hooks/
│   ├── useHomeListings.ts      # useState + useEffect (Home)
│   └── useRoomDetail.ts        # useEffect (Detalle)
│
├── lib/
│   ├── filterListings.ts
│   └── amenityIcons.ts
│
├── data/
│   ├── listings.ts
│   └── categoryFilters.ts
│
└── types/
    └── listing.ts              # Listing, Room, Host
```

## Estado de React

| Caso | `useState` / `useEffect` | Archivo |
|---|---|---|
| Texto de búsqueda | `useState` | `hooks/useHomeListings.ts` |
| Categoría activa | `useState` | `hooks/useHomeListings.ts` |
| Orden por precio | `useState` | `app/catalog/page.tsx` |
| Contador de huéspedes | `useState` | `components/room/RoomBookingPanel.tsx` |
| Índice de galería | `useState` | `components/room/RoomPhotoCarousel.tsx` |
| Carga Home | `useEffect` + 1 s | `hooks/useHomeListings.ts` |
| Carga Detalle | `useEffect` + 1 s | `hooks/useRoomDetail.ts` |

## Convenciones de código

- Cada componente en su propio archivo bajo `/components`.
- Componentes funcionales definidos como `const` (sin clases).
- Máximo ~80 líneas por componente; lógica extraída a hooks y `lib/`.
- Solo estilos Tailwind — sin `style={{}}` ni librerías UI externas.

## Stack

- Next.js 16 (App Router)
- React 19
- TypeScript 5
- Tailwind CSS 4

## Cómo ejecutar

```bash
cd agenthub-admin
npm install
npm run dev
```

Abrir [http://localhost:3000](http://localhost:3000).

> Si `npm install` falla por SSL: `npm install --strict-ssl=false`

## Scripts

- `npm run dev` — desarrollo
- `npm run build` — build de producción
- `npm run start` — servidor de producción
- `npm run lint` — ESLint

## Estado actual

- Identidad visual premium inspirada en Airbnb (`design.md`).
- Tres rutas evaluables navegables con `<Link>`.
- `StayCard` reutilizado en Home y Catálogo.
- Detalle con 5 secciones y breadcrumb al catálogo.
- Barra inferior móvil (`MobileBottomNav`) sin menú hamburguesa.
- Tipos `Listing`, `Room` y `Host` en TypeScript.
- Documentación alineada en `context.md`, `design.md` y este README.
