/*
   passou :=falso
   escreval("digite o nome do aluno: ")
   leia (nome)
   escreval("Digite a nota1 do aluno: ")
   leia (nota1)
   escreval("Digite a nota2 do aluno: ")
   leia (nota2)
   media := (nota1 + nota2) / 2

   se media >= 50 entao
   passou := verdadeiro
   fimse


// 0 ( || ) significa desjunção, logo para ser aprovado ou reprovado somente uma das condições precisam ser atendidas
   se ( passou ) && ( media >= 50 || media <= 70 ) entao
   escreval("Aprovado!", nome)
   senao
   escreval("Rerovado!", nome)
   fimse

*/

var nome, nota1, nota2, passou

passou = false

nome = prompt ("Digite o nome do aluno: ")
nota1 = prompt ("Digita a nota do aluno: ")
nota2 = prompt ("Digita a nota do aluno: ")

media = (parseInt(nota1) + parseInt(nota2)) / 2;

if (media >= 50)
    passou = true;    

if (passou)
    alert ("Aprovado" + nome)
else
    alert ("Reprovado" + nome)