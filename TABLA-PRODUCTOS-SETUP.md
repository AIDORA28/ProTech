# 🗄️ TABLA PRODUCTOS - SETUP RÁPIDO

> **📅 Para usar:** Inmediatamente en Supabase  
> **🎯 Objetivo:** 12 productos demo (3 por categoría)  
> **⚡ Resultado:** Página se llena automáticamente

---

## 🚀 **PASO 1: CREAR TABLA EN SUPABASE**

### **SQL para crear tabla `productos`:**

```sql
-- Crear tabla productos en Supabase
CREATE TABLE productos (
  id SERIAL PRIMARY KEY,
  nombre VARCHAR(255) NOT NULL,
  descripcion TEXT,
  precio DECIMAL(10,2) NOT NULL,
  imagen_url VARCHAR(255),
  categoria VARCHAR(100) NOT NULL,
  stock INTEGER DEFAULT 0,
  created_at TIMESTAMP DEFAULT NOW()
);
```

---

## 📦 **PASO 2: INSERT DE PRODUCTOS DEMO**

### **Copiar y pegar este INSERT en Supabase SQL Editor:**

```sql
-- Insertar 12 productos demo (3 por categoría)
INSERT INTO productos (nombre, descripcion, precio, imagen_url, categoria, stock) VALUES

-- 🖥️ LAPTOPS (3 productos)
('Laptop Gaming ASUS ROG Strix', 'Laptop gaming de alto rendimiento con RTX 4060, ideal para juegos y trabajo profesional en Guatemala', 8500.00, '/img/Categorias/Laptop/Laptop/IDEAPAD SLIM 3 15AMN8.jpeg', 'Laptops', 5),

('Laptop Lenovo IdeaPad Slim 3', 'Laptop para oficina y estudiantes, perfecta para trabajo diario y estudios universitarios', 4500.00, '/img/Categorias/Laptop/Laptop/IDEAPAD SLIM 3 15AMN8.jpeg', 'Laptops', 8),

('Laptop HP Pavilion Gaming', 'Laptop gaming económica con excelente relación precio-rendimiento para gamers principiantes', 6200.00, '/img/Categorias/Categoria-Defecto.jpg', 'Laptops', 3),

-- 🖥️ MONITORES (3 productos)
('Monitor LG 27" 4K UltraFine', 'Monitor profesional 4K para gaming y trabajo, colores precisos y alta resolución', 3200.00, '/img/Categorias/Pantalla/Pantallas/LG.jpeg', 'Monitores', 6),

('Monitor Samsung 24" Full HD', 'Monitor económico para oficina y uso diario, excelente calidad-precio', 1450.00, '/img/Categorias/Categoria-Defecto.jpg', 'Monitores', 12),

('Monitor ASUS TUF Gaming 27"', 'Monitor gaming con alta frecuencia de actualización, perfecto para competitivo', 2800.00, '/img/Categorias/Categoria-Defecto.jpg', 'Monitores', 4),

-- 🔧 COMPONENTES (3 productos)
('Fuente de Poder Corsair 650W', 'Fuente de poder certificada 80+ Gold, confiable para cualquier build de PC', 850.00, '/img/Categorias/Componentes/Fuente de Poder/Fuente de Poder G650w.jpeg', 'Componentes', 15),

('Memoria RAM Corsair 16GB DDR4', 'Memoria RAM de alto rendimiento para gaming y aplicaciones profesionales', 1200.00, '/img/Categorias/Categoria-Defecto.jpg', 'Componentes', 20),

('SSD Samsung 1TB NVMe', 'Disco sólido de alta velocidad, mejora drásticamente el rendimiento de tu PC', 980.00, '/img/Categorias/Categoria-Defecto.jpg', 'Componentes', 10),

-- ⌨️ PERIFÉRICOS (3 productos)
('Teclado Mecánico Logitech G Pro', 'Teclado mecánico para gaming profesional, switches táctiles de alta precisión', 1450.00, '/img/Categorias/Categoria-Defecto.jpg', 'Periféricos', 8),

('Mouse Gaming Razer DeathAdder', 'Mouse ergonómico para gaming, sensor de alta precisión y durabilidad', 650.00, '/img/Categorias/Categoria-Defecto.jpg', 'Periféricos', 14),

('Audífonos HyperX Cloud II', 'Audífonos gaming con sonido envolvente 7.1, cómodos para largas sesiones', 890.00, '/img/Categorias/Categoria-Defecto.jpg', 'Periféricos', 6);
```

---

## ✅ **RESULTADO INMEDIATO**

### **Después de ejecutar estos comandos tendrás:**

📊 **12 productos demo distribuidos:**

- 🖥️ **3 Laptops** (Q4,500 - Q8,500)
- 🖥️ **3 Monitores** (Q1,450 - Q3,200)
- 🔧 **3 Componentes** (Q850 - Q1,200)
- ⌨️ **3 Periféricos** (Q650 - Q1,450)

🖼️ **Imágenes seguras:**

- Productos con imagen real: 3
- Productos con imagen por defecto: 9
- 100% fallback garantizado

💰 **Precios en GTQ realistas para Guatemala:**

- Rango: Q650 - Q8,500
- Precios competitivos vs mercado local

---

## 🎯 **PARA AGREGAR MÁS PRODUCTOS DESPUÉS**

### **Formato simple para copiar:**

```sql
-- Agregar un nuevo producto
INSERT INTO productos (nombre, descripcion, precio, imagen_url, categoria, stock) VALUES
('Nombre del Producto', 'Descripción atractiva para Guatemala', 1500.00, '/img/Categorias/Categoria-Defecto.jpg', 'Laptops', 5);
```

### **Categorías disponibles:**

- `'Laptops'`
- `'Monitores'`
- `'Componentes'`
- `'Periféricos'`

---

## 🚀 **COMANDOS PARA SUPABASE**

### **1. Ejecutar en SQL Editor de Supabase:**

```sql
-- Copiar el CREATE TABLE
-- Copiar el INSERT INTO completo
```

### **2. Verificar que funcionó:**

```sql
-- Ver todos los productos
SELECT * FROM productos ORDER BY categoria, nombre;

-- Contar por categoría
SELECT categoria, COUNT(*) as total FROM productos GROUP BY categoria;
```

---

**🎯 Con esto tu página se llenará automáticamente y podrás agregar productos fácilmente con INSERT INTO.**

**¿Listo para ejecutar en Supabase?**
