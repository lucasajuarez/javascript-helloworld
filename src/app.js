const express = require('express');
const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  res.json({ message: 'Hello from Lambda!' });
});

app.get('/health', (req, res) => {
  res.status(200).send('OK');
});

module.exports = app;
