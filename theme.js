(function () {
  const html = document.documentElement;
  const btn  = document.getElementById('themeToggle');

  // Load saved preference, or fall back to OS preference
  const saved = localStorage.getItem('theme');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const theme = saved || (prefersDark ? 'dark' : 'light');

  html.setAttribute('data-theme', theme);
  if (btn) btn.setAttribute('aria-pressed', String(theme === 'dark'));

  if (btn) {
    btn.addEventListener('click', () => {
      const isDark = html.getAttribute('data-theme') === 'dark';
      const next   = isDark ? 'light' : 'dark';
      html.setAttribute('data-theme', next);
      btn.setAttribute('aria-pressed', String(!isDark));
      localStorage.setItem('theme', next);
    });
  }
})();
