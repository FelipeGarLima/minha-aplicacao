// server.js
const express = require('express');
const bodyParser = require('body-parser');
const authService = require('./authService');
const consultaService = require('./consultaService');
const insercaoService = require('./insercaoService');
const musicas = require('./musicas');

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Rota de autenticação
app.post('/login', async (req, res) => {
  const { usuario, senha } = req.body;
  const autenticado = await authService.autenticarUsuario(usuario, senha);
  console.log(autenticado)
  if (autenticado) {
    res.redirect('/consultar');
  } else {
    res.redirect('/login');
  }
});

// Rota para a página de login
app.get('/login', (req, res) => {
  res.send(`
    <form action="/login" method="POST">
      <input type="text" name="usuario" placeholder="Usuário" required>
      <input type="password" name="senha" placeholder="Senha" required>
      <button type="submit">Entrar</button>
    </form>
  `);
});

// Rota para a página de consulta de nomes de músicas
app.get('/consultar', (req, res) => {
  const nomesMusicas = musicas.consultarNomesMusicas();
  const listaMusicas = nomesMusicas.map((musica) => `<li>${musica}</li>`).join('');
  res.send(`
    <h1>Consulta de Nomes de Músicas</h1>
    <ul>${listaMusicas}</ul>
  `);
});

// Rota para a página de inserção de nome de música
app.post('/inserir', (req, res) => {
  const { nomeMusica } = req.body;
  musicas.inserirNomeMusica(nomeMusica);
  res.redirect('/consultar');
});

// Rota para a página de inserção de nome de música
app.get('/inserir', (req, res) => {
  res.send(`
    <form action="/inserir" method="POST">
      <input type="text" name="nomeMusica" placeholder="Nome da Música" required>
      <button type="submit">Inserir</button>
    </form>
  `);
});

// Inicializar o servidor
app.listen(3001, () => {
  console.log('Servidor rodando na porta 3001');
});
