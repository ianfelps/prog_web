// constantes
const precoGasolina = 5.79;
const precoEtanol = 4.29;
const precoDiesel = 6.79;

// exibir preço na tela
document.getElementById("precoGasolina").textContent = "R$ " + precoGasolina;
document.getElementById("precoEtanol").textContent = "R$ " + precoEtanol
document.getElementById("precoDiesel").textContent = "R$ " + precoDiesel

// função principal
function atualizarValor(){
    const tipo = document.getElementById("combustivel").value;
    const litros = parseFloat(document.getElementById("litros").value);
    let precoPorLitro;

    switch(tipo){
        case "gasolina":
            precoPorLitro = precoGasolina;
            break;
        case "etanol":
            precoPorLitro = precoEtanol;
            break;
        case "diesel":
            precoPorLitro = precoDiesel;
            break;
        default:
            document.getElementById("resultado").textContent = "Tipo Inválido!";
            return;
    }

    calcularValor(precoPorLitro, litros);
}

// função para calcular o valor
function calcularValor(preco, litro){
    const valorTotal = (preco * litro);

    if (valorTotal < 0) {
        document.getElementById("resultado").textContent = "Valor Inválido!";
        return;
    } else if (isNaN(valorTotal)) {
        document.getElementById("resultado").textContent = "...";
    } else {
        document.getElementById("resultado").textContent = "R$ " + valorTotal.toFixed(2).replace(".", ",");
    }
}

document.getElementById("combustivel").addEventListener("change", atualizarValor);
document.getElementById("litros").addEventListener("input", atualizarValor);
document.getElementById("litros").addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        event.preventDefault();
        event.atualizarValor();
    }
});