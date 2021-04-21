const staticPWA = "cmsc207-pwa";
const assets = [
  "/",
  "/index.html",
  "/styles.css",
  "/js/main.js",
  "/images/about-sinigang.jpg",
  "/images/adobong-baboy.png",
  "/images/adobong-manok.png",
  "/images/bicol-express.png",
  "/images/bistek-tagalog.png",
  "/images/dinuguan.png",
  "/images/pancit-bihon.png",
  "/images/sinigang-na-baboy.png"
];

self.addEventListener("install", installEvent => {
  installEvent.waitUntil(
    caches.open(staticPWA).then(cache => {
      cache.addAll(assets);
    })
  );
});

self.addEventListener("fetch", fetchEvent => {
  fetchEvent.respondWith(
    caches.match(fetchEvent.request).then(res => {
      return res || fetch(fetchEvent.request);
    })
  );
});





/* 

Citation:
Ibrahima Ndaw (2020) How to build a PWA from scratch with HTML, CSS, and JavaScript [Source code]. github.com/ibrahima92/pwa-with-vanilla-js

*/