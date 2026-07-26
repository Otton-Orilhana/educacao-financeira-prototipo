document.getElementById("quiz-form").addEventListener("submit", function(event) {
    event.preventDefault(); // impede recarregar a página

    // Gabarito do Quiz 2
    const answers = {
        q1: "B",
        q2: "C",
        q3: "C",
        q4: "B",
        q5: "C",
        q6: "B",
        q7: "C",
        q8: "C",
        q9: "C",
        q10: "C"
    };

    let score = 0;

    // Verifica cada resposta
    for (let question in answers) {
        const selected = document.querySelector(`input[name="${question}"]:checked`);
        if (selected && selected.value === answers[question]) {
            score++;
        }
    }

    // Exibe o resultado
    const resultDiv = document.getElementById("result");
    resultDiv.innerHTML = `<h3>Você acertou ${score} de 10 questões.</h3>`;
    concluirQuiz(2);

    // Estilo visual simples
    resultDiv.style.marginTop = "20px";
    resultDiv.style.padding = "15px";
    resultDiv.style.background = "#eef";
    resultDiv.style.borderRadius = "8px";
});
