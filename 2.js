// Função para simular o clique e seleção das sessões de Meditação
function playSession(sessionNumber) {
    // Remove a classe 'active' de todos os cards
    const cards = document.querySelectorAll('.session-card');
    cards.forEach(card => card.classList.remove('active'));

    // Adiciona a classe 'active' ao card que foi clicado
    const selectedCard = document.querySelectorAll('.session-card')[sessionNumber - 1];
    if (selectedCard) {
        selectedCard.classList.add('active');
    }

    // Atualiza os dots indicadores lá embaixo para acompanhar o clique
    const dots = document.querySelectorAll('.dot');
    dots.forEach(dot => dot.classList.remove('active'));
    if (dots[sessionNumber - 1]) {
        dots[sessionNumber - 1].classList.add('active');
    }

    // Feedback no console para fins de teste
    console.log(`Iniciando a sessão de Meditação: ${sessionNumber}`);
}

// Interação simples no botão de menu hambúrguer
const menuBtn = document.getElementById('menuBtn');
menuBtn.addEventListener('click', () => {
    alert('Menu lateral ou configurações aberto!');
});
