import Link from "next/link";
import Image from "next/image";
import { Laptop, Cpu, Monitor, Headphones, ArrowRight } from "lucide-react";
import { getProductsByCategory } from "@/lib/mockData";
import { categories } from "@/types";

// Datos de categorías con información adicional
const categoryData = {
  laptops: {
    title: "Laptops",
    description: "Equipos portátiles para gaming, trabajo y estudios",
    image: "/img/Catalogos/Laptops.jpeg",
    fallbackImage: "/img/Categorias/Categoria-Defecto.jpg",
    icon: Laptop,
    bgColor: "bg-blue-500",
  },
  monitores: {
    title: "Monitores",
    description: "Pantallas para gaming, diseño y productividad",
    image: "/img/Catalogos/Monitores.webp",
    fallbackImage: "/img/Categorias/Categoria-Defecto.jpg",
    icon: Monitor,
    bgColor: "bg-green-500",
  },
  componentes: {
    title: "Componentes",
    description: "Partes y componentes para construir tu PC ideal",
    image: "/img/Catalogos/Componentes.jpg",
    fallbackImage: "/img/Categorias/Categoria-Defecto.jpg",
    icon: Cpu,
    bgColor: "bg-purple-500",
  },
  perifericos: {
    title: "Periféricos",
    description: "Teclados, mouse, audífonos y más accesorios",
    image: "/img/Catalogos/Perifericos.jpg",
    fallbackImage: "/img/Categorias/Categoria-Defecto.jpg",
    icon: Headphones,
    bgColor: "bg-red-500",
  },
} as const;

export default function CategoriesPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-700 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/30 to-purple-600/30"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Todas las
              <span className="block text-pink-300">Categorías</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-200">
              Explora nuestra amplia gama de productos organizados por
              categorías
            </p>
          </div>
        </div>

        {/* Floating elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-white/10 rounded-full animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-16 h-16 bg-pink-400/20 rounded-full animate-bounce"></div>
        <div className="absolute top-1/2 left-20 w-12 h-12 bg-indigo-400/20 rounded-full animate-ping"></div>
        <div className="absolute top-16 right-20 w-14 h-14 bg-purple-400/15 rounded-full animate-pulse"></div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {categories.map((category) => {
            const categoryInfo =
              categoryData[category as keyof typeof categoryData];
            const IconComponent = categoryInfo.icon;
            const productCount = getProductsByCategory(category).length;

            return (
              <Link
                key={category}
                href={`/productos?categoria=${category}`}
                className="group bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="relative h-48 bg-gradient-to-br from-blue-50 to-purple-50 overflow-hidden">
                  <Image
                    src={categoryInfo.image}
                    alt={categoryInfo.title}
                    fill
                    className="object-cover object-center"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 bg-white bg-opacity-90 rounded-full flex items-center justify-center shadow-lg">
                      <IconComponent className="w-8 h-8 text-gray-700" />
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                      {categoryInfo.title}
                    </h3>
                    <span className="bg-blue-100 text-blue-800 text-sm font-medium px-2.5 py-0.5 rounded-full">
                      {productCount}
                    </span>
                  </div>

                  <p className="text-gray-600 mb-4">
                    {categoryInfo.description}
                  </p>

                  <div className="flex items-center text-blue-600 font-medium group-hover:text-blue-800">
                    <span>Ver productos</span>
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
          <h2 className="text-3xl font-bold mb-4">
            ¿No encuentras lo que buscas?
          </h2>
          <p className="text-xl mb-6 text-blue-100">
            Contáctanos y te ayudaremos a encontrar el producto perfecto para ti
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contacto"
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Contactar Ahora
            </Link>
            <Link
              href="/productos"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
            >
              Ver Todos los Productos
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
