/*exercísio de fixação 24/02/2021
console.log("Hello World!!");
const name = 'Diego';
const birthCity = 'Belém';
let birthYear = 1986;
birthYear = 2020;
// birthCity = 'Ananindeua';


console.log(name)
console.log(birthCity)
console.log(birthYear)

let movie = "Avengers"; // string literl
let score = 10.89; //number literal
let isValid = true; //boolean
//let name; //undefined
let color = null; //redefinição

//+, -, *, /, **

let salary = 3500;

console.log(salary + salary);
console.log(salary - salary);
console.log(salary / salary);
console.log(salary * salary);
console.log(3 **3);

salary++;
console.log(salary);


//operador typeof
let patientId = 50;
let patientId1 = '50';
let isEnrolled = true;
const patientInfo = {
  firstName: 'Ana',
  lastName: 'Santos',
};
const patientEmail = 'ana@email.com';

console.log(typeof patientId);
console.log(typeof patientId1);
console.log(typeof isEnrolled);
console.log(typeof patientEmail);*/


// Cinco programas, das operações aritméticas básicas
// Adição, Subtração, Multiplicação, Divisão, Módulo

//#O maior de dois números
let a = 7;
let b = 9;

if (a > b) {
  console.log(a);
} else {
  console.log(b);
} // 9

//#O maior de três números
let a = 12;
let b = 15;
let c = 19;

if (c > a && c > b) {
  console.log(c)
} else if (b > a && b > c) {
  console.log(b)
} else {
  console.log(a)
}

//#positivo ou negativo
let positivoOuNegativo = 34352;

if (positivoOuNegativo % 2 == 0) {
  console.log("positive");
} else if (positivoOuNegativo % 2 == 1) {
  console.log("negative")
} else {
  console.log(0);
}

//#triangulo
let tri = 70;
let an = 50;
let gulo = 60;

if (tri + an + gulo == 180) {
  console.log(tri + an + gulo == 180);
} else if (tri + an + gulo != 180){
  console.log(tri + an + gulo == 180);
} else {
  console.log("Erro! angulos inválidos");
}

//#xadrez
let peçaDoXadrez = "Dama".toLowerCase(); // 

switch (peçaDoXadrez) {
  case "rei":
    console.log("Se movimenta, se deslocando uma casa na direção horizontal, vertical ou diagonal. Ele tem um movimento especial chamado roque.");
    break;
  
  case "dama":
    console.log("Chamada de Rainha possui o movimento combinado da Torre e do Bispo, movendo-se em linha reta nas fileiras, colunas e diagonais.");
    break;
  
  case "torre":
    console.log("Move-se em linha reta nas colunas e fileiras do Tabuleiro.");
    break;
  
  case "bispo":
    console.log("Movimenta-se em linhas retas nas diagonais do tabuleiro. Devido ele andar somente nas diagonais seu movimento é restrito pela cor das casas, ou seja, alcança somente 32 casas no tabuleiro (claras ou escuras).");
    break;
  
  case "cavalo":
    console.log("Pode mover para a casa mais próxima de onde está desde que não seja na mesma coluna, diagonal ou fileiras do Tabuleiro, com o formato característico da letra L, podendo pular peças intervenientes.");
    break;
  
  case "peão":
    console.log("Se movimenta para a casa desocupada imediatamente a sua frente na mesma coluna ou no primeiro movimento opcionalmente por duas casas na mesma coluna desde que ambas as casas estejam desocupadas.");
    break;
  
  default:
    console.log("Error! informações apenas sobre (Rei, Dama, Torre, Bispo, Cavalo e Peão)")
}

//#converte uma nota dada em porcentagem (de 0 a 100)
let porcentagem = "100"; 

if (porcentagem < 0 || porcentagem > 100) {
  console.log("ERROR! não pode ser menor que zero e nem maior que 100")
} else if (porcentagem >= 90) {
  console.log("A")
} else if (porcentagem >= 80) {
  console.log("B")
} else if (porcentagem >= 70) {
  console.log("C")
} else if (porcentagem >= 60) {
  console.log("D")
} else if (porcentagem >= 50) {
  console.log("E")
} else if (porcentagem < 50) {
  console.log("F")
} else {
  console.log("Error! tente um número entre 0 e 100")
} 