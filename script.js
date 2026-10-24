document.addEventListener('DOMContentLoaded', () => {
  // boot sequence in the hero terminal
  const lines = [...document.querySelectorAll('#term .ln')];
  const calm = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const cursor = Object.assign(document.createElement('span'), { className: 'cursor' });
  const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

  (async () => {
    if (calm) { lines.forEach((l) => (l.hidden = false)); return; }
    const texts = lines.map((l) => l.innerHTML);
    lines.forEach((l) => { l.hidden = true; l.innerHTML = ''; });
    for (let i = 0; i < lines.length; i++) {
      const l = lines[i]; l.hidden = false; l.append(cursor);
      if (l.classList.contains('cmd')) {
        for (const ch of texts[i]) { cursor.before(ch); await sleep(28 + Math.random() * 40); }
        await sleep(260);
      } else { l.innerHTML = texts[i]; l.append(cursor); await sleep(150); }
    }
  })();

  // copy `git clone` commands
  document.querySelectorAll('.copy').forEach((btn) => {
    btn.addEventListener('click', async () => {
      try { await navigator.clipboard.writeText(btn.dataset.copy); btn.textContent = 'copied ✓'; }
      catch { btn.textContent = 'press ctrl+c'; }
      setTimeout(() => (btn.textContent = 'git clone'), 1600);
    });
  });
});
