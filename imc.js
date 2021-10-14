const calcular = document.getElementById('calcular');

function imc(){
    const nome = document.getElementById('nome').value;
    const altura = document.getElementById('altura').value;
    const peso = document.getElementById('peso').value;
    const resultado = document.getElementById('resultado');

    if (nome !== '' && altura !== '' && peso !== ''){ //SE Valores de nome, altura e peso são diferentes de vazio
        
        const valorIMC = (peso/(altura*altura)).toFixed(2)  //toFixed fixa o valor em duas casas decimais

        let classificacao = ''
        
        if (valorIMC < 18.5){
            classificacao = 'abaixo do peso!';
        }else if (valorIMC < 25) {
            classificacao = 'com peso normal!';
        }else if (valorIMC < 30) {
            classificacao = 'sobrepeso!';
        }else if (valorIMC < 35) {
            classificacao = 'obesidade grau 1!';
        }else if (valorIMC < 40) {
            classificacao = 'obesidade grau 2!';
        }else {
            classificacao = 'obesidade grau 3 ou mórbida!';
        }


        resultado.textContent = `${nome}, seu IMC é ${valorIMC} e você está ${classificacao}`;
 
    }else {
        resultado.textContent = 'Preencha os campos vazios!';
    }
}

calcular.addEventListener('click',imc);
