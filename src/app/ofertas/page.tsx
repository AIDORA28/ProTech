import Link from "next/link";
import Image from "next/image";
import { Star, ShoppingCart, Clock, Flame } from "lucide-react";

// Mock offers data
const offers = [
  {
    id: 1,
    name: "Laptop Gaming ROG",
    price: 1299.99,
    originalPrice: 1599.99,
    discount: 19,
    rating: 4.8,
    reviews: 127,
    image: "/img/Categorias/Laptop/Laptop/IDEAPAD SLIM 3 15AMN8.jpeg",
    category: "Laptops",
    timeLeft: "2 días",
    badge: "🔥 Oferta Flash",
  },
  {
    id: 2,
    name: 'Monitor 4K 27"',
    price: 399.99,
    originalPrice: 549.99,
    discount: 27,
    rating: 4.6,
    reviews: 89,
    image: "/img/Categorias/Pantalla/Pantallas/LG.jpeg",
    category: "Monitores",
    timeLeft: "5 días",
    badge: "💎 Súper Oferta",
  },
  {
    id: 3,
    name: "Fuente de Poder 650W",
    price: 89.99,
    originalPrice: 129.99,
    discount: 31,
    rating: 4.7,
    reviews: 243,
    image:
      "/img/Categorias/Componentes/Fuente de Poder/Fuente de Poder G650w.jpeg",
    category: "Componentes",
    timeLeft: "1 día",
    badge: "⚡ Liquidación",
  },
];

const categories = [
  { name: "Gaming", count: 15, discount: "hasta 40%" },
  { name: "Laptops", count: 8, discount: "hasta 35%" },
  { name: "Monitores", count: 12, discount: "hasta 50%" },
  { name: "Componentes", count: 25, discount: "hasta 45%" },
];

export default function OffersPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-red-600 to-orange-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <div className="flex items-center justify-center mb-4">
              <Flame className="w-8 h-8 mr-2" />
              <h1 className="text-4xl md:text-5xl font-bold">
                Ofertas Especiales
              </h1>
              <Flame className="w-8 h-8 ml-2" />
            </div>
            <p className="text-xl md:text-2xl mb-8 text-orange-100">
              Aprovecha descuentos de hasta 50% en productos seleccionados
            </p>
            <div className="bg-white text-red-600 inline-block px-6 py-2 rounded-full font-semibold">
              ⏰ Tiempo limitado - ¡No te lo pierdas!
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Categories with Discounts */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Ofertas por Categoría
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {categories.map((category) => (
              <div
                key={category.name}
                className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-red-500 hover:shadow-md transition-shadow cursor-pointer"
              >
                <h3 className="font-semibold text-gray-900">{category.name}</h3>
                <p className="text-sm text-gray-600">
                  {category.count} productos
                </p>
                <p className="text-red-600 font-bold text-sm">
                  {category.discount}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Flash Offers */}
        <section className="mb-12">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center">
              <h2 className="text-2xl font-bold text-gray-900 mr-3">
                🔥 Ofertas Flash
              </h2>
              <div className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-medium">
                Termina pronto
              </div>
            </div>
            <Link
              href="/productos"
              className="text-red-600 hover:text-red-800 font-medium"
            >
              Ver todas →
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {offers.map((offer) => (
              <div
                key={offer.id}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 relative"
              >
                {/* Discount Badge */}
                <div className="absolute top-4 left-4 z-10">
                  <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                    -{offer.discount}%
                  </span>
                </div>

                {/* Time Badge */}
                <div className="absolute top-4 right-4 z-10">
                  <div className="bg-black bg-opacity-75 text-white px-2 py-1 rounded text-xs flex items-center">
                    <Clock className="w-3 h-3 mr-1" />
                    {offer.timeLeft}
                  </div>
                </div>

                <div className="relative">
                  <Image
                    src={offer.image}
                    alt={offer.name}
                    width={300}
                    height={200}
                    className="w-full h-48 object-cover"
                  />
                </div>

                <div className="p-6">
                  <div className="mb-2">
                    <span className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded">
                      {offer.badge}
                    </span>
                  </div>

                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-sm text-gray-500">
                      {offer.category}
                    </span>
                  </div>

                  <h3 className="font-semibold text-lg mb-2 text-gray-900">
                    <Link
                      href={`/productos/${offer.id}`}
                      className="hover:text-red-600 transition-colors"
                    >
                      {offer.name}
                    </Link>
                  </h3>

                  <div className="flex items-center gap-1 mb-3">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-4 h-4 ${
                            i < Math.floor(offer.rating)
                              ? "text-yellow-400 fill-current"
                              : "text-gray-300"
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-sm text-gray-600">
                      {offer.rating} ({offer.reviews})
                    </span>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="text-2xl font-bold text-red-600">
                        ${offer.price.toFixed(2)}
                      </span>
                      <span className="text-lg text-gray-500 line-through">
                        ${offer.originalPrice.toFixed(2)}
                      </span>
                    </div>

                    <button className="bg-red-600 text-white p-2 rounded-lg hover:bg-red-700 transition-colors">
                      <ShoppingCart className="w-5 h-5" />
                    </button>
                  </div>

                  <div className="mt-4 text-center">
                    <div className="text-sm text-gray-600">
                      Ahorro:{" "}
                      <span className="font-bold text-green-600">
                        ${(offer.originalPrice - offer.price).toFixed(2)}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Newsletter for Offers */}
        <section className="bg-gradient-to-r from-red-600 to-orange-600 rounded-xl text-white p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">
            🚨 No te pierdas nuestras ofertas exclusivas
          </h2>
          <p className="text-orange-100 mb-6">
            Sé el primero en enterarte de nuestras ofertas flash y descuentos
            especiales
          </p>
          <div className="max-w-md mx-auto flex gap-4">
            <input
              type="email"
              placeholder="Tu email para ofertas"
              className="flex-1 px-4 py-3 rounded-lg text-gray-900"
            />
            <button className="bg-white text-red-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Suscribirse
            </button>
          </div>
          <p className="text-sm text-orange-200 mt-4">
            * Ofertas exclusivas y descuentos de hasta 60%
          </p>
        </section>
      </div>
    </div>
  );
}
