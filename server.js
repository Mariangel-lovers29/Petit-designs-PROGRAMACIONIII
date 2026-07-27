/**
 * BACKEND: Petit Películas
 * Mariangel Ortiz Petit | UNETI
 * Tecnologías: Node.js, Express, SQLite3
 */
const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

// Conexión a la base de datos física
const db = new sqlite3.Database('./peliculas.db', (err) => {
    if (err) console.error("Error al conectar SQLite:", err.message);
    console.log('SQLite: Conectado y listo para operaciones CRUD.');
});

// Modelo de Datos (Integridad PK)
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

// --- RUTAS DE LA API ---

// GET: Obtener listado completo
app.get('/api/peliculas', (req, res) => {
    db.all("SELECT * FROM pelis ORDER BY id DESC", [], (err, rows) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json(rows);
    });
});

// POST: Crear nuevo registro (Añadir)
app.post('/api/peliculas', (req, res) => {
    const { titulo, director, genero, imagen, calificacion } = req.body;
    const sql = `INSERT INTO pelis (titulo, director, genero, imagen, calificacion) VALUES (?,?,?,?,?)`;
    db.run(sql, [titulo, director, genero, imagen, calificacion || 0], function(err) {
        if (err) return res.status(500).json({ error: err.message });
        res.json({ id: this.lastID, message: "Creado con éxito" });
    });
});

// PUT: Actualizar registro existente (Editar)
app.put('/api/peliculas/:id', (req, res) => {
    const { titulo, director, genero, imagen, calificacion } = req.body;
    const { id } = req.params;
    const sql = `UPDATE pelis SET titulo=?, director=?, genero=?, imagen=?, calificacion=? WHERE id=?`;
    db.run(sql, [titulo, director, genero, imagen, calificacion, id], function(err) {
        if (err) return res.status(500).json({ error: err.message });
        res.json({ message: "Registro actualizado" });
    });
});

// DELETE: Eliminar registro (Borrar)
app.delete('/api/peliculas/:id', (req, res) => {
    const { id } = req.params;
    db.run(`DELETE FROM pelis WHERE id = ?`, [id], function(err) {
        if (err) return res.status(500).json({ error: err.message });
        res.json({ message: "Registro eliminado" });
    });
});

app.listen(3000, () => console.log('Servidor Petit-API corriendo en http://localhost:3000'));