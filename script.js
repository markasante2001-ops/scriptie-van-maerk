document.getElementById('yesBtn').addEventListener('click', function() {
    const buttons = document.querySelector('.button-container');
    const successMessage = document.getElementById('successMessage');
    
    buttons.style.display = 'none';
    successMessage.classList.remove('hidden');
    
    createConfetti();
});

document.getElementById('noBtn').addEventListener('mouseover', function() {
    const randomX = Math.random() * (window.innerWidth - 150);
    const randomY = Math.random() * (window.innerHeight - 60);
    
    this.style.position = 'fixed';
    this.style.left = randomX + 'px';
    this.style.top = randomY + 'px';
});

document.getElementById('noBtn').addEventListener('click', function(e) {
    e.preventDefault();
});

function createConfetti() {
    const confettiPieces = 50;
    
    for (let i = 0; i < confettiPieces; i++) {
        const confetti = document.createElement('div');
        confetti.className = 'confetti';
        confetti.style.left = Math.random() * window.innerWidth + 'px';
        confetti.style.top = -10 + 'px';
        confetti.style.backgroundColor = ['#ff1493', '#ff69b4', '#ffc0cb', '#ffb6d9'][Math.floor(Math.random() * 4)];
        confetti.style.animation = `fall ${2 + Math.random() * 2}s linear forwards`;
        
        document.body.appendChild(confetti);
        
        setTimeout(() => confetti.remove(), 4000);
    }
}

const style = document.createElement('style');
style.textContent = `
    @keyframes fall {
        to {
            transform: translateY(${window.innerHeight}px) rotateZ(360deg);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);