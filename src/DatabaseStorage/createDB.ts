const sqlite3 = require('sqlite3').verbose();
export const db = new sqlite3.Database('./src/DatabaseStorage/DBphonebook.db');

db.run(`CREATE TABLE IF NOT EXISTS contacts (
  name TEXT NOT NULL,
  phone TEXT UNIQUE NOT NULL,
  category TEXT

);`, (err : any) => {
  if (err) {
    console.error("Error creating the database ❌", err.message);
  } else {
    console.log("The table was database ✅");
  }
});






