let fontSize = 16;

function toggleAccessibility() {
  const options = document.getElementById('accessibilityOptions');
  options.style.display = options.style.display === 'flex' ? 'none' : 'flex';
}

function changeFontSize(change) {
  fontSize += change;
  if (fontSize < 12) fontSize = 12;
  if (fontSize > 30) fontSize = 30;
  document.body.style.fontSize = fontSize + 'px';
}
