-- =============================================
-- BASE DE DATOS AAPHAL - MySQL
-- =============================================

CREATE TABLE IF NOT EXISTS contactos (

    -- RESTRICCIÓN 1: PRIMARY KEY + AUTO_INCREMENT
    -- Garantiza que cada registro tenga un identificador único e irrepetible.
    -- AUTO_INCREMENT genera el valor automáticamente sin intervención del usuario.
    id          INT AUTO_INCREMENT,

    -- RESTRICCIÓN 2: NOT NULL
    -- Los campos nombre, correo, telefono y asunto son obligatorios.
    -- La base de datos rechaza cualquier inserción que deje estos campos vacíos.
    nombre      VARCHAR(100)  NOT NULL,
    correo      VARCHAR(150)  NOT NULL,
    telefono    VARCHAR(20)   NOT NULL,
    asunto      VARCHAR(200)  NOT NULL,

    -- Campo opcional (puede ser NULL)
    mensaje     TEXT,

    -- RESTRICCIÓN 3: DEFAULT
    -- Si no se proporciona una fecha al insertar, MySQL asigna automáticamente
    -- la fecha y hora actual del servidor. Garantiza trazabilidad de los registros.
    fecha       TIMESTAMP     NOT NULL DEFAULT CURRENT_TIMESTAMP,

    -- Definición de la clave primaria
    CONSTRAINT pk_contactos PRIMARY KEY (id),

    -- RESTRICCIÓN 4 (BONUS): CHECK
    -- Valida que el correo contenga el símbolo '@' para asegurar un formato básico válido.
    -- Valida que el teléfono tenga al menos 7 caracteres.
    CONSTRAINT chk_correo    CHECK (correo   LIKE '%@%'),
    CONSTRAINT chk_telefono  CHECK (CHAR_LENGTH(telefono) >= 7)

);
