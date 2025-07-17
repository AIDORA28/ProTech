import { Mail, Phone, MapPin, Clock, MessageCircle } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-teal-600 via-blue-600 to-indigo-700 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-teal-600/30 to-blue-600/30"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Contáctanos
              <span className="block text-teal-300">Ahora</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-200">
              ¿Tienes alguna pregunta? Nuestro equipo de expertos está aquí para
              ayudarte
            </p>
          </div>
        </div>

        {/* Floating elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-white/10 rounded-full animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-16 h-16 bg-teal-400/20 rounded-full animate-bounce"></div>
        <div className="absolute top-1/2 left-20 w-12 h-12 bg-blue-400/20 rounded-full animate-ping"></div>
        <div className="absolute top-16 right-20 w-14 h-14 bg-indigo-400/15 rounded-full animate-pulse"></div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent mb-8">
                Información de Contacto
              </h2>

              <div className="space-y-6">
                <div className="group hover:scale-105 transition-all duration-300">
                  <div className="flex items-start space-x-6 p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl border border-gray-100">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-blue-300 transition-all duration-300">
                        <Phone className="w-8 h-8 text-white" />
                      </div>
                    </div>
                    <div>
                      <h3 className="font-bold text-xl text-gray-900 mb-1">
                        Teléfono
                      </h3>
                      <p className="text-lg text-blue-600 font-semibold">
                        +502 2345-6789
                      </p>
                      <p className="text-sm text-gray-500 mt-1">
                        Lun - Vie: 9:00 AM - 6:00 PM
                      </p>
                    </div>
                  </div>
                </div>

                <div className="group hover:scale-105 transition-all duration-300">
                  <div className="flex items-start space-x-6 p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl border border-gray-100">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-purple-300 transition-all duration-300">
                        <Mail className="w-8 h-8 text-white" />
                      </div>
                    </div>
                    <div>
                      <h3 className="font-bold text-xl text-gray-900 mb-1">
                        Email
                      </h3>
                      <p className="text-lg text-purple-600 font-semibold">
                        contacto@techpro.gt
                      </p>
                      <p className="text-sm text-gray-500 mt-1">
                        Respuesta en 24 horas
                      </p>
                    </div>
                  </div>
                </div>

                <div className="group hover:scale-105 transition-all duration-300">
                  <div className="flex items-start space-x-6 p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl border border-gray-100">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-green-300 transition-all duration-300">
                        <MessageCircle className="w-8 h-8 text-white" />
                      </div>
                    </div>
                    <div>
                      <h3 className="font-bold text-xl text-gray-900 mb-1">
                        WhatsApp
                      </h3>
                      <p className="text-lg text-green-600 font-semibold">
                        +502 2345-6789
                      </p>
                      <p className="text-sm text-gray-500 mt-1">
                        Respuesta inmediata • 24/7
                      </p>
                    </div>
                  </div>
                </div>

                <div className="group hover:scale-105 transition-all duration-300">
                  <div className="flex items-start space-x-6 p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl border border-gray-100">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-red-600 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-red-300 transition-all duration-300">
                        <MapPin className="w-8 h-8 text-white" />
                      </div>
                    </div>
                    <div>
                      <h3 className="font-bold text-xl text-gray-900 mb-1">
                        Dirección
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        Zona 10, Guatemala City
                        <br />
                        Guatemala, C.A.
                        <br />
                        01010
                      </p>
                    </div>
                  </div>
                </div>

                <div className="group hover:scale-105 transition-all duration-300">
                  <div className="flex items-start space-x-6 p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl border border-gray-100">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-orange-300 transition-all duration-300">
                        <Clock className="w-8 h-8 text-white" />
                      </div>
                    </div>
                    <div>
                      <h3 className="font-bold text-xl text-gray-900 mb-1">
                        Horarios
                      </h3>
                      <div className="text-gray-600 space-y-1">
                        <p>
                          <span className="font-semibold">
                            Lunes - Viernes:
                          </span>{" "}
                          9:00 AM - 7:00 PM
                        </p>
                        <p>
                          <span className="font-semibold">Sábado:</span> 10:00
                          AM - 6:00 PM
                        </p>
                        <p>
                          <span className="font-semibold">Domingo:</span> 12:00
                          PM - 5:00 PM
                        </p>
                      </div>
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
            {/* Contact Form */}
            <div className="bg-white rounded-3xl shadow-2xl p-8 border border-gray-100">
              <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-8">
                Envíanos un Mensaje
              </h2>

              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="group">
                    <label
                      htmlFor="nombre"
                      className="block text-sm font-semibold text-gray-700 mb-2"
                    >
                      Nombre *
                    </label>
                    <input
                      type="text"
                      id="nombre"
                      name="nombre"
                      required
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 group-hover:border-gray-300"
                      placeholder="Tu nombre completo"
                    />
                  </div>

                  <div className="group">
                    <label
                      htmlFor="apellido"
                      className="block text-sm font-semibold text-gray-700 mb-2"
                    >
                      Apellido *
                    </label>
                    <input
                      type="text"
                      id="apellido"
                      name="apellido"
                      required
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 group-hover:border-gray-300"
                      placeholder="Tu apellido"
                    />
                  </div>
                </div>

                <div className="group">
                  <label
                    htmlFor="email"
                    className="block text-sm font-semibold text-gray-700 mb-2"
                  >
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 group-hover:border-gray-300"
                    placeholder="tu@email.com"
                  />
                </div>

                <div className="group">
                  <label
                    htmlFor="telefono"
                    className="block text-sm font-semibold text-gray-700 mb-2"
                  >
                    Teléfono
                  </label>
                  <input
                    type="tel"
                    id="telefono"
                    name="telefono"
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 group-hover:border-gray-300"
                    placeholder="+502 0000-0000"
                  />
                </div>

                <div className="group">
                  <label
                    htmlFor="asunto"
                    className="block text-sm font-semibold text-gray-700 mb-2"
                  >
                    Asunto *
                  </label>
                  <select
                    id="asunto"
                    name="asunto"
                    required
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 group-hover:border-gray-300 text-gray-700"
                  >
                    <option value="">Selecciona un asunto</option>
                    <option value="soporte">Soporte Técnico</option>
                    <option value="ventas">Consulta de Ventas</option>
                    <option value="garantia">Garantía</option>
                    <option value="general">Consulta General</option>
                    <option value="otro">Otro</option>
                  </select>
                </div>

                <div className="group">
                  <label
                    htmlFor="mensaje"
                    className="block text-sm font-semibold text-gray-700 mb-2"
                  >
                    Mensaje *
                  </label>
                  <textarea
                    id="mensaje"
                    name="mensaje"
                    rows={6}
                    required
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 group-hover:border-gray-300 resize-none"
                    placeholder="Cuéntanos en qué podemos ayudarte..."
                  ></textarea>
                </div>

                <div className="flex items-center space-x-3">
                  <input
                    type="checkbox"
                    id="acepto"
                    name="acepto"
                    required
                    className="w-5 h-5 text-blue-600 bg-gray-100 border-2 border-gray-200 rounded focus:ring-blue-500 focus:ring-2"
                  />
                  <label htmlFor="acepto" className="text-sm text-gray-600">
                    Acepto los{" "}
                    <a
                      href="#"
                      className="text-blue-600 hover:text-blue-800 font-semibold underline"
                    >
                      términos y condiciones
                    </a>{" "}
                    y{" "}
                    <a
                      href="#"
                      className="text-blue-600 hover:text-blue-800 font-semibold underline"
                    >
                      política de privacidad
                    </a>
                  </label>
                </div>

                <div className="pt-4">
                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold py-4 px-6 rounded-xl hover:from-blue-700 hover:to-purple-700 transform hover:scale-[1.02] transition-all duration-300 shadow-lg hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-blue-300"
                  >
                    Enviar Mensaje
                    <span className="ml-2">→</span>
                  </button>
                </div>
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

        {/* Stats Section */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent mb-4">
              ¿Por qué elegirnos?
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Más de 15 años de experiencia brindando las mejores soluciones
              tecnológicas en Guatemala
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center group hover:scale-105 transition-all duration-300">
              <div className="bg-gradient-to-br from-blue-500 to-blue-600 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:shadow-blue-300">
                <span className="text-3xl font-bold text-white">15+</span>
              </div>
              <h3 className="font-bold text-xl text-gray-900 mb-2">
                Años de Experiencia
              </h3>
              <p className="text-gray-600">Líderes en tecnología desde 2009</p>
            </div>

            <div className="text-center group hover:scale-105 transition-all duration-300">
              <div className="bg-gradient-to-br from-green-500 to-green-600 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:shadow-green-300">
                <span className="text-3xl font-bold text-white">5K+</span>
              </div>
              <h3 className="font-bold text-xl text-gray-900 mb-2">
                Clientes Satisfechos
              </h3>
              <p className="text-gray-600">Confianza y calidad garantizada</p>
            </div>

            <div className="text-center group hover:scale-105 transition-all duration-300">
              <div className="bg-gradient-to-br from-purple-500 to-purple-600 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:shadow-purple-300">
                <span className="text-3xl font-bold text-white">24/7</span>
              </div>
              <h3 className="font-bold text-xl text-gray-900 mb-2">
                Soporte Técnico
              </h3>
              <p className="text-gray-600">Asistencia cuando la necesites</p>
            </div>

            <div className="text-center group hover:scale-105 transition-all duration-300">
              <div className="bg-gradient-to-br from-orange-500 to-orange-600 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:shadow-orange-300">
                <span className="text-3xl font-bold text-white">1K+</span>
              </div>
              <h3 className="font-bold text-xl text-gray-900 mb-2">
                Productos
              </h3>
              <p className="text-gray-600">Amplio catálogo especializado</p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-20 text-center">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-12 text-white">
            <h2 className="text-4xl font-bold mb-4">
              ¿Listo para potenciar tu tecnología?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Contáctanos hoy y descubre cómo podemos ayudarte a alcanzar tus
              objetivos tecnológicos
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+50223456789"
                className="bg-white text-blue-600 font-bold py-3 px-8 rounded-xl hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center space-x-2"
              >
                <Phone className="w-5 h-5" />
                <span>Llamar Ahora</span>
              </a>
              <a
                href="https://wa.me/50223456789?text=Hola%2C%20me%20interesa%20obtener%20más%20información%20sobre%20sus%20productos%20y%20servicios%20de%20TechPro."
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center space-x-2"
              >
                <MessageCircle className="w-5 h-5" />
                <span>Escríbenos por WhatsApp</span>
              </a>
              <a
                href="mailto:contacto@techpro.gt"
                className="bg-transparent border-2 border-white text-white font-bold py-3 px-8 rounded-xl hover:bg-white hover:text-blue-600 transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2"
              >
                <Mail className="w-5 h-5" />
                <span>Enviar Email</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
