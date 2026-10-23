const CACHE="geometry-dash-wrapper-v1";
const APP=new URL("./",self.location.href);
const FILES=["./","./index.html","./manifest.webmanifest","./icon.svg","./icon.png","./icon-192.png"];
self.addEventListener("install",event=>{
 event.waitUntil((async()=>{
  const cache=await caches.open(CACHE);
  await cache.addAll(FILES.map(file=>new URL(file,APP).href));
  await self.skipWaiting();
 })());
});
self.addEventListener("activate",event=>{
 event.waitUntil((async()=>{
  for(const name of await caches.keys()){
   if(name.startsWith("geometry-dash-wrapper-")&&name!==CACHE)await caches.delete(name);
  }
  await self.clients.claim();
 })());
});
self.addEventListener("fetch",event=>{
 const url=new URL(event.request.url);
 if(event.request.method!=="GET"||url.origin!==APP.origin||!url.pathname.startsWith(APP.pathname))return;
 event.respondWith((async()=>{
  const cache=await caches.open(CACHE);
  if(event.request.mode==="navigate"){
   try{return await fetch(event.request);}
   catch{return await cache.match(new URL("./index.html",APP).href)||Response.error();}
  }
  return await cache.match(event.request)||fetch(event.request);
 })());
});
