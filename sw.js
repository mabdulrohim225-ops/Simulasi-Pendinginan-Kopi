const CACHE_NAME="kopag-v2";
const urlsToCache=["/","/opening.html","/index.html","/manifest.json","/sw.js","/assets/icon-192.png","/assets/icon-512.png","/assets/logo.png","/assets/opening.mp4","/assets/ornamen.mp4"];
self.addEventListener("install",e=>{e.waitUntil(caches.open(CACHE_NAME).then(c=>c.addAll(urlsToCache)))});
self.addEventListener("fetch",e=>{e.respondWith(caches.match(e.request).then(r=>r||fetch(e.request)))});
