function initTheme() {
    const html = document.documentElement;
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    html.setAttribute('data-theme', prefersDark ? 'dark' : 'light');
}

initTheme();

window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', initTheme);
