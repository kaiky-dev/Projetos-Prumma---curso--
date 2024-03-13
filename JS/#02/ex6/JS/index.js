// Validação se a string esta vazia
function validateInput(input) {
    return (typeof input === "string" && input.trim() !== "");
};


// Função de verificação se usuário e senha existem
function login(username, password) {
    // Percorre o array de usuários
    for (let i = 0; i < users.length; i++) {
        // Verifica se o nome de usuário fornecido corresponde a um usuário existente
        if (users[i].username === username) {
            // Se o nome de usuário corresponder, verifica se a senha também corresponde
            if (users[i].password === password) {
                return true
            } else {
                return false
            }
        }
    }
    return false;
};


// Usuários e senhas
let users = [];


// Solicitação do nome de usuarío
let username = prompt("Digite seu nome de usuário:");


// Se o nome de usuário foi fornecido ou não
if (!validateInput(username)) {
    alert("Nome de usuário deve ser fornecido.");
} else {
    let password = prompt("Digite sua senha:");

    // Validação se a senha foi fornecida
    if (!validateInput(password)) {
        alert("Senha deve ser fornecida.");
    } else {
        // Adiciona o novo usuário ao array de usuários
        users.push({ username: username, password: password });

        alert("Usuário criado com sucesso!");


        // Limpando os campos de entrada
        username = "";
        password = "";


        // Verificação de login
        username = prompt("Digite seu nome de usuário:");
        password = prompt("Digite sua senha:");

        if (login(username, password)) {
            alert("Login bem-sucedido!")
        } else {
            alert("Nome de usuário ou senha incorretos.")
        };
    };
};