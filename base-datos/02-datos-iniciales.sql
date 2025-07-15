-- ===================================
-- DATOS INICIALES PARA TECHPRO
-- ===================================

USE TechProDB;
GO

-- ===================================
-- INSERTAR CATEGORÍAS
-- ===================================
INSERT INTO categorias (nombre, descripcion, imagen) VALUES 
('Computadoras', 'Laptops, PCs de escritorio y all-in-one', '/img/categorias/computadoras.jpg'),
('Monitores', 'Pantallas LED, OLED, gaming y profesionales', '/img/categorias/monitores.jpg'),
('Teclados', 'Teclados mecánicos, gaming y de oficina', '/img/categorias/teclados.jpg'),
('Ratones', 'Ratones gaming, inalámbricos y ergonómicos', '/img/categorias/ratones.jpg'),
('Componentes', 'Procesadores, RAM, tarjetas gráficas y más', '/img/categorias/componentes.jpg'),
('Accesorios', 'Cables, webcams, auriculares y más', '/img/categorias/accesorios.jpg'),
('Impresoras', 'Impresoras láser, tinta y multifuncionales', '/img/categorias/impresoras.jpg'),
('Software', 'Licencias de software y sistemas operativos', '/img/categorias/software.jpg');

-- ===================================
-- INSERTAR PRODUCTOS
-- ===================================

-- Computadoras (Categoría 1)
INSERT INTO productos (nombre, descripcion, precio, categoria_id, stock, imagen_principal, marca, modelo, sku, especificaciones, destacado) VALUES 
('Laptop Gaming ASUS ROG Strix G15', 'Laptop gaming con AMD Ryzen 7, 16GB RAM, RTX 3060, 512GB SSD', 899990, 1, 15, '/img/productos/lap001.jpg', 'ASUS', 'ROG Strix G15', 'LAP001', '{"cpu": "AMD Ryzen 7 5800H", "ram": "16GB DDR4", "gpu": "RTX 3060", "storage": "512GB SSD", "display": "15.6 FHD 144Hz"}', 1),
('MacBook Air M2 13"', 'MacBook Air con chip M2, 8GB RAM, 256GB SSD', 1299990, 1, 8, '/img/productos/lap002.jpg', 'Apple', 'MacBook Air M2', 'LAP002', '{"cpu": "Apple M2", "ram": "8GB", "storage": "256GB SSD", "display": "13.6 Liquid Retina", "battery": "18 horas"}', 1),
('Laptop Dell Inspiron 15', 'Laptop para oficina con Intel Core i5, 8GB RAM, 256GB SSD', 549990, 1, 20, '/img/productos/lap003.jpg', 'Dell', 'Inspiron 15 3000', 'LAP003', '{"cpu": "Intel Core i5-1135G7", "ram": "8GB DDR4", "storage": "256GB SSD", "display": "15.6 FHD"}', 0);

-- Monitores (Categoría 2)
INSERT INTO productos (nombre, descripcion, precio, categoria_id, stock, imagen_principal, marca, modelo, sku, especificaciones, destacado) VALUES 
('Monitor Gaming LG UltraGear 27"', 'Monitor gaming 27" QHD, 144Hz, 1ms, G-Sync Compatible', 349990, 2, 25, '/img/productos/mon001.jpg', 'LG', 'UltraGear 27GL850', 'MON001', '{"size": "27 pulgadas", "resolution": "2560x1440", "refresh": "144Hz", "response": "1ms", "panel": "IPS"}', 1),
('Monitor Samsung Odyssey G5 32"', 'Monitor curvo gaming 32" QHD, 165Hz, HDR10', 459990, 2, 12, '/img/productos/mon002.jpg', 'Samsung', 'Odyssey G5', 'MON002', '{"size": "32 pulgadas", "resolution": "2560x1440", "refresh": "165Hz", "curve": "1000R", "hdr": "HDR10"}', 1),
('Monitor Dell P2422H 24"', 'Monitor profesional 24" Full HD, ajustable', 189990, 2, 30, '/img/productos/mon003.jpg', 'Dell', 'P2422H', 'MON003', '{"size": "24 pulgadas", "resolution": "1920x1080", "ports": "HDMI, DisplayPort, USB-C", "adjustable": "Si"}', 0);

