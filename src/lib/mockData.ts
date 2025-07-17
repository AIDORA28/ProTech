import { Product } from "@/types";

// Datos estáticos para la demostración - 3 productos por categoría
export const mockProducts: Product[] = [
  // LAPTOPS
  {
    id: "1",
    name: "Laptop Gaming ROG Strix G15",
    description:
      "Laptop gaming de alto rendimiento con AMD Ryzen 7, RTX 4060, 16GB RAM, 512GB SSD. Perfecta para gaming profesional y streaming.",
    price: 8500,
    image_url: "/img/Categorias/Laptop/Laptop/IDEAPAD SLIM 3 15AMN8.jpeg",
    category: "laptops",
    stock: 5,
    featured: true,
    rating: 4.8,
    reviews: 127,
    created_at: "2024-01-01",
    updated_at: "2024-01-01",
  },
  {
    id: "2",
    name: "MacBook Air M2",
    description:
      "MacBook Air con chip M2, 8GB RAM, 256GB SSD. Ultradelgada, silenciosa y con increíble autonomía de batería.",
    price: 7200,
    image_url: "/img/Categorias/Laptop/Laptop/MacBook Air M2.jpg",
    category: "laptops",
    stock: 8,
    featured: true,
    rating: 4.9,
    reviews: 203,
    created_at: "2024-01-01",
    updated_at: "2024-01-01",
  },
  {
    id: "3",
    name: "Lenovo ThinkPad E15",
    description:
      "Laptop empresarial con Intel Core i5, 8GB RAM, 256GB SSD. Ideal para trabajo, estudios y productividad diaria.",
    price: 4800,
    image_url: "/img/Categorias/Laptop/Laptop/Lenovo ThinkPad E15.webp",
    category: "laptops",
    stock: 12,
    featured: false,
    rating: 4.3,
    reviews: 89,
    created_at: "2024-01-01",
    updated_at: "2024-01-01",
  },

  // MONITORES
  {
    id: "4",
    name: 'Monitor Gaming LG UltraGear 27"',
    description:
      "Monitor gaming 144Hz, 1ms, QHD (2560x1440), tecnología IPS con G-Sync compatible. Perfecto para gaming competitivo.",
    price: 2200,
    image_url:
      "/img/Categorias/Pantalla/Pantallas/Monitor Gaming LG UltraGear 27_.webp",
    category: "monitores",
    stock: 15,
    featured: true,
    rating: 4.7,
    reviews: 156,
    created_at: "2024-01-01",
    updated_at: "2024-01-01",
  },
  {
    id: "5",
    name: 'Samsung Odyssey G7 32"',
    description:
      "Monitor curvo gaming 240Hz, QLED, HDR600, 1ms. Diseño inmersivo para la mejor experiencia gaming.",
    price: 3500,
    image_url: "/img/Categorias/Pantalla/Pantallas/Samsung Odyssey G7 32_.webp",
    category: "monitores",
    stock: 8,
    featured: false,
    rating: 4.6,
    reviews: 94,
    created_at: "2024-01-01",
    updated_at: "2024-01-01",
  },
  {
    id: "6",
    name: 'ASUS ProArt Display 24"',
    description:
      "Monitor profesional 4K, 100% sRGB, calibración de color precisa. Ideal para diseño gráfico y edición.",
    price: 1800,
    image_url: "/img/Categorias/Pantalla/Pantallas/ASUS ProArt Display 24_.png",
    category: "monitores",
    stock: 10,
    featured: false,
    rating: 4.4,
    reviews: 67,
    created_at: "2024-01-01",
    updated_at: "2024-01-01",
  },

  // COMPONENTES
  {
    id: "7",
    name: "Fuente de Poder Corsair 650W 80+ Gold",
    description:
      "Fuente modular certificada 80+ Gold, cables mallados, protección múltiple. Eficiencia energética superior.",
    price: 850,
    image_url:
      "/img/Categorias/Componentes/Fuente de Poder/Fuente de Poder Corsair 650W 80+ Gold.jpeg",
    category: "componentes",
    stock: 20,
    featured: true,
    rating: 4.8,
    reviews: 312,
    created_at: "2024-01-01",
    updated_at: "2024-01-01",
  },
  {
    id: "8",
    name: "Tarjeta Gráfica RTX 4070",
    description:
      "GPU de última generación con 12GB GDDR6X, Ray Tracing, DLSS 3. Rendimiento excepcional en 1440p.",
    price: 4200,
    image_url:
      "/img/Categorias/Componentes/Tarjeta de Video/Tarjeta Gráfica RTX 4070.webp",
    category: "componentes",
    stock: 6,
    featured: false,
    rating: 4.9,
    reviews: 234,
    created_at: "2024-01-01",
    updated_at: "2024-01-01",
  },
  {
    id: "9",
    name: "Memoria RAM Corsair 16GB DDR4",
    description:
      "Kit de memoria RAM 16GB (2x8GB) DDR4-3200, latencias optimizadas, disipadores de calor integrados.",
    price: 650,
    image_url:
      "/img/Categorias/Componentes/Memoria Ram/Memoria RAM Corsair 16GB DDR4.webp",
    category: "componentes",
    stock: 25,
    featured: false,
    rating: 4.5,
    reviews: 189,
    created_at: "2024-01-01",
    updated_at: "2024-01-01",
  },

  // PERIFÉRICOS
  {
    id: "10",
    name: "Teclado Mecánico Logitech G Pro X",
    description:
      "Teclado gaming mecánico con switches intercambiables, retroiluminación RGB, construcción premium para esports.",
    price: 950,
    image_url:
      "/img/Categorias/Perifericos/Teclados, Kit y Combos/Teclado Mecánico Logitech G Pro X.jpg",
    category: "perifericos",
    stock: 18,
    featured: false,
    rating: 4.6,
    reviews: 145,
    created_at: "2024-01-01",
    updated_at: "2024-01-01",
  },
  {
    id: "11",
    name: "Mouse Gaming Razer DeathAdder V3",
    description:
      "Mouse ergonómico con sensor Focus Pro 30K, switches ópticos, diseño para largas sesiones de gaming.",
    price: 480,
    image_url:
      "/img/Categorias/Perifericos/Mouse y Combos/Mouse Gaming Razer DeathAdder V3.webp",
    category: "perifericos",
    stock: 22,
    featured: false,
    rating: 4.7,
    reviews: 267,
    created_at: "2024-01-01",
    updated_at: "2024-01-01",
  },
  {
    id: "12",
    name: "Audífonos Gaming SteelSeries Arctis 7",
    description:
      "Audífonos inalámbricos con audio 7.1 surround, micrófono retráctil, batería de 24 horas. Calidad de sonido superior.",
    price: 1200,
    image_url:
      "/img/Categorias/Perifericos/Sonidos y Auriculares/Audífonos Gaming SteelSeries Arctis 7.webp",
    category: "perifericos",
    stock: 14,
    featured: true,
    rating: 4.8,
    reviews: 198,
    created_at: "2024-01-01",
    updated_at: "2024-01-01",
  },
];

