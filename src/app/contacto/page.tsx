import { Mail, Phone, MapPin, Clock, Send } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Contáctanos</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            ¿Tienes alguna pregunta? Nuestro equipo de expertos está aquí para
            ayudarte. Contáctanos y te responderemos lo antes posible.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Información de Contacto
              </h2>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                      <Phone className="w-6 h-6 text-blue-600" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Teléfono</h3>
                    <p className="text-gray-600">+1 (555) 123-4567</p>
                    <p className="text-sm text-gray-500">
                      Lun - Vie: 9:00 AM - 6:00 PM
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                      <Mail className="w-6 h-6 text-blue-600" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Email</h3>
                    <p className="text-gray-600">contacto@techpro.com</p>
                    <p className="text-sm text-gray-500">
                      Respuesta en 24 horas
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                      <MapPin className="w-6 h-6 text-blue-600" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Dirección</h3>
                    <p className="text-gray-600">
                      123 Tech Street
                      <br />
                      Ciudad Tecnológica, TC 12345
                      <br />
                      España
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                      <Clock className="w-6 h-6 text-blue-600" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Horarios</h3>
                    <div className="text-gray-600">
                      <p>Lunes - Viernes: 9:00 AM - 7:00 PM</p>
                      <p>Sábado: 10:00 AM - 6:00 PM</p>
                      <p>Domingo: 12:00 PM - 5:00 PM</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* FAQ Section */}
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Preguntas Frecuentes
              </h3>
              <div className="space-y-4">
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <h4 className="font-semibold text-gray-900 mb-2">
                    ¿Ofrecen garantía en todos los productos?
                  </h4>
                  <p className="text-gray-600 text-sm">
                    Sí, todos nuestros productos incluyen garantía del
                    fabricante de mínimo 1 año.
                  </p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <h4 className="font-semibold text-gray-900 mb-2">
                    ¿Cuánto tiempo tarda el envío?
                  </h4>
                  <p className="text-gray-600 text-sm">
                    El envío estándar tarda 2-3 días hábiles. Ofrecemos envío
                    express en 24 horas.
                  </p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <h4 className="font-semibold text-gray-900 mb-2">
                    ¿Puedo devolver un producto?
                  </h4>
                  <p className="text-gray-600 text-sm">
                    Tienes 30 días para devolver cualquier producto en su estado
                    original.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <div className="bg-white rounded-lg shadow-sm p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Envíanos un Mensaje
              </h2>

              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="firstName"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Nombre
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Tu nombre"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="lastName"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Apellido
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Tu apellido"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="tu@email.com"
                  />
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Teléfono (Opcional)
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="+34 600 000 000"
                  />
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Asunto
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="">Selecciona un asunto</option>
                    <option value="general">Consulta general</option>
                    <option value="technical">Soporte técnico</option>
                    <option value="orders">Pedidos y envíos</option>
                    <option value="returns">Devoluciones</option>
                    <option value="wholesale">Ventas al por mayor</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Mensaje
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Escribe tu mensaje aquí..."
                  ></textarea>
                </div>

                <div className="flex items-center">
                  <input
                    id="newsletter"
                    name="newsletter"
                    type="checkbox"
                    className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                  />
                  <label
                    htmlFor="newsletter"
                    className="ml-2 block text-sm text-gray-700"
                  >
                    Quiero recibir noticias y ofertas especiales por email
                  </label>
                </div>

                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center"
                >
                  <Send className="w-5 h-5 mr-2" />
                  Enviar Mensaje
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Additional Support */}
        <div className="mt-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl text-white p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">
            ¿Necesitas ayuda inmediata?
          </h2>
          <p className="text-blue-100 mb-6">
            Nuestro chat en vivo está disponible para resolver tus dudas al
            instante
          </p>
          <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
            Iniciar Chat en Vivo
          </button>
        </div>
      </div>
    </div>
  );
}
