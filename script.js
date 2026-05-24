document.addEventListener('DOMContentLoaded', () => {
  // 1. Hover Spotlight Hover tracking for Bento Cards
  const cards = document.querySelectorAll('.bento-card');
  
  cards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      card.style.setProperty('--x', `${x}px`);
      card.style.setProperty('--y', `${y}px`);
    });
  });

  // 2. Email Copy Handler
  const emailButton = document.getElementById('copy-email-btn');
  const btnText = document.getElementById('btn-text');
  const professionalEmail = 'alex.rivera.dev@gmail.com'; // Change to actual developer email

  if (emailButton) {
    emailButton.addEventListener('click', () => {
      navigator.clipboard.writeText(professionalEmail)
        .then(() => {
          emailButton.classList.add('success');
          btnText.textContent = 'Email Copied!';
          
          setTimeout(() => {
            emailButton.classList.remove('success');
            btnText.textContent = 'Copy Email Address';
          }, 2000);
        })
        .catch(err => {
          console.error('Failed to copy text: ', err);
        });
    });
  }
});
