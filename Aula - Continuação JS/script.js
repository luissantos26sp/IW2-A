let numero = 1;
let numeroString = String(numero);
let string = "86";
let stringNumero = Number(string);

console.log(typeof numero,numero);
console.log(typeof numeroString,numeroString);
console.log(typeof string,string);
console.log(typeof stringNumero,stringNumero);

//Condição
let numero2 =3;
let testeNull = null;

if (testeNull != null){
    console.log("Não é nulo!");
}
else if (numero2 >4){
    console.log("Número maior do que 4!");
}
else{
    console.log("É nulo");
}

//Tipos de variáveis em Js:

//let

let teste = 2;
teste = 4;

if (teste == 4){
    console.log(teste);

    var pi = 3.14;
}

console.log(pi);

//Operadores:

let contador = 0;
contador ++; //Pega o valor da variavel contador e adiciona +1
contador +=3; //Pega o valor de contador e adiciona +3

console.log(contador);

contador --;
contador -= 5;

console.log(contador);

if ("85" == 85){
    console.log("Verdadeiro!")
}
else{
    console.log("Falso!")
}

// Condição:

// && || ! (negação)

let idade = 30;
let testeNum = null;
let maiorDeIdade = false;

if (idade >= 18 || testeNum == null){
    console.log("Entrou no 1ºif.");
}

if (!maiorDeIdade){ //invertendo o valor
    console.log("Entrou no 2ºif.");
}

//Repetição:

//while (enquanto)

let cont = 3;
while (cont >= 0) {
    console.log("Contador: " + cont);
    cont--; //cont = cont - 1
}

//for

for (let i = 0; i <= 10; i++) { // 1ºCriar uma variavel; 2ºVerificar true/false; 3ºLeitura das linhas depois aumenta a variavel;
    console.log("Valor de i: " + i);
}


console.log("Exercício 1:");
let num1 = 1;
let num2 = 2;

let soma = num1 + num2;
console.log("Soma =" + soma);

let sub = num1 - num2;
console.log("Subtração =" + sub);

let mult = num1 * num2;
console.log("Multiplicação =" + mult);

let div = num1 / num2;
console.log("Divisão =" + div);