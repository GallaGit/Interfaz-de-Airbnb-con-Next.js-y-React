# Arquitectura de la Interfaz - Clon de Airbnb

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

* Barra de búsqueda integrada en el header.
* Navegación por categorías (filtros horizontales).
* Listado de alojamientos con tarjetas `StayCard`.
* Clic en tarjeta navega al detalle vía `<Link>`.

### Página de Resultados de Búsqueda — `/search`

La página de resultados permite explorar las propiedades disponibles con filtros por texto y categoría.

Contenido principal:

* Barra de búsqueda con query params.
* Sección de filtros por categoría (enlaces con `<Link>`).
* Cuadrícula de propiedades con `ListingCard`.
* Clic en tarjeta navega al detalle vía `<Link>`.

### Página de Catálogo — `/catalog`

Vista de exploración con ordenamiento y panel de mapa.

Contenido principal:

* Contador de resultados y selector de orden por precio.
* Grid de tarjetas `StayCard`.
* Panel lateral de mapa (placeholder).
* Clic en tarjeta navega al detalle vía `<Link>`.

Cada tarjeta de propiedad muestra:

* Imagen principal (o placeholder).
* Ubicación.
* Título.
* Valoración.
* Precio por noche.

### Página de Detalle de Habitación — `/rooms/[id]`

La página de detalle muestra información completa sobre una propiedad seleccionada.

Contenido principal:

* Breadcrumb con enlace de vuelta al catálogo (`RoomBreadcrumb`).
* Carrusel de imágenes con navegación anterior/siguiente (`RoomPhotoCarousel`).
* Información principal: título, rating, reseñas y ubicación (`RoomSummary`).
* Información del anfitrión (`RoomHostCard`).
* Lista de servicios y comodidades (`RoomAmenitiesSection`).
* Panel de reserva con selector de huéspedes (`RoomBookingPanel`).

## Estrategia de Componentes

Los componentes deben ser pequeños, reutilizables y tener una única responsabilidad.

Reglas de implementación:

* Cada componente vive en su propio archivo dentro de `/components`.
* Componentes funcionales definidos como `const` (sin componentes de clase).
* Ningún componente supera ~80 líneas de JSX + lógica; dividir si es necesario.
* Las vistas complejas se construyen combinando subcomponentes reutilizables.

### Componentes de listado

* `StayCard` — Tarjeta clicable para Home y catálogo. Envuelve toda la tarjeta en `<Link>`.
* `ListingCard` — Tarjeta clicable para resultados de búsqueda. Envuelve toda la tarjeta en `<Link>`.
* `ListingGrid` — Grid responsivo de `ListingCard`.

### Componentes de detalle

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

## Navegación

La navegación se implementa utilizando el **App Router de Next.js** y el componente **`<Link>`** de `next/link`, garantizando transiciones entre páginas sin recargar el navegador.

**Regla:** nunca usar etiquetas `<a href="...">` planas para navegación interna.

### Flujo de navegación

```text
Home (/) ──click tarjeta──► /rooms/[id]
Catálogo (/catalog) ──click tarjeta──► /rooms/[id]
Búsqueda (/search) ──click tarjeta──► /rooms/[id]
Detalle (/rooms/[id]) ──breadcrumb──► /catalog
```

### Árbol de componentes — Detalle

```text
RoomDetailPage
├── RoomBreadcrumb          → Link a /catalog
├── RoomPhotoCarousel
├── RoomSummary
├── RoomHostCard
├── RoomAmenitiesSection
└── RoomBookingPanel
```

### Árbol de componentes — Home

```text
HomePage
├── Header (búsqueda integrada)
├── CategoryFilters
└── StayCard[]                → Link a /rooms/[id]
```

## Consideraciones de Diseño

* Diseño mobile-first.
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
