const express = require('express');
const mysql = require('mysql2'); 
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

const pool = mysql.createPool({
  host: process.env.DB_HOST || 'database',
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD || 'rootpassword',
  database: process.env.DB_NAME || 'cv_db',
  charset: 'utf8mb4',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

app.get('/cv', (req, res) => {
  const personaQuery = 'SELECT * FROM persona WHERE id = 1';
  const formacionQuery = 'SELECT * FROM formacion WHERE persona_id = 1';

  pool.query(personaQuery, (err, personaResult) => {
    if (err) {
      console.error('Error al consultar persona:', err);
      return res.status(500).json({ error: err.message });
    }
    
    pool.query(formacionQuery, (err, formacionResult) => {
      if (err) {
        console.error('Error al consultar formacion:', err);
        return res.status(500).json({ error: err.message });
      }
      
      res.json({
        persona: personaResult[0] || {},
        formacion: formacionResult || []
      });
    });
  });
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Backend corriendo en el puerto ${PORT}`);
});