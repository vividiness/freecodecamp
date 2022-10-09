//splice() function -> remover dados de um Array de acordo com index.
//parâmetros (index, quantidade de dados a junto com o index para excluir, novos dados para inserir onde foram removidos os anteriores)

function htmlColorNames(arr) {
    // Only change code below this line
  arr.splice(0,2, 'DarkSalmon', 'BlanchedAlmond')
    // Only change code above this line
    return arr;
  }
  
  console.log(htmlColorNames(['DarkGoldenRod', 'WhiteSmoke', 'LavenderBlush', 'PaleTurquoise', 'FireBrick']));

  //slice() function -> copia dados de um array dentro de um intervalo, sem alterar o array em que pegou os dados.
  //parâmetros (index[o primeiro dado que quero pegar], último dado que quero pegar)
  //!!! DETALHE !!!!: pra pegar o último index eu preciso colocar um número acima pois ele não leria, por ex, o index 3 e sim somente até o 2.

  function forecast(arr) {
    // Only change code below this line
  
    return arr.slice(2,4);
  }
  
  // Only change code above this line
  console.log(forecast(['cold', 'rainy', 'warm', 'sunny', 'cool', 'thunderstorms']));
  //"warm,sunny"