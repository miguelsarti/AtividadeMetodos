//10 métodos de Array em JavaScript

//Método 4: .slice()
//Utilizado para retornar uma cópia do array
//para funcionar, é necessário colocar o número
//da posição onde deve iniciar e onde deve terminar.

console.log("Exemplo 1");

const array = ["a", "b", "c", "d", "e"];
const newArray = array.slice(1);

console.log(array);
console.log(newArray);

console.log("Exemplo 2");

const array1 = ["1", "2", "3", "4", "5"];
const newArray1 = array1.slice(2, 5);

console.log(array1);
console.log(newArray1);
