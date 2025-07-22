const db = require('../config/db');

const Category = {
  getAll: async () => {
    const sql = 'SELECT * FROM categories';
    return await db.query(sql);
  },

  getById: async (id) => {
    const sql = 'SELECT * FROM categories WHERE id = ?';
    const result = await db.query(sql, [id]);
    return result.length > 0 ? result[0] : null;
   },

  create: async ({ name }) => {
    const sql = 'INSERT INTO categories (name) VALUES (?)';
    const result = await db.query(sql, [name]);
    return { id: result.insertId, name };
  },

  update: async (id, { name }) => {
    const sql = 'UPDATE categories SET name = ? WHERE id = ?';
    await db.query(sql, [name, id]);
    return { id, name };
  },

  delete: async (id) => {
    const sql = 'DELETE FROM categories WHERE id = ?';
    await db.query(sql, [id]);
    return true;
  },

  getProducts: async (categoryId) => {
    const sql = 'SELECT * FROM products WHERE category_id = ?';
    return await db.query(sql, [categoryId]);
  }
};

module.exports = Category;