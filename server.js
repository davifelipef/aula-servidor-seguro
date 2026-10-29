const express = require('express');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');

const app = express();

app.get('/', (req, res) => {
  res.send('Servidor funcionando!');
});

app.listen(3000, '127.0.0.1', () => {
  console.log('Servidor HTTP na porta 3000');
  console.log('Acesse no link: http://localhost:3000');
});