import Link from "next/link";
import Image from "next/image";
import { Star, ShoppingCart, Clock, Flame } from "lucide-react";
import { getFeaturedProducts } from "@/lib/mockData";

// Productos en oferta (tomamos los productos destacados como ofertas para la demo)
const offers = getFeaturedProducts().map((product) => ({
  ...product,
  originalPrice: Math.round(product.price * 1.3), // Simular precio original 30% más alto
  discount: 30,
  timeLeft: ["2 días", "5 días", "1 día"][Math.floor(Math.random() * 3)],
  badge: ["🔥 Oferta Flash", "💎 Súper Oferta", "⚡ Liquidación"][
    Math.floor(Math.random() * 3)
  ],
}));

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
      <section className="relative bg-gradient-to-br from-red-600 via-orange-600 to-pink-700 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-red-600/30 to-orange-600/30"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center max-w-4xl mx-auto">
            <div className="flex items-center justify-center mb-6">
              <Flame className="w-10 h-10 mr-3 text-orange-300 animate-pulse" />
              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                Ofertas
                <span className="block text-orange-300">Especiales</span>
              </h1>
              <Flame className="w-10 h-10 ml-3 text-orange-300 animate-pulse" />
            </div>
            <p className="text-xl md:text-2xl mb-8 text-gray-200">
              Aprovecha descuentos de hasta 50% en productos seleccionados
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
              <div className="bg-white/20 backdrop-blur-sm text-white px-6 py-3 rounded-xl font-bold text-lg border border-white/30">
                ⏰ Tiempo limitado - ¡No te lo pierdas!
              </div>
            </div>
          </div>
        </div>

        {/* Floating elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-white/10 rounded-full animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-16 h-16 bg-orange-400/20 rounded-full animate-bounce"></div>
        <div className="absolute top-1/2 left-20 w-12 h-12 bg-red-400/20 rounded-full animate-ping"></div>
        <div className="absolute top-40 right-20 w-14 h-14 bg-pink-400/15 rounded-full animate-pulse"></div>
        <div className="absolute bottom-40 left-1/4 w-8 h-8 bg-yellow-400/20 rounded-full animate-bounce"></div>
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

                <div className="aspect-w-16 aspect-h-12 bg-gray-200 relative overflow-hidden">
                  <Image
                    src={
                      offer.image_url || "/img/Categorias/Categoria-Defecto.jpg"
                    }
                    alt={offer.name}
                    width={300}
                    height={200}
                    className="w-full h-full object-cover object-center"
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
                      {offer.category.charAt(0).toUpperCase() +
                        offer.category.slice(1)}
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
                        Q{offer.price}
                      </span>
                      <span className="text-lg text-gray-500 line-through">
                        Q{offer.originalPrice}
                      </span>
                    </div>

                    <Link
                      href={`/productos/${offer.id}`}
                      className="bg-red-600 text-white p-2 rounded-lg hover:bg-red-700 transition-colors"
                    >
                      <ShoppingCart className="w-5 h-5" />
                    </Link>
                  </div>

                  <div className="mt-4 text-center">
                    <div className="text-sm text-gray-600">
                      Ahorro:{" "}
                      <span className="font-bold text-green-600">
                        Q{offer.originalPrice - offer.price}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Newsletter for Offers */}
        <section className="relative overflow-hidden bg-gradient-to-r from-red-400 to-orange-400 rounded-3xl text-white p-12 text-center shadow-2xl">
          {/* Background Pattern */}
          <div className="absolute inset-0 bg-red-700 bg-opacity-5">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-orange-100 to-transparent opacity-10 transform -skew-y-12"></div>
          </div>

          {/* Content */}
          <div className="relative z-10">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center justify-center mb-6">
                <div className="bg-white bg-opacity-20 rounded-full p-4 mr-4">
                  <span className="text-4xl">🚨</span>
                </div>
                <h2 className="text-4xl md:text-5xl font-bold">
                  Ofertas Exclusivas
                </h2>
                <div className="bg-white bg-opacity-20 rounded-full p-4 ml-4">
                  <span className="text-4xl">🔥</span>
                </div>
              </div>

              <p className="text-xl md:text-2xl mb-8 text-orange-100 leading-relaxed">
                Sé el primero en enterarte de nuestras
                <span className="font-bold text-yellow-200">
                  {" "}
                  ofertas flash
                </span>{" "}
                y
                <span className="font-bold text-yellow-200">
                  {" "}
                  descuentos especiales
                </span>
              </p>

              <div className="bg-white bg-opacity-15 backdrop-blur-sm rounded-2xl p-8 mb-6 border border-white border-opacity-20">
                <div className="max-w-lg mx-auto">
                  <div className="flex flex-col sm:flex-row gap-4">
                    <div className="flex-1">
                      <input
                        type="email"
                        placeholder="Tu email para ofertas exclusivas"
                        className="w-full px-6 py-4 rounded-xl text-gray-800 placeholder-gray-500 text-lg font-medium border-2 border-transparent focus:border-yellow-300 focus:outline-none transition-all duration-300 shadow-lg"
                      />
                    </div>
                    <button className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-red-700 px-8 py-4 rounded-xl font-bold text-lg hover:from-yellow-300 hover:to-yellow-400 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
                      Suscribirse
                      <span className="ml-2">→</span>
                    </button>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
                <div className="flex items-center justify-center">
                  <div className="bg-green-400 rounded-full p-2 mr-3 shadow-lg">
                    <span className="text-white font-bold">✓</span>
                  </div>
                  <span className="text-orange-100">
                    Ofertas exclusivas hasta 60% OFF
                  </span>
                </div>
                <div className="flex items-center justify-center">
                  <div className="bg-blue-400 rounded-full p-2 mr-3 shadow-lg">
                    <span className="text-white font-bold">⚡</span>
                  </div>
                  <span className="text-orange-100">
                    Acceso prioritario a liquidaciones
                  </span>
                </div>
                <div className="flex items-center justify-center">
                  <div className="bg-purple-400 rounded-full p-2 mr-3 shadow-lg">
                    <span className="text-white font-bold">🎁</span>
                  </div>
                  <span className="text-orange-100">
                    Regalos y promociones especiales
                  </span>
                </div>
              </div>

              <p className="text-xs text-orange-200 mt-6 opacity-90">
                * Al suscribirte aceptas recibir emails promocionales. Puedes
                cancelar en cualquier momento.
                <br />
                No compartimos tu información con terceros.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
