document.getElementById("cadastroForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const email = document.getElementById("email").value.trim();
    const nome = document.getElementById("nome").value.trim();
    const senha = document.getElementById("senha").value.trim();

    const successMessage = document.getElementById("successMessage");
    const errorMessage = document.getElementById("errorMessage");

    // Validação
    if (email === "" || nome === "" || senha === "") {
        errorMessage.textContent = "Todos os campos são obrigatórios.";
        successMessage.textContent = "";
        return;
    }

    if (!email.includes("@") || !email.includes(".")) {
        errorMessage.textContent = "Email inválido.";
        successMessage.textContent = "";
        return;
    }

    // Criar objeto usuário
    const novoUsuario = {
        email: email,
        nome: nome,
        senha: senha
    };

    // Salvar no localStorage
    let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];
    usuarios.push(novoUsuario);
    localStorage.setItem("usuarios", JSON.stringify(usuarios));

    // Mensagem de sucesso
    successMessage.textContent = "Cadastro realizado com sucesso!";
    errorMessage.textContent = "";

    // Limpar formulário
    document.getElementById("cadastroForm").reset();

    // Redirecionar após 1 segundo
    setTimeout(() => {
        window.location.href = "login.html";
    }, 1000);
});
