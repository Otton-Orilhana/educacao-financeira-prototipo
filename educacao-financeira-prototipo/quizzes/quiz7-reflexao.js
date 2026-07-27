// Carrega reflexões salvas ao abrir a página
window.addEventListener("DOMContentLoaded", function () {
    const saved = JSON.parse(localStorage.getItem("reflexoes_trilha7"));

    if (saved) {
        for (let campo in saved) {
            const textarea = document.querySelector(`textarea[name="${campo}"]`);
            if (textarea) textarea.value = saved[campo];
        }
    }
});

// Salva reflexões ao enviar o formulário
document.getElementById("reflex-form").addEventListener("submit", function(event) {
    event.preventDefault(); // impede recarregar a página

    const respostas = {};

    // Pega todos os textareas
    const campos = document.querySelectorAll("textarea");

    campos.forEach(campo => {
        respostas[campo.name] = campo.value.trim();
    });

    // Salva no navegador
    localStorage.setItem("reflexoes_trilha7", JSON.stringify(respostas));

    // Exibe mensagem de confirmação
    const resultDiv = document.getElementById("result");
    resultDiv.innerHTML = `<h3>Reflexões salvas com sucesso!</h3>`;
    concluirQuiz(7);

    // Estilo visual simples
    resultDiv.style.marginTop = "20px";
    resultDiv.style.padding = "15px";
    resultDiv.style.background = "#e6ffe6";
    resultDiv.style.borderRadius = "8px";
});
