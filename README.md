# Petit ★ DESIGNS - Sistema de Gestión Multimedia 🎬
> **"Pequeñas Ideas, Gran Impacto"**

Este proyecto es una aplicación web profesional diseñada para la gestión de Peliculas. Aplica conceptos avanzados de programación asíncrona, persistencia de datos relacionales y un diseño de interfaz centrado en la experiencia de usuario (UX) bajo la identidad visual de **Petit Designs**.

---

## Datos del Estudiante
*   **Nombre:** Mariangel Ortiz Petit
*   **Cédula de Identidad:** 31.100.638
*   **Institución:** UNETI (Universidad Nacional Experimental de las Telecomunicaciones e Informática)
*   **Materia:** Programación III | Módulo 1  Evaluación Final CRUD en Angular

---

## Especificaciones Técnicas

El sistema utiliza una arquitectura de **SPA (Single Page Application)** conectada a un servidor de datos dedicado:

*   **Frontend:** Angular 18 (Standalone Components) - Sin módulos, más rápido y moderno.
*   **Backend:** Node.js con Express.js - Servidor de API RESTful.
*   **Base de Datos:** SQLite3 - Motor de base de datos relacional ligero y profesional.
*   **Estética:** CSS3 personalizado con paleta de colores de marca, tipografía *Montserrat* y *Playfair Display*, y texturas de papel arrugado para una identidad artesanal.

---

## Funcionalidades Destacadas

1.  **Navegación por Géneros (Drill-down):** Organización automática de películas en carpetas (3 por fila). Muestra contadores en tiempo real desde la base de datos.
2.  **Sincronización Automática (Auto-Refresh):** El sistema refresca los datos de SQLite automáticamente al detectar cualquier interacción en la interfaz.
3.  **Ciclo CRUD Completo:**
    *   **Create:** Registro de películas con validación y URL de imagen.
    *   **Read:** Listado dinámico filtrado por categorías.
    *   **Update:** Edición total (Título, Director, Género, Imagen y Calificación).
    *   **Delete:** Eliminación con confirmación de seguridad.
4.  **Empty States:** Mensajes dinámicos ("Hey, no has visto nada de este género") para guiar al usuario.
5.  **Sistema de Calificación:** Interfaz de estrellas interactiva.

---

## Estructura de Archivos
```text
PETIT-DESIGNS-MIS PELICULAS/
├── server.js               # Backend: Servidor Node + SQLite
├── peliculas.db            # Base de Datos (Se crea automáticamente)
├── README.md               # Documentación completa
└── frontend-peliculas/     # Frontend: Carpeta de Angular
    ├── src/app/
    │   ├── app.ts          # Lógica (TypeScript)
    │   ├── app.html        # Estructura (HTML5)
    │   └── app.css         # Diseño (Estilos Petit)
    └── src/index.html      # Contenedor principal

Guía de Instalación y Ejecución

1. Clonar y Preparar Dependencias
Abre tu terminal en la raíz del proyecto e instala las librerías necesarias:

# Instalar dependencias del Backend
npm install express sqlite3 cors

# Entrar a la carpeta del frontend
cd frontend-peliculas

# Instalar dependencias del Frontend
npm install

2. Ejecutar el Sistema (Requiere 2 Terminales)

Terminal 1 (Backend):

node server.js

Desde la raíz del proyecto ejecuta:

ng serve -o


