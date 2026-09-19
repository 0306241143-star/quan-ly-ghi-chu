const express = require('express');
const cors = require('cors');
require('dotenv').config();
const db = require('./db');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Test kết nối MySQL
db.getConnection()
  .then(conn => {
    console.log('Kết nối MySQL (XAMPP) thành công!');
    conn.release();
  })
  .catch(err => {
    console.error('Lỗi kết nối MySQL:', err.message);
  });

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});