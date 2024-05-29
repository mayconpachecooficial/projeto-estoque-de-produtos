import mysql from 'mysql';

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'devclass',
  password: '123',
  database: 'stock_management'
});

connection.connect((err) => {
  if (err) {
    console.error('Erro ao conectar ao banco de dados:', err);
    return;
  }
  console.log('Conexão com o banco de dados MySQL estabelecida!');
});

export default connection;
