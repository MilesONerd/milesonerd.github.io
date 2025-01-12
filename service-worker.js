const CACHE_NAME = "milesonerd-cache-v1";
const urlsToCache = [
  "/",
  "/index.html",
  "/about",
  "/about.html",
  "/contact",
  "/contact.html",
  "/acessibility",
  "/acessibility.html",
  "/policies-and-terms",
  "/policies-and-terms.html",
  "/404.html",
  "/blog",
  "/blog/index.html",
  "/blog/posts/12-17-2024 Blog.md",
  "/blog/scripts/list-posts.js",
  "/style.css",
  "/scripts/functions.js",
  "/scripts/quotes.js",
  "https://milesonerd.github.io/img/android-chrome-192x192.png",
  "https://milesonerd.github.io/img/android-chrome-512x512.png",
  "https://milesonerd.github.io/img/apple-touch-icon.png",
  "https://milesonerd.github.io/img/favicon-16x16.png",
  "https://milesonerd.github.io/img/favicon-32x32.png",
  "https://milesonerd.github.io/img/favicon.ico",
  "https://milesonerd.github.io/img/site.webmanifest",
  "https://milesonerd.github.io/image/Phoenix.jpg",
  "/feed.xml",
  "/robots.txt",
  "/sitemap.xml",
];

self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(urlsToCache);
    })
  );
});

self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});

self.addEventListener("activate", event => {
  const cacheWhitelist = [CACHE_NAME];
  event.waitUntil(
    caches.keys().then(cacheNames =>
      Promise.all(
        cacheNames.map(cacheName => {
          if (!cacheWhitelist.includes(cacheName)) {
            return caches.delete(cacheName);
          }
        })
      )
    )
  );
});
