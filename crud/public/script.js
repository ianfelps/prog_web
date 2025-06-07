const form = document.getElementById('form-user');

const userList = document.getElementById('user-list');

// carregar os usuarios do banco de dados
function getUsers() {
    fetch('/api/users')
        .then(res => res.json()) //converte os dados via json
        .then(data => {
            userList.innerHTML = '';
            data.forEach(user => {
                const li = document.createElement('li'); //criar uma lista
                li.innerHTML = `<b>Nome:</b> ${user.nome} <br> <b>Email:</b> ${user.email} <br><br> <button onclick="updateUser(${user.id})">Editar</button> <button onclick="deleteUser(${user.id})">Deletar</button>`;
                userList.appendChild(li);
            });
        });
};

getUsers();

// cadastrar um usuario
function addUser(nome, email) {
    fetch('api/users', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({nome, email})
    })
    .then(() => {
        form.reset;
        getUsers();
    })
};

// capturar os dados do formulario
form.addEventListener('submit', e=>{
    e.preventDefault(); // evitar a pagina recarregar
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    // chamar a funcao para cadastrar um novo usuario
    addUser(nome, email);
});

// editar um usuario
function updateUser(id) {
    const nome = prompt('Novo nome: ');
    const email = prompt('Novo e-mail: ');
    fetch(`api/users/${id}`, {
        method: 'PUT',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({nome, email})
    })
    .then(() => {
        getUsers();
    });
}

// deletar um usuario
function deleteUser(id) {
    fetch(`api/users/${id}`, {
        method: 'DELETE'
    })
    .then(() =>{
        getUsers();
    });
}