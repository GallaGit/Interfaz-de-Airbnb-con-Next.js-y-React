# Airbnb Clone — agenthub-admin

Aplicación Next.js 16 con TypeScript, Tailwind CSS v4 y App Router.

> Documentación completa de interfaz, componentes y usuario: [`../context.md`](../context.md)

## Requisitos técnicos

- **Next.js 16** + **TypeScript** + **Tailwind CSS** (solo clases de utilidad, sin librerías de UI)
- **App Router** en `src/app/`
- Sin shadcn, MUI, Ant Design ni Chakra

## Rutas principales (evaluación)

| Ruta | Archivo |
|---|---|
| `/` | `src/app/page.tsx` |
| `/catalog` | `src/app/catalog/page.tsx` |
| `/rooms/[id]` | `src/app/rooms/[id]/page.tsx` |

Ruta adicional: `/search` (búsqueda con query params).

## Desarrollo

```bash
npm install
npm run dev
```

Abrir [http://localhost:3000](http://localhost:3000). Diseño mobile-first optimizado para **375px**.

## Navegación

Toda la navegación interna usa `<Link>` de `next/link`. Las tarjetas `StayCard` enlazan a `/rooms/[id]`. El detalle incluye `RoomBreadcrumb` con enlace de vuelta a `/catalog`.

## Estado de React

| Caso | Archivo |
|---|---|
| Filtrado por búsqueda | `src/hooks/useHomeListings.ts` |
| Categoría activa | `src/hooks/useHomeListings.ts` |
| Orden de resultados | `src/app/catalog/page.tsx` |
| Contador de huéspedes | `src/components/room/RoomBookingPanel.tsx` |
| Índice de galería | `src/components/room/RoomPhotoCarousel.tsx` |

| Carga simulada (`useEffect` + `setTimeout`) | Archivo |
|---|---|
| Home | `src/hooks/useHomeListings.ts` |
| Detalle | `src/hooks/useRoomDetail.ts` |

## Tipos

Definidos en `src/types/listing.ts`: `Listing`, `Room`, `Host`.
