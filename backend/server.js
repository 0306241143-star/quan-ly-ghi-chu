const express = require('express');
const cors = require('cors');
const fs = require('fs/promises');
const path = require('path');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;
const DATA_DIR = path.join(__dirname, 'data');

app.use(cors());
app.use(express.json());

app.get('/api/health', (req, res) => {
  res.json({ status: 'ok' });
});

async function startServer() {
  await fs.mkdir(path.join(DATA_DIR, 'users'), { recursive: true });

  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
}

startServer().catch(error => {
  console.error('Không thể khởi động server:', error);
  process.exitCode = 1;
});