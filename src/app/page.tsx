import Image from "next/image";
import Link from "next/link";
import {
  Star,
  ShoppingCart,
  Cpu,
  Smartphone,
  Laptop,
  Monitor,
} from "lucide-react";

// Mock data for featured products
const featuredProducts = [
  {
    id: 1,
    name: "Laptop Gaming ROG",
    price: 1299.99,
    originalPrice: 1499.99,
    rating: 4.8,
    reviews: 127,
    image: "/img/Categorias/Laptop/Laptop/IDEAPAD SLIM 3 15AMN8.jpeg",
    category: "Laptops",
  },
  {
    id: 2,
    name: "Monitor LG 27 4K",
    price: 399.99,
    originalPrice: null,
    rating: 4.6,
    reviews: 89,
    image: "/img/Categorias/Pantalla/Pantallas/LG.jpeg",
    category: "Monitores",
  },
  {
    id: 3,
    name: "Fuente de Poder 650W",
    price: 89.99,
    originalPrice: 109.99,
    rating: 4.7,
    reviews: 243,
    image:
      "/img/Categorias/Componentes/Fuente de Poder/Fuente de Poder G650w.jpeg",
    category: "Componentes",
  },
];

// Mock data for categories
const categories = [
  {
    name: "Laptops",
    icon: Laptop,
    href: "/categorias/laptops",
    image: "/img/Categorias/Laptop/laptop-por-defecto.jpg",
  },
  {
    name: "Componentes",
    icon: Cpu,
    href: "/categorias/componentes",
    image: "/img/Categorias/Componentes/Cases/",
  },
  {
    name: "Periféricos",
    icon: Smartphone,
    href: "/categorias/perifericos",
    image: "/img/Categorias/Perifericos/",
  },
  {
    name: "Monitores",
    icon: Monitor,
    href: "/categorias/monitores",
    image: "/img/Categorias/Pantalla/",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-600 to-purple-700 text-white">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Bienvenido a TechPro
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-200">
              Descubre la última tecnología al mejor precio
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/productos"
                className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Ver Productos
              </Link>
              <Link
                href="/ofertas"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
              >
                Ofertas Especiales
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
            Explora por Categorías
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {categories.map((category) => {
              const IconComponent = category.icon;
              return (
                <Link
                  key={category.name}
                  href={category.href}
                  className="group bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="text-center">
                    <div className="w-16 h-16 mx-auto mb-4 bg-blue-100 rounded-full flex items-center justify-center group-hover:bg-blue-200 transition-colors">
                      <IconComponent className="w-8 h-8 text-blue-600" />
                    </div>
                    <h3 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                      {category.name}
                    </h3>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">
              Productos Destacados
            </h2>
            <Link
              href="/productos"
              className="text-blue-600 hover:text-blue-800 font-medium"
            >
              Ver todos →
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredProducts.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
              >
                <div className="relative">
                  <Image
                    src={product.image}
                    alt={product.name}
                    width={300}
                    height={200}
                    className="w-full h-48 object-cover"
                  />
                  {product.originalPrice && (
                    <div className="absolute top-4 left-4 bg-red-500 text-white px-2 py-1 rounded text-sm font-semibold">
                      {Math.round(
                        ((product.originalPrice - product.price) /
                          product.originalPrice) *
                          100
                      )}
                      % OFF
                    </div>
                  )}
                </div>

                <div className="p-6">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-sm text-gray-500">
                      {product.category}
                    </span>
                  </div>

                  <h3 className="font-semibold text-lg mb-2 text-gray-900">
                    {product.name}
                  </h3>

                  <div className="flex items-center gap-1 mb-3">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-4 h-4 ${
                            i < Math.floor(product.rating)
                              ? "text-yellow-400 fill-current"
                              : "text-gray-300"
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-sm text-gray-600">
                      {product.rating} ({product.reviews} reseñas)
                    </span>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="text-2xl font-bold text-gray-900">
                        ${product.price}
                      </span>
                      {product.originalPrice && (
                        <span className="text-lg text-gray-500 line-through">
                          ${product.originalPrice}
                        </span>
                      )}
                    </div>

                    <button className="bg-blue-600 text-white p-2 rounded-lg hover:bg-blue-700 transition-colors">
                      <ShoppingCart className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Mantente al día con las últimas ofertas
          </h2>
          <p className="text-gray-300 mb-8">
            Suscríbete a nuestro newsletter y recibe descuentos exclusivos
          </p>
          <div className="max-w-md mx-auto flex gap-4">
            <input
              type="email"
              placeholder="Tu email"
              className="flex-1 px-4 py-3 rounded-lg text-gray-900"
            />
            <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
              Suscribirse
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
