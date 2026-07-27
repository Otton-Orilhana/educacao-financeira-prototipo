document.getElementById("quiz-form").addEventListener("submit", function(event) {
    event.preventDefault(); // impede recarregar a página

    // Gabarito do Quiz 5
    const answers = {
        q1: "B",
        q2: "B",
        q3: "B",
        q4: "C",
        q5: "B",
        q6: "B",
        q7: "B",
        q8: "A",
        q9: "B",
        q10: "B"
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
    concluirQuiz(5);

    // Estilo visual simples
    resultDiv.style.marginTop = "20px";
    resultDiv.style.padding = "15px";
    resultDiv.style.background = "#eef";
    resultDiv.style.borderRadius = "8px";
});
