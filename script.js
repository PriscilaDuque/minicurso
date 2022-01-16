/**Na documentação Javascrip tem o seletor document.querySelectorAll que tem o objetivo de pegar todos os itens de um elemento. Usei esse seletor para pegar todas as imagens e seus campos de informação do arquivo index.html*/
const imagens = document.querySelectorAll('img.imagemPersonagem');
const nomeDosPersonagens = document.querySelectorAll('p.nome');
const especies = document.querySelectorAll('p.especie');
const condicoes = document.querySelectorAll('p.status');
const botao = document.querySelector('button');

/**Essa função tem o objetivo de gerar números aleatórios inteiros de 1 a 826 que é o número de personagens da série Rick And Morty*/
gerarValorAleatorio = () => {
  return Math.floor(Math.random() * 826);
}

pegarPersonagem = () => {
  let numeroAleatorio = gerarValorAleatorio();

  return fetch(`https://rickandmortyapi.com/api/character/${numeroAleatorio}`, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      "Content-type": 'application/json'
    }
  }).then((response) => response.json()).then((data) => {
    imagem.src = data.image;
    imagem.alt = data.name;
    nomeDoPersonagem.innerHTML = data.name;
    especie.innerHTML = data.species;
    condicao.innerHTML = data.status;

  });
}
botao.onclick = pegarPersonagem;

