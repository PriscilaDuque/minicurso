const imagem = document.querySelector('img');/** Textos com aspas simples são mais manipulavéis */
const botao = document.querySelector('button');/**Textos com aspas duplas são menos manipuláveis */
const nomeDoPersonagem = document.querySelector('#nome');
const especie = document.querySelector('#especie');
const condicao = document.querySelector('#status'); 


pegarPersonagem = () => {
  return fetch(`https://rickandmortyapi.com/api/character/2`, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      "Content-type": 'application/json'
    }
  }).then((response) => response.json()).then((data) => {
    imagem.src = data.image;
    imagem.alt = data.name;
    nomeDoPersonagem.innerHTML = data.name;
    especie.innerHTML = data.especies;
    condicao.innerHTML = data.status;

  });
}
botao.onclick = pegarPersonagem;

