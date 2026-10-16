SET NAMES utf8mb4;
CREATE DATABASE IF NOT EXISTS cv_db CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
USE cv_db;

CREATE TABLE IF NOT EXISTS persona (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    apellido VARCHAR(100) NOT NULL,
    ciudad VARCHAR(100) NOT NULL,
    foto VARCHAR(255) NOT NULL
) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

CREATE TABLE IF NOT EXISTS formacion (
    id INT AUTO_INCREMENT PRIMARY KEY,
    titulo VARCHAR(150) NOT NULL,
    institucion VARCHAR(150) NOT NULL,
    anio VARCHAR(50) NOT NULL,
    persona_id INT NOT NULL,
    FOREIGN KEY (persona_id) REFERENCES persona(id)
) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- Inserción de datos de ejemplo con codificación UTF-8
INSERT INTO persona (id, nombre, apellido, ciudad, foto) 
VALUES (1, 'Jose Gonzalo', 'Espejo Cuba', 'La Paz', '/mi_foto.png');

INSERT INTO formacion (titulo, institucion, anio, persona_id) 
VALUES 
('Licenciado en Informática, Mención: Ingeniería en Sistemas Informáticos', 'Universidad Mayor de San Andrés', '2015', 1),
('Tester Certificado', 'ISTQB', '2018', 1),
('Diplomado en Educación Superior', 'Universidad Pública de El Alto', '2025', 1),
('Diplomado en Full Stack', 'Universidad Simón I. Patiño', '2026', 1);