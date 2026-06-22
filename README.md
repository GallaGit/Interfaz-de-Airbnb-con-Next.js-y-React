# Interfaz de Airbnb con Next.js y React

Clon parcial de Airbnb construido con Next.js App Router, React y TypeScript.

El proyecto implementa tres flujos principales:

- Home
- Catálogo de búsqueda
- Detalle de habitación

Toda la navegación interna se realiza sin recarga de página usando App Router de Next.js y el componente `<Link>`. No se usan etiquetas `<a href>` planas para rutas internas.

## Objetivo

Recrear una arquitectura modular de interfaz inspirada en Airbnb para practicar:

- Composición de componentes reutilizables.
- Flujo de datos con datos mock.
- Diseño responsivo mobile-first.
- Navegación entre rutas dinámicas con App Router.

## Usuario Objetivo

El usuario principal es una persona viajera que busca alojamiento de forma rápida y confiable; en la plataforma intenta descubrir opciones disponibles, comparar propiedades por ubicación, precio y comodidades, revisar el detalle de cada espacio y decidir si reservar su próxima estadía.

## Vistas Implementadas

### 1. Home (`/`)

- Barra de búsqueda integrada en el header.
- Filtros por categoría (scroll horizontal).
- Grid de alojamientos con `StayCard`.
- Clic en cualquier tarjeta navega al detalle (`/rooms/[id]`).

### 2. Catálogo de búsqueda (`/search`)

- Barra de búsqueda con query params.
- Filtros por categoría con `<Link>`.
- Grid de propiedades con `ListingCard`.
- Clic en cualquier tarjeta navega al detalle (`/rooms/[id]`).

### 3. Catálogo con mapa (`/catalog`)

- Listado de propiedades con ordenamiento por precio.
- Grid de `StayCard` con panel lateral de mapa (placeholder).
- Clic en cualquier tarjeta navega al detalle (`/rooms/[id]`).

### 4. Detalle de Habitación (`/rooms/[id]`)

- Breadcrumb con enlace de vuelta al catálogo (`/catalog`).
- Carrusel de fotos (`RoomPhotoCarousel`).
- Resumen de la propiedad (`RoomSummary`).
- Información del anfitrión (`RoomHostCard`).
- Lista de servicios (`RoomAmenitiesSection`).
- Panel de reserva con selector de huéspedes (`RoomBookingPanel`).

## Navegación

| Origen | Acción | Destino |
|---|---|---|
| Home (`/`) | Clic en tarjeta | `/rooms/[id]` |
| Catálogo (`/catalog`) | Clic en tarjeta | `/rooms/[id]` |
| Búsqueda (`/search`) | Clic en tarjeta | `/rooms/[id]` |
| Detalle (`/rooms/[id]`) | Breadcrumb "Volver al catálogo" | `/catalog` |

Todas las rutas internas usan `<Link>` de `next/link`.

## Arquitectura del Proyecto

```text
agenthub-admin/src/
│
├── app/
│   ├── page.tsx                  # Home
│   ├── search/
│   │   └── page.tsx              # Resultados de búsqueda
│   ├── catalog/
│   │   └── page.tsx              # Catálogo con ordenamiento
│   └── rooms/
│       └── [id]/
│           └── page.tsx          # Detalle dinámico
│
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx
│   │   └── Footer.tsx
│   ├── ui/
│   │   ├── Button.tsx
│   │   ├── Badge.tsx
│   │   ├── SearchInput.tsx
│   │   └── SectionTitle.tsx
│   ├── listing/
│   │   ├── ListingCard.tsx       # Tarjeta clicable (búsqueda)
│   │   ├── StayCard.tsx          # Tarjeta clicable (home/catálogo)
│   │   ├── ListingGrid.tsx
│   │   └── ListingInfo.tsx
│   ├── room/
│   │   ├── RoomBreadcrumb.tsx    # Navegación de vuelta al catálogo
│   │   ├── RoomPhotoCarousel.tsx # Galería con anterior/siguiente
│   │   ├── RoomSummary.tsx       # Título, rating y ubicación
│   │   ├── RoomHostCard.tsx      # Info del anfitrión
│   │   ├── RoomAmenitiesSection.tsx
│   │   ├── RoomBookingPanel.tsx  # Precio, huéspedes y reserva
│   │   ├── RoomGallery.tsx
│   │   ├── RoomHeader.tsx
│   │   ├── RoomAmenities.tsx
│   │   └── BookingCard.tsx
│   └── home/
│       ├── HeroSection.tsx
│       ├── CategoryList.tsx
│       └── FeaturedListings.tsx
│
├── data/
│   └── listings.ts
└── types/
    └── listing.ts
```

## Convenciones de Código

- Cada componente vive en su propio archivo dentro de `/components`.
- Componentes funcionales definidos como `const` (sin componentes de clase).
- Ningún componente supera ~80 líneas de JSX + lógica; las vistas complejas se dividen en subcomponentes.
- Navegación interna exclusivamente con `<Link>` de Next.js.

## Stack

- Next.js 16 (App Router)
- React 19
- TypeScript
- Tailwind CSS 4

## Datos

Se utilizan datos simulados en `agenthub-admin/src/data/listings.ts` para propiedades, categorías, amenities, host y precios.

## Cómo Ejecutar

Desde la raíz del repositorio:

```bash
cd agenthub-admin
npm install
npm run dev
```

Abrir en navegador:

- `http://localhost:3000`

> Si `npm install` falla por certificados SSL en tu red, prueba: `npm install --strict-ssl=false`

## Scripts

En `agenthub-admin`:

- `npm run dev` inicia el entorno de desarrollo.
- `npm run build` genera la build de producción.
- `npm run start` inicia la app en modo producción.
- `npm run lint` ejecuta validación con ESLint.

## Estado Actual

- Arquitectura modular implementada con componentes pequeños y reutilizables.
- Navegación entre las cuatro vistas funcionando con App Router y `<Link>`.
- Tarjetas de alojamiento (`ListingCard`, `StayCard`) completamente clicables.
- Ruta dinámica de detalle (`/rooms/[id]`) conectada a datos mock.
- Página de detalle refactorizada en subcomponentes (`RoomBreadcrumb`, `RoomPhotoCarousel`, `RoomSummary`, etc.).
- Breadcrumb de vuelta al catálogo en la vista de detalle.
- TypeScript configurado (`next-env.d.ts` + `@types/react`).
