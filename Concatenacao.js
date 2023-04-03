/*
  nome: caracter
  numero: real
  
Inicio
// Seção de Comandos, procedimento, funções, operadores, etc... 
   escreval ("digite o nome")
   leia (nome)
   escreval ("digite o numero")
   leia (numero)
   
   
   escreval (nome, " : ", numero)
*/

var nome, numero

nome = prompt("Digite o nome")
numero = prompt("Digite o numero")

document.getElementById("Paragrafo").innerText = nome + " : "+ numero