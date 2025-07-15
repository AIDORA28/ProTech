"use client";

import Link from "next/link";
import { ShoppingCart, Search, Menu, X } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { useState } from "react";

export const Header = () => {
  const { state } = useCart();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const itemCount = state.items.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <header className="bg-white shadow-lg border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-2 rounded-lg">
              <span className="font-bold text-xl">TP</span>
            </div>
            <span className="font-bold text-xl text-gray-900">TechPro V2</span>
          </Link>

          {/* Search Bar - Desktop */}
          <div className="hidden md:flex flex-1 max-w-lg mx-8">
            <div className="relative w-full">
              <input
                type="text"
                placeholder="Buscar productos..."
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
            </div>
          </div>

          {/* Navigation - Desktop */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              href="/productos"
              className="text-gray-700 hover:text-blue-600 font-medium"
            >
              Productos
            </Link>
            <Link
              href="/categorias"
              className="text-gray-700 hover:text-blue-600 font-medium"
            >
              Categorías
            </Link>
            <Link
              href="/ofertas"
              className="text-gray-700 hover:text-blue-600 font-medium"
            >
              Ofertas
            </Link>
            <Link
              href="/contacto"
              className="text-gray-700 hover:text-blue-600 font-medium"
            >
              Contacto
            </Link>
          </nav>

          {/* Cart and Mobile Menu */}
          <div className="flex items-center space-x-4">
            {/* Cart */}
            <Link href="/carrito" className="relative">
              <ShoppingCart className="h-6 w-6 text-gray-700 hover:text-blue-600" />
              {itemCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-blue-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {itemCount}
                </span>
              )}
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6 text-gray-700" />
              ) : (
                <Menu className="h-6 w-6 text-gray-700" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 border-t">
              {/* Mobile Search */}
              <div className="relative mb-4">
                <input
                  type="text"
                  placeholder="Buscar productos..."
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
              </div>

              {/* Mobile Navigation */}
              <Link
                href="/productos"
                className="block px-3 py-2 text-gray-700 hover:text-blue-600 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Productos
              </Link>
              <Link
                href="/categorias"
                className="block px-3 py-2 text-gray-700 hover:text-blue-600 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Categorías
              </Link>
              <Link
                href="/ofertas"
                className="block px-3 py-2 text-gray-700 hover:text-blue-600 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Ofertas
              </Link>
              <Link
                href="/contacto"
                className="block px-3 py-2 text-gray-700 hover:text-blue-600 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Contacto
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
