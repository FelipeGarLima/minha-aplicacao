// autenticacao/authService.js
const bcrypt = require('bcrypt');

//function autenticarUsuario(usuario, senha) {
async function autenticarUsuario(usuario, senha) {
  // Simulando um usuário fixo
  const user = {
    username: 'admin',
    password: '$2b$10$WmM0koCJrDqLftQnR7XO4usDhTj8KsFn6XYIcLnkkh3F5mbqP9T3K' // senha: 'admin'
    //password: 'admin'
  };
  const autenticacao = await bcrypt.compareSync(senha, user.password);
  console.log(autenticacao);
  if (usuario === user.username && autenticacao === true) {
    //if (usuario === user.username && senha === user.password) {

    return true;
  } else {

    return false;
  }

}

module.exports = {
  autenticarUsuario
};
