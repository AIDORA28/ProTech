import Link from "next/link";
import { ArrowLeft, Star, ShoppingCart, Heart, Share2 } from "lucide-react";
import Image from "next/image";
import { getProductById, formatMultiCurrencyPrice } from "@/lib/mockData";

// Función para obtener el producto por ID
async function getProduct(id: string) {
  return getProductById(id);
}

export default async function ProductDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const product = await getProduct(id);

  if (!product) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            Producto no encontrado
          </h1>
          <p className="text-gray-600 mb-8">
            El producto que buscas no existe o ha sido removido.
          </p>
          <Link
            href="/productos"
            className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            Ver todos los productos
          </Link>
        </div>
      </div>
    );
  }

  const rating = 4.8;
  const reviews = 127;

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Breadcrumb */}
        <nav className="flex items-center space-x-2 text-sm text-gray-600 mb-8">
          <Link href="/" className="hover:text-blue-600">
            Inicio
          </Link>
          <span>/</span>
          <Link href="/productos" className="hover:text-blue-600">
            Productos
          </Link>
          <span>/</span>
          <Link
            href={`/categorias/${product.category.toLowerCase()}`}
            className="hover:text-blue-600"
          >
            {product.category}
          </Link>
          <span>/</span>
          <span className="text-gray-900">{product.name}</span>
        </nav>

        {/* Back button */}
        <Link
          href="/productos"
          className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-6"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Volver a productos
        </Link>

        {/* Product details */}
        <div className="bg-white rounded-lg shadow-sm overflow-hidden">
          <div className="lg:grid lg:grid-cols-2 lg:gap-x-8">
            {/* Product image */}
            <div className="relative h-96 bg-gray-200 overflow-hidden">
              <Image
                src={product.image_url || "/img/placeholder-producto.jpg"}
                alt={product.name}
                fill
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>

            {/* Product info */}
            <div className="p-6 lg:p-8">
              <div className="flex items-center justify-between mb-4">
                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
                  {product.category}
                </span>
                <div className="flex items-center space-x-2">
                  <button className="p-2 text-gray-400 hover:text-red-500">
                    <Heart className="w-5 h-5" />
                  </button>
                  <button className="p-2 text-gray-400 hover:text-gray-600">
                    <Share2 className="w-5 h-5" />
                  </button>
                </div>
              </div>

              <h1 className="text-3xl font-bold text-gray-900 mb-4">
                {product.name}
              </h1>

              {/* Rating */}
              <div className="flex items-center mb-4">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-5 h-5 ${
                        i < Math.floor(rating)
                          ? "text-yellow-400 fill-current"
                          : "text-gray-300"
                      }`}
                    />
                  ))}
                </div>
                <span className="ml-2 text-sm text-gray-600">
                  {rating} ({reviews} reseñas)
                </span>
              </div>

              {/* Price */}
              <div className="mb-6">
                <div className="flex flex-col gap-2">
                  <div className="flex items-center gap-3">
                    <p className="text-3xl font-bold text-blue-600">
                      {formatMultiCurrencyPrice(product.price).usd}
                    </p>
                    <p className="text-2xl font-semibold text-orange-600">
                      {formatMultiCurrencyPrice(product.price).pen}
                    </p>
                  </div>
                </div>
              </div>

              {/* Description */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Descripción
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {product.description}
                </p>
              </div>

              {/* Stock status */}
              <div className="mb-6">
                {product.stock > 0 ? (
                  <div className="flex items-center text-green-600">
                    <div className="w-2 h-2 bg-green-600 rounded-full mr-2"></div>
                    <span className="text-sm font-medium">
                      En stock ({product.stock} disponibles)
                    </span>
                  </div>
                ) : (
                  <div className="flex items-center text-red-600">
                    <div className="w-2 h-2 bg-red-600 rounded-full mr-2"></div>
                    <span className="text-sm font-medium">Agotado</span>
                  </div>
                )}
              </div>

              {/* Add to cart */}
              <div className="space-y-4">
                <button
                  className={`w-full flex items-center justify-center px-6 py-3 rounded-lg font-semibold transition-colors ${
                    product.stock > 0
                      ? "bg-blue-600 text-white hover:bg-blue-700"
                      : "bg-gray-300 text-gray-500 cursor-not-allowed"
                  }`}
                  disabled={product.stock === 0}
                >
                  <ShoppingCart className="w-5 h-5 mr-2" />
                  {product.stock > 0 ? "Agregar al carrito" : "Agotado"}
                </button>

                <button className="w-full border border-gray-300 text-gray-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors">
                  Comprar ahora
                </button>
              </div>

              {/* Additional info */}
              <div className="mt-8 pt-8 border-t border-gray-200">
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="font-medium text-gray-900">Envío gratis</p>{" "}
                    <p className="text-gray-600">
                      En compras superiores a Q300
                    </p>
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">Garantía</p>
                    <p className="text-gray-600">
                      1 año de garantía del fabricante
                    </p>
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">Devoluciones</p>
                    <p className="text-gray-600">30 días para devoluciones</p>
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">Soporte</p>
                    <p className="text-gray-600">Soporte técnico 24/7</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
