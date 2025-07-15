import Image from "next/image";
import Link from "next/link";
import { Star, ShoppingCart, Filter } from "lucide-react";

// Mock products data
const products = [
  {
    id: 1,
    name: "Laptop Gaming ROG",
    price: 1299.99,
    originalPrice: 1499.99,
    rating: 4.8,
    reviews: 127,
    image: "/img/Categorias/Laptop/Laptop/IDEAPAD SLIM 3 15AMN8.jpeg",
    category: "Laptops",
    inStock: true,
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
    inStock: true,
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
    inStock: true,
  },
  {
    id: 4,
    name: "Laptop IdeaPad Slim 3",
    price: 599.99,
    originalPrice: null,
    rating: 4.3,
    reviews: 156,
    image: "/img/Categorias/Laptop/Laptop/IDEAPAD SLIM 3 15AMN8.jpeg",
    category: "Laptops",
    inStock: true,
  },
  {
    id: 5,
    name: 'Monitor Gaming 24"',
    price: 249.99,
    originalPrice: 299.99,
    rating: 4.5,
    reviews: 78,
    image: "/img/Categorias/Pantalla/Pantallas/LG.jpeg",
    category: "Monitores",
    inStock: false,
  },
  {
    id: 6,
    name: "Fuente Modular 750W",
    price: 129.99,
    originalPrice: null,
    rating: 4.9,
    reviews: 312,
    image:
      "/img/Categorias/Componentes/Fuente de Poder/Fuente de Poder G650w.jpeg",
    category: "Componentes",
    inStock: true,
  },
];

const categories = [
  "Todos",
  "Laptops",
  "Monitores",
  "Componentes",
  "Periféricos",
];

export default function ProductsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            Todos los Productos
          </h1>
          <p className="text-gray-600">
            Descubre nuestra amplia gama de productos tecnológicos
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar Filters */}
          <div className="lg:w-64 space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-center gap-2 mb-4">
                <Filter className="w-5 h-5" />
                <h3 className="font-semibold text-gray-900">Filtros</h3>
              </div>

              {/* Category Filter */}
              <div className="mb-6">
                <h4 className="font-medium text-gray-900 mb-3">Categorías</h4>
                <div className="space-y-2">
                  {categories.map((category) => (
                    <label key={category} className="flex items-center">
                      <input
                        type="radio"
                        name="category"
                        value={category}
                        className="mr-2 text-blue-600"
                        defaultChecked={category === "Todos"}
                      />
                      <span className="text-gray-700">{category}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Price Range */}
              <div className="mb-6">
                <h4 className="font-medium text-gray-900 mb-3">
                  Rango de Precio
                </h4>
                <div className="space-y-2">
                  <label className="flex items-center">
                    <input type="checkbox" className="mr-2 text-blue-600" />
                    <span className="text-gray-700">$0 - $100</span>
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" className="mr-2 text-blue-600" />
                    <span className="text-gray-700">$100 - $500</span>
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" className="mr-2 text-blue-600" />
                    <span className="text-gray-700">$500 - $1000</span>
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" className="mr-2 text-blue-600" />
                    <span className="text-gray-700">$1000+</span>
                  </label>
                </div>
              </div>

              {/* Availability */}
              <div>
                <h4 className="font-medium text-gray-900 mb-3">
                  Disponibilidad
                </h4>
                <div className="space-y-2">
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      className="mr-2 text-blue-600"
                      defaultChecked
                    />
                    <span className="text-gray-700">En stock</span>
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" className="mr-2 text-blue-600" />
                    <span className="text-gray-700">Agotado</span>
                  </label>
                </div>
              </div>
            </div>
          </div>

          {/* Products Grid */}
          <div className="flex-1">
            {/* Sort and View Options */}
            <div className="flex justify-between items-center mb-6">
              <p className="text-gray-600">
                Mostrando {products.length} productos
              </p>
              <select className="border border-gray-300 rounded-md px-3 py-2 text-gray-700">
                <option>Más relevantes</option>
                <option>Precio: Menor a mayor</option>
                <option>Precio: Mayor a menor</option>
                <option>Mejor calificados</option>
                <option>Más nuevos</option>
              </select>
            </div>

            {/* Products Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {products.map((product) => (
                <div
                  key={product.id}
                  className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow duration-300"
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
                    {!product.inStock && (
                      <div className="absolute inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center">
                        <span className="bg-white text-gray-900 px-3 py-1 rounded font-semibold">
                          Agotado
                        </span>
                      </div>
                    )}
                  </div>

                  <div className="p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-sm text-gray-500">
                        {product.category}
                      </span>
                    </div>

                    <h3 className="font-semibold text-lg mb-2 text-gray-900">
                      <Link
                        href={`/productos/${product.id}`}
                        className="hover:text-blue-600 transition-colors"
                      >
                        {product.name}
                      </Link>
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
                        {product.rating} ({product.reviews})
                      </span>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="text-xl font-bold text-gray-900">
                          ${product.price}
                        </span>
                        {product.originalPrice && (
                          <span className="text-sm text-gray-500 line-through">
                            ${product.originalPrice}
                          </span>
                        )}
                      </div>

                      <button
                        className={`p-2 rounded-lg transition-colors ${
                          product.inStock
                            ? "bg-blue-600 text-white hover:bg-blue-700"
                            : "bg-gray-300 text-gray-500 cursor-not-allowed"
                        }`}
                        disabled={!product.inStock}
                      >
                        <ShoppingCart className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Pagination */}
            <div className="flex justify-center mt-12">
              <nav className="flex space-x-2">
                <button className="px-3 py-2 text-gray-500 hover:text-gray-700">
                  Anterior
                </button>
                <button className="px-3 py-2 bg-blue-600 text-white rounded">
                  1
                </button>
                <button className="px-3 py-2 text-gray-700 hover:text-gray-900">
                  2
                </button>
                <button className="px-3 py-2 text-gray-700 hover:text-gray-900">
                  3
                </button>
                <button className="px-3 py-2 text-gray-500 hover:text-gray-700">
                  Siguiente
                </button>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
