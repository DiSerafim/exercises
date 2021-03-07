/*exercísio de fixação 24/02/2021 - Introdução - JavaScript / JavaScript - Primeiros passos
console.log("Hello World!!");
const name = 'Diego';
const birthCity = 'Belém';
let birthYear = 1986;
birthYear = 2020;
// birthCity = 'Ananindeua';


console.log(name)
console.log(birthCity)
console.log(birthYear)

let movie = "Avengers"; // string literal
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
console.log(typeof patientEmail);


//area e o perimetro de um triangulo
let base = 5;
let altura = 8;
let area = base * altura;
let perimetro = base + altura + area;

console.log(perimetro)

//operadores de atribuição e operadores lógicos if / else
let trybe = 17;
if (trybe >= 14 && trybe < 14.40) {
  console.log("Esquenta");
}
else if (trybe >= 16.30 && trybe < 17.50) {
  console.log("Aula ao vivo");
}
else if (trybe >= 19.40 && trybe < 20) {
  console.log("Fechamento");
}
else {
  console.log("Fora dos momentos sícronos")
}

//nota de uma pessoa candidata em um desafio técnico
let nota = 83;
if (nota >= 80) {
  console.log("Parabéns, você foi aprovado(a)");
}
else if (nota < 80 && nota >= 60) {
  console.log("Você está na nossa lista de espera");
}
else {
  console.log("Você foi reprovado(a)");
}

//switch -- case
let trafficLight = "laranja";

switch (trafficLight) {
  case "vermelho":
    console.log("Pare!");
    break;

  case "amarelo":
    console.log("Atenção!");
    break;
    
  case "verde":
    console.log("Siga!");
    break;

  default:
    console.log("Valor não identificado");
}

//estado da pessoa candidata ao processo seletivo
*/


// Cinco (na versade são 15) programas, das operações aritméticas básicas
// Adição, Subtração, Multiplicação, Divisão, Módulo

//#2 O maior de dois números
let a = 7;
let b = 9;

if (a > b) {
  console.log(a);
} else {
  console.log(b);
} // 9

//#3 O maior de três números
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

//#4 positivo ou negativo
let positivoOuNegativo = "351";

if (positivoOuNegativo % 2 == 0) {
  console.log("positive");
} else if (positivoOuNegativo % 2 == 1) {
  console.log("negative")
} else {
  console.log("zero");
}

//#5 triangulo
let tri = 70;
let an = 50;
let gulo = "61A";

if (tri + an + gulo == 180) {
  console.log(true);
} else if (tri + an + gulo > 180 || tri + an + gulo < 180){
  console.log(false);
} else {
  console.log("Erro! angulos inválidos");
}

//#6 xadrez
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

//#7 converte uma nota dada em porcentagem (de 0 a 100)
let porcentagem = "40"; 

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

//#8 true se pelo menos um for par ou false se nenhum for par.
let valueA = 54675;
let valueB = 54643;
let valueC = 2;

if (valueA % 2 == 0 || valueB % 2 == 0 || valueC % 2 == 0) {
  console.log(true);
} else {
  console.log(false);
} 

//#9 true se pelo menos um for impar ou false se nenhum for impar.
let valueD = 8;
let valueE = 3;
let valueF = 4;

if (valueD % 2 == 1 || valueE % 2 == 1 || valueF % 2 == 1) {
  console.log(true);
} else {
  console.log(false);
}

//#10 duas variáveis diferentes
let custo = 7;
let valorDeVenda = 15;
let lucro = valorDeVenda - custo;
let estoque = lucro * 1000;
let impostoSobreOCusto = (0.20) * custo;
let valorCustoTotal = custo + impostoSobreOCusto;

if (custo <= 0 || valorDeVenda <= 0) {
  console.log("Error! valor inválido ou menor ou igual a zero");
} else {
  console.log(`O valor do produto + impostos é: R$ ${valorCustoTotal}`);
  console.log(`O lucro sobre o produto vendido é de: ${valorDeVenda - valorCustoTotal}`);
}

//#11 salário bruto o INSS e o IR
let salario = 3500.00;
let inss;
let ir;
let salarioLiquido;
//inss
if (salario <= 1556.94) {
  inss = 0.08 * salario
  console.log(`${inss},00 é o valor do Inss a ser descontado do salário de ${salario},00`);
} else if (salario >= 1556.95 && salario <= 2594.92) {
  inss = 0.09 * salario
  console.log(`${inss},00 é o valor do Inss a ser descontado do salário ${salario},00`);
} else if (salario >= 2594.93 && salario <= 5189.82) {
  inss = 0.11 * salario
  console.log(`${inss},00 é o valor do Inss a ser descontado do salário ${salario},00`);
} else {
  inss = 570.88
  console.log(`${inss},00 é o valor do Inss a ser descontado do salário ${salario},00`);
}

salario -= inss; 
console.log(`${salario},00 é o valor do salário com INSS já deduzido`);

//ir
if (salario <= 1903.98) {
  console.log(ir = "Isento de IR");
} else if (salario >= 1903.99 && salario <= 2826.65) {
  ir = 0.075 * salario - 142.80
  console.log(`${ir} é o valor do IR a ser descontado do salário de ${salario},00`);
} else if (salario >= 2826.66 && salario <= 3751.05) {
  ir = 0.15 * salario - 354.80
  console.log(`${ir} é o valor do IR a ser descontado do salário de ${salario},00`);
} else if (salario >= 3751.06 && salario <= 4664.68) {
  ir = 0.225 * salario - 636.13
  console.log(`${ir} é o valor do IR a ser descontado do salário de ${salario},00`);
} else {
  ir = 869.36
  console.log(`${ir} é o valor do IR a ser descontado do salário de ${salario},00`);
}

console.log(`${salarioLiquido = salario - ir} é o seu salario liquido com os impostos (Inss e IR) já descontados`);

// teste em 7 de fevereiro, pasta 2 não funcionou, estoutestando a pasta 1