# Interfaz de Airbnb con Next.js y React

Clon parcial de Airbnb construido con Next.js App Router, React y TypeScript.

El proyecto implementa tres flujos principales:

- Home
- Catálogo de búsqueda (Search Results)
- Detalle de habitación

Toda la navegación se realiza sin recarga de página usando App Router de Next.js (`Link` y navegación cliente para búsqueda).

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

- Hero con Search Bar
- Lista de categorías
- Listado de alojamientos destacados

### 2. Catálogo (`/search`)

- Barra de búsqueda
- Filtros por categoría
- Lista de propiedades
- Tarjetas de propiedad

### 3. Detalle de Habitación (`/rooms/[id]`)

- Galería de imágenes
- Información principal
- Amenities
- Host
- Tarjeta de reserva

## Arquitectura del Proyecto

```text
agenthub-admin/src/
│
├── app/
│   ├── page.tsx
│   ├── search/
│   │   └── page.tsx
│   └── rooms/
│       └── [id]/
│           └── page.tsx
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
│   │   ├── ListingCard.tsx
│   │   ├── ListingGrid.tsx
│   │   └── ListingInfo.tsx
│   ├── room/
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
├── types/
│   └── listing.ts
└── lib/
```

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

## Scripts

En `agenthub-admin`:

- `npm run dev` inicia el entorno de desarrollo.
- `npm run build` genera la build de producción.
- `npm run start` inicia la app en modo producción.
- `npm run lint` ejecuta validación con ESLint.

## Estado Actual

- Arquitectura solicitada implementada.
- Navegación entre las tres vistas funcionando con App Router.
- Ruta dinámica de detalle (`/rooms/[id]`) conectada a datos mock.
- Lint sin errores.