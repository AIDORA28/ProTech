"use client";

import { useState, useMemo, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { Search, ShoppingCart, Grid, List, Star } from "lucide-react";
import { getProducts, getProductsByCategory } from "@/lib/mockData";
import { categories } from "@/types";

function ProductsContent() {
  const searchParams = useSearchParams();
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [sortBy, setSortBy] = useState("name");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");

  // Obtener todos los productos
  const allProducts = getProducts();

  // Establecer categoría desde URL params al cargar
  useEffect(() => {
    const categoria = searchParams.get("categoria");
    if (
      categoria &&
      categories.includes(categoria as (typeof categories)[number])
    ) {
      setSelectedCategory(categoria);
    }
  }, [searchParams]);

  // Filtrar y ordenar productos
  const filteredProducts = useMemo(() => {
    let filtered = allProducts;

    // Filtrar por categoría
    if (selectedCategory) {
      filtered = getProductsByCategory(selectedCategory);
    }

    // Filtrar por búsqueda
    if (searchTerm) {
      filtered = filtered.filter(
        (product) =>
          product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          product.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Ordenar productos
    filtered.sort((a, b) => {
      switch (sortBy) {
        case "price-low":
          return a.price - b.price;
        case "price-high":
          return b.price - a.price;
        case "name":
          return a.name.localeCompare(b.name);
        default:
          return 0;
      }
    });

    return filtered;
  }, [allProducts, selectedCategory, searchTerm, sortBy]);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-purple-600 via-blue-600 to-cyan-700 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/30 to-blue-600/30"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Catálogo de
              <span className="block text-cyan-300">Productos</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-200">
              Descubre nuestra selección de productos tecnológicos de alta
              calidad
            </p>
          </div>
        </div>

        {/* Floating elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-white/10 rounded-full animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-16 h-16 bg-cyan-400/20 rounded-full animate-bounce"></div>
        <div className="absolute top-1/2 left-20 w-12 h-12 bg-purple-400/20 rounded-full animate-ping"></div>
        <div className="absolute top-16 right-20 w-14 h-14 bg-blue-400/15 rounded-full animate-pulse"></div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Filters and Search */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-8 border border-gray-100">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500 w-5 h-5" />
              <input
                type="text"
                placeholder="Buscar productos..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 placeholder-gray-500 text-gray-700 text-base"
              />
            </div>

            {/* Filters */}
            <div className="flex flex-wrap gap-4">
              {/* Category Filter */}
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white text-gray-700 font-medium transition-all duration-300 min-w-[180px]"
              >
                <option value="" className="text-gray-700 bg-white">
                  Todas las categorías
                </option>
                {categories.map((category) => (
                  <option
                    key={category}
                    value={category}
                    className="text-gray-700 bg-white"
                  >
                    {category.charAt(0).toUpperCase() + category.slice(1)}
                  </option>
                ))}
              </select>

              {/* Sort */}
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white text-gray-700 font-medium transition-all duration-300 min-w-[200px]"
              >
                <option value="name" className="text-gray-700 bg-white">
                  Ordenar por nombre
                </option>
                <option value="price-low" className="text-gray-700 bg-white">
                  Precio: menor a mayor
                </option>
                <option value="price-high" className="text-gray-700 bg-white">
                  Precio: mayor a menor
                </option>
              </select>

              {/* View Mode */}
              <div className="flex border-2 border-gray-200 rounded-xl overflow-hidden">
                <button
                  onClick={() => setViewMode("grid")}
                  className={`p-3 transition-all duration-300 ${
                    viewMode === "grid"
                      ? "bg-blue-600 text-white shadow-md"
                      : "bg-white text-gray-600 hover:bg-gray-50"
                  }`}
                >
                  <Grid className="w-5 h-5" />
                </button>
                <button
                  onClick={() => setViewMode("list")}
                  className={`p-3 transition-all duration-300 ${
                    viewMode === "list"
                      ? "bg-blue-600 text-white shadow-md"
                      : "bg-white text-gray-600 hover:bg-gray-50"
                  }`}
                >
                  <List className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Results count */}
        <div className="mb-6">
          <p className="text-gray-600">
            Mostrando {filteredProducts.length} producto
            {filteredProducts.length !== 1 ? "s" : ""}
            {selectedCategory &&
              ` en la categoría "${
                selectedCategory.charAt(0).toUpperCase() +
                selectedCategory.slice(1)
              }"`}
            {searchTerm && ` para "${searchTerm}"`}
          </p>
        </div>

        {/* Products Grid/List */}
        {filteredProducts.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No se encontraron productos</p>
            <button
              onClick={() => {
                setSearchTerm("");
                setSelectedCategory("");
              }}
              className="mt-4 text-blue-600 hover:text-blue-800"
            >
              Limpiar filtros
            </button>
          </div>
        ) : (
          <div
            className={
              viewMode === "grid"
                ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
                : "space-y-4"
            }
          >
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className={`bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-lg transition-shadow ${
                  viewMode === "list" ? "flex" : ""
                }`}
              >
                {/* Product Image */}
                <div
                  className={`${
                    viewMode === "list" ? "w-48 h-36 flex-shrink-0" : "h-48"
                  } bg-gray-200 relative overflow-hidden`}
                >
                  <Image
                    src={
                      product.image_url ||
                      "/img/Categorias/Categoria-Defecto.jpg"
                    }
                    alt={product.name}
                    fill
                    className="object-cover object-center"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  {product.featured && (
                    <div className="absolute top-2 left-2">
                      <span className="bg-red-500 text-white text-xs px-2 py-1 rounded">
                        Destacado
                      </span>
                    </div>
                  )}
                </div>

                {/* Product Info */}
                <div
                  className={`p-4 ${
                    viewMode === "list"
                      ? "flex-1 flex flex-col justify-between"
                      : ""
                  }`}
                >
                  <div>
                    <div className="mb-2">
                      <span className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full uppercase tracking-wide font-semibold">
                        {product.category}
                      </span>
                    </div>

                    <h3
                      className={`font-semibold text-gray-900 mb-2 ${
                        viewMode === "list" ? "text-xl" : "text-lg"
                      }`}
                    >
                      {product.name}
                    </h3>

                    <p
                      className={`text-gray-600 mb-4 ${
                        viewMode === "list"
                          ? "line-clamp-2 text-sm"
                          : "line-clamp-3"
                      }`}
                    >
                      {product.description}
                    </p>

                    {/* Rating */}
                    <div className="flex items-center mb-4">
                      <div className="flex items-center">
                        {[0, 1, 2, 3, 4].map((rating) => (
                          <Star
                            key={rating}
                            className="w-4 h-4 text-yellow-400 fill-current"
                          />
                        ))}
                      </div>
                      <span className="ml-2 text-sm text-gray-600">(4.8)</span>
                    </div>
                  </div>

                  <div>
                    {/* Price and Stock */}
                    <div
                      className={`flex items-center justify-between mb-4 ${
                        viewMode === "list" ? "flex-wrap gap-2" : ""
                      }`}
                    >
                      <div>
                        <span
                          className={`font-bold text-gray-900 ${
                            viewMode === "list" ? "text-xl" : "text-2xl"
                          }`}
                        >
                          Q{product.price}
                        </span>
                      </div>
                      <div
                        className={`text-sm ${
                          product.stock > 0 ? "text-green-600" : "text-red-600"
                        }`}
                      >
                        {product.stock > 0
                          ? `${product.stock} disponibles`
                          : "Agotado"}
                      </div>
                    </div>

                    {/* Actions */}
                    <div
                      className={`flex gap-2 ${
                        viewMode === "list" ? "flex-col sm:flex-row" : ""
                      }`}
                    >
                      <Link
                        href={`/productos/${product.id}`}
                        className="flex-1 bg-blue-600 text-white text-center px-4 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                      >
                        Ver detalles
                      </Link>
                      <button
                        className={`px-4 py-2 rounded-lg font-semibold transition-colors flex items-center justify-center ${
                          product.stock > 0
                            ? "bg-green-600 text-white hover:bg-green-700"
                            : "bg-gray-300 text-gray-500 cursor-not-allowed"
                        } ${
                          viewMode === "list" ? "flex-1 sm:flex-initial" : ""
                        }`}
                        disabled={product.stock === 0}
                      >
                        <ShoppingCart className="w-5 h-5" />
                        {viewMode === "list" && (
                          <span className="ml-2 sm:hidden">Agregar</span>
                        )}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default function ProductsPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-gray-50 flex items-center justify-center">
          <div className="text-center">
            <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600 mx-auto"></div>
            <p className="mt-4 text-gray-600">Cargando productos...</p>
          </div>
        </div>
      }
    >
      <ProductsContent />
    </Suspense>
  );
}
