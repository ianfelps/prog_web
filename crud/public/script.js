const form = document.getElementById('form-user');

const userList = document.getElementById('user-list');

// carregar os usuarios do banco de dados
function getUsers() {
    fetch('/api/users')
    .then(res => res.json)
    .then(data => {
        userList.innerHTML = '';
        data.forEach(user =>{
            const list = document.createElement('li'); // criar uma lista
            list.innerHTML = `${user.nome} ${user.email}`;
            userList.appendChild('li');
        })
    })
};

getUsers();