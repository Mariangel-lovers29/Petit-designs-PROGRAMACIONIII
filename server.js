/**
 * BACKEND: Petit Películas
 * Mariangel Ortiz Petit | UNETI
 */
const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

const db = new sqlite3.Database('./peliculas.db', (err) => {
    if (err) console.error(err.message);
    console.log('SQLite: Conectado y listo.');
});

// Modelo E-R: Creación de tabla
db.serialize(() => {
    db.run(`CREATE TABLE IF NOT EXISTS pelis (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        titulo TEXT,
        director TEXT,
        genero TEXT,
        imagen TEXT,
        calificacion INTEGER
    )`);
});

// API: Obtener todas
app.get('/api/peliculas', (req, res) => {
    db.all("SELECT * FROM pelis ORDER BY id DESC", [], (err, rows) => res.json(rows));
});

// API: Crear
app.post('/api/peliculas', (req, res) => {
    const { titulo, director, genero, imagen, calificacion } = req.body;
    db.run(`INSERT INTO pelis (titulo, director, genero, imagen, calificacion) VALUES (?,?,?,?,?)`,
        [titulo, director, genero, imagen, calificacion || 0], function(err) {
            res.json({ id: this.lastID });
        });
});

// API: Editar (Sincronizado con Angular)
app.put('/api/peliculas/:id', (req, res) => {
    const { titulo, director, genero, imagen, calificacion } = req.body;
    const { id } = req.params;
    db.run(`UPDATE pelis SET titulo=?, director=?, genero=?, imagen=?, calificacion=? WHERE id=?`,
        [titulo, director, genero, imagen, calificacion, id], function(err) {
            if (err) return res.status(500).json({ error: err.message });
            res.json({ status: 'Actualizado' });
        });
});

// API: Eliminar
app.delete('/api/peliculas/:id', (req, res) => {
    db.run(`DELETE FROM pelis WHERE id = ?`, [req.params.id], () => res.json({ status: 'Eliminado' }));
});

app.listen(3000, () => console.log('Servidor corriendo en http://localhost:3000'));