// n = [1, 2, 3]
// sum =0;

// for(k=1; k<n.length; k++){
//     sum+=n[k];
// }
// console.log(sum)

/*
const myArray = [
    [1, 2, 3], //array 0   
    [4, 5, 6], //array 1
    [7, 8, 9], //array 2
    [[10, 11, 12], 13, 14],  //array 3, posição 0 [10, 11, 12]
  ]; 


  const dados = [
    ['Viviane Pereira Gomes', 'Pierre Sanchez Teófilo Cruz', 'Mayara Kelly Dionísio da Silva'],
    [20, 21, 19]
  ]

  for(x=0;x<=dados[0].length-1; x++){
    console.log(dados[0][x])
     }
  
// saída -->
// Viviane Pereira Gomes - 20

// Viviane Pereira Gomes - 21

// Viviane Pereira Gomes - 19

// Viviane Pereira Gomes - undefined

.push() -> adiciona valores no fim do array
.unshift() -> adiciona valores no começo do array
------------------------------------------------------------

.pop() -> retira o último valor do array e mostra o valor retirado.
.shift() ->retira o primeiro valor do array e mostra o valor retirado.



total = [["Pierre", 34], ["Viviane", 33]]
console.log(total.shift())
console.log(total[0][0] +" "+ total[0][1])
total.unshift([ "Mayara", 24])
console.log(total[0][0]+" "+total[0][1])

/*
It is possible to have both local and global variables with the same name.
When you do this, the local variable takes precedence over the global variable.
*/

//diferença estrita (strict inequality) -> !== (compara o valor e o tipo de dado {string, number, boolean})
//greater than ( > ) ; less than ( < ); greater than or equal (>=); less than or equal (<=)
//quando usamos operadores de comparação (e.g == ; != ; etc ), js converte ele pra realizar a comparação,
//exceto com operadores estritos (===, !==); exemplos: 7   >= '3' (true) - ele converte pra mim

//funções: function isEqual, isLess();
//quando se usa return numa função, e o código é compiladoo até ele, o restante nbão é executado.

/*
function isLess(a,b){
 
}


const bardo = {
  "nome": "Edgar",
  "instrumento": "flauta",
  "idade": 27,
  "cor dos olhos": "pretos",
  "quantidade armas": 7
}

//alterando um valor de alguma propriedade
bardo["quantidade armas"] = 3;

//excluindo uma propriedade
//delete bardo["quantidade armas"];

//adicionar nova propriedade
//objeto.nome da propriedade = oq vc quiser colocar na característica
bardo.bolsa = true;

console.log(bardo);
//nao entendi esse erro do "No debugger available, can not send 'variables'". se tirar a qnt de armas, aparece de boa a bolsa.

//função pra verificar se há uma propriedade específica
function checkObj(obj, checkProp) {
  if(obj.hasOwnProperty(checkProp)){
    return obj[checkProp];
  }else{
    return "Not Found";
  }
}

const lookup = {
  "alpha": "Adams",
  "bravo": "Boston",
  "charlie": "Chicago",
  "delta": "Denver",
  "echo": "Easy",
  "foxtrot": "Frank"
}

//mostrar pesquisa de objeto kk (era exercício)
function phoneticLookup(val) {
let result = ""; 
    //pra pôr variável talvez só funfe bracket conotation D;
  result = lookup[val];

  // Only change code above this line
    return result;
  }
  
console.log(phoneticLookup("charlie"));
console.log(checkObj(lookup,"alpha"))


//arrays com obj
const myPlants = [
  {
    type: "flowers",
    list: [
      "rose",
      "tulip",
      "dandelion"
    ]
  },
  {
    type: "trees",
    list: [
      "fir",
      "pine",
      "birch"
    ]
  }
];

const secondTree = myPlants[1].list[1];

*/

// Only change code below this line
/*Your function must always return the entire record collection object.
If prop isn't tracks and value isn't an empty string, update or set that album's prop to value.
If prop is tracks but the album doesn't have a tracks property, create an empty array and add value to it.
If prop is tracks and value isn't an empty string, add value to the end of the album's existing tracks array.
If value is an empty string, delete the given prop property from the album. */

// Setup
const recordCollection = {
  2548: {
    albumTitle: 'Slippery When Wet',
    artist: 'Bon Jovi',
    tracks: ['Let It Rock', 'You Give Love a Bad Name']
  },
  2468: {
    albumTitle: '1999',
    artist: 'Prince',
    tracks: ['1999', 'Little Red Corvette']
  },
  1245: {
    artist: 'Robert Palmer',
    tracks: []
  },
  5439: {
    albumTitle: 'ABBA Gold',
  }
};

//funciona
function updateRecords(records, id, prop, value) {

  const album = records[id];
  
  if (value === '') {
      delete album[prop];
    } else if (prop === 'tracks') {
      album[prop] = album[prop] || []; 
  //se album[prop] for undefined, é setado um array vazio '[]' pra ele.
  //se a propriedade 'tracks' é um array de tracks (não indefinido), vai ser reatribuído a ele mesmo, praticamente
  //mudando nada, e se album[id] não tem a propriedade 'tracks' (indefinido), vai ser atribuído um array vazio a ele.

      album[prop].push(value);
    } else {
      album[prop] = value;
    }  
  
    return records;

   
  }

/* ----- Recursive ---------
Imagine you go to open your bedroom door and it’s locked. Your three-year-old son pops in from around the corner and lets
you know he hid the only key in a box. (“Just like him,” you think.) You're late for work and you really need to get
in the room to get your shirt.

You open the box only to find… more boxes. Boxes inside of boxes. And you don’t know which one has the key! You need to get
that shirt soon, so you have to think of a good algorithm to find that key.

ex:

 function countup(n) {
      if (n < 1) {
        return [];
      } else {
        const countArray = countup(n - 1);
        countArray.push(n);
        return countArray;
      }
    }

*/




