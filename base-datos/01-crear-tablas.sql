-- ===================================
-- SCRIPT DE CREACIÓN DE TABLAS - TECHPRO
-- ===================================

-- Crear base de datos si no existe
IF NOT EXISTS (SELECT * FROM sys.databases WHERE name = 'TechProDB')
BEGIN
    CREATE DATABASE TechProDB;
END
GO

USE TechProDB;
GO

-- ===================================
-- TABLA CATEGORÍAS
-- ===================================
CREATE TABLE categorias (
    id INT IDENTITY(1,1) PRIMARY KEY,
    nombre NVARCHAR(100) NOT NULL,
    descripcion NVARCHAR(500),
    imagen NVARCHAR(255),
    activa BIT DEFAULT 1,
    fecha_creacion DATETIME2 DEFAULT GETDATE(),
    fecha_actualizacion DATETIME2 DEFAULT GETDATE()
);

-- ===================================
-- TABLA PRODUCTOS
-- ===================================
CREATE TABLE productos (
    id INT IDENTITY(1,1) PRIMARY KEY,
    nombre NVARCHAR(255) NOT NULL,
    descripcion NVARCHAR(MAX),
    precio DECIMAL(10,2) NOT NULL,
    categoria_id INT NOT NULL,
    stock INT DEFAULT 0,
    imagen_principal NVARCHAR(255),
    marca NVARCHAR(100),
    modelo NVARCHAR(100),
    sku NVARCHAR(50) UNIQUE,
    especificaciones NVARCHAR(MAX), -- JSON con especificaciones técnicas
    destacado BIT DEFAULT 0,
    activo BIT DEFAULT 1,
    fecha_creacion DATETIME2 DEFAULT GETDATE(),
    fecha_actualizacion DATETIME2 DEFAULT GETDATE(),
    FOREIGN KEY (categoria_id) REFERENCES categorias(id)
);

-- ===================================
-- TABLA USUARIOS
-- ===================================
CREATE TABLE usuarios (
    id INT IDENTITY(1,1) PRIMARY KEY,
    email NVARCHAR(255) UNIQUE NOT NULL,
    password_hash NVARCHAR(255) NOT NULL,
    nombre NVARCHAR(100) NOT NULL,
    apellido NVARCHAR(100) NOT NULL,
    telefono NVARCHAR(20),
    tipo_usuario NVARCHAR(20) DEFAULT 'cliente', -- 'cliente', 'admin'
    activo BIT DEFAULT 1,
    email_verificado BIT DEFAULT 0,
    fecha_creacion DATETIME2 DEFAULT GETDATE(),
    fecha_actualizacion DATETIME2 DEFAULT GETDATE()
);

-- ===================================
-- TABLA DIRECCIONES
-- ===================================
CREATE TABLE direcciones (
    id INT IDENTITY(1,1) PRIMARY KEY,
    usuario_id INT NOT NULL,
    nombre NVARCHAR(100), -- Ej: "Casa", "Trabajo"
    direccion NVARCHAR(255) NOT NULL,
    ciudad NVARCHAR(100) NOT NULL,
    region NVARCHAR(100) NOT NULL,
    codigo_postal NVARCHAR(10),
    es_predeterminada BIT DEFAULT 0,
    fecha_creacion DATETIME2 DEFAULT GETDATE(),
    FOREIGN KEY (usuario_id) REFERENCES usuarios(id) ON DELETE CASCADE
);

-- ===================================
-- TABLA CARRITO
-- ===================================
CREATE TABLE carrito (
    id INT IDENTITY(1,1) PRIMARY KEY,
    usuario_id INT NOT NULL,
    producto_id INT NOT NULL,
    cantidad INT NOT NULL DEFAULT 1,
    fecha_agregado DATETIME2 DEFAULT GETDATE(),
    FOREIGN KEY (usuario_id) REFERENCES usuarios(id) ON DELETE CASCADE,
    FOREIGN KEY (producto_id) REFERENCES productos(id)
);

-- ===================================
-- TABLA PEDIDOS
-- ===================================
CREATE TABLE pedidos (
    id INT IDENTITY(1,1) PRIMARY KEY,
    usuario_id INT NOT NULL,
    direccion_envio_id INT,
    total DECIMAL(10,2) NOT NULL,
    subtotal DECIMAL(10,2),
    iva DECIMAL(10,2),
    costo_envio DECIMAL(10,2) DEFAULT 0,
    estado NVARCHAR(50) DEFAULT 'Pendiente', -- Pendiente, Confirmado, Enviado, Entregado, Cancelado
    metodo_pago NVARCHAR(50),
    numero_seguimiento NVARCHAR(100),
    notas NVARCHAR(MAX),
    fecha_creacion DATETIME2 DEFAULT GETDATE(),
    fecha_actualizacion DATETIME2 DEFAULT GETDATE(),
    FOREIGN KEY (usuario_id) REFERENCES usuarios(id),
    FOREIGN KEY (direccion_envio_id) REFERENCES direcciones(id)
);

-- ===================================
-- TABLA DETALLES DE PEDIDO
-- ===================================
CREATE TABLE detalles_pedido (
    id INT IDENTITY(1,1) PRIMARY KEY,
    pedido_id INT NOT NULL,
    producto_id INT NOT NULL,
    cantidad INT NOT NULL,
    precio_unitario DECIMAL(10,2) NOT NULL,
    subtotal DECIMAL(10,2) NOT NULL,
    FOREIGN KEY (pedido_id) REFERENCES pedidos(id) ON DELETE CASCADE,
    FOREIGN KEY (producto_id) REFERENCES productos(id)
);

