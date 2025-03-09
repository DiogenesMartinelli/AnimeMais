// script.js

// Função para reproduzir o vídeo
function playVideo() {
    const iframe = document.querySelector('iframe');
    const src = iframe.src;
    iframe.src = src + "?autoplay=1"; // Adiciona autoplay
}

// Função para pausar o vídeo
function pauseVideo() {
    const iframe = document.querySelector('iframe');
    const src = iframe.src;
    iframe.src = src.replace("?autoplay=1", ""); // Remove autoplay
}

// Seleciona todos os botões "Ver mais"
const buttons = document.querySelectorAll('.toggle-button');

// Adiciona um evento de clique a cada botão
buttons.forEach(button => {
    button.addEventListener('click', function() {
        const textContainer = this.previousElementSibling; // Seleciona o contêiner de texto
        const moreText = textContainer.querySelector('.more-text'); // Seleciona o texto adicional

        // Alterna a visibilidade do texto adicional
        if (moreText.style.display === "none" || moreText.style.display === "") {
            moreText.style.display = "block"; // Exibe o texto adicional
            this.textContent = "Ver menos"; // Altera o texto do botão
        } else {
            moreText.style.display = "none"; // Oculta o texto adicional
            this.textContent = "Ver mais"; // Restaura o texto do botão
        }
    });
});