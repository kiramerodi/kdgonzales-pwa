const staticPWA = "cmsc207-pwa";
const assets = [
  "/",
  "/index.html",
  "/styles.css",
  "/js/main.js",
  "/images/about.jpg",
  "/images/home.jpg",
  "/images/plate1.jpg",
  "/images/plate2.jpg",
  "/images/plate3.jpg"
];

self.addEventListener("install", installEvent => {
  installEvent.waitUntil(
    caches.open(staticDevCoffee).then(cache => {
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