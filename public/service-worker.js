const CORE_CACHE_VERSION = 'v1'
const CORE_ASSETS = [
  '/offline',
  '/index.css',
  '/index.js',
]

self.addEventListener('install', (event) =>{
    console.log('install')

    event.waitUntil(
        caches.open(CORE_CACHE_VERSION).then(function(cache) {
          return cache.addAll(CORE_ASSETS).then(() => self.skipWaiting());
        })
      )
})

self.addEventListener('activate', (event) =>{
    console.log('activate')
})

self.addEventListener('fetch', (event) =>{
    console.log('fetch')
})