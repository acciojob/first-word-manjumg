function firstWord(str) {
  const trimmed = str.trim();
  const spaceIndex = trimmed.indexOf(' ');
  return spaceIndex === -1 ? trimmed : trimmed.slice(0, spaceIndex);
}

document.getElementById('extractBtn').addEventListener('click', () => {
  const input = document.getElementById('textInput').value;
  const first = firstWord(input);
  document.getElementById('result').textContent = first;
});
