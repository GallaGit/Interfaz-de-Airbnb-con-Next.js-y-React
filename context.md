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
