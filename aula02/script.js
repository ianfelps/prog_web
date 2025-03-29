// Contador de Cliques

var increment = document.getElementById("increment");
var decrement = document.getElementById("decrement");
var counter = document.getElementById("counter");

let count = 0;

increment.addEventListener("click", function () {
    count++;
    counter.textContent = count;
});

decrement.addEventListener("click", function () {
    if (count > 0) {
        count--;
        counter.textContent = count;
    } else {
        alert("O número não pode ser negativo!");
    }
});

// Texto Dinâmico

var input = document.getElementById("input");
var characters = document.getElementById("characters");

input.addEventListener("input", function () {
    var textWithoutSpaces = input.value.split(" ").join("");
    characters.textContent = textWithoutSpaces.length + " caracteres";
});

input.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        event.preventDefault();
        var newParagraph = document.createElement("p");
        newParagraph.textContent = input.value;
        input.parentNode.insertBefore(newParagraph, characters.nextSibling);
        input.value = "";
    }
});

// Adicionar Itens

var selector = document.getElementById("selector");
var add = document.getElementById("add");

add.addEventListener("click", function () {
    var listType = selector.value;
    var list;

    if (listType === "ol") {
        list = document.createElement("ol");
    } else if (listType === "ul") {
        list = document.createElement("ul");
    } else {
        alert("Selecione um tipo de lista válido!");
        return;
    }

    for (var i = 1; i <= 3; i++) {
        var listItem = document.createElement("li");
        listItem.textContent = "Item " + i;
        list.appendChild(listItem);
    }

    add.parentNode.insertBefore(list, add.nextSibling);
});

// Resetar Alterações

var reset = document.getElementById("reset");

reset.addEventListener("click", function () {
    location.reload();
});