# 🚀 PASOS ACTUALIZADOS - DEPLOY VERCEL SIN ERRORES

> **📅 Actualizado:** 16 Julio 2025  
> **🎯 Objetivo:** Demo funcional en Vercel sin errores  
> **⚠️ IMPORTANTE:** Evitar errores de deploy y runtime

---

## ⚠️ **LIMITACIONES ACTUALES CONFIRMADAS**

### **🗄️ Base de Datos:**

- ✅ **Solo tabla `productos`** en Supabase
- ❌ **NO tabla `categorias`** (crear más adelante)
- 🔗 **Imágenes:** Rutas en BD que apuntan a `/public/img/...`
- 📁 **Imagen por defecto:** `Categoria-Defecto.jpg` para productos sin imagen

### **📁 Estructura de Imágenes:**

```
public/img/
├── Categoria-Defecto.jpg (IMAGEN POR DEFECTO)
├── Categorias/
│   ├── Laptop/
│   ├── Componentes/
│   └── Pantalla/
└── ...
```

### **🚫 EVITAR ERRORES:**

- No referenciar tabla `categorias` que no existe
- No usar imágenes que no existen
- Siempre fallback a imagen por defecto
- Manejar casos donde imagen_url es null

---

## 🚀 **DÍA 1: API SIMPLE SIN ERRORES**

### **🔧 Paso 1: Estructura básica (10 min)**

```bash
# Solo crear lo que necesitamos
mkdir -p src/app/api/productos
touch src/app/api/productos/route.ts
touch src/app/api/productos/[id]/route.ts
```

### **🗄️ Paso 2: Verificar tabla productos en Supabase (30 min)**

**Estructura mínima requerida:**

```sql
-- Verificar que existe esta estructura en Supabase
CREATE TABLE productos (
  id SERIAL PRIMARY KEY,
  nombre VARCHAR(255) NOT NULL,
  descripcion TEXT,
  precio DECIMAL(10,2) NOT NULL,
  imagen_url VARCHAR(255), -- Ruta: /img/Categorias/...
  categoria VARCHAR(100), -- Texto simple, no FK
  stock INTEGER DEFAULT 0,
  created_at TIMESTAMP DEFAULT NOW()
);
```

### **📦 Paso 3: Poblar con productos demo SEGUROS (30 min)**

```sql
-- Insertar productos que SÍ funcionarán
INSERT INTO productos (nombre, descripcion, precio, imagen_url, categoria, stock) VALUES
('Laptop Gaming ASUS ROG', 'Laptop gaming de alto rendimiento', 8500.00, '/img/Categorias/Laptop/Laptop/IDEAPAD SLIM 3 15AMN8.jpeg', 'Laptops', 5),
('Monitor LG 27" 4K', 'Monitor profesional 4K para gaming y trabajo', 3200.00, '/img/Categorias/Pantalla/Pantallas/LG.jpeg', 'Monitores', 8),
('Fuente de Poder 650W', 'Fuente de poder certificada 80+ Gold', 850.00, '/img/Categorias/Componentes/Fuente de Poder/Fuente de Poder G650w.jpeg', 'Componentes', 12),
('Laptop Lenovo IdeaPad', 'Laptop para oficina y estudiantes', 4500.00, '/img/Categorias/Laptop/Laptop/IDEAPAD SLIM 3 15AMN8.jpeg', 'Laptops', 3),
('Producto Sin Imagen', 'Producto de prueba sin imagen', 1200.00, NULL, 'Periféricos', 7);
```

### **🔗 Paso 4: API productos SIN ERRORES (45 min)**

#### **Archivo: `src/app/api/productos/route.ts`**

```typescript
import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const categoria = searchParams.get("categoria");
    const buscar = searchParams.get("q");
    const orden = searchParams.get("orden") || "nombre";

    let query = supabase.from("productos").select("*").gt("stock", 0); // Solo productos en stock

    // Filtro por categoría (texto simple)
    if (categoria && categoria !== "todas") {
      query = query.ilike("categoria", categoria);
    }

    // Búsqueda simple
    if (buscar && buscar.length >= 2) {
      query = query.ilike("nombre", `%${buscar}%`);
    }

    // Ordenamiento seguro
    if (orden === "precio-asc") {
      query = query.order("precio", { ascending: true });
    } else if (orden === "precio-desc") {
      query = query.order("precio", { ascending: false });
    } else {
      query = query.order("nombre", { ascending: true });
    }

    const { data, error } = await query.limit(20);

    if (error) {
      console.error("Error Supabase:", error);
      return NextResponse.json(
        {
          error: "Error al cargar productos",
          productos: [],
        },
        { status: 500 }
      );
    }

    // Asegurar imagen por defecto
    const productosConImagen = (data || []).map((producto) => ({
      ...producto,
      imagen_url:
        producto.imagen_url || "/img/Categorias/Categoria-Defecto.jpg",
    }));

    return NextResponse.json({
      productos: productosConImagen,
      total: productosConImagen.length,
    });
  } catch (error) {
    console.error("Error API:", error);
    return NextResponse.json(
      {
        error: "Error interno del servidor",
        productos: [],
      },
      { status: 500 }
    );
  }
}
```

