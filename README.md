# Petit ★ DESIGNS - Sistema de Gestión Multimedia 
> **"Pequeñas Ideas, Gran Impacto"**

Bienvenido a **Mis Películas**, una plataforma integral de gestión cinematográfica desarrollada con una arquitectura moderna desacoplada. Este proyecto combina la elegancia del diseño artesanal con la potencia de las tecnologías web actuales.

---

##  Información del Desarrollador
*   **Estudiante:** Mariangel Ortiz Petit
*   **Cédula de Identidad:** 31.100.638
*   **Institución:** UNETI (Universidad Nacional Experimental de las Telecomunicaciones e Informática)
*   **Materia:** Programación III | Módulo 1
*   **Año:** 2026

---

##  Especificaciones Técnicas (Stack)

El sistema ha sido diseñado bajo una arquitectura de **Módulo Único y Persistencia Relacional**:

*   **Frontend:** [Angular 18](https://angular.dev/) (Standalone Components) - Proporciona una interfaz reactiva y de alto rendimiento.
*   **Backend:** [Node.js](https://nodejs.org/) & [Express](https://expressjs.com/) - API REST robusta para la gestión de datos.
*   **Base de Datos:** [SQLite3](https://www.sqlite.org/) - Motor de base de datos relacional que garantiza la integridad de los datos localmente.
*   **Diseño:** CSS3 con variables personalizadas, texturas de papel arrugado y tipografías *Montserrat* y *Playfair Display*.

---

##  Características del Proyecto

- **Navegación Inteligente por Géneros:** Las películas se organizan automáticamente en **carpetas dinámicas (Grid 3x3)**.
- **Sincronización Automática:** El sistema cuenta con un detector de actividad global que refresca la base de datos de forma asíncrona.
- **Ciclo CRUD Completo:**
    - **Añadir:** Registro de películas con puntuación por estrellas y URL de imagen.
    - **Visualizar:** Listado filtrado por categorías con estados vacíos amigables.
    - **Editar:** Modificación total de registros (incluyendo cambio de género e imagen).
    - **Eliminar:** Limpieza de registros con confirmación de seguridad.
- **Identidad Visual:** Implementación de la paleta de colores oficial:
    - `Primary Dark: #272d62`
    - `Accent Purple: #7d6fb0`
    - `Soft Lavender: #9DA4CE`
    - `Deep Purple: #684F88`

---

##  Estructura del Repositorio

```text
PETIT-DESIGNS-MIS PELICULAS/
├── server.js               # Servidor API REST (Node.js)
├── peliculas.db            # Base de Datos Relacional (SQLite)
├── README.md               # Documentación del Proyecto
└── frontend-peliculas/     # Aplicación Cliente (Angular)
    ├── src/app/
    │   ├── app.ts          # Lógica de Negocio y Controladores
    │   ├── app.html        # Estructura y Vistas
    │   └── app.css         # Estética Petit Designs





Para desplegar este proyecto en un entorno local, siga estos pasos:

1. Configuración del Backend
Desde la raíz del proyecto, instale las dependencias y ejecute el servidor:
code
Bash
npm install express sqlite3 cors
node server.js
2. Configuración del Frontend
En una nueva terminal, entre a la carpeta de Angular e inicie la aplicación:
code
Bash
cd frontend-peliculas
npm install
ng serve -o
