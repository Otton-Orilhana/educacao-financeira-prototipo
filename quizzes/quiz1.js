document.getElementById("quiz-form").addEventListener("submit", function(event) {
    event.preventDefault(); // impede o recarregamento da página

    // Gabarito do Quiz 1
    const answers = {
        q1: "B",
        q2: "C",
        q3: "B",
        q4: "B",
        q5: "C",
        q6: "B",
        q7: "B",
        q8: "C",
        q9: "C",
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
    concluirQuiz(1);
    
    // Estilo simples para destacar o resultado
    resultDiv.style.marginTop = "20px";
    resultDiv.style.padding = "15px";
    resultDiv.style.background = "#eef";
    resultDiv.style.borderRadius = "8px";
});
