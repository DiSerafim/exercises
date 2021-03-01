//conteúdo do dia 
//exercísio de fixação 4.2 / JavaScript - Array e loop For

//ARRAY

// váriaveis simples
let pizza1 = '4 Queijos';
let pizza2 = 'Frango com Catupiry';
let pizza3 = 'Marguerita';
let pizza4 = 'Palmito';
let pizza5 = 'Chocolate';

console.log(pizza1, pizza2, pizza3, pizza4, pizza5); //4 Queijos Frango com Catupiry Marguerita Palmito Chocolate

//variaveis compostas - usaremos o 'array'
let pizzas = ['4 Queijos', 'Frango com Catupiry', 'Marguerita', 'Palmito', 'Chocolate'];

console.log(`Menu de sabores: ${pizzas}`); //Menu de sabores: 4 Queijos,Frango com Catupiry,Marguerita,Palmito,Chocolate
//para 'ver item' por item
console.log(pizzas[0]); //4 Queijos
console.log(pizzas[1]); //Frango com Catupiry
console.log(pizzas[2]); //Marguerita
console.log(pizzas[3]); //Palmito
console.log(pizzas[4]); //Chocolate

//Para 'acrescentar mais um ítem' a lista
pizzas.push('Peito de peru'); //4 Queijos Frango com Catupiry Marguerita Palmito Chocolate Peito de peru

//Para saber o 'tamanho do nosso array'
console.log(pizzas.length) //6

//Para colocar a lista em 'ordem alfabética'
console.log(pizzas.sort()); //'4 Queijos','Chocolate','Frango com Catupiry','Marguerita','Palmito','Peito de peru'

//'laço de repetição' para repetir o indice da nossa lista

for (let index = 0; index < pizzas.length; index += 1) {
    console.log(pizzas[index]); // 4 Queijos Chocolate Frango com Catupiry Marguerita Palmito Peito de peru
}

//Exemplos para praticar
let taskList = ['Tomar café', 'Reunião', 'Brincar com o cachorro'];
console.log(taskList.length); //

//Buscando por um indice e armazenando em um variavel
let searchForFirstTask = taskList[0];
console.log(searchForFirstTask); //Tomar café

//Buscando pelo ultimo item e armazenando em um variavel
let searchForLastTask = taskList[taskList.length - 1];
console.log(searchForLastTask); //Brincar com o cachorro

//Adicionando mais um item ao final da lista
taskList.push('Fazer exercícios da Trybe');
console.log(taskList); //[ 'Tomar café', 'Reunião', 'Brincar com o cachorro', 'Fazer exercícios da Trybe' ]

//Adicionando mais um item ao inicio da lista
taskList.unshift('Revisar conteúdo');
console.log(taskList); //['Revisar conteúdo', 'Tomar café', 'Reunião', 'Brincar com o cachorro', 'Fazer exercícios da Trybe']

//Para remover o ultimo item da lista
taskList.pop();
console.log(taskList); //['Revisar conteúdo', 'Tomar café', 'Reunião', 'Brincar com o cachorro']

//Para remover o primeiro item da lista
taskList.shift();
console.log(taskList); //[ 'Tomar café', 'Reunião', 'Brincar com o cachorro' ]

//Para procurar por item no array
let indexOfTask = taskList.indexOf('Reunião');
console.log(indexOfTask); //1

//Exercício 1
//Obtenha o valor "Serviços" do array menu
let menu = ['Home', 'Serviços', 'Portfólio', 'Links'];
let menuServices = menu.length;

console.log(menuServices); // 4

//Exercício 2
//Procure o índice do valor "Portfólio" do array menu
let menu = ['Home', 'Serviços', 'Portfólio', 'Links'];
let indexOfPortfolio = menu.indexOf('Portfólio');

console.log(indexOfPortfolio); //2

//Exercício 3
//Adicione o valor "Contato" no final do array menu
let menu = ['Home', 'Serviços', 'Portfólio', 'Links'];
menu.push('Contato');
console.log(menu); //[ 'Home', 'Serviços', 'Portfólio', 'Links', 'Contato' ]


// LOOP FOR

// Tabuada de um numero
let numero = 5;
for (let index = 1; index <= 9; index += 1) {
    console.log(numero * index); //5 10 15 20 25 30 35 40 45
}

// Usando arrays
let listaDeNomes = ['Joana', 'Maria', 'Lucas'];
for (let indice = 0; indice < listaDeNomes.length; indice += 1) {
    let mensagem = `Boas vindas, ${listaDeNomes[indice]}!`;
    console.log(mensagem); // Boas vindas, Joana! Boas vindas, Maria! Boas vindas, Lucas!
}

//Lista de carros
let cars = ["Saab", "Volvo", "BMW"];
for (let index = 0; index < cars.length; index += 1) {
    console.log(cars[index]); //Saab Volvo BMW
}

//Exercício 1

//Utilize o for para imprimir os elementos da lista groceryList com o console.log()
let groceryList = ["Arroz", "Feijão", "Alface", "Melancia"];
for (let index = 0; index < groceryList.length; index += 1) {
    console.log(groceryList[index]); // Arroz Feijão Alface Melancia
}