#### **Archivo: `src/app/api/productos/[id]/route.ts`**

```typescript
import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const { data, error } = await supabase
      .from("productos")
      .select("*")
      .eq("id", params.id)
      .single();

    if (error || !data) {
      return NextResponse.json(
        {
          error: "Producto no encontrado",
        },
        { status: 404 }
      );
    }

    // Asegurar imagen por defecto
    const producto = {
      ...data,
      imagen_url: data.imagen_url || "/img/Categorias/Categoria-Defecto.jpg",
    };

    return NextResponse.json({ producto });
  } catch (error) {
    console.error("Error API:", error);
    return NextResponse.json(
      {
        error: "Error interno del servidor",
      },
      { status: 500 }
    );
  }
}
```

### **📝 Checklist Día 1:**

- [ ] Tabla productos verificada en Supabase
- [ ] Productos demo insertados con rutas correctas
- [ ] API `/api/productos` funcionando sin errores
- [ ] API `/api/productos/[id]` funcionando
- [ ] Fallback a imagen por defecto implementado

---

## ⚡ **DÍA 2: FRONTEND SIN CATEGORÍAS**

### **🔧 Paso 5: Actualizar tipos TypeScript (15 min)**

#### **Archivo: `src/types/index.ts`**

```typescript
export interface Product {
  id: number;
  nombre: string;
  descripcion: string | null;
  precio: number;
  imagen_url: string; // Siempre tendrá valor (fallback aplicado)
  categoria: string; // Texto simple, no objeto
  stock: number;
  created_at: string;
}

// Categorías hardcodeadas para filtros
export const CATEGORIAS_DISPONIBLES = [
  "Laptops",
  "Monitores",
  "Componentes",
  "Periféricos",
] as const;

export type CategoriaType = (typeof CATEGORIAS_DISPONIBLES)[number];
```

### **🎨 Paso 6: Página catálogo SIN tabla categorías (1 hora)**

#### **Archivo: `src/app/productos/page.tsx`**

```typescript
"use client";

import { useState, useEffect } from "react";
import { Product, CATEGORIAS_DISPONIBLES } from "@/types";
import ProductCard from "@/components/ProductCard";
import Image from "next/image";

export default function CatalogoPage() {
  const [productos, setProductos] = useState<Product[]>([]);
  const [filtros, setFiltros] = useState({
    categoria: "todas",
    buscar: "",
    orden: "nombre",
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Cargar productos con manejo de errores
  useEffect(() => {
    const cargarProductos = async () => {
      try {
        setLoading(true);
        setError(null);

        const params = new URLSearchParams();
        if (filtros.categoria !== "todas") {
          params.append("categoria", filtros.categoria);
        }
        if (filtros.buscar.trim()) {
          params.append("q", filtros.buscar.trim());
        }
        params.append("orden", filtros.orden);

        const response = await fetch(`/api/productos?${params}`);
        const data = await response.json();

        if (!response.ok) {
          throw new Error(data.error || "Error al cargar productos");
        }

        setProductos(data.productos || []);
      } catch (err) {
        console.error("Error cargando productos:", err);
        setError(err instanceof Error ? err.message : "Error desconocido");
        setProductos([]);
      } finally {
        setLoading(false);
      }
    };

    cargarProductos();
  }, [filtros]);

  if (error) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center p-8">
          <h2 className="text-2xl font-bold text-red-600 mb-4">
            Error al cargar productos
          </h2>
          <p className="text-gray-600 mb-4">{error}</p>
          <button
            onClick={() => window.location.reload()}
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            Reintentar
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            Catálogo TechPro Guatemala
          </h1>
          <p className="text-gray-600">
            La mejor tecnología al mejor precio en Guatemala
          </p>
        </div>

        {/* Filtros */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Búsqueda */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Buscar producto
              </label>
              <input
                type="text"
                placeholder="Buscar laptop, monitor..."
                value={filtros.buscar}
                onChange={(e) =>
                  setFiltros({ ...filtros, buscar: e.target.value })
                }
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            {/* Categoría hardcodeada */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Categoría
              </label>
              <select
                value={filtros.categoria}
                onChange={(e) =>
                  setFiltros({ ...filtros, categoria: e.target.value })
                }
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="todas">Todas las categorías</option>
                {CATEGORIAS_DISPONIBLES.map((cat) => (
                  <option key={cat} value={cat}>
                    {cat}
                  </option>
                ))}
              </select>
            </div>

            {/* Ordenar */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Ordenar por
              </label>
              <select
                value={filtros.orden}
                onChange={(e) =>
                  setFiltros({ ...filtros, orden: e.target.value })
                }
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="nombre">Nombre A-Z</option>
                <option value="precio-asc">Precio: Q menor a mayor</option>
                <option value="precio-desc">Precio: Q mayor a menor</option>
              </select>
            </div>
          </div>
        </div>

        {/* Resultados */}
        <div className="mb-4 flex justify-between items-center">
          <p className="text-gray-600">
            {loading
              ? "Cargando productos..."
              : `${productos.length} productos encontrados`}
          </p>
        </div>

        {/* Grid de productos */}
        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[...Array(6)].map((_, i) => (
              <div
                key={i}
                className="bg-white rounded-lg shadow-md p-6 animate-pulse"
              >
                <div className="h-48 bg-gray-200 rounded mb-4"></div>
                <div className="h-4 bg-gray-200 rounded mb-2"></div>
                <div className="h-4 bg-gray-200 rounded w-2/3 mb-4"></div>
                <div className="h-6 bg-gray-200 rounded w-1/2"></div>
              </div>
            ))}
          </div>
        ) : productos.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {productos.map((producto) => (
              <ProductCard key={producto.id} product={producto} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <div className="relative w-32 h-32 mx-auto mb-4">
              <Image
                src="/img/Categorias/Categoria-Defecto.jpg"
                alt="Sin productos"
                fill
                className="object-contain opacity-50"
              />
            </div>
            <p className="text-gray-500 text-lg mb-2">
              No se encontraron productos
            </p>
            <p className="text-gray-400">
              Intenta cambiar los filtros de búsqueda
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
```

