//spread operator [...array] é um operador que copia todos os dados de um array e insere em uma variável.
//ex: arr = [0,1,2] newarr= [...arr] (que é igual a [0,1,2])

function copyMachine(arr, num) {
    let obj = [...arr]
    let newArr = []
  
  while (num >= 1) {
    // Only change code below this line
      newArr.push(obj)
    // Only change code above this line
    num--;
  }
  return newArr;
}

console.log(copyMachine([true, false, true], 4));

//-------------------------------------------------------------------------------------------------------------------

//mais um exemplo...
function spreadOut() {
  let fragment = ['to', 'code'];
  let sentence = ['learning', ...fragment, 'is', 'fun']; // Change this line
  return sentence;
}

console.log(spreadOut());