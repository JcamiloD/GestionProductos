const db = require('../config/db');

const Product = {
  getAll: async () => {
    const sql = `
      SELECT p.*, c.name as category_name 
      FROM products p 
      JOIN categories c ON p.category_id = c.id
    `;
    const rows = await db.query(sql);
    return rows;
  },


  getById: async (id) => {
    const sql = `
      SELECT p.*, c.name as category_name 
      FROM products p 
      JOIN categories c ON p.category_id = c.id 
      WHERE p.id = ?
    `;
    const rows = await db.query(sql, [id]);
    return rows[0];
  },

  create: async ({ name, description, price, category_id }) => {
    const sql = `
      INSERT INTO products (name, description, price, category_id) 
      VALUES (?, ?, ?, ?)
    `;
    const result = await db.query(sql, [name, description, price, category_id]);
    return { id: result.insertId, name, description, price, category_id };
  },

  update: async (id, { name, description, price, category_id }) => {
    const sql = `
      UPDATE products 
      SET name = ?, description = ?, price = ?, category_id = ? 
      WHERE id = ?
    `;
    await db.query(sql, [name, description, price, category_id, id]);
    return { id, name, description, price, category_id };
  },

  delete: async (id) => {
    const sql = 'DELETE FROM products WHERE id = ?';
    await db.query(sql, [id]);
    return true;
  }
};

module.exports = Product;