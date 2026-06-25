# Arquitectura de la Interfaz - Clon de Airbnb

> Identidad visual y tokens de diseño: [`design.md`](./design.md)

## Objetivo del Proyecto



El objetivo de este proyecto es recrear tres flujos principales de usuario de Airbnb utilizando componentes de React y el App Router de Next.js. La implementación se centra en comprender la arquitectura de componentes, el flujo de datos, los patrones de reutilización de la interfaz y el diseño responsivo.



La aplicación se desarrollará siguiendo un enfoque **mobile-first**, optimizada inicialmente para un viewport de **375px**, y adaptándose a pantallas de tablet y escritorio a partir de **768px**.



## Usuario Objetivo



El usuario principal es una persona que busca alojamiento para viajar.



Sus objetivos son:



* Descubrir alojamientos disponibles.

* Buscar y explorar propiedades.

* Revisar información detallada sobre una propiedad.

* Decidir si desea reservar una estancia.



## Páginas



### Página de Inicio (Home) — `/`



La página de inicio presenta los alojamientos disponibles y facilita el inicio de una búsqueda.



Contenido principal:



* Barra de búsqueda integrada en el header (`HomeNavbar`).

* Navegación por categorías con pills horizontales (`CategoryFilterRow`).

* Listado de alojamientos con tarjetas `StayCard` (placeholder de foto, título, precio, rating).

* Filtrado en tiempo real por texto (`useState`) y categoría activa (`useState`).

* Carga simulada al montar (`useEffect` + 1 s) con `ListingsLoading`.

* Clic en tarjeta navega al detalle vía `<Link>`.



### Página de Resultados de Búsqueda — `/search`

* Barra de búsqueda integrada en el header.

* Navegación por categorías (filtros horizontales).

* Listado de alojamientos con tarjetas `StayCard`.

* Clic en tarjeta navega al detalle vía `<Link>`.




La página de resultados permite explorar las propiedades disponibles con filtros por texto y categoría.



Contenido principal:



* Barra de búsqueda con query params.

* Sección de filtros por categoría (enlaces con `<Link>`).

* Cuadrícula de propiedades con `ListingCard`.

* Clic en tarjeta navega al detalle vía `<Link>`.



### Página de Catálogo — `/catalog`



Vista de exploración con ordenamiento y panel de mapa.



Contenido principal:



* Botón «Ir a Home» (`CatalogBackLink`).

* Contador de resultados y selector de orden por precio (`CatalogResultsHeader`, `useState`).

* Grid de tarjetas `StayCard` reutilizado desde Home.

* Panel lateral de mapa (`MapPlaceholder`) — derecha en escritorio, debajo en móvil.

* Clic en tarjeta navega al detalle vía `<Link>`.



Cada tarjeta `StayCard` muestra:

* Placeholder de foto (gradiente gris).

* Título.

* Precio por noche (color primario).

* Valoración con estrella.



### Página de Detalle de Habitación — `/rooms/[id]`



La página de detalle muestra información completa sobre una propiedad seleccionada.



Contenido principal:



* Breadcrumb con enlace de vuelta al catálogo (`RoomBreadcrumb`).

* Carrusel de imágenes con navegación anterior/siguiente (`RoomPhotoCarousel`).

* Información principal: título, rating, reseñas y ubicación (`RoomSummary`).

* Información del anfitrión (`RoomHostCard`).

* Lista de servicios y comodidades (`RoomAmenitiesSection`).

* Panel de reserva con selector de huéspedes (`RoomBookingPanel`, `useState`).

* Carga simulada al montar (`useEffect` + 1 s) con `RoomDetailLoading`.



## Estrategia de Componentes



Los componentes deben ser pequeños, reutilizables y tener una única responsabilidad.



Reglas de implementación:



* Cada componente vive en su propio archivo dentro de `/components`.

* Componentes funcionales definidos como `const` (sin componentes de clase).

* Ningún componente supera ~80 líneas de JSX + lógica; dividir si es necesario.

* Las vistas complejas se construyen combinando subcomponentes reutilizables.



### Componentes de Home

