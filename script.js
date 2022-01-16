/**Na documentação Javascrip tem o seletor document.querySelectorAll que tem o objetivo de pegar todos os itens de um elemento. Usei esse seletor para pegar todas as imagens e seus campos de informação do arquivo index.html*/
const imagens = document.querySelectorAll('img.imagemPersonagem');
const nomeDosPersonagens = document.querySelectorAll('p.nome');
const especies = document.querySelectorAll('p.especie');
const condicoes = document.querySelectorAll('p.status');
const botao = document.querySelector('button');


gerarValorAleatorio = () => {
  /**Essa função tem o objetivo de gerar números aleatórios inteiros de 1 a 826 que é o número de personagens da série Rick And Morty*/
  return Math.floor(Math.random() * 826);
}

gerarValoresUnicos = (numeroDeValores = 3) => {
  /**Esta função devolve uma lista de personagens sem repetições. Para isso utilizei o objeto Set.
   * Recebe numeroDeValores como argumento, permitindo que qualquer número de valores não repetidos seja retornado. O padrão de valores é 3.
  */
  let conjunto = new Set();
  let numeroAleatorio;
  while (conjunto.size < numeroDeValores) {
    numeroAleatorio = gerarValorAleatorio();
    conjunto.add(numeroAleatorio);
  }
  return conjunto;
}

pegarPersonagem = (numeroPersonagem, posicaoImagem) => {
  /**Alterada a função pegarPersonagem para receber o número do personagem e a posição da imagem no HTML como argumentos. A função pega os dados da API de acordo com o número recebido e altera a imagem e os campos de informação no HTML. Como a imagem e os campos de informação são uma lista, a alteração acontece pelo índice recebido no argumento posicaoImagem. */
  fetch(`https://rickandmortyapi.com/api/character/${numeroPersonagem}`, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      "Content-type": 'application/json'
    }
  }).then((response) => response.json()).then((data) => {
    imagens[posicaoImagem].src = data.image;
    imagens[posicaoImagem].alt = data.name;
    nomeDosPersonagens[posicaoImagem].innerHTML = data.name;
    especies[posicaoImagem].innerHTML = data.species;
    condicoes[posicaoImagem].innerHTML = data.status;
  });
}
botao.onclick = pegarPersonagem;

