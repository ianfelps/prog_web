// classe pessoa
class Pessoa {
    // construtor
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }
    // metodo
    descricao() {
        return `${this.nome} - ${this.idade} anos`;
    }
}

// classe gerenciadora
class GerenciadorPessoas {
    // construtor
    constructor() {
        this.pessoas = [];
    }
    // metodo para adicionar pessoa
    adicionar(nome, idade) {
        const novaPessoa = new Pessoa(nome, idade);
        this.pessoas.push(novaPessoa);
        this.atualizarDOM();
    }
    // metodo para atualizar DOM
    atualizarDOM() {
        const lista = document.getElementById("listaPessoas");
        lista.innerHTML = "";

        this.pessoas.forEach((pessoa, index) => {
            const li = document.createElement("li");
            li.textContent = pessoa.descricao();

            const botaoRemover = document.createElement("button");
            botaoRemover.textContent = "Remover";
            botaoRemover.onclick = () => this.remover(index);

            li.appendChild(botaoRemover);
            lista.appendChild(li);
        });
    }
    // metodo para remover pessoa
    remover(index) {
        this.pessoas.splice(index, 1);
        this.atualizarDOM();
    }
}

// criar o gerenciador de pessoas
const gerenciador = new GerenciadorPessoas();

// funcao para adicionar pessoa
function adicionarPessoa() {
    const nome = document.getElementById("nome").value;
    const idade = document.getElementById("idade").value;

    gerenciador.adicionar(nome, idade);

    document.getElementById("nome").value = "";
    document.getElementById("idade").value = "";
}