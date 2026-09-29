/* Jubilee Indane Home — offline support.
   Pages: network first, falling back to the saved copy when offline.
   Files (CSS, JS, fonts, images): served from the cache, refreshed in the background.
   Bump VERSION whenever you bump the ?v= numbers in the HTML. */
const VERSION = "jubilee-v10";
const CORE = [
  "/",
  "/index.html",
  "/privacy.html",
  "/terms.html",
  "/404.html",
  "/manifest.webmanifest",
  "/css/style.css?v=10",
  "/js/main.js?v=10",
  "/js/i18n-ml.js?v=10",
  "/assets/fonts/Archivo-latin.woff2",
  "/assets/fonts/Chilanka-malayalam-400.woff2",
  "/assets/fonts/Chilanka-latin-400.woff2",
  "/assets/fonts/JetBrainsMono-latin.woff2",
  "/assets/logo/indianoil.webp",
  "/assets/logo/jubilee-wordmark.webp",
  "/assets/logo/jubilee-wordmark-white.webp",
  "/assets/logo/favicon.png",
];

self.addEventListener("install", (event) => {
  event.waitUntil(caches.open(VERSION).then((cache) => cache.addAll(CORE)).then(() => self.skipWaiting()));
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(keys.filter((k) => k !== VERSION).map((k) => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", (event) => {
  const req = event.request;
  if (req.method !== "GET") return;
  const url = new URL(req.url);
  if (url.origin !== location.origin || url.pathname.startsWith("/_vercel/")) return;

  if (req.mode === "navigate") {
    event.respondWith(
      fetch(req)
        .then((res) => {
          if (res.ok) { const copy = res.clone(); caches.open(VERSION).then((c) => c.put(req, copy)); }
          return res;
        })
        .catch(() => caches.match(req).then((hit) => hit || caches.match("/")))
    );
    return;
  }

  event.respondWith(
    caches.match(req).then((hit) => {
      const net = fetch(req)
        .then((res) => {
          if (res.ok) { const copy = res.clone(); caches.open(VERSION).then((c) => c.put(req, copy)); }
          return res;
        })
        .catch(() => hit);
      return hit || net;
    })
  );
});
