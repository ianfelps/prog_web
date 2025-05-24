const express = require('express')
const router = express.Router();

const db = require('../database')

// rotas

// listar todos os usuarios
router.get('/', (req, res) => {
    db.query('SELECT * FROM users', (err, results) => {
        if (err) return res.status(500).send(err);
        res.json(results);
    });
});

// cadastrar um usuario
router.post('/', (req, res) => {
    const {nome, email} = req.body;
    db.query('INSERT INTO users (nome, email) VALUES (?, ?)', [nome, email], (err, result) => {
        if (err) return res.status(500).send(err);
        res.status(200).json({id: result.insertId, nome, email});
    });
});

// atualizar um usuario
router.put('/:id', (req, res) => {
    const {nome, email} = req.body;
    const {id} = req.params;
    db.query('UPDATE users SET nome = ?, email = ?, WHERE id = ?', [nome, email, id], (err) => {
        if (err) return res.status(500).send(err);
        res.json({id, num, email});
    });
});

// deletar um usuario
router.delete('/:id', (req, res) => {
    const {id} = req.params;
    db.query('DELETE FROM users WHERE id = ?', [id], (err) => {
        if (err) return res.status(500).send(err);
        res.status(204);
    });
});

module.exports = router;