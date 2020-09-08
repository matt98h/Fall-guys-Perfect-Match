// main service worker
// referenced from https://blog.logrocket.com/how-to-build-a-progressive-web-app-pwa-with-node-js/

// declares cache
const CACHE_NAME = 'primary-cache'

// lists all assets to be added to cache
// make sure to retest lighthouse when editing cache
const toCache = [
    '/',
    './stylesheets/style.css',
    './js/script.js',
    './images/apple.png',
    './images/banana.png',
    './images/cherry.png',
    './images/grape.png',
    './images/orange.png',
    './images/watermelon.png'
]

// INSTALL - Used to register service worker
self.addEventListener('install', function(event) {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(function(cache) {
                return cache.addAll(toCache)
            })
            .then(self.skipWaiting())
    )
})
  
// FETCH - Intercepts requests to check for file/data in cache instead
self.addEventListener('fetch', function(event) {
    event.respondWith(
      fetch(event.request)
        .catch(() => {
          return caches.open(CACHE_NAME)
            .then((cache) => {
              return cache.match(event.request)
            })
        })
    )
  })
  
// ACTIVATE - Event here triggers when the service worker activates
self.addEventListener('activate', function(event) {
    event.waitUntil(
      caches.keys()
        .then((keyList) => {
          return Promise.all(keyList.map((key) => {
            if (key !== CACHE_NAME) {
              console.log('[ServiceWorker] Removing old cache', key)
              return caches.delete(key)
            }
          }))
        })
        .then(() => self.clients.claim())
    )
  })