// SISTEMA DE PROGRESSO DO ALUNO

// Carrega progresso salvo
function carregarProgresso() {
    const progresso = JSON.parse(localStorage.getItem("progresso_educacao_financeira"));
    return progresso || {
        trilhas: {
            1: false,
            2: false,
            3: false,
            4: false,
            5: false,
            6: false,
            7: false
        },
        quizzes: {
            1: false,
            2: false,
            3: false,
            4: false,
            5: false,
            6: false,
            7: false
        }
    };
}

// Salva progresso no navegador
function salvarProgresso(progresso) {
    localStorage.setItem("progresso_educacao_financeira", JSON.stringify(progresso));
}

// Marca quiz como concluído
function concluirQuiz(numero) {
    const progresso = carregarProgresso();
    progresso.quizzes[numero] = true;
    salvarProgresso(progresso);
    atualizarInterfaceProgresso();
}

// Marca trilha como concluída
function concluirTrilha(numero) {
    const progresso = carregarProgresso();
    progresso.trilhas[numero] = true;
    salvarProgresso(progresso);
    atualizarInterfaceProgresso();
}

// Atualiza elementos visuais na página
function atualizarInterfaceProgresso() {
    const progresso = carregarProgresso();

    // Atualiza marcadores de trilhas
    for (let i = 1; i <= 7; i++) {
        const trilha = document.getElementById(`trilha-${i}`);
        if (trilha && progresso.trilhas[i]) {
            trilha.classList.add("concluida");
        }
    }

    // Atualiza marcadores de quizzes
    for (let i = 1; i <= 7; i++) {
        const quiz = document.getElementById(`quiz-${i}`);
        if (quiz && progresso.quizzes[i]) {
            quiz.classList.add("concluido");
        }
    }

    // Atualiza barra de progresso geral
    const totalItens = 14; // 7 trilhas + 7 quizzes
    const concluidos =
        Object.values(progresso.trilhas).filter(v => v).length +
        Object.values(progresso.quizzes).filter(v => v).length;

    const porcentagem = Math.round((concluidos / totalItens) * 100);

    const barra = document.getElementById("barra-progresso");
    const texto = document.getElementById("texto-progresso");

    if (barra) barra.style.width = `${porcentagem}%`;
    if (texto) texto.textContent = `${porcentagem}% concluído`;
}

// Inicializa progresso ao carregar a página
window.addEventListener("DOMContentLoaded", atualizarInterfaceProgresso);
