# 🎯 PRÓXIMOS PASOS SIMPLIFICADOS - TECHPRO DEMO

> **📅 Para ejecutar:** 16-18 Julio 2025 (Esta semana)  
> **🎯 Objetivo:** Demo funcional con catálogo unificado  
> **⏰ Tiempo estimado:** 2-3 días trabajo simplificado

---

## 🚀 **DÍA 1: API SIMPLE Y DATOS DEMO**

### **🔧 Paso 1: Estructura básica (15 min)**

```bash
# Crear carpetas simplificadas
mkdir -p src/app/api/productos
mkdir -p src/app/api/categorias

# Crear archivos
touch src/app/api/productos/route.ts
touch src/app/api/productos/[id]/route.ts
touch src/app/api/categorias/route.ts
```

### **🗄️ Paso 2: Base de datos demo (1 hora)**

**Productos demo guatemaltecos:**

- Laptop ASUS ROG (Q8,500)
- Monitor LG 27" 4K (Q3,200)
- Fuente Corsair 650W (Q850)
- Teclado gaming (Q450)
- Mouse gaming (Q320)

**Categorías básicas:**

- Laptops
- Monitores
- Componentes
- Periféricos

### **🔗 Paso 3: API productos unificada (1 hora)**

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

    let query = supabase
      .from("productos")
      .select(
        `
        *,
        categorias(id, nombre)
      `
      )
      .gt("stock", 0);

    // Filtro por categoría
    if (categoria && categoria !== "todas") {
      query = query.eq("categoria_id", categoria);
    }

    // Búsqueda simple
    if (buscar) {
      query = query.ilike("nombre", `%${buscar}%`);
    }

    // Ordenamiento
    if (orden === "precio-asc") {
      query = query.order("precio");
    } else if (orden === "precio-desc") {
      query = query.order("precio", { ascending: false });
    } else {
      query = query.order("nombre");
    }

    const { data, error } = await query.limit(20);

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ productos: data });
  } catch (error) {
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
```

### **📝 Checklist Día 1:**

- [ ] API básica creada
- [ ] Supabase con 8-10 productos demo
- [ ] API `/api/productos` con filtros simples

---

## ⚡ **DÍA 2: PÁGINA UNIFICADA DE CATÁLOGO**

### **🔧 Paso 4: Actualizar navegación (30 min)**

**Eliminar redundancia productos/categorías:**

- En Header: cambiar "Productos" por "Catálogo"
- Eliminar página "/categorias" separada
- Todo en una sola página "/productos"

### **🎨 Paso 5: Página de catálogo mejorada (2 horas)**

#### **Archivo: `src/app/productos/page.tsx`**

```typescript
"use client";

import { useState, useEffect } from "react";
import { Product, Category } from "@/types";
import ProductCard from "@/components/ProductCard";

export default function CatalogoPage() {
  const [productos, setProductos] = useState<Product[]>([]);
  const [categorias, setCategorias] = useState<Category[]>([]);
  const [filtros, setFiltros] = useState({
    categoria: "todas",
    buscar: "",
    orden: "nombre",
  });
  const [loading, setLoading] = useState(true);

  // Cargar categorías
  useEffect(() => {
    fetch("/api/categorias")
      .then((res) => res.json())
      .then((data) => setCategorias(data.categorias));
  }, []);

  // Cargar productos con filtros
  useEffect(() => {
    setLoading(true);
    const params = new URLSearchParams();
    if (filtros.categoria !== "todas")
      params.append("categoria", filtros.categoria);
    if (filtros.buscar) params.append("q", filtros.buscar);
    params.append("orden", filtros.orden);

    fetch(`/api/productos?${params}`)
      .then((res) => res.json())
      .then((data) => {
        setProductos(data.productos || []);
        setLoading(false);
      });
  }, [filtros]);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            Catálogo TechPro
          </h1>
          <p className="text-gray-600">
            Encuentra la mejor tecnología al mejor precio en Guatemala
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
                placeholder="Ej: laptop gaming..."
                value={filtros.buscar}
                onChange={(e) =>
                  setFiltros({ ...filtros, buscar: e.target.value })
                }
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            {/* Categoría */}
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
                {categorias.map((cat) => (
                  <option key={cat.id} value={cat.id}>
                    {cat.nombre}
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
                <option value="precio-asc">Precio: menor a mayor</option>
                <option value="precio-desc">Precio: mayor a menor</option>
              </select>
            </div>
          </div>
        </div>

        {/* Resultados */}
        <div className="mb-4">
          <p className="text-gray-600">
            {loading
              ? "Cargando..."
              : `${productos.length} productos encontrados`}
          </p>
        </div>

        {/* Grid de productos */}
        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[...Array(6)].map((_, i) => (
              <div
                key={i}
                className="bg-white rounded-lg shadow-md p-6 animate-pulse"
              >
                <div className="h-48 bg-gray-200 rounded mb-4"></div>
                <div className="h-4 bg-gray-200 rounded mb-2"></div>
                <div className="h-4 bg-gray-200 rounded w-2/3"></div>
              </div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {productos.map((producto) => (
              <ProductCard key={producto.id} product={producto} />
            ))}
          </div>
        )}

        {productos.length === 0 && !loading && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">
              No se encontraron productos con estos filtros
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
```

### **📝 Checklist Día 2:**

- [ ] Navegación actualizada (solo "Catálogo")
- [ ] Página unificada con filtros básicos
- [ ] Búsqueda, categorías y ordenamiento funcionando

---

## 🎯 **DÍA 3: TOQUES FINALES DEMO**

### **🔧 Paso 6: Componente ProductCard mejorado (1 hora)**

```typescript
// Agregar precios en GTQ
// Mejorar diseño para demo
// Botón "Ver detalles" funcional
```

### **🎨 Paso 7: Página individual de producto (1 hora)**

```typescript
// Archivo: src/app/productos/[id]/page.tsx
// Vista detallada simple pero atractiva
// Especificaciones técnicas
// Botón agregar al carrito
```

### **💰 Paso 8: Conversión a GTQ (30 min)**

```typescript
// Utils para convertir USD a GTQ
// Formato de precio guatemalteco (Q1,299.00)
// Mostrar ambas monedas para referencia
```

### **📝 Checklist Día 3:**

- [ ] ProductCard con precios GTQ
- [ ] Página individual funcionando
- [ ] Conversión de moneda implementada
- [ ] Demo lista para presentar

---

## ✅ **RESULTADO FINAL - DEMO FUNCIONAL**

**Al completar estos 3 días tendremos:**

✅ **Catálogo unificado** - Sin redundancia productos/categorías  
✅ **Filtros básicos** - Búsqueda, categoría, ordenamiento  
✅ **Datos guatemaltecos** - Productos y precios locales  
✅ **Precios en GTQ** - Moneda local implementada  
✅ **UX limpia** - Interfaz simple pero profesional  
✅ **Demo lista** - Perfecta para presentación

---

## 🎯 **ENFOQUE DEMO vs E-COMMERCE**

### **✅ Lo que SÍ incluimos:**

- Catálogo atractivo con productos guatemaltecos
- Filtros básicos pero funcionales
- Precios en GTQ realistas
- UX moderna y responsive
- Carrito básico funcional

### **❌ Lo que NO necesitamos:**

- Sistema de usuarios complejo
- Proceso de pago real
- Inventario avanzado
- Analytics complicados
- SEO completo

---

**🎯 META: Demo atractiva y funcional en 3 días que muestre el potencial de TechPro Guatemala**

_Enfoque: Impresionar con funcionalidad y diseño, no complejidad._