-- Teclados (Categoría 3)
INSERT INTO productos (nombre, descripcion, precio, categoria_id, stock, imagen_principal, marca, modelo, sku, especificaciones, destacado) VALUES 
('Teclado Mecánico Logitech G Pro X', 'Teclado gaming mecánico compacto, switches intercambiables', 129990, 3, 35, '/img/productos/tec001.jpg', 'Logitech', 'G Pro X', 'TEC001', '{"type": "Mecánico", "switches": "GX Blue/Red/Brown", "lighting": "RGB", "size": "TKL"}', 1),
('Teclado Corsair K95 RGB Platinum', 'Teclado mecánico gaming premium con teclas macro', 199990, 3, 18, '/img/productos/tec002.jpg', 'Corsair', 'K95 RGB Platinum', 'TEC002', '{"type": "Mecánico", "switches": "Cherry MX", "macros": "6 teclas G", "lighting": "RGB"}', 1),
('Teclado Logitech MX Keys', 'Teclado inalámbrico para productividad', 89990, 3, 40, '/img/productos/tec003.jpg', 'Logitech', 'MX Keys', 'TEC003', '{"type": "Membrana", "connectivity": "Bluetooth/USB", "lighting": "Retroiluminado", "battery": "10 días"}', 0);

-- Ratones (Categoría 4)
INSERT INTO productos (nombre, descripcion, precio, categoria_id, stock, imagen_principal, marca, modelo, sku, especificaciones, destacado) VALUES 
('Mouse Gaming Logitech G502 HERO', 'Mouse gaming con sensor HERO 25K, 11 botones programables', 79990, 4, 45, '/img/productos/mou001.jpg', 'Logitech', 'G502 HERO', 'MOU001', '{"sensor": "HERO 25K", "dpi": "25600", "buttons": "11", "weight": "Ajustable", "lighting": "RGB"}', 1),
('Mouse Razer DeathAdder V3', 'Mouse gaming ergonómico con sensor Focus Pro 30K', 89990, 4, 28, '/img/productos/mou002.jpg', 'Razer', 'DeathAdder V3', 'MOU002', '{"sensor": "Focus Pro 30K", "dpi": "30000", "buttons": "8", "switches": "90M clicks", "weight": "59g"}', 1),
('Mouse Logitech MX Master 3S', 'Mouse inalámbrico premium para productividad', 99990, 4, 32, '/img/productos/mou003.jpg', 'Logitech', 'MX Master 3S', 'MOU003', '{"sensor": "Darkfield 8000 DPI", "connectivity": "Bluetooth/USB", "battery": "70 días", "wheels": "2"}', 0);

-- Componentes (Categoría 5)
INSERT INTO productos (nombre, descripcion, precio, categoria_id, stock, imagen_principal, marca, modelo, sku, especificaciones, destacado) VALUES 
('Procesador AMD Ryzen 5 5600X', 'Procesador 6 núcleos, 12 hilos, 3.7GHz base, socket AM4', 189990, 5, 22, '/img/productos/cpu001.jpg', 'AMD', 'Ryzen 5 5600X', 'CPU001', '{"cores": "6", "threads": "12", "base_clock": "3.7GHz", "boost_clock": "4.6GHz", "socket": "AM4"}', 1),
('Tarjeta Gráfica RTX 4060 Ti', 'GPU NVIDIA RTX 4060 Ti 16GB GDDR6X para gaming', 549990, 5, 8, '/img/productos/gpu001.jpg', 'NVIDIA', 'GeForce RTX 4060 Ti', 'GPU001', '{"memory": "16GB GDDR6X", "cuda_cores": "4352", "rt_cores": "34", "tensor_cores": "136", "tdp": "165W"}', 1),
('Memoria RAM Corsair Vengeance 32GB', 'Kit 2x16GB DDR4 3200MHz RGB', 149990, 5, 35, '/img/productos/ram001.jpg', 'Corsair', 'Vengeance RGB Pro', 'RAM001', '{"capacity": "32GB", "config": "2x16GB", "type": "DDR4", "speed": "3200MHz", "lighting": "RGB"}', 0);

