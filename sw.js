// Service Worker Version
const version = "1.0";

//Static Chache - App Shell
const appAssets = [
    'index.html',
    'main.js',
    'images/flame.png',
    'images/logo.png',
    'images/sync.png',
    'vendor/bootstrap.min.css',
    'vendor/jquery.min.js'
]

// SW Install

self.addEventListener( 'install', e => {
    e.waitUntil(
        caches.open(`static-${version}` )
            .then( cache => cache.addAll(appAssets))
    )
})