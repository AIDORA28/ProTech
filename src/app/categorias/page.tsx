import Link from "next/link";
import { Laptop, Cpu, Monitor, Smartphone } from "lucide-react";

const categories = [
  {
    id: "laptops",
    name: "Laptops",
    description: "Laptops gaming, ultrabooks y workstations",
    icon: Laptop,
    image: "/img/Categorias/Laptop/laptop-por-defecto.jpg",
    productCount: 45,
  },
  {
    id: "componentes",
    name: "Componentes",
    description: "Procesadores, tarjetas gráficas, memorias y más",
    icon: Cpu,
    image: "/img/Categorias/Componentes/",
    productCount: 128,
  },
  {
    id: "monitores",
    name: "Monitores",
    description: "Monitores 4K, gaming y profesionales",
    icon: Monitor,
    image: "/img/Categorias/Pantalla/",
    productCount: 67,
  },
  {
    id: "perifericos",
    name: "Periféricos",
    description: "Teclados, ratones, auriculares y más",
    icon: Smartphone,
    image: "/img/Categorias/Perifericos/",
    productCount: 89,
  },
];

export default function CategoriesPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Todas las Categorías
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explora nuestra amplia selección de productos organizados por
            categorías. Encuentra exactamente lo que necesitas para tu setup
            tecnológico.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {categories.map((category) => {
            const IconComponent = category.icon;
            return (
              <Link
                key={category.id}
                href={`/categorias/${category.id}`}
                className="group bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="aspect-w-16 aspect-h-9 bg-gradient-to-br from-blue-50 to-purple-50">
                  <div className="flex items-center justify-center p-8">
                    <div className="text-center">
                      <div className="w-20 h-20 mx-auto mb-4 bg-blue-100 rounded-full flex items-center justify-center group-hover:bg-blue-200 transition-colors">
                        <IconComponent className="w-10 h-10 text-blue-600" />
                      </div>
                      <div className="w-24 h-24 mx-auto bg-gray-200 rounded-lg flex items-center justify-center text-gray-400">
                        <span className="text-xs">Imagen</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                      {category.name}
                    </h3>
                    <span className="bg-blue-100 text-blue-800 text-sm font-medium px-2.5 py-0.5 rounded-full">
                      {category.productCount}
                    </span>
                  </div>

                  <p className="text-gray-600 mb-4">{category.description}</p>

                  <div className="flex items-center text-blue-600 font-medium group-hover:text-blue-800">
                    <span>Ver productos</span>
                    <svg
                      className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

        {/* Featured Categories Section */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Categorías Más Populares
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {["Gaming", "Trabajo", "Estudio", "Creadores"].map((tag) => (
              <div
                key={tag}
                className="bg-white p-4 rounded-lg shadow-sm text-center hover:shadow-md transition-shadow cursor-pointer"
              >
                <h4 className="font-semibold text-gray-900">{tag}</h4>
                <p className="text-sm text-gray-600 mt-1">Ver productos</p>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl text-white p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">
            ¿No encuentras lo que buscas?
          </h2>
          <p className="text-blue-100 mb-6">
            Nuestro equipo de expertos está aquí para ayudarte a encontrar el
            producto perfecto
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contacto"
              className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Contactar Soporte
            </Link>
            <Link
              href="/productos"
              className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
            >
              Ver Todos los Productos
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