-- Accesorios (Categoría 6)
INSERT INTO productos (nombre, descripcion, precio, categoria_id, stock, imagen_principal, marca, modelo, sku, especificaciones, destacado) VALUES 
('Webcam Logitech C920 HD Pro', 'Webcam Full HD con micrófono estéreo integrado', 89990, 6, 35, '/img/productos/acc001.jpg', 'Logitech', 'C920 HD Pro', 'ACC001', '{"resolution": "1080p Full HD", "fps": "30", "microphone": "Estéreo", "focus": "Automático"}', 0),
('Auriculares HyperX Cloud II', 'Auriculares gaming con sonido 7.1 virtual', 119990, 6, 25, '/img/productos/acc002.jpg', 'HyperX', 'Cloud II', 'ACC002', '{"drivers": "53mm", "frequency": "15Hz-25kHz", "microphone": "Desmontable", "sound": "7.1 Virtual"}', 1),
('Hub USB-C Anker 7 en 1', 'Hub USB-C con HDMI 4K, USB 3.0 y carga PD', 79990, 6, 30, '/img/productos/acc003.jpg', 'Anker', 'PowerExpand+ 7-in-1', 'ACC003', '{"ports": "7 en 1", "hdmi": "4K@30Hz", "usb": "2x USB 3.0", "charging": "85W PD"}', 0);

-- Impresoras (Categoría 7)
INSERT INTO productos (nombre, descripcion, precio, categoria_id, stock, imagen_principal, marca, modelo, sku, especificaciones, destacado) VALUES 
('Impresora HP LaserJet Pro M404n', 'Impresora láser monocromática para oficina', 189990, 7, 15, '/img/productos/imp001.jpg', 'HP', 'LaserJet Pro M404n', 'IMP001', '{"type": "Láser monocromático", "speed": "38 ppm", "resolution": "4800x600 dpi", "connectivity": "USB, Ethernet"}', 0),
('Impresora Epson EcoTank L3250', 'Impresora multifunción con tanque de tinta', 219990, 7, 18, '/img/productos/imp002.jpg', 'Epson', 'EcoTank L3250', 'IMP002', '{"type": "Tinta continua", "functions": "Imprime, copia, escanea", "connectivity": "WiFi, USB", "yield": "4500 páginas"}', 1);

-- Software (Categoría 8)
INSERT INTO productos (nombre, descripcion, precio, categoria_id, stock, imagen_principal, marca, modelo, sku, especificaciones, destacado) VALUES 
('Windows 11 Pro', 'Licencia original Windows 11 Professional', 199990, 8, 50, '/img/productos/lic001.jpg', 'Microsoft', 'Windows 11 Pro', 'LIC001', '{"type": "Sistema Operativo", "version": "Professional", "architecture": "64-bit", "language": "Español"}', 0),
('Office 365 Personal', 'Suscripción anual Office 365 para 1 usuario', 89990, 8, 100, '/img/productos/lic002.jpg', 'Microsoft', 'Office 365 Personal', 'LIC002', '{"apps": "Word, Excel, PowerPoint, Outlook", "storage": "1TB OneDrive", "devices": "5"}', 0);

-- ===================================
-- CREAR USUARIOS
-- ===================================
INSERT INTO usuarios (email, password_hash, nombre, apellido, tipo_usuario, activo, email_verificado) VALUES 
('admin@techpro.cl', '$2b$10$rQZ1vQZ1vQZ1vQZ1vQZ1vQZ1vQZ1vQZ1vQZ1vQZ1vQZ1vQZ1vQZ1v', 'Administrador', 'TechPro', 'admin', 1, 1),
('cliente@test.cl', '$2b$10$rQZ1vQZ1vQZ1vQZ1vQZ1vQZ1vQZ1vQZ1vQZ1vQZ1vQZ1vQZ1vQZ1v', 'Juan', 'Pérez', 'cliente', 1, 1);

