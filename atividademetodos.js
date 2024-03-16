//10 métodos de Array em JavaScript

//Método 5: .map()
//Ultilizado para retornar uma nova array 
//com a raiz quadrada de todos os valores selecionados

console.log("Exemplo 1");

const numbers = [4, 9, 16, 25];
const newArray = numbers.map(Math.sqrt);

console.log(numbers);
console.log(newArray);

console.log("Exemplo 2");

const numbers1 = [36, 49, 64, 81];
const newArray1 = numbers1.map(Math.sqrt);

console.log(numbers1);
console.log(newArray1);


