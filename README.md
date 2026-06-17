# Portfolio — Lucas Leanza

Portfolio personal full stack construido con el stack MERN (MongoDB, Express, Node.js, React + Vite).

## Stack

- **Frontend:** React 19, Vite, React Router, Axios, CSS Modules
- **Backend:** Node.js, Express 5, Mongoose
- **Base de datos:** MongoDB Atlas
- **Estilos:** CSS Modules con tema cyberpunk (JetBrains Mono, paleta violeta/cyan)

## Estructura del proyecto

```
portfolio/
├── client/          # Frontend — React + Vite
└── server/          # Backend — Express + Mongoose
```

## Requisitos previos

- [Node.js](https://nodejs.org/) v18 o superior
- Cuenta en [MongoDB Atlas](https://www.mongodb.com/atlas) con un cluster creado

## Instalación

### 1. Clonar el repositorio

```bash
git clone https://github.com/LucasLeanza/portfolio.git
cd portfolio
```

### 2. Instalar dependencias del backend

```bash
cd server
npm install
```

### 3. Instalar dependencias del frontend

```bash
cd ../client
npm install
```

### 4. Configurar variables de entorno del backend

Crear el archivo `server/.env`:

```env
MONGODB_URI=mongodb+srv://<usuario>:<password>@<cluster>.mongodb.net/<nombre-db>?retryWrites=true&w=majority
PORT=5000
```

> Reemplazar los valores con los de tu cluster de MongoDB Atlas.

## Correr en desarrollo

Necesitás dos terminales abiertas al mismo tiempo.

**Terminal 1 — Backend:**
```bash
cd server
npm run dev
```

El servidor corre en `http://localhost:5000`.

**Terminal 2 — Frontend:**
```bash
cd client
npm run dev
```

El frontend corre en `http://localhost:5173`.

## Scripts disponibles

### Backend (`/server`)

| Comando | Descripción |
|---------|-------------|
| `npm run dev` | Inicia el servidor con nodemon (recarga automática) |
| `npm start` | Inicia el servidor en producción |

### Frontend (`/client`)

| Comando | Descripción |
|---------|-------------|
| `npm run dev` | Inicia Vite en modo desarrollo |
| `npm run build` | Genera el build de producción en `dist/` |
| `npm run preview` | Previsualiza el build de producción localmente |

## Endpoints de la API

| Método | Ruta | Descripción |
|--------|------|-------------|
| GET | `/api/projects` | Lista todos los proyectos |
| GET | `/api/skills` | Lista todas las skills |
| GET | `/api/education` | Lista educación y certificaciones |
| GET | `/api/blog` | Lista posts del blog publicados |
| GET | `/api/blog/:slug` | Obtiene un post por su slug |
| POST | `/api/blog` | Crea un nuevo post |

## Variables de entorno

| Variable | Descripción | Requerida |
|----------|-------------|-----------|
| `MONGODB_URI` | Connection string de MongoDB Atlas | Sí |
| `PORT` | Puerto del servidor (default: 5000) | No |

> **Nota antes del deploy:** cambiar el `baseURL` en `client/src/services/api.js` de `http://localhost:5000/api` a la URL del backend desplegado, o usar una variable de entorno de Vite (`import.meta.env.VITE_API_URL`).

## Deploy

- **Backend:** [Render](https://render.com) — conectar el repo y configurar las variables de entorno
- **Frontend:** [Vercel](https://vercel.com) — conectar el repo, directorio raíz `client/`