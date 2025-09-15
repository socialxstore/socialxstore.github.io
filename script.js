// Simple example: animate FAQ questions on click to show answers
document.querySelectorAll('.faq-item h3').forEach(header => {
  header.addEventListener('click', () => {
    const answer = header.nextElementSibling;
    answer.style.display = answer.style.display === 'block' ? 'none' : 'block';
  });
});