### **📝 Checklist Día 2:**

- [ ] Tipos TypeScript actualizados
- [ ] Categorías hardcodeadas (sin BD)
- [ ] Página catálogo con manejo de errores
- [ ] Fallbacks para casos sin productos

---

## 🎯 **DÍA 3: COMPONENTES SEGUROS**

### **🔧 Paso 7: ProductCard con imagen segura (30 min)**

#### **Archivo: `src/components/ProductCard.tsx`**

```typescript
"use client";

import Image from "next/image";
import Link from "next/link";
import { Product } from "@/types";
import { ShoppingCart } from "lucide-react";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  // Función para formatear precio en GTQ
  const formatPrecio = (precio: number) => {
    return new Intl.NumberFormat("es-GT", {
      style: "currency",
      currency: "GTQ",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(precio);
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      {/* Imagen con fallback múltiple */}
      <div className="relative h-48 bg-gray-100">
        <Image
          src={product.imagen_url}
          alt={product.nombre}
          fill
          className="object-contain p-4"
          onError={(e) => {
            // Fallback si la imagen falla
            const target = e.target as HTMLImageElement;
            target.src = "/img/Categorias/Categoria-Defecto.jpg";
          }}
        />

        {/* Badge de categoría */}
        <div className="absolute top-2 left-2">
          <span className="bg-blue-600 text-white text-xs px-2 py-1 rounded-full">
            {product.categoria}
          </span>
        </div>

        {/* Badge de stock */}
        <div className="absolute top-2 right-2">
          <span className="bg-green-600 text-white text-xs px-2 py-1 rounded-full">
            Stock: {product.stock}
          </span>
        </div>
      </div>

      <div className="p-6">
        {/* Nombre del producto */}
        <h3 className="font-semibold text-lg mb-2 text-gray-900 line-clamp-2">
          {product.nombre}
        </h3>

        {/* Descripción */}
        {product.descripcion && (
          <p className="text-gray-600 text-sm mb-3 line-clamp-2">
            {product.descripcion}
          </p>
        )}

        {/* Precio */}
        <div className="flex items-center justify-between">
          <div>
            <span className="text-2xl font-bold text-blue-600">
              {formatPrecio(product.precio)}
            </span>
            <p className="text-xs text-gray-500">Precio en Quetzales</p>
          </div>

          {/* Botones */}
          <div className="flex gap-2">
            <Link
              href={`/productos/${product.id}`}
              className="bg-gray-600 text-white px-3 py-2 rounded text-sm hover:bg-gray-700 transition-colors"
            >
              Ver
            </Link>
            <button className="bg-blue-600 text-white p-2 rounded hover:bg-blue-700 transition-colors">
              <ShoppingCart className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
```

### **🔧 Paso 8: Página individual de producto (45 min)**

#### **Archivo: `src/app/productos/[id]/page.tsx`**