// Función para obtener todos los productos
export function getProducts(): Product[] {
  return mockProducts;
}

// Función para obtener productos por categoría
export function getProductsByCategory(category: string): Product[] {
  return mockProducts.filter((product) => product.category === category);
}

// Función para obtener productos destacados
export function getFeaturedProducts(): Product[] {
  return mockProducts.filter((product) => product.featured);
}

// Función para obtener un producto por ID
export function getProductById(id: string): Product | undefined {
  return mockProducts.find((product) => product.id === id);
}

// Función para buscar productos
export function searchProducts(searchTerm: string): Product[] {
  const term = searchTerm.toLowerCase();
  return mockProducts.filter(
    (product) =>
      product.name.toLowerCase().includes(term) ||
      product.description.toLowerCase().includes(term) ||
      product.category.toLowerCase().includes(term)
  );
}

// Tasas de cambio aproximadas (actualizadas a julio 2025)
const EXCHANGE_RATES = {
  GTQ_TO_USD: 0.128, // 1 GTQ = 0.128 USD (aproximadamente 7.8 GTQ por USD)
  GTQ_TO_PEN: 0.48, // 1 GTQ = 0.48 PEN (aproximadamente 2.08 GTQ por PEN)
};

// Función para convertir de Quetzales a Dólares
export function convertToUSD(priceInGTQ: number): number {
  return Math.round(priceInGTQ * EXCHANGE_RATES.GTQ_TO_USD * 100) / 100;
}

// Función para convertir de Quetzales a Soles Peruanos
export function convertToPEN(priceInGTQ: number): number {
  return Math.round(priceInGTQ * EXCHANGE_RATES.GTQ_TO_PEN * 100) / 100;
}

// Función para formatear precios con múltiples monedas
export function formatMultiCurrencyPrice(priceInGTQ: number): {
  usd: string;
  pen: string;
} {
  const usdPrice = convertToUSD(priceInGTQ);
  const penPrice = convertToPEN(priceInGTQ);

  return {
    usd: `$${usdPrice.toLocaleString()}`,
    pen: `S/ ${penPrice.toLocaleString()}`,
  };
}
