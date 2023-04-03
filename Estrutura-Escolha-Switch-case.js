    
    function acaoBotao(){
        var valor1, valor2, operacao, resultado

        valor1 = prompt("Digite o primeiro valor: ")
        operacao = prompt("Digite a operação: ")
        valor2 = prompt("Digite o segundo valor: ")
        switch (operacao) {
            case "+":
                resultado = parseInt(valor1) + parseInt(valor2)   
                break;
            case "-":
                resultado = parseInt(valor1) - parseInt(valor2)   
                break;
            case "*":
                resultado = parseInt(valor1) * parseInt(valor2)   
                break;
            case "/":
                resultado = parseInt(valor1) / parseInt(valor2)   
                break;    
        }
        document.getElementById("Paragrafo").innerText = resultado
    }