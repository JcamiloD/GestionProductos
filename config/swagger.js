const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'API de Productos y Categorías',
      version: '1.0.0',
      description: 'Documentación de la API para el sistema de gestión de productos y categorías',
    },
    servers: [
      {
        url: 'http://localhost:5000/api',
        description: 'Servidor local de desarrollo',
      },
    ],
    components: {
      schemas: {
        Product: {
          type: 'object',
          required: ['name', 'description', 'price', 'category_id'],
          properties: {
            id: { type: 'integer', example: 1 },
            name: { type: 'string', example: 'Smartphone X' },
            description: { type: 'string', example: 'Teléfono inteligente de última generación' },
            price: { type: 'number', format: 'float', example: 699.99 },
            category_id: { type: 'integer', example: 1 },
            category_name: { type: 'string', example: 'Electrónicos' }
          }
        },
        Category: {
          type: 'object',
          required: ['name'],
          properties: {
            id: { type: 'integer', example: 1 },
            name: { type: 'string', example: 'Electrónicos' }
          }
        }
      }
    }
  },
  apis: ['./routes/*.js'], // Ruta a tus archivos de rutas
};

const specs = swaggerJsdoc(options);

module.exports = (app) => {
  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));
};