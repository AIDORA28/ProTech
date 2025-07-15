"use client";

import { useCart } from "@/context/CartContext";
import Image from "next/image";
import Link from "next/link";
import { Minus, Plus, Trash2, ShoppingBag } from "lucide-react";

export default function CartPage() {
  const { state, dispatch } = useCart();

  const updateQuantity = (id: string, quantity: number) => {
    if (quantity > 0) {
      dispatch({ type: "UPDATE_QUANTITY", payload: { id, quantity } });
    }
  };

  const removeItem = (id: string) => {
    dispatch({ type: "REMOVE_FROM_CART", payload: id });
  };

  const clearCart = () => {
    dispatch({ type: "CLEAR_CART" });
  };

  const subtotal = state.items.reduce(
    (sum, item) => sum + item.product.price * item.quantity,
    0
  );
  const shipping = subtotal > 100 ? 0 : 15;
  const total = subtotal + shipping;

  if (state.items.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <ShoppingBag className="w-24 h-24 text-gray-300 mx-auto mb-6" />
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            Tu carrito está vacío
          </h1>
          <p className="text-gray-600 mb-8">
            Parece que no has agregado ningún producto a tu carrito todavía.
          </p>
          <Link
            href="/productos"
            className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            Continuar Comprando
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Carrito de Compras
          </h1>
          <p className="text-gray-600">
            {state.items.length} producto{state.items.length !== 1 ? "s" : ""}{" "}
            en tu carrito
          </p>
        </div>

        <div className="lg:grid lg:grid-cols-12 lg:gap-x-12 lg:items-start">
          {/* Cart Items */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-lg shadow-sm">
              <div className="px-6 py-4 border-b border-gray-200">
                <div className="flex justify-between items-center">
                  <h2 className="text-lg font-semibold text-gray-900">
                    Productos
                  </h2>
                  <button
                    onClick={clearCart}
                    className="text-red-600 hover:text-red-800 text-sm font-medium"
                  >
                    Vaciar carrito
                  </button>
                </div>
              </div>

              <div className="px-6 py-6 space-y-6">
                {state.items.map((item) => (
                  <div
                    key={item.product.id}
                    className="flex items-center space-x-4"
                  >
                    <div className="flex-shrink-0">
                      <Image
                        src={
                          item.product.image_url ||
                          "/img/placeholder-producto.jpg"
                        }
                        alt={item.product.name}
                        width={80}
                        height={80}
                        className="w-20 h-20 object-cover rounded-lg"
                      />
                    </div>

                    <div className="flex-1 min-w-0">
                      <h3 className="text-lg font-semibold text-gray-900 truncate">
                        {item.product.name}
                      </h3>
                      <p className="text-sm text-gray-500">
                        {item.product.category}
                      </p>
                      <p className="text-lg font-bold text-gray-900 mt-1">
                        ${item.product.price}
                      </p>
                    </div>

                    <div className="flex items-center space-x-3">
                      <button
                        onClick={() =>
                          updateQuantity(item.product.id, item.quantity - 1)
                        }
                        className="p-1 rounded-full border border-gray-300 hover:bg-gray-100"
                      >
                        <Minus className="w-4 h-4" />
                      </button>

                      <span className="w-12 text-center font-semibold">
                        {item.quantity}
                      </span>

                      <button
                        onClick={() =>
                          updateQuantity(item.product.id, item.quantity + 1)
                        }
                        className="p-1 rounded-full border border-gray-300 hover:bg-gray-100"
                      >
                        <Plus className="w-4 h-4" />
                      </button>
                    </div>

                    <div className="text-right">
                      <p className="text-lg font-bold text-gray-900">
                        ${(item.product.price * item.quantity).toFixed(2)}
                      </p>
                      <button
                        onClick={() => removeItem(item.product.id)}
                        className="text-red-600 hover:text-red-800 mt-1"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6">
              <Link
                href="/productos"
                className="text-blue-600 hover:text-blue-800 font-medium"
              >
                ← Continuar comprando
              </Link>
            </div>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-5 mt-8 lg:mt-0">
            <div className="bg-white rounded-lg shadow-sm px-6 py-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">
                Resumen del pedido
              </h2>

              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600">Subtotal</span>
                  <span className="font-semibold">${subtotal.toFixed(2)}</span>
                </div>

                <div className="flex justify-between">
                  <span className="text-gray-600">Envío</span>
                  <span className="font-semibold">
                    {shipping === 0 ? "Gratis" : `$${shipping.toFixed(2)}`}
                  </span>
                </div>

                {subtotal < 100 && (
                  <p className="text-sm text-gray-500">
                    Envío gratis en compras superiores a $100
                  </p>
                )}

                <div className="border-t border-gray-200 pt-3">
                  <div className="flex justify-between">
                    <span className="text-lg font-semibold text-gray-900">
                      Total
                    </span>
                    <span className="text-lg font-bold text-gray-900">
                      ${total.toFixed(2)}
                    </span>
                  </div>
                </div>
              </div>

              <div className="mt-6 space-y-3">
                <button className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                  Proceder al pago
                </button>

                <button className="w-full border border-gray-300 text-gray-700 py-3 px-4 rounded-lg font-semibold hover:bg-gray-50 transition-colors">
                  Guardar para después
                </button>
              </div>

              {/* Security badges */}
              <div className="mt-6 pt-6 border-t border-gray-200">
                <div className="flex items-center justify-center space-x-4 text-sm text-gray-500">
                  <div className="flex items-center">
                    <svg
                      className="w-4 h-4 mr-1"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Pago seguro
                  </div>
                  <div className="flex items-center">
                    <svg
                      className="w-4 h-4 mr-1"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Garantía
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
