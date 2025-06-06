// Exercícios Práticos - Arrays em JavaScript
// -------------------------------------------
// Objetivo: Praticar os métodos push, pop, shift, unshift, length e splice
// EXERCÍCIO 01 - Criando e exibindo um array
// Crie um array com três nomes e exiba o array e seu tamanho no console.
// Método sugerido: length

console.log("Exercicio 1");
let names = ["Aarón", "Simón", "Valéria"];
let tamanho = names.length;
console.log(names, tamanho);
console.log(names.indexOf("Simón"));

// EXERCÍCIO 02 - Adicionando elementos ao final
// Adicione dois nomes ao final do array criado anteriormente.
// Método sugerido: push

console.log("Exercicio 2");
names.push("Camile", "Antonela");
console.log(names);

// EXERCÍCIO 03 - Inserindo no início
// Adicione um nome no início do array.
// Método sugerido: unshift

console.log("Exercicio 3");
names.unshift("Carlos");
console.log(names);

// EXERCÍCIO 04 - Removendo o último
// Remova o último nome do array e exiba o nome removido e o array restante.
// Método sugerido: pop

console.log("Exercicio 4");
names.pop();
console.log("Antonela", names);

// EXERCÍCIO 05 - Removendo o primeiro
// Remova o primeiro nome do array e exiba o nome removido e o array restante.
// Método sugerido: shift

console.log("Exercicio 5");
names.shift();
console.log("Carlos", names);

// EXERCÍCIO 06 - Removendo e adicionando elementos
// Crie um array com cinco frutas. Remova duas frutas a partir da segunda posição e adicione duas novas frutas no lugar.
// Método sugerido: splice

console.log("Exercicio 6");
let frutas = ["naranja", "lima", "limón", "toronja", "mandarina"];
console.log(frutas)
frutas.splice(1, 2, "Guanabana", "Platano");
console.log(frutas);

// EXERCÍCIO 07 - Exibindo o tamanho do array
// Exiba o tamanho do array de frutas após a alteração.
// Método sugerido: length

console.log("Exercicio 7");
let size = frutas.length;
console.log(size);
//console.log(frutas.length());
// EXERCÍCIO 08 - Criando um histórico de páginas
// Crie um array chamado historico e simule acessos às páginas "home", "sobre" e "contato".
// Método sugerido: push

console.log("Exercicio 8");
let historial = [];
historial.push("Inicio");
console.log(historial);
historial.push("Sobre");
console.log(historial);
historial.push("Contacto");
console.log(historial);

// EXERCÍCIO 09 - Removendo o último acesso do histórico
// Remova o último acesso do histórico e exiba "Saída da página: contato".
// Método sugerido: pop

console.log("Exercicio 9");
historial.pop();
console.log(historial);
console.log("Saída da website: Contacto");

// EXERCÍCIO 10 - Alterando elementos
// Crie um array de quatro cores e troque a terceira cor por "azul-marinho".
// Método sugerido: splice

console.log("Exercicio 10");
let cores = ["Cyan", "Yellow", "Magent(Violett)", "Key(Black)"];
console.log(cores);
cores.splice(2, 1, "Azul-marinho");
console.log(cores);

//Fim do programa