* `HomeNavbar` — Logo, búsqueda controlada y avatar.

* `CategoryFilterRow` — Pills de categoría con scroll horizontal.

* `ListingsSection` — Grid, estado vacío o `ListingsLoading`.

* `ListingsLoading` — Spinner de carga.

### Componentes de catálogo

* `CatalogBackLink` — Enlace `<Link>` a `/`.

* `CatalogResultsHeader` — Contador y `<select>` de orden.

* `CatalogListingsMap` — Grid de `StayCard` + `MapPlaceholder`.

* `MapPlaceholder` — Recuadro gris con texto «Mapa».

### Componentes de layout

* `MobileBottomNav` — Navegación inferior fija (móvil).

* `NavIcon` — Iconos SVG de la bottom bar.

* `Navbar` / `Footer` — Layout auxiliar (desktop).

### Componentes de listado



* `StayCard` — Tarjeta clicable para Home y catálogo. Envuelve toda la tarjeta en `<Link>`.

* `ListingCard` — Tarjeta clicable para resultados de búsqueda. Envuelve toda la tarjeta en `<Link>`.

* `ListingGrid` — Grid responsivo de `ListingCard`.



### Componentes de detalle

* `RoomDetailView` — Composición de las 5 secciones del detalle.

* `RoomDetailLoading` / `RoomNotFound` — Estados de carga y error.

* `RoomBreadcrumb` — Navegación de vuelta al catálogo con breadcrumb.

* `RoomPhotoCarousel` — Galería con controles anterior/siguiente.

* `RoomSummary` — Título, valoración y ubicación.

* `RoomHostCard` — Información del anfitrión.

* `RoomAmenitiesSection` — Grid de servicios y comodidades.

* `RoomBookingPanel` — Precio, selector de huéspedes y botón de reserva.



### Componentes de UI



* `SearchInput` — Campo de búsqueda.

* `Badge` — Etiqueta de filtro.

* `SectionTitle` — Título de sección.

* `Button` — Botón reutilizable.

### Hooks y utilidades

* `useHomeListings` — Estado y carga simulada de la Home (`hooks/`).

* `useRoomDetail` — Carga simulada del detalle por `id` de URL (`hooks/`).

* `filterListings` — Filtrado por texto y categoría (`lib/`).

* `getAmenityIcon` — Mapeo icono + etiqueta de amenities (`lib/`).

### Tipos TypeScript

Definidos en `src/types/listing.ts`:

* `Listing` — Alojamiento en listados.

* `Room` — Alias de `Listing` para el detalle.

* `Host` — Anfitrión (`name`, `superhost`).



## Navegación



La navegación se implementa utilizando el **App Router de Next.js** y el componente **`<Link>`** de `next/link`, garantizando transiciones entre páginas sin recargar el navegador.



**Regla:** nunca usar etiquetas `<a href="...">` planas para navegación interna.



### Flujo de navegación



```text

Home (/) ──click tarjeta──► /rooms/[id]

Catálogo (/catalog) ──click tarjeta──► /rooms/[id]

Catálogo (/catalog) ──«Ir a Home»──► /

Búsqueda (/search) ──click tarjeta──► /rooms/[id]

Detalle (/rooms/[id]) ──breadcrumb──► /catalog

```



### Árbol de componentes — Detalle



```text

RoomDetailPage

├── RoomDetailLoading | RoomNotFound

└── RoomDetailView

    ├── RoomBreadcrumb          → Link a /catalog

    ├── RoomPhotoCarousel       → useState (índice foto)

    ├── RoomSummary

    ├── RoomHostCard

    ├── RoomAmenitiesSection

    └── RoomBookingPanel        → useState (huéspedes)

```



### Árbol de componentes — Home



```text

HomePage

├── HomeNavbar (búsqueda integrada)

├── CategoryFilterRow

├── ListingsSection

│   └── StayCard[]                → Link a /rooms/[id]

└── ListingsLoading (estado de carga)

```

### Árbol de componentes — Catálogo

