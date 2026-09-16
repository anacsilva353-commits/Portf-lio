const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

const conexao = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '123456', // Coloque sua senha aqui se o seu root tiver senha (ex: '1234')
    database: 'brasil'
});

conexao.connect((erro) => {
    if (erro) {
        console.log('Erro ao conectar no MySQL:', erro);
        return;
    }

    console.log('Conectado ao MySQL com sucesso!');
});

app.post('/api/login', (req, res) => {

    const { email, senha } = req.body;

    // CORREÇÃO: O nome da tabela foi corrigido para 'Usuario' (igual está no brasil.sql)
    const sql = `
        SELECT * FROM Usuario
        WHERE email = ? AND senha = ?
    `;

    conexao.query(sql, [email, senha], (erro, resultado) => {

        if (erro) {
            console.log(erro);
            return res.status(500).json({
                mensagem: 'Erro no servidor'
            });
        }

        if (resultado.length === 0) {
            return res.status(401).json({
                mensagem: 'Email ou senha incorretos'
            });
        }

        res.json({
            mensagem: 'Login realizado com sucesso!'
        });
    });
});

app.listen(3000, () => {
    console.log('Servidor rodando em http://localhost:3000');
});