document.addEventListener("DOMContentLoaded", function () {
    const adsPanel = document.getElementById("ads");
    const adsBtn = document.getElementById("ads-btn");

    if (!adsPanel || !adsBtn) return;

    // Tornar o painel posicionado para poder mover
    adsPanel.parentElement.style.position = 'relative';
    adsPanel.style.position = 'absolute';
    adsPanel.style.bottom = '-160px';
    adsPanel.style.transition = 'all 0.2s ease-out';

    let escapeCount = 0;

    adsBtn.addEventListener('mouseenter', function () {
        escapeCount++;

        // Gerar posição aleatória para fugir
        const randomX = (Math.random() - 0.5) * 300;
        const randomY = (Math.random() - 0.5) * 200;

        adsPanel.style.transform = `translate(${randomX}px, ${randomY}px)`;

        // A cada 3 tentativas de fuga, o botão funciona
        if (escapeCount >= 3) {
            adsBtn.onclick = function () {
                adsPanel.style.display = 'none';
                escapeCount = 0;
            };
        }
    });

    // Resetar a posição quando o mouse sair do botão
    adsBtn.addEventListener('mouseleave', function () {
        if (escapeCount < 3) {
            adsPanel.style.transform = 'translate(0, 0)';
        }
    });
});
