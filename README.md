
# Gestión de productos y categorías

Este proyecto consiste en una API RESTful desarrollada con Node.js y Express, destinada a la gestión de productos y sus respectivas categorías.



## Requisitos

Dependencias necesarias en tu equipo instaladas:

Node.js (versión 16 o superior)

npm (viene incluido con Node.js)

Servidor MySQL (5.7+ o MariaDB 10.3+)

Ejecutar el siguiente script en tu MySQL:

```bash
    CREATE DATABASE IF NOT EXISTS product_management;

    USE product_management;

    CREATE TABLE categories (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL
    );

    CREATE TABLE products (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    description TEXT NOT NULL,
    price FLOAT NOT NULL,
    category_id INT NOT NULL,
    FOREIGN KEY (category_id) REFERENCES categories(id)
    );
```
Clonamos el proyecto e instalamos dependencias.

```bash
# 1. Clonar el repositorio
git clone https://github.com/JcamiloD/GestionProductos.git
cd GestionProductos

# 2. Instalar dependencias
npm install
```  

Crear en el directorio raíz un archivo .env el cual contenga lo siguiente:
 
```bash
DB_HOST=localhost
DB_USER=TU_USUARIO
DB_PASSWORD=TU_PASSWORD
DB_NAME=product_management
PORT=5000
```   
Y por último en la consola ejecutar el proyecto con "npm run dev".

Una vez puedas ejecutar el proyecto puedes ver los enpoints con Swagger ne la url: 
http://localhost:5000/api-docs/