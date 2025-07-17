# 🔥 PRÓXIMOS PASOS - TECHPRO DEMO

> **📅 Para ejecutar:** 16-19 Julio 2025 (Esta semana)  
> **🎯 Objetivo:** Demo funcional con catálogo unificado  
> **⏰ Tiempo estimado:** 2-3 días de trabajo simplificado

---

## 🚀 **DÍA 1: SETUP DE APIs Y BASE DE DATOS**

### **🔧 Paso 1: Preparar estructura de APIs (30 min)**

```bash
# Crear carpetas de API
mkdir -p src/app/api/productos
mkdir -p src/app/api/categorias
mkdir -p src/app/api/buscar

# Crear archivos base
touch src/app/api/productos/route.ts
touch src/app/api/productos/[id]/route.ts
touch src/app/api/categorias/route.ts
touch src/app/api/buscar/route.ts
```

### **🗄️ Paso 2: Configurar Supabase y poblar datos (2 horas)**

#### **A. Verificar conexión Supabase:**

```typescript
// Verificar en src/lib/supabase.ts
console.log("Supabase URL:", process.env.NEXT_PUBLIC_SUPABASE_URL);
console.log(
  "Supabase Key:",
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ? "OK" : "MISSING"
);
```

#### **B. Ejecutar scripts en Supabase:**

1. **Abrir Supabase Dashboard**
2. **Ir a SQL Editor**
3. **Ejecutar:** `base-datos/01-crear-tablas.sql` (adaptado para PostgreSQL)
4. **Ejecutar:** `base-datos/02-datos-iniciales.sql`

#### **C. Adaptar scripts SQL para PostgreSQL:**

```sql
-- Convertir de SQL Server a PostgreSQL
-- Cambiar IDENTITY(1,1) por SERIAL
-- Cambiar NVARCHAR por VARCHAR
-- Cambiar DATETIME2 por TIMESTAMP
-- Cambiar BIT por BOOLEAN
```

### **🔗 Paso 3: Crear primera API - Productos (1.5 horas)**

#### **Archivo: `src/app/api/productos/route.ts`**

```typescript
import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const categoria = searchParams.get("categoria");
    const limit = searchParams.get("limit") || "12";

    let query = supabase
      .from("productos")
      .select(
        `
        *,
        categorias (
          id,
          nombre
        )
      `
      )
      .eq("activo", true)
      .limit(parseInt(limit));

    if (categoria) {
      query = query.eq("categoria_id", categoria);
    }

    const { data, error } = await query;

    if (error) {
      console.error("Error fetching productos:", error);
      return NextResponse.json(
        { error: "Error fetching products" },
        { status: 500 }
      );
    }

    return NextResponse.json({ productos: data });
  } catch (error) {
    console.error("API Error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
```

### **📝 Checklist Día 1:**

- [ ] APIs estructura creada
- [ ] Supabase conectado y verificado
- [ ] Base de datos poblada con productos guatemaltecos
- [ ] API `/api/productos` funcionando
- [ ] Tested con Postman/Thunder Client

---

## ⚡ **DÍA 2: COMPLETAR APIs Y CATEGORÍAS**

### **🔗 Paso 4: API de Categorías (1 hora)**

#### **Archivo: `src/app/api/categorias/route.ts`**

```typescript
import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";

export async function GET() {
  try {
    const { data, error } = await supabase
      .from("categorias")
      .select("*")
      .eq("activa", true)
      .order("nombre");

    if (error) {
      return NextResponse.json(
        { error: "Error fetching categories" },
        { status: 500 }
      );
    }

    return NextResponse.json({ categorias: data });
  } catch (error) {
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
```

### **🔍 Paso 5: API de Búsqueda (2 horas)**

#### **Archivo: `src/app/api/buscar/route.ts`**

```typescript
import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const q = searchParams.get("q");
    const categoria = searchParams.get("categoria");
    const minPrice = searchParams.get("minPrice");
    const maxPrice = searchParams.get("maxPrice");

    if (!q || q.length < 2) {
      return NextResponse.json({ productos: [] });
    }

    let query = supabase
      .from("productos")
      .select(
        `
        *,
        categorias (
          id,
          nombre
        )
      `
      )
      .eq("activo", true)
      .or(`nombre.ilike.%${q}%,descripcion.ilike.%${q}%,marca.ilike.%${q}%`);

    if (categoria) {
      query = query.eq("categoria_id", categoria);
    }

    if (minPrice) {
      query = query.gte("precio", parseFloat(minPrice));
    }

    if (maxPrice) {
      query = query.lte("precio", parseFloat(maxPrice));
    }

    const { data, error } = await query.limit(20);

    if (error) {
      return NextResponse.json(
        { error: "Error searching products" },
        { status: 500 }
      );
    }

    return NextResponse.json({ productos: data });
  } catch (error) {
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
```

