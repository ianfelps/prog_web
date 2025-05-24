const express = require('express');
const app = express()
const port = 3000;

// conexao com o banco de dados
const db = require('./database')

// rotas do servidor
app.get('/', (req, res) => {
    res.send('Servidor online!');
});

app.listen(port, () => {
    console.log('Servidor rodando na porta 3000!')
});