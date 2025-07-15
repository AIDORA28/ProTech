# TechPro V2 - E-commerce de Tecnología

Una moderna tienda en línea de productos tecnológicos construida con Next.js, TypeScript, Tailwind CSS y Supabase.

## 🚀 Características

- **Next.js 15** con App Router
- **TypeScript** para type safety
- **Tailwind CSS** para estilos modernos y responsivos
- **Supabase** como base de datos y backend
- **Carrito de compras** funcional con contexto global
- **Diseño responsivo** optimizado para móviles y desktop
- **Componentes reutilizables** y bien estructurados

## 🛠️ Tecnologías

- [Next.js](https://nextjs.org/) - Framework de React
- [TypeScript](https://www.typescriptlang.org/) - Tipado estático
- [Tailwind CSS](https://tailwindcss.com/) - Framework de CSS
- [Supabase](https://supabase.com/) - Base de datos y autenticación
- [Lucide React](https://lucide.dev/) - Iconos

## 📦 Instalación

1. Clona el repositorio:

```bash
git clone <url-del-repositorio>
cd v2
```

2. Instala las dependencias:

```bash
npm install
```

3. Configura las variables de entorno:

```bash
cp .env.local.example .env.local
```

Edita `.env.local` con tus credenciales de Supabase:

```env
NEXT_PUBLIC_SUPABASE_URL=https://azensanwwrtzezqcjgwy.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=tu_clave_anonima_aqui
```

## 🔧 Configuración de Supabase

### Paso 1: Obtener las credenciales

1. Ve a tu dashboard de Supabase: https://supabase.com/dashboard/project/azensanwwrtzezqcjgwy
2. Ve a **Settings** → **API**
3. Copia la **URL** del proyecto
4. Copia la **anon/public key**
5. Pega estos valores en tu archivo `.env.local`

### Paso 2: Crear las tablas en Supabase

1. Ve a **SQL Editor** en tu dashboard de Supabase
2. Copia y ejecuta el siguiente SQL:

```sql
-- Crear tabla de productos
CREATE TABLE products (
  id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
  name text NOT NULL,
  description text,
  price decimal(10,2) NOT NULL,
  image_url text,
  category text NOT NULL,
  stock integer DEFAULT 0,
  featured boolean DEFAULT false,
  created_at timestamp with time zone DEFAULT timezone('utc'::text, now()) NOT NULL,
  updated_at timestamp with time zone DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Crear tabla de órdenes
CREATE TABLE orders (
  id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
  user_email text NOT NULL,
  total decimal(10,2) NOT NULL,
  status text DEFAULT 'pending',
  created_at timestamp with time zone DEFAULT timezone('utc'::text, now()) NOT NULL,
  updated_at timestamp with time zone DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Crear tabla de items de orden
CREATE TABLE order_items (
  id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
  order_id uuid REFERENCES orders(id) ON DELETE CASCADE,
  product_id uuid REFERENCES products(id) ON DELETE CASCADE,
  quantity integer NOT NULL,
  price decimal(10,2) NOT NULL,
  created_at timestamp with time zone DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Insertar productos de ejemplo
INSERT INTO products (name, description, price, image_url, category, stock, featured) VALUES
('Laptop Gaming ROG', 'Laptop gaming de alto rendimiento con procesador Intel i7, 16GB RAM, RTX 4060, 512GB SSD', 1299.99, '/img/Categorias/Laptop/Laptop/IDEAPAD SLIM 3 15AMN8.jpeg', 'Laptops', 5, true),
('Monitor LG 27 4K', 'Monitor 4K de 27 pulgadas con tecnología IPS, ideal para profesionales del diseño y gaming', 399.99, '/img/Categorias/Pantalla/Pantallas/LG.jpeg', 'Monitores', 8, true),
('Fuente de Poder 650W', 'Fuente de poder modular 80+ Gold de 650W, altamente eficiente y confiable', 89.99, '/img/Categorias/Componentes/Fuente de Poder/Fuente de Poder G650w.jpeg', 'Componentes', 12, true);
```

## 🚀 Subir a GitHub y Desplegar en Vercel

### Paso 1: Crear repositorio en GitHub

1. Ve a [GitHub.com](https://github.com)
2. Haz clic en **"New repository"** (botón verde)
3. Nombre: `ProTech`
4. Descripción: ``
5. Selecciona **Public** o **Private**
6. **NO marques** "Add a README file" (ya tenemos uno)
7. Haz clic en **"Create repository"**

### Paso 2: Subir tu proyecto a GitHub

En tu terminal, ejecuta estos comandos uno por uno:

```bash
# Inicializar Git (si no está inicializado)
git init

# Agregar todos los archivos
git add .

# Hacer el primer commit
git commit -m "Proyecto inicial ProTech E-commerce"

# Agregar el repositorio remoto (cambia USERNAME por tu usuario de GitHub)
git remote add origin https://github.com/AIDORA28/ProTech.git

# Subir al repositorio
git push -u origin main
```

### Paso 3: Desplegar en Vercel

1. Ve a [Vercel.com](https://vercel.com)
2. Haz clic en **"Import Project"**
3. Conecta con GitHub
4. Selecciona tu repositorio `protech-ecommerce`
5. En **Environment Variables**, agrega:
   - `NEXT_PUBLIC_SUPABASE_URL`: https://azensanwwrtzezqcjgwy.supabase.co
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY`: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImF6ZW5zYW53d3J0emV6cWNqZ3d5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTI1OTU5OTksImV4cCI6MjA2ODE3MTk5OX0.TNDgTRl3YZg-2hmd1bNy67nMtBJ-WBOh_hhh5KOzVZU
6. Haz clic en **"Deploy"**

4. Inicia el servidor de desarrollo:

```bash
npm run dev
```

Abre [http://localhost:3500](http://localhost:3500) en tu navegador.

### 🖼️ Configuración de Imágenes
Si ves errores de imágenes, ejecuta:
```bash
# Copiar imágenes a la carpeta public
cp -r img/* public/img/
```

## 🗂️ Estructura del Proyecto

```
src/
├── app/                    # App Router de Next.js
│   ├── carrito/           # Página del carrito
│   ├── productos/         # Páginas de productos
│   ├── globals.css        # Estilos globales
│   ├── layout.tsx         # Layout principal
│   └── page.tsx           # Página de inicio
├── components/            # Componentes reutilizables
│   ├── Header.tsx         # Header de navegación
│   └── Footer.tsx         # Footer del sitio
├── context/               # Contextos de React
│   └── CartContext.tsx    # Contexto del carrito
├── lib/                   # Configuraciones y utilidades
│   └── supabase.ts        # Cliente de Supabase
└── types/                 # Definiciones de tipos
    └── index.ts           # Tipos TypeScript
```

## 🎯 Funcionalidades

### ✅ Implementadas

- [x] Página de inicio con productos destacados
- [x] Listado de productos con filtros
- [x] Carrito de compras funcional
- [x] Navegación responsiva
- [x] Páginas de detalle de productos
- [x] Contexto global para el carrito
- [x] Tipos TypeScript para toda la aplicación

### 🚧 En desarrollo

- [ ] Integración completa con Supabase
- [ ] Sistema de autenticación
- [ ] Proceso de checkout
- [ ] Gestión de pedidos
- [ ] Panel de administración
- [ ] Búsqueda avanzada
- [ ] Sistema de reseñas

## 🎨 Diseño

El diseño sigue las mejores prácticas de UX/UI:

- **Colores**: Paleta azul y púrpura profesional
- **Tipografía**: Inter font para mejor legibilidad
- **Iconos**: Lucide React para consistencia
- **Responsive**: Mobile-first approach
- **Accesibilidad**: Contraste adecuado y navegación por teclado

## 🚀 Despliegue

### Vercel (Recomendado)

1. Conecta tu repositorio a [Vercel](https://vercel.com/)
2. Configura las variables de entorno en Vercel
3. Despliega automáticamente

### Otras plataformas

El proyecto es compatible con cualquier plataforma que soporte Next.js:

- Netlify
- AWS Amplify
- Railway
- Render

## 🤝 Contribución

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia MIT - mira el archivo [LICENSE](LICENSE) para más detalles.

## 📞 Contacto

TechPro V2 - [contacto@techpro.com](mailto:contacto@techpro.com)

Enlace del proyecto: [https://github.com/usuario/techpro-v2](https://github.com/usuario/techpro-v2)

## ⚡ Quick Start (Para principiantes en Git/GitHub)

### Opción 1: Script automático

```bash
# Ejecutar el script de configuración
./setup-git.sh
```

### Opción 2: Comandos manuales

```bash
# 1. Inicializar Git
git init

# 2. Agregar archivos
git add .

# 3. Primer commit
git commit -m "Proyecto inicial ProTech E-commerce"

# 4. Agregar origen remoto (cambia TU_USUARIO)
git remote add origin https://github.com/TU_USUARIO/protech-ecommerce.git

# 5. Subir a GitHub
git push -u origin main
```

## 🔑 Variables de Entorno Importantes

Para que tu aplicación funcione correctamente, necesitas:

1. **NEXT_PUBLIC_SUPABASE_URL**: Tu URL de Supabase
2. **NEXT_PUBLIC_SUPABASE_ANON_KEY**: Tu clave pública de Supabase

### Dónde encontrar estas claves:

1. Ve a: https://supabase.com/dashboard/project/azensanwwrtzezqcjgwy/settings/api
2. Copia **Project URL** → es tu `NEXT_PUBLIC_SUPABASE_URL`
3. Copia **Project API keys** → **anon public** → es tu `NEXT_PUBLIC_SUPABASE_ANON_KEY`

## 🆘 Solución de Problemas

### Error: "Cannot find module '@/components/Footer'"

**Solución**: Ya está solucionado en esta versión.

### Error al conectar con Supabase

1. Verifica que las variables de entorno estén correctas
2. Asegúrate de que tu proyecto de Supabase esté activo
3. Ejecuta las queries SQL para crear las tablas

### Problemas con GitHub

1. Asegúrate de tener Git instalado: `git --version`
2. Configura tu usuario: `git config --global user.email "tu@email.com"`
3. Configura tu nombre: `git config --global user.name "Tu Nombre"`

## 🚨 Solución al Error "Internal Server Error"

Si al abrir la página ves "Internal Server Error", sigue estos pasos:

### ✅ Solución Rápida (1 minuto)
```bash
# Ejecutar script automático
./fix-issues.sh

# Luego iniciar el servidor
npm run dev
```

### 🔧 Solución Manual
```bash
# 1. Copiar imágenes a public
cp -r img/* public/img/

# 2. Limpiar caché
rm -rf .next

# 3. Verificar .env.local existe
ls -la .env.local

# 4. Iniciar servidor
npm run dev
```

### 📍 Verificar que Todo Funciona
1. Ve a: http://localhost:3500
2. Si aún hay errores, ve a: http://localhost:3500/test
3. Revisa la consola del navegador para más detalles

### 🔍 Causas Comunes del Error
- ❌ **Imágenes faltantes**: Las imágenes están en `img/` pero la app las busca en `public/img/`
- ❌ **Variables de entorno**: Falta el archivo `.env.local`
- ❌ **Puerto ocupado**: Otro proceso usa el puerto 3500
- ❌ **Caché corrupto**: La carpeta `.next` tiene problemas

### 🚨 Si Persiste el Error
```bash
# Verificar qué está usando el puerto 3500
sudo lsof -i :3500

# Cambiar a otro puerto
npm run dev -- -p 3501
```

## 🔧 Configuración de Supabase
