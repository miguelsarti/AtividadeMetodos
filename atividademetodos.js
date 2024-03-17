//10 métodos de Array em JavaScript

//Método 7:Utilizado para adicionar elementos em uma array
//sem alterar a array original.

//Exemplo 1:

console.log("Exemplo 1");

const months = ["January", "February", "March", "April"];
const myMonths = months.with(3, "May");

console.log(months);
console.log(myMonths);

//Exemplo 2:

console.log("Exemplo 2");

const months1 = ["4", "8", "12", "13", "20"];
const myMonths1 = months1.with(3, "16");

console.log(months1);
console.log(myMonths1);