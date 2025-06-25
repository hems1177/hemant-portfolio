// Smooth Scroll
document.querySelectorAll('nav a').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    target.scrollIntoView({ behavior: 'smooth' });
  });
});

// Typing Animation
const typingText = ["Web Developer", "Biotech Enthusiast", "Tech Learner"];
let count = 0, index = 0, currentText = "", letter = "";
(function type() {
  if (count === typingText.length) count = 0;
  currentText = typingText[count];
  letter = currentText.slice(0, ++index);

  document.getElementById("typing").textContent = letter;

  if (letter.length === currentText.length) {
    count++;
    index = 0;
    setTimeout(type, 1000); // pause between words
  } else {
    setTimeout(type, 150);
  }
})();

// Dark Mode Toggle
const toggle = document.getElementById('darkToggle');
toggle.addEventListener('click', () => {
  document.body.classList.toggle('dark');
});

// Mobile Menu Toggle
const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener('click', () => {
  navLinks.classList.toggle('show');
});
