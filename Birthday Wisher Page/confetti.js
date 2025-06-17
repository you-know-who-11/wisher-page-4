// Simple confetti effect
function startConfetti() {
  const container = document.querySelector('.confetti-container');
  container.innerHTML = '';
  
  for (let i = 0; i < 100; i++) {
    const confetti = document.createElement('div');
    confetti.className = 'confetti';
    
    // Random properties
    const size = Math.random() * 10 + 5;
    const color = `hsl(${Math.random() * 360}, 100%, 50%)`;
    const posX = Math.random() * window.innerWidth;
    const animationDuration = Math.random() * 3 + 2;
    const delay = Math.random() * 5;
    
    confetti.style.width = `${size}px`;
    confetti.style.height = `${size}px`;
    confetti.style.backgroundColor = color;
    confetti.style.left = `${posX}px`;
    confetti.style.animationDuration = `${animationDuration}s`;
    confetti.style.animationDelay = `${delay}s`;
    
    container.appendChild(confetti);
  }
}

function stopConfetti() {
  const container = document.querySelector('.confetti-container');
  container.innerHTML = '';
}

// Add confetti styles
const style = document.createElement('style');
style.textContent = `
  .confetti {
    position: absolute;
    top: -10px;
    border-radius: 50%;
    animation: confetti-fall linear forwards;
    z-index: 100;
  }
  
  @keyframes confetti-fall {
    0% {
      transform: translateY(0) rotate(0deg);
      opacity: 1;
    }
    100% {
      transform: translateY(100vh) rotate(720deg);
      opacity: 0;
    }
  }
`;
document.head.appendChild(style);