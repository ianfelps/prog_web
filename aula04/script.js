// função para adicionar item na tabela
function addItem() {
    // coletar item do input
    const item = getItem();

    if (item !== "") { // evita adicionar itens vazios
        // criar linha da tabela
        const row = document.createElement("tr");
        // criar coluna da tabela
        const col = document.createElement("td");
        // adicionar item na coluna
        col.textContent = item;
        // adicionar coluna na linha
        row.appendChild(col);
        // adicionar linha na tabela
        document.querySelector("table").appendChild(row);
        // adicionar item no select
        selectItem(item);
    }
}

// função para coletar item do input
function getItem() {
    // coletar item do input
    const item = document.getElementById("textItem").value.trim();
    // limpar input
    document.getElementById("textItem").value = "";
    // retorna o item coletado
    return item;
}

// função para adicionar itens no select
function selectItem(item) {
    // coletar select
    const select = document.getElementById("selectItems");
    // criar option
    const option = document.createElement("option");
    // adicionar item na option
    option.textContent = item;
    // adicionar option no select
    select.appendChild(option);
}

// função para marcar item na tabela
function markItem() {
    // coletar item do select
    const item = document.getElementById("selectItems").value;
    // coletar todas as celulas da tabela
    const cells = document.querySelectorAll("table tr td");
    // percorrer as celulas para encontrar a correspondente
    for (let cell of cells) {
        if (cell.textContent.trim() === item) {
            // alterar cor da celula
            cell.style.backgroundColor = "gray";
        }
    }
}

// função para desmarcar item na tabela
function unmarkItem() {
    // coletar item do select
    const item = document.getElementById("selectItems").value;
    // coletar todas as celulas da tabela
    const cells = document.querySelectorAll("table tr td");
    // percorrer as celulas para encontrar a correspondente
    for (let cell of cells) {
        if (cell.textContent.trim() === item) {
            // tira a cor da celula
            cell.style.backgroundColor = "";
        }
    }
}

// função para remover item da tabela
function removeItem() {
    // coletar item do select
    const item = document.getElementById("selectItems").value;
    // coletar todas as celulas da tabela
    const cells = document.querySelectorAll("table tr td");
    // percorrer as celulas para encontrar a correspondente
    for (let cell of cells) {
        if (cell.textContent.trim() === item) {
            // remover celula
            cell.remove();
            // coletar select
            const select = document.getElementById("selectItems");
            // coletar todas as options
            const options = select.querySelectorAll("option");
            // percorrer as options
            for (let option of options) {
                if (option.textContent.trim() === item) {
                    // remover option
                    option.remove();
                }
            }
        }
    }
}

// adicionar a função aos botões
document.getElementById("addItem").addEventListener("click", addItem);
document.getElementById("markItem").addEventListener("click", markItem);
document.getElementById("unmarkItem").addEventListener("click", unmarkItem);
document.getElementById("removeItem").addEventListener("click", removeItem);