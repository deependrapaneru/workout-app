/* FlexFuel service worker — network first, cache as a fallback.
   The app must never be trapped on a stale build, so fresh HTML always wins
   when the network is reachable and the cache only steps in when it isn't. */
var CACHE='flexfuel-v4';
var SHELL=[
 './','./index.html','./site.webmanifest',
 './flexfuel_fitness_logo.png','./icon-192.png','./icon-512.png','./apple-touch-icon.png',
 './favicon.ico','./favicon-32x32.png',
 './home-workout.webp','./home-activity.webp','./home-recovery.webp','./home-fuel.webp'
];

self.addEventListener('install',function(e){
 self.skipWaiting();
 e.waitUntil(caches.open(CACHE).then(function(c){
  return Promise.all(SHELL.map(function(u){return c.add(u).catch(function(){});}));
 }));
});

self.addEventListener('activate',function(e){
 e.waitUntil(caches.keys().then(function(keys){
  return Promise.all(keys.map(function(k){return k===CACHE?null:caches.delete(k);}));
 }).then(function(){return self.clients.claim();}));
});

self.addEventListener('fetch',function(e){
 var req=e.request;
 if(req.method!=='GET')return;
 var url=new URL(req.url);
 // never cache Supabase or the food database lookups — they must be live
 if(/supabase\.co|openfoodfacts\.org/.test(url.hostname))return;

 e.respondWith(
  fetch(req).then(function(res){
   if(res&&res.status===200&&(url.origin===location.origin||res.type==='cors')){
    var copy=res.clone();
    caches.open(CACHE).then(function(c){c.put(req,copy).catch(function(){});});
   }
   return res;
  }).catch(function(){
   return caches.match(req).then(function(hit){
    if(hit)return hit;
    // an offline navigation still gets the app, not a browser error page
    if(req.mode==='navigate')return caches.match('./index.html');
    return new Response('',{status:504,statusText:'Offline'});
   });
  })
 );
});
