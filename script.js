function insert(number) {
    const num = document.getElementById('result').innerHTML;
    document.getElementById('result').innerHTML = num + number; //Concatenando o numero selecionado ao paragrafo do html
}

function clean() {
    document.getElementById('result').innerHTML = ""; //Limpando o paragrafo do html.
}

function back() {
    const resultado = document.getElementById('result').innerHTML;
    document.getElementById('result').innerHTML = resultado.substring(0, resultado.length -1); 
    //Apagando os valores inseridos no paragrafo através da quantidade de elementos presente nele.
}

function calcular() {
    const resultado = document.getElementById('result').innerHTML;

    if(resultado){
        document.getElementById('result').innerHTML = eval(resultado) //Se tiver valores dentro do id result, calcule.
    } else {
        document.getElementById('result').innerHTML = "Nenhum resultado." 
        //Se calcular e não tiver nada dentro de resultado, mostre "Nenhum resultado".
    }
}