const express = require('express');
const app = express()
const port = 3000;

// modulo para caminho do arquivo
const path = require('path');

// conexao com o banco de dados
const db = require('./database')

// diretorio dos arquivos estaticos
app.use(express.static(path.join(__dirname, 'public')));

// rotas do servidor
app.get('/', (req, res) => {
    // res.send('Servidor online!');
    res.sendFile(path.join(__dirname, 'public', 'index.html'))
});

// importar as rotas da api
const apiRoutes = require('./routes/api');
app.use(express.json()) // interpretar as requisicoes via JSON
app.use('/api/users', apiRoutes)

app.listen(port, () => {
    console.log('Servidor rodando na porta 3000!')
});