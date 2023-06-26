// autenticacao/authService.js
const bcrypt = require('bcrypt');

//function autenticarUsuario(usuario, senha) {
async function autenticarUsuario(usuario, senha) {
  // Simulando um usuário fixo
  const user = {
    username: 'admin',
    password: await bcrypt.hash(senha, await bcrypt.genSalt()) // deve ficar no banco
    //password: 'admin'
  };

  const autenticacao = await bcrypt.compare(senha, user.password);
  console.log(autenticacao);
  if (usuario === user.username && autenticacao) {
    //if (usuario === user.username && senha === user.password) {
    return true;
  } else {
    return false;
  }

}

module.exports = {
  autenticarUsuario
};