-- ===================================
-- TABLA TICKETS DE SOPORTE
-- ===================================
CREATE TABLE tickets_soporte (
    id INT IDENTITY(1,1) PRIMARY KEY,
    usuario_id INT,
    cliente_email NVARCHAR(255),
    cliente_nombre NVARCHAR(255),
    asunto NVARCHAR(255) NOT NULL,
    descripcion NVARCHAR(MAX) NOT NULL,
    categoria NVARCHAR(100), -- 'Técnico', 'Producto', 'Envío', 'Devolución'
    prioridad NVARCHAR(20) DEFAULT 'Media', -- 'Baja', 'Media', 'Alta', 'Urgente'
    estado NVARCHAR(50) DEFAULT 'Abierto', -- 'Abierto', 'En Proceso', 'Resuelto', 'Cerrado'
    fecha_creacion DATETIME2 DEFAULT GETDATE(),
    fecha_actualizacion DATETIME2 DEFAULT GETDATE(),
    FOREIGN KEY (usuario_id) REFERENCES usuarios(id)
);

-- ===================================
-- TABLA RESPUESTAS DE SOPORTE
-- ===================================
CREATE TABLE respuestas_soporte (
    id INT IDENTITY(1,1) PRIMARY KEY,
    ticket_id INT NOT NULL,
    usuario_id INT NOT NULL,
    mensaje NVARCHAR(MAX) NOT NULL,
    es_staff BIT DEFAULT 0, -- 1 si es respuesta del staff, 0 si es del cliente
    fecha_creacion DATETIME2 DEFAULT GETDATE(),
    FOREIGN KEY (ticket_id) REFERENCES tickets_soporte(id) ON DELETE CASCADE,
    FOREIGN KEY (usuario_id) REFERENCES usuarios(id)
);

-- ===================================
-- TABLA CONFIGURACIÓN
-- ===================================
CREATE TABLE configuracion (
    id INT IDENTITY(1,1) PRIMARY KEY,
    clave NVARCHAR(100) UNIQUE NOT NULL,
    valor NVARCHAR(MAX),
    descripcion NVARCHAR(255),
    fecha_actualizacion DATETIME2 DEFAULT GETDATE()
);

-- ===================================
-- TABLA PROMOCIONES
-- ===================================
CREATE TABLE promociones (
    id INT IDENTITY(1,1) PRIMARY KEY,
    nombre NVARCHAR(255) NOT NULL,
    descripcion NVARCHAR(MAX),
    codigo NVARCHAR(50) UNIQUE,
    tipo_descuento NVARCHAR(20), -- 'porcentaje', 'monto_fijo', 'envio'
    valor_descuento DECIMAL(10,2),
    fecha_inicio DATE,
    fecha_fin DATE,
    activa BIT DEFAULT 1,
    minimo_compra DECIMAL(10,2) DEFAULT 0,
    maximo_usos INT,
    usos_actuales INT DEFAULT 0,
    fecha_creacion DATETIME2 DEFAULT GETDATE()
);

-- ===================================
-- TABLA RESEÑAS DE PRODUCTOS
-- ===================================
CREATE TABLE resenas_productos (
    id INT IDENTITY(1,1) PRIMARY KEY,
    producto_id INT NOT NULL,
    usuario_id INT NOT NULL,
    calificacion INT CHECK (calificacion >= 1 AND calificacion <= 5),
    comentario NVARCHAR(MAX),
    fecha_creacion DATETIME2 DEFAULT GETDATE(),
    FOREIGN KEY (producto_id) REFERENCES productos(id),
    FOREIGN KEY (usuario_id) REFERENCES usuarios(id)
);

-- ===================================
-- TABLA LOGS DEL SISTEMA
-- ===================================
CREATE TABLE logs_sistema (
    id INT IDENTITY(1,1) PRIMARY KEY,
    usuario_id INT,
    accion NVARCHAR(100) NOT NULL,
    tabla_afectada NVARCHAR(100),
    detalle NVARCHAR(MAX),
    ip_address NVARCHAR(50),
    fecha_creacion DATETIME2 DEFAULT GETDATE(),
    FOREIGN KEY (usuario_id) REFERENCES usuarios(id)
);

-- ===================================
-- ÍNDICES PARA OPTIMIZACIÓN
-- ===================================
CREATE INDEX IX_productos_categoria ON productos(categoria_id);
CREATE INDEX IX_productos_destacado ON productos(destacado);
CREATE INDEX IX_productos_activo ON productos(activo);
CREATE INDEX IX_usuarios_email ON usuarios(email);
CREATE INDEX IX_usuarios_tipo ON usuarios(tipo_usuario);
CREATE INDEX IX_pedidos_usuario ON pedidos(usuario_id);
CREATE INDEX IX_pedidos_estado ON pedidos(estado);
CREATE INDEX IX_carrito_usuario ON carrito(usuario_id);
CREATE INDEX IX_tickets_usuario ON tickets_soporte(usuario_id);
CREATE INDEX IX_tickets_estado ON tickets_soporte(estado);

GO

PRINT 'Tablas de TechPro creadas exitosamente!';
PRINT 'Base de datos lista para recibir datos iniciales.';
