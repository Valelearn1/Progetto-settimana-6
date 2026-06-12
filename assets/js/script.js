const toggleBtn = document.getElementById('toggle-tema');

if (localStorage.getItem('tema') === 'dark') {
  document.body.classList.add('dark');
  toggleBtn.textContent = 'Tema chiaro';
}

toggleBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark');
  const isDark = document.body.classList.contains('dark');
  toggleBtn.textContent = isDark ? 'Tema chiaro' : 'Tema scuro';
  localStorage.setItem('tema', isDark ? 'dark' : 'light');
});
