// ==========================================================================
// PROJETO AGRINHO 2026 - LÓGICA DO QUIZ
// ==========================================================================

// 1. Selecionando os elementos que criamos no HTML
const btnQuiz = document.getElementById('btn-quiz');
const resultadoDiv = document.getElementById('resultado-quiz');

// 2. Adicionando o "ouvinte de eventos" para quando o botão for clicado
btnQuiz.addEventListener('click', () => {
    
    // Esconde o botão inicial para limpar o visual
    btnQuiz.style.display = 'none';
    
    // Mostra a caixa verde onde o quiz vai acontecer
    resultadoDiv.style.display = 'block';
    
    // 3. Inserindo as perguntas do quiz dentro da div
    resultadoDiv.innerHTML = `
        <h4 style="margin-bottom: 15px; color: var(--green-saf);">Responda rápido:</h4>
        
        <div style="margin-bottom: 15px;">
            <p><strong>1. Na Agrofloresta, o que significa "Sucessão Ecológica"?</strong></p>
            <label><input type="radio" name="q1" value="errado"> a) Plantar a mesma cultura agrícola todos os anos no mesmo local.</label><br>
            <label><input type="radio" name="q1" value="certo"> b) A evolução natural do sistema, de plantas de ciclo rápido até grandes árvores.</label><br>
        </div>
        
        <div style="margin-bottom: 20px;">
            <p><strong>2. Qual é o principal benefício da Agrofloresta para o solo do Paraná?</strong></p>
            <label><input type="radio" name="q2" value="certo"> a) A constante queda de folhas e podas cria adubo orgânico, recuperando a terra.</label><br>
            <label><input type="radio" name="q2" value="errado"> b) Ela exige o uso intensivo de agrotóxicos para manter as árvores vivas.</label><br>
        </div>
        
        <button id="btn-enviar">Ver Meu Resultado</button>
    `;

    // 4. Adiciona a função de correção no novo botão "Ver Meu Resultado"
    document.getElementById('btn-enviar').addEventListener('click', verificarRespostas);
});

// 5. Função que corrige as questões e mostra a pontuação
function verificarRespostas() {
    // Captura qual bolinha (radio) o usuário marcou em cada pergunta
    const respostaQ1 = document.querySelector('input[name="q1"]:checked');
    const respostaQ2 = document.querySelector('input[name="q2"]:checked');
    
    // Variável para guardar os pontos
    let pontuacao = 0;

    // Verificação de segurança: se o usuário deixou alguma em branco
    if (!respostaQ1 || !respostaQ2) {
        alert("Ei! Responda todas as perguntas antes de enviar.");
        return; // Para a execução da função aqui
    }

    // Soma os pontos das respostas certas
    if (respostaQ1.value === "certo") pontuacao++;
    if (respostaQ2.value === "certo") pontuacao++;

    // 6. Define a mensagem final baseada nos acertos
    let mensagemFinal = "";
    
    if (pontuacao === 2) {
        mensagemFinal = "🎉 <strong>Perfeito!</strong> Você é um verdadeiro especialista em Agroflorestas e está pronto para ajudar o Paraná a plantar água e comida!";
    } else if (pontuacao === 1) {
        mensagemFinal = "🌱 <strong>Muito bem!</strong> Você acertou metade. A natureza é complexa, continue lendo os textos para entender tudo sobre os estratos e a sucessão.";
    } else {
        mensagemFinal = "🍂 <strong>Ops!</strong> Parece que faltou um pouco de atenção. Não desanime, suba a página, releia os princípios e tente outra vez!";
    }

    // 7. Substitui as perguntas pelo resultado final e um botão de reiniciar
    resultadoDiv.innerHTML = `
        <h4 style="color: var(--orange-saf); margin-bottom: 10px;">Fim de Jogo!</h4>
        <p>${mensagemFinal}</p>
        <br>
        <button onclick="location.reload()" style="font-size: 0.9rem; padding: 10px 20px; background-color: var(--orange-saf);">Refazer Quiz</button>
    `;
}