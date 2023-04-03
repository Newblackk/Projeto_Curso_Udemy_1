/* 
    nome: caractere
    idade, limite, contador: inteiro

Inicio
// Seção de Comandos, procedimento, funções, operadores, etc...
    escreva ("Digite a quantidade de vezes que será verificado a idade")
    leia (limite)
    contador := 0
    enquanto contador < limite faca
        escreva ("Digite o nome da pessoa")
        leia (nome)
        escreva ("Digite a idade do ", nome, ": ")
        leia (idade)
        se idade > 18 entao
            escreval (nome, "Você é maior de Idade")
        senao
            escreval (nome, "Você é menor de Idade")
        fimse
        
        contador := contador + 1
    fimenquanto
*/

function acaoBotao() {
    var nome, limite, contador, idade
    limite = promt("Digite a quantidade de vezes que será verificado a idade")
    contador = 0
    while(contador < limite){
        nome = prompt("Digite o nome da pessoa")
        idade = prompt("Digite a idade do " + nome)
            if (idade > 18)
                document.getElementById("Paragrafo").innerText = nome + " Você é maior de Idade"
            else
                document.getElementById("Paragrafo").innerText = nome + " Você é menor de Idade"
            contador++
    }
}
