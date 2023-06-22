// autenticacao/authService.js

function autenticarUsuario(usuario, senha) {
  // Simulando um usuário fixo
  const user = {
    username: 'admin',
    //password: '$2b$10$WmM0koCJrDqLftQnR7XO4usDhTj8KsFn6XYIcLnkkh3F5mbqP9T3K' // senha: 'admin'
    password: 'admin'
  };

    //if (username === user.username && bcrypt.compareSync(password, user.password)) {  
    if (usuario === user.username && senha === user.password) {
      
      return true;
    } else {
   
      return false;
    }
  
}

module.exports = {
  autenticarUsuario
};
