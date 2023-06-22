// insercaoService.js

function inserirNomeMusica(nomeMusica) {
  // Lógica para inserir nome de música no banco de dados ou outra fonte
  const newSong = { id: songs.length + 1, nomeMusica };
  songs.push(newSong);
  console.log(`Inserindo nome de música: ${nomeMusica}`);
}

module.exports = {
  inserirNomeMusica
};
