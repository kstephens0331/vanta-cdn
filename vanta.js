(function () {
  const url = new URL(document.currentScript.src);
  const key = url.searchParams.get('key');
  const api = url.searchParams.get('api') || 'https://api.stephenscode.ai';

  if (!key) return console.warn('[VANTA] No key provided. Aborting.');

  const sessionId = Date.now() + '-' + Math.random().toString(36).slice(2);
  const data = {
    key,
    sessionId,
    url: location.href,
    referrer: document.referrer,
    userAgent: navigator.userAgent,
    width: window.innerWidth,
    height: window.innerHeight,
    events: []
  };

  function send() {
    navigator.sendBeacon(`${api}/v1/session`, JSON.stringify(data));
  }

  ['click', 'scroll', 'mousemove'].forEach(evt => {
    window.addEventListener(evt, (e) => {
      data.events.push({
        type: evt,
        x: e.clientX,
        y: e.clientY,
        time: Date.now()
      });
    }, { passive: true });
  });

  window.addEventListener('beforeunload', send);
  window.addEventListener('unload', send);
})();