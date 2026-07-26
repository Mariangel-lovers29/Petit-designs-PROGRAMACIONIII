# Petit ★ DESIGNS - Sistema de Gestión Multimedia
> **"Pequeñas Ideas, Gran Impacto"**

Bienvenido a **Mis Películas**, una plataforma integral de gestión cinematográfica desarrollada con una arquitectura moderna desacoplada. Este proyecto combina la elegancia del diseño artesanal con la potencia de las tecnologías web actuales.

---

## Información 

| **Estudiante** | Mariangel Ortiz Petit |
| **Cédula de Identidad** | 31.100.638 |
| **Institución** | UNETI (Universidad Nacional Experimental de las Telecomunicaciones e Informática) |
| **Materia** | Programación III \| Módulo 1 |
| **Año** | 2026 |

---

## Especificaciones Técnicas 

El sistema ha sido diseñado bajo una arquitectura de **Módulo Único y Persistencia Relacional**:

| **Frontend** | [Angular 18](https://angular.dev/) (Standalone Components) | Interfaz reactiva y de alto rendimiento |
| **Backend** | [Node.js](https://nodejs.org/) & [Express](https://expressjs.com/) | API REST robusta para gestión de datos |
| **Base de Datos** | [SQLite3](https://www.sqlite.org/) | Motor relacional que garantiza integridad local |
| **Diseño** | CSS3 con variables personalizadas | Texturas de papel arrugado, tipografías *Montserrat* y *Playfair Display* |

---

##  Características del Proyecto

### Navegación Inteligente por Géneros
- Las películas se organizan automáticamente en **carpetas dinámicas (Grid 3x3)**

### Sincronización Automática
- Detector de actividad global que refresca la base de datos de forma asíncrona

### Ciclo CRUD Completo
- **Añadir:** Registro con puntuación por estrellas y URL de imagen
- **Visualizar:** Listado filtrado por categorías con estados vacíos amigables
- **Editar:** Modificación total de registros (género, imagen, datos)
- **Eliminar:** Limpieza de registros con confirmación de seguridad

### Identidad Visual
Paleta de colores oficial del proyecto:


| Primary Dark | `#272d62` | Elementos principales |
| Accent Purple | `#7d6fb0` | Acentos y detalles |
| Soft Lavender | `#9DA4CE` | Fondos y sutilezas |
| Deep Purple | `#684F88` | Contraste y profundidad |

---

##  Estructura del Repositorio

```
PETIT-DESIGNS-MIS PELICULAS/
├── server.js               # Servidor API REST (Node.js)
├── peliculas.db            # Base de Datos Relacional (SQLite)
├── README.md               # Documentación del Proyecto
└── frontend-peliculas/     # Aplicación Cliente (Angular)
    ├── src/app/
    │   ├── app.ts          # Lógica de Negocio y Controladores
    │   ├── app.html        # Estructura y Vistas
    │   └── app.css         # Estética Petit Designs
```

---

##  Instalación y Despliegue

Para desplegar este proyecto en un entorno local, sigue estos pasos:

### 1. Configuración del Backend
Desde la raíz del proyecto, instala las dependencias y ejecuta el servidor:

```bash
npm install express sqlite3 cors
node server.js
```

### 2. Configuración del Frontend
En una nueva terminal, entra a la carpeta de Angular e inicia la aplicación:

```bash
cd frontend-peliculas
npm install
ng serve -o
```

---

## 📌 Notas Adicionales

- El servidor backend correrá por defecto en `http://localhost:3000`
- La aplicación Angular estará disponible en `http://localhost:4200`
- Asegúrate de que ambos servicios estén ejecutándose simultáneamente para el correcto funcionamiento


**Desarrollado con ❤️ por Mariangel Ortiz Petit**  
*Petit Designs - Pequeñas Ideas, Gran Impacto*
```
