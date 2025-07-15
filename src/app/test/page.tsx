export default function TestPage() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          🎉 ¡ProTech funciona!
        </h1>
        <p className="text-gray-600 mb-8">
          El servidor está corriendo correctamente en el puerto 3500
        </p>
        <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded">
          ✅ Next.js, TypeScript y Tailwind funcionando correctamente
        </div>
      </div>
    </div>
  );
}