-- ===================================
-- CONFIGURACIÓN DEL SISTEMA
-- ===================================
INSERT INTO configuracion (clave, valor, descripcion) VALUES 
('sitio_nombre', 'TechPro', 'Nombre del sitio web'),
('sitio_descripcion', 'Tu tienda de tecnología de confianza', 'Descripción del sitio'),
('sitio_email', 'contacto@techpro.cl', 'Email de contacto principal'),
('sitio_telefono', '+56223456789', 'Teléfono de contacto'),
('sitio_direccion', 'Av. Providencia 1234, Santiago', 'Dirección de la tienda'),
('sitio_whatsapp', '+56987654321', 'WhatsApp para soporte'),
('envio_gratis_minimo', '50000', 'Monto mínimo para envío gratis'),
('horario_atencion', 'Lunes a Viernes: 9:00-18:00, Sábados: 10:00-14:00', 'Horario de atención'),
('politica_devolucion', '30', 'Días de garantía para devoluciones'),
('iva', '19', 'Porcentaje de IVA'),
('banner_principal_activo', '1', 'Banner principal activado'),
('banner_principal_imagen', '/img/banners/banner-principal.jpg', 'Imagen del banner'),
('banner_principal_titulo', '¡Las mejores ofertas en tecnología!', 'Título del banner'),
('banner_principal_subtitulo', 'Encuentra todo para tu setup gaming y oficina', 'Subtítulo del banner'),
('mantenimiento_activo', '0', 'Modo mantenimiento'),
('registro_usuarios_activo', '1', 'Registro habilitado'),
('seo_titulo', 'TechPro - Tecnología y Gaming en Chile', 'Título SEO'),
('seo_descripcion', 'Los mejores productos de tecnología, gaming y componentes', 'Descripción SEO'),
('seo_palabras_clave', 'tecnología, gaming, computadores, componentes, chile', 'Palabras clave SEO');

-- ===================================
-- DIRECCIONES DE EJEMPLO
-- ===================================
INSERT INTO direcciones (usuario_id, nombre, direccion, ciudad, region, codigo_postal, es_predeterminada) VALUES 
(2, 'Casa', 'Los Álamos 1234, Las Condes', 'Santiago', 'Región Metropolitana', '7550000', 1),
(2, 'Oficina', 'Providencia 567, Oficina 402', 'Santiago', 'Región Metropolitana', '7500000', 0);

-- ===================================
-- PROMOCIONES ACTIVAS
-- ===================================
INSERT INTO promociones (nombre, descripcion, codigo, tipo_descuento, valor_descuento, fecha_inicio, fecha_fin, activa, minimo_compra, maximo_usos) VALUES 
('Descuento Gaming', 'Descuento especial para productos gaming', 'GAMING10', 'porcentaje', 10.00, '2024-01-01', '2024-12-31', 1, 100000, 100),
('Envío Gratis', 'Envío gratis sin mínimo', 'ENVIOGRATIS', 'envio', 0.00, '2024-01-01', '2024-12-31', 1, 1, 1000);

GO

-- ===================================
-- MOSTRAR RESULTADOS
-- ===================================
DECLARE @categorias INT, @productos INT, @configuraciones INT;

SELECT @categorias = COUNT(*) FROM categorias;
SELECT @productos = COUNT(*) FROM productos;
SELECT @configuraciones = COUNT(*) FROM configuracion;

PRINT 'Datos iniciales insertados correctamente!';
PRINT 'Usuarios creados:';
PRINT '- Administrador: admin@techpro.cl (contraseña: admin123)';
PRINT '- Cliente prueba: cliente@test.cl (contraseña: 123456)';
PRINT '';
PRINT 'Categorías: ' + CAST(@categorias AS VARCHAR(10));
PRINT 'Productos: ' + CAST(@productos AS VARCHAR(10));
PRINT 'Configuraciones: ' + CAST(@configuraciones AS VARCHAR(10));
PRINT '';
PRINT 'Base de datos TechPro lista para usar!';
