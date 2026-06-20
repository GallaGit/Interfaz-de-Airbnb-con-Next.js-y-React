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

### Página de Inicio (Home)

La página de inicio presenta los alojamientos disponibles y facilita el inicio de una búsqueda.

Contenido principal:

* Barra de navegación.
* Sección de búsqueda.
* Navegación por categorías.
* Listado de alojamientos destacados.
* Pie de página.

### Página de Resultados de Búsqueda (Catálogo)

La página de resultados permite explorar las propiedades disponibles.

Contenido principal:

* Barra de búsqueda.
* Sección de filtros.
* Cuadrícula o listado de propiedades.
* Tarjetas de propiedades.

Cada tarjeta de propiedad muestra:

* Imagen principal.
* Ubicación.
* Título o descripción breve.
* Valoración.
* Precio por noche.

### Página de Detalle de Habitación

La página de detalle muestra información completa sobre una propiedad seleccionada.

Contenido principal:

* Galería de imágenes.
* Información principal de la propiedad.
* Lista de servicios y comodidades.
* Información del anfitrión.
* Tarjeta de reserva.

## Estrategia de Componentes

Los componentes deben ser pequeños, reutilizables y tener una única responsabilidad.

Ejemplos de componentes:

* ListingCard (Tarjeta de propiedad)
* SearchInput (Campo de búsqueda)
* CategoryList (Lista de categorías)
* RoomGallery (Galería de imágenes)
* BookingCard (Tarjeta de reserva)

Las vistas más complejas se construirán combinando estos componentes reutilizables.

## Navegación

La navegación se implementará utilizando el **App Router de Next.js** y componentes **Link**, garantizando transiciones entre páginas sin recargar el navegador.

## Consideraciones de Diseño

* Diseño mobile-first.
* Componentes reutilizables y desacoplados.
* Interfaz inspirada en Airbnb para analizar y replicar patrones de diseño reales.
* Uso de datos simulados (mock data) durante el desarrollo para evitar dependencias de APIs externas.
* Experiencia de usuario fluida y consistente entre las tres vistas.

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
│           └── ListingCard
│               └── FavoriteButton
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
* ListingCard
* FavoriteButton
* BottomTabBar
* TabItem
* PriceRatingMeta
* HostMeta

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
| ListingCard | id, imageUrl, title, location, dateRange, hostType, totalPrice, rating, isRecommended, isFavorite, onToggleFavorite, onPress | string, string, string, string, string, string, string/number, number, boolean, boolean, function, function | Si | Tarjeta de alojamiento o hotel |
| FavoriteButton | isActive, onPress, ariaLabel | boolean, function, string | Si | Boton para guardar favorito |
| BottomTabBar | items, activeTab, onTabPress | array, string, function | Si | Navegacion inferior principal |
| TabItem | id, label, icon, isActive, onPress, badgeCount | string, string, node/url, boolean, function, number | Si | Item individual de tab |
| PriceRatingMeta | totalPrice, rating | string/number, number | Si | Precio y valoracion |
| HostMeta | dateRange, hostType | string, string | Si | Metadatos secundarios |

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
