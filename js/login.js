document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const usuario = document.getElementById("usuario").value.trim();
    const senha = document.getElementById("senha").value.trim();

    const successMessage = document.getElementById("successMessage");
    const errorMessage = document.getElementById("errorMessage");

    // Pega usuários do localStorage
    const usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

    // Verifica se usuário existe
    const usuarioEncontrado = usuarios.find(u => u.nome === usuario && u.senha === senha);

    if (usuarioEncontrado) {
        successMessage.textContent = "Login realizado com sucesso!";
        errorMessage.textContent = "";

        // Armazena usuário logado
        localStorage.setItem("usuarioLogado", usuario);

        // Redireciona para o dashboard
        setTimeout(() => {
            window.location.href = "dashboard.html";
        }, 1000);
    } else {
        errorMessage.textContent = "Usuário ou senha incorretos.";
        successMessage.textContent = "";
    }
});
