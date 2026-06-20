// scroll confetti
(function () {
    const canvas = document.getElementById('confetti-canvas');
    const ctx = canvas.getContext('2d');
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const colors = ['#f04f9c', '#20a7db', '#ffe45e', '#54c969', '#ff8a35', '#8d5cff'];
    const confetti = [];
    let width = 0;
    let height = 0;
    let animationFrame = null;
    let lastScrollY = window.scrollY;
    let scrollVelocity = 0;

    function resizeCanvas() {
        const ratio = Math.min(window.devicePixelRatio || 1, 2);
        width = window.innerWidth;
        height = window.innerHeight;
        canvas.width = Math.floor(width * ratio);
        canvas.height = Math.floor(height * ratio);
        canvas.style.width = width + 'px';
        canvas.style.height = height + 'px';
        ctx.setTransform(ratio, 0, 0, ratio, 0, 0);
    }

    function makePiece(fromScroll) {
        const size = 5 + Math.random() * 8;
        const direction = scrollVelocity >= 0 ? 1 : -1;

        return {
            x: Math.random() * width,
            y: fromScroll && direction < 0 ? height + 20 : -20,
            size: size,
            color: colors[Math.floor(Math.random() * colors.length)],
            rotation: Math.random() * Math.PI * 2,
            rotationSpeed: (Math.random() - 0.5) * 0.28,
            speedY: (1.4 + Math.random() * 3.2) * direction,
            speedX: (Math.random() - 0.5) * 2.5,
            wobble: Math.random() * Math.PI * 2,
            shape: Math.random() > 0.35 ? 'rect' : 'circle',
            opacity: 0.85 + Math.random() * 0.15
        };
    }

    function addConfetti(amount, fromScroll) {
        for (let i = 0; i < amount; i++) {
            confetti.push(makePiece(fromScroll));
        }

        if (confetti.length > 400) {
            confetti.splice(0, confetti.length - 400);
        }

        startAnimation();
    }

    function drawPiece(piece) {
        ctx.save();
        ctx.globalAlpha = piece.opacity;
        ctx.translate(piece.x, piece.y);
        ctx.rotate(piece.rotation);
        ctx.fillStyle = piece.color;

        if (piece.shape === 'circle') {
            ctx.beginPath();
            ctx.arc(0, 0, piece.size * 0.45, 0, Math.PI * 2);
            ctx.fill();
        } else {
            ctx.fillRect(-piece.size * 0.5, -piece.size * 0.35, piece.size, piece.size * 0.7);
        }

        ctx.restore();
    }

    function update() {
        ctx.clearRect(0, 0, width, height);

        for (let i = confetti.length - 1; i >= 0; i--) {
            const piece = confetti[i];
            piece.wobble += 0.06;
            piece.rotation += piece.rotationSpeed;
            piece.x += piece.speedX + Math.sin(piece.wobble) * 0.7 + scrollVelocity * 0.012;
            piece.y += piece.speedY + Math.abs(scrollVelocity) * 0.018;
            piece.opacity *= 0.996;

            drawPiece(piece);

            if (
                piece.opacity < 0.1 ||
                piece.y > height + 40 ||
                piece.y < -60 ||
                piece.x < -60 ||
                piece.x > width + 60
            ) {
                confetti.splice(i, 1);
            }
        }

        scrollVelocity *= 0.88;

        if (confetti.length) {
            animationFrame = requestAnimationFrame(update);
        } else {
            animationFrame = null;
            ctx.clearRect(0, 0, width, height);
        }
    }

    function startAnimation() {
        if (!animationFrame) {
            animationFrame = requestAnimationFrame(update);
        }
    }

    function burstFromDelta(delta) {
        if (prefersReducedMotion || !delta) {
            return;
        }

        scrollVelocity = Math.max(-80, Math.min(80, delta));
        addConfetti(Math.min(45, Math.max(12, Math.floor(Math.abs(delta) / 8))), true);
    }

    function handleScroll() {
        const currentScrollY = window.scrollY;
        const delta = currentScrollY - lastScrollY;
        lastScrollY = currentScrollY;
        burstFromDelta(delta);
    }

    function handleWheel(event) {
        burstFromDelta(event.deltaY);
    }

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('wheel', handleWheel, { passive: true });
})();