```text

CatalogPage

├── CatalogBackLink             → Link a /

├── CatalogResultsHeader        → useState (orden)

└── CatalogListingsMap

    ├── StayCard[]              → Link a /rooms/[id]

    └── MapPlaceholder

```

### Mapeo especificación → implementación

| Especificación (captura) | Componente implementado |
|---|---|
| TopSearchBar | `HomeNavbar` |
| CategoryTabs | `CategoryFilterRow` |
| BottomTabBar | `MobileBottomNav` |
| TabItem | `NavIcon` + enlaces en `MobileBottomNav` |
| StayCard | `StayCard` |
| ListingCard | `ListingCard` (solo `/search`) |



## Consideraciones de Diseño

* Diseño mobile-first (375px). Ver [`design.md`](./design.md).

* Fuente Plus Jakarta Sans; color primario `#FF5A5F`.

* Solo Tailwind CSS — sin librerías de componentes preconstruidas.

* Componentes reutilizables y desacoplados.

* Interfaz inspirada en Airbnb para analizar y replicar patrones de diseño reales.

* Uso de datos simulados (mock data) en `src/data/listings.ts`.

* Experiencia de usuario fluida y consistente entre las vistas.

* Tarjetas completamente clicables con feedback visual en hover.



---



# Especificación UI basada en Captura Airbnb (Mobile)



## 1) Propósito de la Página



Esta pantalla está orientada a la exploración rápida en móvil. Su objetivo es ayudar a la persona usuaria a descubrir alojamientos y experiencias relevantes, iniciar una búsqueda, navegar por categorías y acceder a contenido destacado desde una interfaz compacta.



## 2) Jerarquía de UI



1. Nivel primario: barra de búsqueda destacada en la parte superior.

2. Nivel secundario: navegación por categorías con iconos y etiquetas de novedad.

3. Nivel de contenido: bloques con título, acción secundaria y carrusel de tarjetas.

4. Nivel contextual: tarjetas con imagen, favorito, metadatos, precio y valoración.

5. Nivel persistente: barra de navegación inferior con pestañas principales.



## 3) Árbol de Componentes



```text

ExplorePage

├── TopSearchBar

├── CategoryTabs

│   └── CategoryTabItem

├── ContentSectionList

│   └── ContentSection

│       ├── SectionHeader

│       └── HorizontalCardCarousel

│           └── StayCard / ListingCard

│               └── Link → /rooms/[id]

└── BottomTabBar

    └── TabItem

```



## 4) Componentes React Reutilizables



* TopSearchBar

* CategoryTabs

* CategoryTabItem

* NewBadge

* ContentSection

* SectionHeader

* HorizontalCardCarousel

* StayCard

* ListingCard

* FavoriteButton

* BottomTabBar

* TabItem

* PriceRatingMeta

* HostMeta

* RoomBreadcrumb

* RoomPhotoCarousel

* RoomSummary

* RoomHostCard

* RoomAmenitiesSection

* RoomBookingPanel



## 5) Props Requeridas por Componente



| Componente | Props clave | Tipo sugerido | Requerido | Descripción |

|---|---|---|---|---|

| TopSearchBar | placeholder, onPress | string, function | Si | Texto de entrada y accion principal |

| CategoryTabs | items, selectedId, onSelect | array, string, function | Si | Lista de categorias y estado activo |

| CategoryTabItem | id, label, icon, isActive, isNew, onSelect | string, string, node/url, boolean, boolean, function | Si | Item individual de categoria |

| NewBadge | text | string | Si | Etiqueta de novedad |

| ContentSection | id, title, subtitle, ctaLabel, onCtaPress, items | string, string, string, string, function, array | Si | Seccion con cabecera y contenido |

| SectionHeader | title, subtitle, showCta, onCtaPress | string, string, boolean, function | Si | Cabecera de bloque |

| HorizontalCardCarousel | items, renderItem, snap, itemWidth | array, function, boolean, number | Si | Carrusel horizontal reutilizable |

| StayCard | listing | Listing | Si | Tarjeta clicable que navega a `/rooms/[id]` via Link |

| ListingCard | listing | Listing | Si | Tarjeta clicable que navega a `/rooms/[id]` via Link |