```typescript
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ShoppingCart } from "lucide-react";

async function getProducto(id: string) {
  try {
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";
    const res = await fetch(`${baseUrl}/api/productos/${id}`, {
      cache: "no-store", // Para desarrollo
    });

    if (!res.ok) {
      return null;
    }

    const data = await res.json();
    return data.producto;
  } catch (error) {
    console.error("Error fetching producto:", error);
    return null;
  }
}

export default async function ProductoPage({
  params,
}: {
  params: { id: string };
}) {
  const producto = await getProducto(params.id);

  if (!producto) {
    notFound();
  }

  const formatPrecio = (precio: number) => {
    return new Intl.NumberFormat("es-GT", {
      style: "currency",
      currency: "GTQ",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(precio);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Navegación */}
        <div className="mb-6">
          <Link
            href="/productos"
            className="inline-flex items-center text-blue-600 hover:text-blue-800"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Volver al catálogo
          </Link>
        </div>

        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-8">
            {/* Imagen del producto */}
            <div className="relative">
              <div className="aspect-square relative bg-gray-100 rounded-lg overflow-hidden">
                <Image
                  src={producto.imagen_url}
                  alt={producto.nombre}
                  fill
                  className="object-contain p-8"
                  priority
                />
              </div>
            </div>

            {/* Información del producto */}
            <div className="flex flex-col">
              {/* Categoría */}
              <div className="mb-4">
                <span className="bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full">
                  {producto.categoria}
                </span>
              </div>

              {/* Nombre */}
              <h1 className="text-3xl font-bold text-gray-900 mb-4">
                {producto.nombre}
              </h1>

              {/* Descripción */}
              {producto.descripcion && (
                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Descripción
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    {producto.descripcion}
                  </p>
                </div>
              )}

              {/* Precio */}
              <div className="mb-6">
                <div className="flex items-baseline gap-2">
                  <span className="text-4xl font-bold text-blue-600">
                    {formatPrecio(producto.precio)}
                  </span>
                  <span className="text-gray-500">GTQ</span>
                </div>
                <p className="text-sm text-gray-500 mt-1">
                  Precio en Quetzales Guatemaltecos
                </p>
              </div>

              {/* Stock */}
              <div className="mb-8">
                <div className="flex items-center gap-2">
                  <span className="text-gray-700">Stock disponible:</span>
                  <span className="font-semibold text-green-600">
                    {producto.stock} unidades
                  </span>
                </div>
              </div>

              {/* Botones */}
              <div className="flex gap-4">
                <button className="flex-1 bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center gap-2">
                  <ShoppingCart className="w-5 h-5" />
                  Agregar al carrito
                </button>
                <button className="px-6 py-3 border border-gray-300 rounded-lg font-semibold hover:bg-gray-50 transition-colors">
                  Comparar
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
```

### **📝 Checklist Día 3:**

- [ ] ProductCard con imagen segura y fallback
- [ ] Página individual funcionando
- [ ] Formato GTQ implementado
- [ ] Manejo de errores de imagen

---

## ✅ **VERIFICACIÓN ANTES DE DEPLOY**

### **🧪 Checklist de Deploy Seguro:**

#### **APIs:**

- [ ] `/api/productos` responde sin errores
- [ ] `/api/productos/[id]` maneja IDs inválidos
- [ ] Todas las imágenes tienen fallback
- [ ] No referencias a tabla `categorias`

#### **Frontend:**

- [ ] Página `/productos` carga sin errores
- [ ] Filtros funcionan aunque estén hardcodeados
- [ ] Páginas individuales no rompen con productos inexistentes
- [ ] Imágenes cargan o muestran fallback

#### **Variables de Entorno Vercel:**

```bash
NEXT_PUBLIC_SUPABASE_URL=tu_url_supabase
NEXT_PUBLIC_SUPABASE_ANON_KEY=tu_key_supabase
NEXT_PUBLIC_BASE_URL=https://tu-proyecto.vercel.app
```

---

## 🎯 **RESULTADO GARANTIZADO**

**Al seguir estos pasos tendremos:**

✅ **Demo funcional en Vercel** sin errores de deploy  
✅ **Solo tabla productos** - Sin complejidad innecesaria  
✅ **Imágenes seguras** - Fallback garantizado  
✅ **Precios en GTQ** - Formato guatemalteco  
✅ **Manejo de errores** - UX resiliente  
✅ **Categorías simples** - Hardcodeadas pero funcionales

---

## ⚠️ **NOTAS CRÍTICAS PARA VERCEL**

1. **No referenciar tablas inexistentes** ❌
2. **Siempre usar fallback de imagen** ✅
3. **Manejar casos null/undefined** ✅
4. **URLs de API absolutas en producción** ✅
5. **Variables de entorno configuradas** ✅

**🎯 Este plan garantiza un deploy exitoso en Vercel sin errores de runtime.**
