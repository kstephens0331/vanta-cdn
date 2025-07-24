(function () {
  const tag = document.currentScript;
  const key = tag.getAttribute('data-vanta-key');
  const api = tag.getAttribute('data-api') || 'https://api.stephenscode.ai';

  if (!key) return console.warn('[VANTA] Missing API key');

  const script = document.createElement('script');
  script.src = `${api}/vanta/vanta.js?key=${key}&api=${encodeURIComponent(api)}`;
  script.defer = true;
  document.head.appendChild(script);
})();