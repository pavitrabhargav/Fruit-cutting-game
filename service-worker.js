const CACHE_NAME = "fruit-game-cache-v1";
const urlsToCache = [
  "/Fruit-cutting-game/",
  "/Fruit-cutting-game/index.html",
  "/Fruit-cutting-game/script.js",
  "/Fruit-cutting-game/icon.png",
  "/Fruit-cutting-game/icon-512.png"
];

self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(response => response || fetch(event.request))
  );
});
