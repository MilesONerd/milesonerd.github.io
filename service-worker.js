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
  "/img/android-chrome-192x192.png",
  "/img/android-chrome-512x512.png",
  "/img/apple-touch-icon.png",
  "/img/favicon-16x16.png",
  "/img/favicon-32x32.png",
  "/img/favicon.ico",
  "/img/site.webmanifest",
  "/img/Phoenix.jpg",
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
