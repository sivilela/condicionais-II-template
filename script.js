// let preco;

// const fruta = prompt(`Digite o nome da fruta: `)

// if (fruta === `banana`){
//     preco = 5;    
// }else if (fruta === `laranja`){
//     preco = 4.5;
// }else if (fruta === `maçã`){
//     preco = 7;
// }else{
//     console.log("Fruta não encontrada!");
// }
// console.log(preco);


// let preco;

// const fruta = prompt(`Digite o nome da fruta: `)

// switch(fruta){
//     case "banana":
//         preco = 5
//         break
//     case "laranja":
//         preco = 4.5
//         break
//     case "banana":
//         preco = 7
//         break
//     default:
//         console.log("Fruta não encontrada")
// }
// console.log(fruta,`, R$`,preco)





// Labank --- a variável declaraca como const, não funcionou no switch case
// const idadeDoDependente = prompt("Qual a idade do seu dependente?")
// let cartao
// const possuiConta = confirm ("Você possui conta? Se sim clique em OK, se não clique em CANCELAR")

// if (idadeDoDependente >= 13 && idadeDoDependente <= 17){
//     console.log("A pessoa dependente já pode ter um cartão de crédito vinculado ao seu!");
// }else{ 
//    console.log("Consulte outras possibilidades do Labank")
// }

// possuiConta ? 
//         console.log("Boas vindas"):
//         console.log("Faça um cadastro")
// poderia transformar em Number
// const uraTelefonica = prompt("Escolha um ramal.")
//     switch(uraTelefonica){
//       // poderia usar números e não strings
//         case "1":
//         cartao = "Você escolheu cartão FÁCIL"
//         break
//         case "2":
//         cartao = "Você escolheu cartão BLACK"
//         break
//         case "3":
//         cartao = "Você escolheu cartão PLATINUM"
//         break
//         case "4":
//         cartao = "Você escolheu cartão MASTER GOLD"
//         break

//         default:
//             console.log("Escolha uma das quatro opções disponíveis");
//     }
//     console.log(cartao);


// if aninhado
const numero = Number(prompt("Informe um número qualquer e descubra se ele é divisível por 2 e por 3"))
const verificaNumero = Number(prompt("Informe um número para saber se é o número que estou pensando: "))

if (numero %2 === 0 && numero %3 === 0){
  console.log("O número informado é divisível por 2 e por 3")
  switch(verificaNumero){
    case 6:
        numero = "Número 6 informado";
        break
    case 12:
        numero = "Número 12 informado";
        break
    case 18:
        numero = "Número 18 informado";
        break
    case 24:
        numero = "Número 24 informado";
        break
    case 30:
        numero = "Número 30 informado";
        break
    default: 
        console.log("O número é maior que 30 e menor que 6!");
}

  numero === 30 ? 
    console.log("UFA, ACERTEI!, o número informado é 30"):
    console.log("NÃO FOI DESSA VEZ, o número informado não é 30") 
}else{
    console.log("O número informado não é divisível por 2 e por 3")
}


console.log(numero);
//console.log(verificaNumero);
  // numero === 30 ? 
  // console.log("UFA, ACERTEI!"):
  // console.log("NÃO FOI DESSA VEZ")
//     console.log("O número informado é divisível por 2 e por 3")
// }else{
//     console.log("O número informado não é divisível por 2 e por 3")
//}
// if ternário
//const numero = Number(prompt("Digite um núnero qulquer"))


// switch case    
//let numero

// const verificaNumero = prompt("Informe um número: ")

// switch(verificaNumero){
//     case "6":
//         numero = "Número 6 informado";
//         break
//     case "12":
//         numero = "Número 12 informado";
//         break
//     case "18":
//         numero = "Número 18 informado";
//         break
//     case "24":
//         numero = "Número 24 informado";
//         break
//     case "30":
//         numero = "Número 30 informado";
//         break
//     default: 
//         console.log("O número é maior que 30 e menor que 6!");
// }
// console.log(numero);