var numeroSecreto = parseInt(Math.random() * 11);
var tentativas = 0; 

function Chutar() {
    var elementoResultado = document.getElementById("resultado");
    var chute = parseInt(document.getElementById("valor").value);

    while (tentativas < 3) {  
        if (chute == numeroSecreto) {
            elementoResultado.innerHTML = " Você acertou!!!";            
            console.log("acertou")
            return;
        }else if (chute > 10 || chute < 0) {
            elementoResultado.innerHTML ="Você deve digitar um número de 0 a 10";            
            console.log("digite um número de 0 a 10")
            return;            
            }else {            
                elementoResultado.innerHTML = "Errou!";           
                console.log("errou")
                tentativas++;            
                console.log(tentativas);
            
                let dica = document.getElementById("dica");

                if (chute > numeroSecreto) {
                    dica.innerHTML = "Número secreto é menor"
                }
                if (chute < numeroSecreto) {
                    dica.innerHTML = "Número secreto é maior"
                }        
            
                if (tentativas === 3) {
                    elementoResultado.innerHTML = "Suas tentativas acabaram. Número secreto era "  + numeroSecreto;    
                } 
            }                
        return;                     
    }          
}

