// Importando os módulos necessários
import express, { json } from 'express';
import { createConnection } from 'mysql';
import cors from 'cors';

// Inicializando o aplicativo Express
const app = express();

// Usando o middleware CORS para permitir requisições de diferentes origens
app.use(cors());

// Usando o middleware json para analisar o corpo das requisições como JSON
app.use(json());

// Criando uma conexão com o banco de dados MySQL
const db = createConnection({
  host: 'localhost',
  user: 'devclass',
  password: '123',
  database: 'stock_management'
});

// Conectando ao banco de dados
db.connect((err) => {
  if (err) throw err;
  console.log('Connected to database');
});

// Definindo a rota GET para obter todos os produtos
app.get('/stock_management', (req, res) => {
  db.query('SELECT * FROM products', (err, result) => {
    if (err) throw err;
    res.send(result);
  });
});

// Definindo a rota POST para adicionar um novo produto
app.post('/stock_management', (req, res) => {
  const { name } = req.body;
  db.query('INSERT INTO products (name) VALUES (?)', [name], (err, result) => {
    if (err) throw err;
    res.send(result);
  });
});

// Definindo a rota DELETE para remover um produto
app.delete('/stock_management/:id', (req, res) => {
  const { id } = req.params;
  db.query('DELETE FROM products WHERE id = ?', [id], (err, result) => {
    if (err) throw err;
    res.send(result);
  });
});

// Iniciando o servidor na porta 5000
app.listen(5000, () => {
  console.log('Servidor rodando na porta 3000');
});