| FavoriteButton | isActive, onPress, ariaLabel | boolean, function, string | Si | Boton para guardar favorito |

| BottomTabBar | items, activeTab, onTabPress | array, string, function | Si | Navegacion inferior principal |

| TabItem | id, label, icon, isActive, onPress, badgeCount | string, string, node/url, boolean, function, number | Si | Item individual de tab |

| PriceRatingMeta | totalPrice, rating | string/number, number | Si | Precio y valoracion |

| HostMeta | dateRange, hostType | string, string | Si | Metadatos secundarios |

| RoomBreadcrumb | roomTitle | string | Si | Breadcrumb con Link de vuelta a `/catalog` |

| RoomPhotoCarousel | photos | string[] | Si | Carrusel de fotos con controles |

| RoomSummary | title, rating, reviews, location | string, number, number, string | Si | Titulo y metadatos principales |

| RoomHostCard | hostName | string | Si | Informacion del anfitrion |

| RoomAmenitiesSection | amenities | string[] | Si | Grid de servicios |

| RoomBookingPanel | pricePerNight | number | Si | Precio, huespedes y reserva |



## 6) Consideraciones Mobile-First



* Base para viewport de 375px con objetivos tactiles minimos de 44px.

* Barra de busqueda visible al inicio para acceso inmediato.

* Carruseles horizontales con separacion consistente y scroll suave.

* Escala tipografica clara entre titulos, subtitulos y metadatos.

* Imagenes con proporcion estable para evitar saltos de layout.

* Barra inferior fija respetando safe-area en dispositivos con notch.

* Espaciado vertical uniforme para lectura y escaneo rapido.

* Evolucion a grid en pantallas mayores sin romper componentes base.



## 7) Consideraciones de Accesibilidad



* Botones de icono con nombre accesible (buscar, favorito, tabs, flechas).

* Contraste adecuado entre texto, fondos e imagenes.

* Orden de foco logico en todo el flujo.

* Soporte de teclado para navegacion y activacion.

* Texto alternativo descriptivo en imagenes de tarjetas.

* Estado seleccionado y favorito anunciado para lectores de pantalla.

* No depender solo del color para comunicar estados.

* Respetar preferencias de reduccion de movimiento.

* Breadcrumb con `aria-label` y `aria-current` para la pagina activa.



---

## Checklist de Evaluación (mapeo a código)

| Criterio | Estado | Referencia |
|---|---|---|
| `context.md` con descripción de interfaz, componentes y usuario | OK | `/context.md` (raíz del repositorio) |
| Next.js 16 + TypeScript + Tailwind + App Router | OK | `agenthub-admin/package.json`, `src/app/` |
| Tres rutas navegables: `/`, `/catalog`, `/rooms/[id]` | OK | `src/app/page.tsx`, `catalog/page.tsx`, `rooms/[id]/page.tsx` |
| Navegación interna solo con `<Link>` | OK | `StayCard`, `RoomBreadcrumb`, `MobileBottomNav`, etc. |
| Mobile-first (375px antes de breakpoints) | OK | `layout.tsx` viewport + estilos base sin `sm:`/`md:` |
| `StayCard` reutilizado en Home y Catálogo | OK | `ListingsSection`, `CatalogListingsMap` |
| `useState` en ≥3 casos distintos | OK | búsqueda, categoría, orden, huéspedes, índice foto |
| `useEffect` con carga simulada en ≥2 páginas | OK | `useHomeListings`, `useRoomDetail` |
| Detalle con 5 secciones | OK | `RoomDetailView` |
| Componentes en archivos individuales | OK | `src/components/` |
| Componentes funcionales con `const` | OK | sin clases |
| Tipos TS para alojamiento y habitación | OK | `src/types/listing.ts` (`Listing`, `Room`, `Host`) |
| Solo Tailwind, sin `style={{}}` | OK | verificado en `src/` |
| Especificación UI derivada de capturas | OK | sección «Especificación UI basada en Captura Airbnb» |
| Sin librerías de componentes (shadcn, MUI, etc.) | OK | solo `next`, `react`, `tailwindcss` en dependencias |