### **📝 Checklist Día 2:**

- [ ] API `/api/categorias` funcionando
- [ ] API `/api/buscar` con filtros implementada
- [ ] Testing de todas las APIs
- [ ] Verificar respuestas JSON correctas

---

## 🔄 **DÍA 3: CONECTAR FRONTEND CON APIs REALES**

### **🔧 Paso 6: Actualizar tipos TypeScript (30 min)**

#### **Archivo: `src/types/index.ts`**

```typescript
// Actualizar tipos para coincidir con Supabase
export interface Product {
  id: number;
  nombre: string;
  descripcion: string | null;
  precio: number;
  categoria_id: number;
  stock: number;
  imagen_principal: string | null;
  marca: string | null;
  modelo: string | null;
  sku: string | null;
  especificaciones: string | null;
  destacado: boolean;
  activo: boolean;
  fecha_creacion: string;
  fecha_actualizacion: string;
  categorias?: {
    id: number;
    nombre: string;
  };
}

export interface Category {
  id: number;
  nombre: string;
  descripcion: string | null;
  imagen: string | null;
  activa: boolean;
  fecha_creacion: string;
  fecha_actualizacion: string;
}
```

### **🔗 Paso 7: Crear hooks para APIs (1 hora)**

#### **Archivo: `src/hooks/useProducts.ts`**

```typescript
import { useState, useEffect } from "react";
import { Product } from "@/types";

export const useProducts = (categoria?: string, limit?: number) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const params = new URLSearchParams();
        if (categoria) params.append("categoria", categoria);
        if (limit) params.append("limit", limit.toString());

        const response = await fetch(`/api/productos?${params}`);
        const data = await response.json();

        if (!response.ok) {
          throw new Error(data.error || "Error fetching products");
        }

        setProducts(data.productos);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Unknown error");
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [categoria, limit]);

  return { products, loading, error };
};
```

### **🏠 Paso 8: Actualizar página principal (1 hora)**

#### **Actualizar: `src/app/page.tsx`**

```typescript
"use client";

import { useProducts } from "@/hooks/useProducts";
import ProductCard from "@/components/ProductCard";
import LoadingSkeleton from "@/components/LoadingSkeleton";

export default function Home() {
  const {
    products: featuredProducts,
    loading,
    error,
  } = useProducts(undefined, 6);

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section - mantener igual */}

      {/* Featured Products */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-12">Productos Destacados</h2>

          {loading ? (
            <LoadingSkeleton />
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {featuredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
```

### **📝 Checklist Día 3:**

- [ ] Tipos TypeScript actualizados
- [ ] Hooks personalizados creados
- [ ] Página principal usando datos reales
- [ ] Loading states implementados
- [ ] Error handling básico

---

## 🔍 **DÍA 4: BÚSQUEDA EN TIEMPO REAL**

### **🎯 Paso 9: Hook de búsqueda con debounce (1 hora)**

#### **Archivo: `src/hooks/useSearch.ts`**

```typescript
import { useState, useEffect, useCallback } from "react";
import { Product } from "@/types";

export const useSearch = (initialQuery = "") => {
  const [query, setQuery] = useState(initialQuery);
  const [debouncedQuery, setDebouncedQuery] = useState(initialQuery);
  const [results, setResults] = useState<Product[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Debounce effect
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedQuery(query);
    }, 300);

    return () => clearTimeout(timer);
  }, [query]);

  // Search effect
  useEffect(() => {
    const search = async () => {
      if (debouncedQuery.length < 2) {
        setResults([]);
        return;
      }

      try {
        setLoading(true);
        setError(null);

        const params = new URLSearchParams({ q: debouncedQuery });
        const response = await fetch(`/api/buscar?${params}`);
        const data = await response.json();

        if (!response.ok) {
          throw new Error(data.error || "Error searching");
        }

        setResults(data.productos);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Search error");
        setResults([]);
      } finally {
        setLoading(false);
      }
    };

    search();
  }, [debouncedQuery]);

  const clearSearch = useCallback(() => {
    setQuery("");
    setResults([]);
    setError(null);
  }, []);

  return {
    query,
    setQuery,
    results,
    loading,
    error,
    clearSearch,
  };
};
```

