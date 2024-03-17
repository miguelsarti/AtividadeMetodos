//10 métodos de Array em JavaScript

//Método 10: .splice()
//Utilizado para alterar qualquer coisa do array,
//como por exemplo adicionar, remover ou substituir

//Exemplo 1: Adicionando

console.log("Exemplo 1");

const frutas = ['maçã', 'banana', 'laranja'];

frutas.splice(1, 0, 'uva', 'pera'); 

console.log(frutas);

//Exemplo 2: Removendo

console.log("Exemplo 2");

const numeros = [1, 2, 3, 4, 5];

numeros.splice(2, 2);

console.log(numeros);

//Exemplo 3: Substituindo

console.log("Exemplo 3");

const cores = ['vermelho', 'verde', 'azul'];

cores.splice(2, 2, 'amarelo');

console.log(cores);