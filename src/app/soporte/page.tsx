import Link from "next/link";
import {
  Wrench,
  Shield,
  Clock,
  Phone,
  MessageCircle,
  CheckCircle,
  Settings,
  HardDrive,
  Cpu,
  Monitor,
  Zap,
  Users,
  Award,
  Calendar,
  MapPin,
  Mail,
} from "lucide-react";

// Datos de servicios de soporte técnico
const technicalServices = [
  {
    id: 1,
    title: "Mantenimiento Preventivo",
    description:
      "Limpieza interna y externa, actualización de drivers, optimización del sistema",
    icon: Settings,
    price: "Desde $300",
    duration: "1-2 horas",
    includes: [
      "Limpieza interna completa",
      "Actualización de drivers",
      "Optimización del sistema",
      "Diagnóstico completo",
      "Reporte técnico detallado",
    ],
  },
  {
    id: 2,
    title: "Reparación de Hardware",
    description: "Diagnóstico y reparación de componentes defectuosos",
    icon: Wrench,
    price: "Desde $500",
    duration: "2-5 días",
    includes: [
      "Diagnóstico profesional",
      "Reparación de componentes",
      "Reemplazo de piezas (costo adicional)",
      "Pruebas de funcionamiento",
      "Garantía de 30 días",
    ],
  },
  {
    id: 3,
    title: "Instalación de Software",
    description:
      "Instalación y configuración de sistemas operativos y programas",
    icon: HardDrive,
    price: "Desde $200",
    duration: "2-4 horas",
    includes: [
      "Instalación de SO",
      "Configuración básica",
      "Instalación de programas esenciales",
      "Configuración de antivirus",
      "Tutorial básico de uso",
    ],
  },
  {
    id: 4,
    title: "Recuperación de Datos",
    description: "Recuperación de archivos perdidos o dañados",
    icon: Shield,
    price: "Desde $800",
    duration: "3-7 días",
    includes: [
      "Análisis del dispositivo",
      "Recuperación de archivos",
      "Entrega en dispositivo externo",
      "Reporte de archivos recuperados",
      "Asesoría para prevención",
    ],
  },
  {
    id: 5,
    title: "Actualización de Componentes",
    description: "Upgrade de RAM, SSD, tarjetas gráficas y más",
    icon: Cpu,
    price: "Desde $150",
    duration: "1-3 horas",
    includes: [
      "Asesoría personalizada",
      "Instalación profesional",
      "Configuración y pruebas",
      "Verificación de compatibilidad",
      "Garantía de instalación",
    ],
  },
  {
    id: 6,
    title: "Soporte Remoto",
    description: "Asistencia técnica desde la comodidad de tu hogar",
    icon: Monitor,
    price: "Desde $150",
    duration: "30min - 2 horas",
    includes: [
      "Conexión remota segura",
      "Solución inmediata",
      "Sin desplazamientos",
      "Disponible 6 días a la semana",
      "Seguimiento post-servicio",
    ],
  },
];

// Datos de planes de mantenimiento
const maintenancePlans = [
  {
    name: "Plan Básico",
    price: "$500",
    period: "cada 6 meses",
    features: [
      "Limpieza interna y externa",
      "Actualización de drivers",
      "Optimización básica del sistema",
      "Respaldo de datos importantes",
      "Reporte básico de estado",
    ],
    popular: false,
  },
  {
    name: "Plan Completo",
    price: "$800",
    period: "cada 4 meses",
    features: [
      "Todo lo del Plan Básico",
      "Análisis profundo del hardware",
      "Optimización avanzada",
      "Instalación de actualizaciones",
      "Soporte telefónico incluido",
      "Descuento del 15% en reparaciones",
    ],
    popular: true,
  },
  {
    name: "Plan Premium",
    price: "$1200",
    period: "cada 3 meses",
    features: [
      "Todo lo del Plan Completo",
      "Visita técnica mensual",
      "Monitoreo remoto 24/7",
      "Soporte prioritario",
      "Reemplazo temporal en reparaciones",
      "Descuento del 25% en reparaciones",
    ],
    popular: false,
  },
];

// Estadísticas del servicio
const serviceStats = [
  { icon: Users, value: "500+", label: "Clientes Satisfechos" },
  { icon: Award, value: "98%", label: "Tasa de Éxito" },
  { icon: Clock, value: "24h", label: "Respuesta Máxima" },
  { icon: Shield, value: "3 años", label: "Experiencia" },
];

