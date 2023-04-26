const text = "Work Experience";
let index = 0;

function typeWriter() {
  if (index < text.length) {
    document.getElementById("typewriter-text").innerHTML += text.charAt(index);
    index++;
    setTimeout(typeWriter, 50);
  }
}

typeWriter();

const links = document.querySelectorAll('a');

links.forEach(link => {
  if (!link.classList.contains('no-alert')) {
    link.addEventListener('click', (event) => {
      if (!confirm('Are you sure you want to leave this site?')) {
        event.preventDefault();
      }
    });
  }
});

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}