### **🔍 Paso 10: Actualizar componente de búsqueda en Header (1.5 horas)**

#### **Actualizar: `src/components/Header.tsx`**

```typescript
"use client";

import { useState, useRef, useEffect } from "react";
import { useSearch } from "@/hooks/useSearch";
import SearchResults from "@/components/SearchResults";

export const Header = () => {
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const { query, setQuery, results, loading, clearSearch } = useSearch();
  const searchRef = useRef<HTMLDivElement>(null);

  // Close search when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        searchRef.current &&
        !searchRef.current.contains(event.target as Node)
      ) {
        setIsSearchFocused(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="bg-white shadow-lg border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}

          {/* Search Bar - Desktop */}
          <div
            className="hidden md:flex flex-1 max-w-lg mx-8 relative"
            ref={searchRef}
          >
            <div className="relative w-full">
              <input
                type="text"
                placeholder="Buscar productos..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onFocus={() => setIsSearchFocused(true)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />

              {/* Search Results Dropdown */}
              {isSearchFocused && (query.length >= 2 || results.length > 0) && (
                <SearchResults
                  results={results}
                  loading={loading}
                  query={query}
                  onClose={() => {
                    setIsSearchFocused(false);
                    clearSearch();
                  }}
                />
              )}
            </div>
          </div>

          {/* Rest of header */}
        </div>
      </div>
    </header>
  );
};
```

### **📝 Checklist Día 4:**

- [ ] Hook de búsqueda con debounce implementado
- [ ] Componente de resultados de búsqueda
- [ ] Header con búsqueda en tiempo real
- [ ] Click outside para cerrar búsqueda
- [ ] Testing completo de búsqueda

---

## ✅ **VERIFICACIÓN FINAL - TESTING COMPLETO**

### **🧪 Tests a realizar:**

#### **1. APIs (usar Postman/Thunder Client):**

```
GET /api/productos
GET /api/productos?categoria=1&limit=6
GET /api/categorias
GET /api/buscar?q=laptop
GET /api/buscar?q=gaming&categoria=1&minPrice=500&maxPrice=2000
```

#### **2. Frontend:**

- [ ] Página principal carga productos reales
- [ ] Búsqueda en header funciona
- [ ] Resultados aparecen en tiempo real
- [ ] Loading states se muestran correctamente
- [ ] No hay errores en consola

#### **3. Performance:**

- [ ] Búsqueda responde en < 500ms
- [ ] Página carga en < 2 segundos
- [ ] Debounce funciona (no busca en cada tecla)

---

## 🎯 **RESULTADO ESPERADO AL FINAL**

**Al completar estos 4 días tendremos:**

✅ **APIs completamente funcionales**
✅ **Base de datos poblada con productos guatemaltecos**
✅ **Búsqueda en tiempo real operativa**
✅ **Frontend conectado con datos reales**
✅ **Loading states y error handling**
✅ **Performance optimizada**

---

## 🚀 **COMANDOS DE INICIO RÁPIDO**

```bash
# Día 1 - Setup
mkdir -p src/app/api/{productos,categorias,buscar}
touch src/app/api/productos/route.ts
npm run dev

# Testing APIs
curl http://localhost:3500/api/productos
curl "http://localhost:3500/api/buscar?q=laptop"

# Verificar Supabase
echo $NEXT_PUBLIC_SUPABASE_URL
echo $NEXT_PUBLIC_SUPABASE_ANON_KEY
```

---

## 📋 **CHECKLIST GENERAL DE PROGRESO**

### **Día 1:**

- [ ] ✅ APIs estructura creada
- [ ] ✅ Supabase poblado
- [ ] ✅ API productos funcionando

### **Día 2:**

- [ ] ✅ API categorías
- [ ] ✅ API búsqueda con filtros
- [ ] ✅ Testing completo

### **Día 3:**

- [ ] ✅ Frontend con datos reales
- [ ] ✅ Hooks personalizados
- [ ] ✅ Loading states

### **Día 4:**

- [ ] ✅ Búsqueda tiempo real
- [ ] ✅ Debounce implementado
- [ ] ✅ UX optimizada

---

**🎯 ¡META: En 4 días tener un e-commerce funcional con datos reales y búsqueda avanzada!**

_Este documento se actualizará con el progreso diario._