export default function SoportePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-green-600 via-blue-600 to-purple-700 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-green-600/30 to-blue-600/30"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Soporte Técnico
              <span className="block text-green-300">Profesional</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-200">
              Mantenimiento, reparación y soporte especializado para tus equipos
              tecnológicos
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#servicios"
                className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                Ver Servicios
              </a>
              <a
                href="tel:+1234567890"
                className="bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 border border-white/30"
              >
                Llamar Ahora
              </a>
            </div>
          </div>
        </div>

        {/* Floating elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-white/10 rounded-full animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-16 h-16 bg-green-400/20 rounded-full animate-bounce"></div>
        <div className="absolute top-1/2 left-20 w-12 h-12 bg-blue-400/20 rounded-full animate-ping"></div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {serviceStats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-green-500 to-blue-600 rounded-full mb-4 group-hover:scale-110 transition-transform duration-300">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="servicios" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Nuestros Servicios Técnicos
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ofrecemos una amplia gama de servicios profesionales para mantener
              tus equipos funcionando al máximo rendimiento
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {technicalServices.map((service) => (
              <div
                key={service.id}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group"
              >
                <div className="p-8">
                  <div className="flex items-center justify-between mb-6">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-green-500 to-blue-600 rounded-xl group-hover:scale-110 transition-transform duration-300">
                      <service.icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-green-600">
                        {service.price}
                      </div>
                      <div className="text-sm text-gray-500">
                        {service.duration}
                      </div>
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-green-600 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-6">{service.description}</p>

                  <div className="space-y-2 mb-6">
                    <h4 className="font-semibold text-gray-900 text-sm">
                      Incluye:
                    </h4>
                    {service.includes.map((item, index) => (
                      <div
                        key={index}
                        className="flex items-center text-sm text-gray-600"
                      >
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                        {item}
                      </div>
                    ))}
                  </div>

                  <button className="w-full bg-gradient-to-r from-green-500 to-blue-600 text-white py-3 rounded-lg font-semibold hover:from-green-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105">
                    Solicitar Servicio
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Maintenance Plans */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Planes de Mantenimiento
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Mantén tus equipos en óptimas condiciones con nuestros planes de
              mantenimiento preventivo
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {maintenancePlans.map((plan, index) => (
              <div
                key={index}
                className={`relative bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 ${
                  plan.popular ? "ring-2 ring-green-500 scale-105" : ""
                }`}
              >
                {plan.popular && (
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-green-500 to-blue-600 text-white px-6 py-2 rounded-b-lg text-sm font-bold">
                    MÁS POPULAR
                  </div>
                )}

                <div className="p-8 pt-12">
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      {plan.name}
                    </h3>
                    <div className="text-4xl font-bold text-green-600 mb-1">
                      {plan.price}
                    </div>
                    <div className="text-gray-500">{plan.period}</div>
                  </div>

                  <div className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-600">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <button
                    className={`w-full py-3 rounded-lg font-semibold transition-all duration-300 ${
                      plan.popular
                        ? "bg-gradient-to-r from-green-500 to-blue-600 text-white hover:from-green-600 hover:to-blue-700 transform hover:scale-105"
                        : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                    }`}
                  >
                    Contratar Plan
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gradient-to-br from-green-600 to-blue-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              ¿Necesitas Ayuda Inmediata?
            </h2>
            <p className="text-xl text-green-100 max-w-3xl mx-auto">
              Nuestro equipo de expertos está listo para ayudarte. Contáctanos
              por tu medio preferido
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center group">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full mb-4 group-hover:bg-white/30 transition-all duration-300">
                <Phone className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Teléfono</h3>
              <p className="text-green-100 mb-2">Llámanos directamente</p>
              <a
                href="tel:+1234567890"
                className="text-white hover:text-green-300 font-semibold"
              >
                +123 456 7890
              </a>
            </div>

            <div className="text-center group">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full mb-4 group-hover:bg-white/30 transition-all duration-300">
                <MessageCircle className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-2">WhatsApp</h3>
              <p className="text-green-100 mb-2">Chat instantáneo</p>
              <a
                href="https://wa.me/1234567890"
                className="text-white hover:text-green-300 font-semibold"
              >
                Enviar mensaje
              </a>
            </div>

            <div className="text-center group">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full mb-4 group-hover:bg-white/30 transition-all duration-300">
                <Mail className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Email</h3>
              <p className="text-green-100 mb-2">Escríbenos</p>
              <a
                href="mailto:soporte@techpro.com"
                className="text-white hover:text-green-300 font-semibold"
              >
                soporte@techpro.com
              </a>
            </div>

            <div className="text-center group">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full mb-4 group-hover:bg-white/30 transition-all duration-300">
                <Calendar className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Cita</h3>
              <p className="text-green-100 mb-2">Agenda una visita</p>
              <button className="text-white hover:text-green-300 font-semibold">
                Programar cita
              </button>
            </div>
          </div>

          <div className="mt-16 text-center">
            <div className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <MapPin className="w-6 h-6 text-green-300 mr-3" />
              <div className="text-left">
                <div className="font-semibold">Visítanos</div>
                <div className="text-green-100">
                  Av. Tecnología 123, Ciudad Tech
                </div>
                <div className="text-green-100">Lun-Sáb: 9:00 AM - 7:00 PM</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <Zap className="w-16 h-16 text-green-400 mx-auto mb-6" />
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            ¿Tu equipo necesita atención inmediata?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            No esperes a que el problema empeore. Nuestros técnicos certificados
            están listos para ayudarte.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+1234567890"
              className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Llamada de Emergencia
            </a>
            <Link
              href="/contacto"
              className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 border border-white/30"
            >
              Solicitar Cotización
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
