let CACHE_VERSION = 1.0;


let CURRENT_CACHE = {
    static : "static-cache-v"+CACHE_VERSION
}

self.addEventListener('install',(event)=>{
  event.waitUntil(
    caches.open(CURRENT_CACHE.static)
        .then((cache) => {
      
           cache.addAll([
           
               
             
               "/icons/icon48.png",
               "/icons/icon144.png",
          
              
           ])
        })
)
})

self.addEventListener('activate',(event)=>{
  
  let expectedCacheNames = Object.values(CURRENT_CACHE)
 

   event.waitUntil(
       caches.keys().then(cacheNames =>{

           return Promise.all(
               cacheNames.forEach(cacheName =>{
                   if(!expectedCacheNames.includes(cacheName)){
                     
                       return caches.delete(cacheName)
                   }



               })
           )

       })
   )
  
})

self.addEventListener('fetch',(event)=>{
  
  event
  .respondWith(
      caches.open(CURRENT_CACHE.static)
          .then((cache) => {
              return cache.match(event.request)
                  .then((response)=>{
                      return response || fetch(event.request)
                  }).catch(err=>{
                    return  caches.open(CURRENT_CACHE.static)
                        .then(cache =>{
                          
                         return cache.match("/offline.html")
                        })
                  })
          }).catch(err=>{
           
      })
  )
  
 
  
  
})

