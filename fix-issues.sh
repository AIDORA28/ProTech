#!/bin/bash

echo "🔧 Solucionando problemas comunes de ProTech..."

# Copiar imágenes si no existen en public
if [ ! -f "public/img/LOGO.png" ]; then
    echo "📸 Copiando imágenes a public/img..."
    cp -r img/* public/img/ 2>/dev/null || echo "⚠️  Algunas imágenes no se pudieron copiar"
else
    echo "✅ Las imágenes ya están en su lugar"
fi

# Limpiar caché de Next.js
echo "🧹 Limpiando caché..."
rm -rf .next

# Verificar variables de entorno
if [ ! -f ".env.local" ]; then
    echo "📝 Creando archivo .env.local..."
    cp .env.local.example .env.local
    echo "⚠️  Recuerda configurar tus credenciales de Supabase en .env.local"
else
    echo "✅ Archivo .env.local existe"
fi

echo ""
echo "🎉 ¡Listo! Ahora ejecuta:"
echo "   npm run dev"
echo ""
echo "🌐 Tu aplicación estará en: http://localhost:3500"
