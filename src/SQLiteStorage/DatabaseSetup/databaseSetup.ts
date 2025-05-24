import sqlite3 from 'sqlite3';

export const db = new sqlite3.Database('./data/phonebook.db', (err) => {
  if (err) {
    console.error('❌ Failed to connect to the database:', err.message);
  } else {
    console.log('✅ Connected to the phonebook database.');
  }
});

export const databaseSetup = () => {
  db.run(`
    CREATE TABLE IF NOT EXISTS categories (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT UNIQUE NOT NULL 
    );
  `, (err) => {
    if (err) {
      console.error("❌ Error setting up categories table:", err.message);
    } else {
      console.log("✅ Categories table created.");
    }
  });

  db.run(`
    CREATE TABLE IF NOT EXISTS contacts (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL,
      phone TEXT UNIQUE NOT NULL,
      category_id INTEGER,
      FOREIGN KEY (category_id) REFERENCES categories(id)
    );
  `, (err) => {
    if (err) {
      console.error("❌ Error setting up contacts table:", err.message);
    } else {
      console.log("✅ Contacts table created.");
    }
  });
};
