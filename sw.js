const CACHE='mfy-v2-2-shell';
const FILES=['./','./index.html','./manifest.webmanifest','./icon.svg'];
self.addEventListener('install',event=>event.waitUntil((async()=>{const cache=await caches.open(CACHE);await cache.addAll(FILES);await self.skipWaiting();})()));
self.addEventListener('activate',event=>event.waitUntil((async()=>{const keys=await caches.keys();await Promise.all(keys.filter(key=>key!==CACHE).map(key=>caches.delete(key)));await self.clients.claim();})()));
self.addEventListener('fetch',event=>{
 const url=new URL(event.request.url);
 if(url.origin!==location.origin)return;
 if(event.request.mode==='navigate'||url.pathname.endsWith('/index.html')){
  event.respondWith((async()=>{try{const response=await fetch(event.request,{cache:'no-store'});if(response.ok){const cache=await caches.open(CACHE);await cache.put('./index.html',response.clone());}return response;}catch(error){return (await caches.match('./index.html'))||Response.error();}})());
  return;
 }
 event.respondWith(caches.match(event.request).then(cached=>cached||fetch(event.request)));
});
