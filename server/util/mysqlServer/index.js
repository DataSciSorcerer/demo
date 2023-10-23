const mysql = require("mysql");

const db = mysql.createConnection({
  host: "127.0.0.1",
  user: "root",
  password: "Mm2002920.",
  database: "demo",
});

db.connect((err) => {
  if (err) {
    console.error("Database connection error: " + err.stack);
    return;
  }
  console.log("Connected to the database as id " + db.threadId);
});

module.exports = db;
