
let songs = [];

// insercaoService.js

function inserirNomeMusica(nomeMusica) {
    // Lógica para inserir nome de música no banco de dados ou outra fonte
    //const newSong = { id: songs.length + 1, nomeMusica };

    songs.push(nomeMusica);
    console.log(`Inserindo nome de música: ${nomeMusica}`);
}

// consultaService.js

function consultarNomesMusicas() {
    // Lógica para consultar nomes de músicas no banco de dados ou outra fonte
    //return ['ArrumaAmalaee', 'Música 2', 'Música 3'];
    return songs;
}

module.exports = {
    consultarNomesMusicas,
    inserirNomeMusica
};