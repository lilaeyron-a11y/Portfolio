const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 3001;

const { Pool } = require('pg');

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'portfolio',
  password: 'Liang123',
  port: 5432,
});

app.use(cors());
app.use(express.json());

app.get('/api/projects', async (req, res) => {
  const result = await pool.query(
    'SELECT * FROM projects'
  );

  res.json(result.rows);
});

app.post('/api/projects', async (req, res) => {
  const { name, type } = req.body;

  const result = await pool.query(
    'INSERT INTO projects (name, type) VALUES ($1, $2) RETURNING *',
    [name, type]
  );

  res.json(result.rows[0]);
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});