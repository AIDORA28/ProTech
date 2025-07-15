#!/bin/bash

echo "🚀 Configurando ProTech E-commerce para GitHub..."

# Verificar si Git está inicializado
if [ ! -d ".git" ]; then
    echo "📁 Inicializando repositorio Git..."
    git init
fi

# Agregar todos los archivos
echo "📋 Agregando archivos al repositorio..."
git add .

# Hacer commit inicial
echo "💾 Creando commit inicial..."
git commit -m "🎉 Proyecto inicial ProTech E-commerce

- E-commerce completo con Next.js 15 + TypeScript
- Carrito de compras funcional
- Integración con Supabase
- Diseño responsive con Tailwind CSS
- Listo para producción"

echo "✅ Repositorio local configurado!"
echo ""
echo "🔗 Pasos siguientes:"
echo "1. Crea un nuevo repositorio en GitHub llamado 'protech-ecommerce'"
echo "2. Ejecuta: git remote add origin https://github.com/TU_USUARIO/protech-ecommerce.git"
echo "3. Ejecuta: git push -u origin main"
echo ""
echo "🌐 Luego ve a Vercel.com para conectar tu repositorio y desplegar"
