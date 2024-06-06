//exercicio 01
let nome = document.getElementById("nome");
let resposta = document.getElementById("resposta");

function Apertar()
{
    resposta.innerHTML = "Olá, " + nome.value + " tudo bem?";
}

//exercicio 02
function converter() {
    var metros = document.getElementById("metros").value;
    var centimetros = metros * 100;
    document.getElementById("resultado").innerText = metros + " metros é igual a " + centimetros + " centímetros.";
}

//exercicio 03
let pegaNumero = document.getElementById("valor")
let n3mais = document.getElementById("sucessor")
let n3menos = document.getElementById("antecessor")
let resul = document.getElementById("resposta2")

function descobrir()
{
    n3mais.innerHTML = parseInt(pegaNumero.value) + 1;
    n3menos.innerHTML = parseInt(pegaNumero.value) - 1;
}

//exercicio 05
function encontrarEMostrarMaior()
{
    var numero1 = parseFloat(document.getElementById("numero1").value);
    var numero2 = parseFloat(document.getElementById("numero2").value);

    var maiorNumero = encontrarMaior(numero1, numero2);

    document.getElementById("respostaMaior").innerText = "O maior número é: " + maiorNumero;
}

function encontrarMaior(num1, num2) {
    if (num1 < num2) {
        return num2;
    } else {
        return num1;
    }
}

//Exercicio 07
for (let i = 1; i <= 100; i++)
{
    console.log(i);
}

//Exercicio 08
for (let b = 0; b <= 50; b += 5)
    {
        console.log(b)
    }


//exercicio 09
for (let a = 100; a >=0; a -= 10)
{
    console.log(a)
}
