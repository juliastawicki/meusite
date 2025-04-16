let fontSize = 16;

function toggleAccessibility() {
  fontSize = fontSize === 16 ? 20 : 16;
  document.body.style.fontSize = `${fontSize}px`;
}
