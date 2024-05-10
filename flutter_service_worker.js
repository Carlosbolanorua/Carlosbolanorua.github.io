'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "c0c1f659e8a1560f9570266d71849337",
"assets/AssetManifest.bin.json": "93d77a43188c9356bc9699904fc68633",
"assets/AssetManifest.json": "d7be74a7e3b82621b152d293b498c83b",
"assets/assets/fonts/ColaKind.ttf": "d25b6ab5203c5d7f477549cc3890bd61",
"assets/assets/fonts/maian.ttf": "0141df8c3436a6c3eb8be69855e1ec0d",
"assets/assets/img/autobus.jpeg": "175fb40a1c3682638de1077f893031a7",
"assets/assets/img/centrar.png": "51ab2fc02be0ec2abe960bbaa5a93ea7",
"assets/assets/img/iconn.jpeg": "9f7a1ef515d3a700d5d3f8f7b08fcd1d",
"assets/assets/img/IconRutaV.jpeg": "662fd3b9831773f4951a5ad44c03e10f",
"assets/assets/img/iinfow.png": "08208347c577f0c903b5ba71ce645463",
"assets/assets/img/mylocation.png": "23522ef5b73fa90f87ee933809eee115",
"assets/assets/img/siva.png": "4c5edf2f6d6c7681202d8117af3bc68f",
"assets/assets/img/vallee.png": "5b6d6472ba5bf81b77eb6adcac972ea9",
"assets/assets/paraderos/paraderos.json": "c951c47be166a271ed10fd45667ea306",
"assets/assets/rutas/ruta_100.txt": "df4bcb6523efb4c7c5986c9013643cf7",
"assets/assets/rutas/ruta_101.txt": "1be2ecb3926ece76cd2d10f9c9c9415f",
"assets/assets/rutas/ruta_214.txt": "cf4b1d7db25bab0156a9848d365a86ee",
"assets/assets/rutas/ruta_313.txt": "db18819c05fdbc3f2f4d8897b6162d40",
"assets/assets/rutas/ruta_316.txt": "868712280aad646320c088b658be86d8",
"assets/assets/rutas/ruta_316dom.txt": "9fbda59fd0db418a96ed510bdcfdc570",
"assets/assets/rutas/ruta_412.txt": "dac70ccba0eee2a6302c840be2fe5201",
"assets/assets/rutas/ruta_515.txt": "af0be58eaa2ae9e18e58699de75a44c0",
"assets/assets/rutas/ruta_561.txt": "c2fe20f68c3261d31c1665b2ca21fc65",
"assets/assets/rutas/ruta_562.txt": "003c7713514ba71dfe41be73f0602e9e",
"assets/FontManifest.json": "e58c7ac2e31fd0110869b9a7dcb59d47",
"assets/fonts/MaterialIcons-Regular.otf": "f3dd52b6dddc4faa148663fb3778132c",
"assets/NOTICES": "5a08ec397829511044c88227c0c86b41",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/packages/flutter_map/lib/assets/flutter_map_logo.png": "208d63cc917af9713fc9572bd5c09362",
"assets/packages/icon_decoration/assets/fonts/Roboto/Roboto-Black.ttf": "301fe70f8f0f41c236317504ec05f820",
"assets/packages/icon_decoration/assets/fonts/Roboto/Roboto-Bold.ttf": "9ece5b48963bbc96309220952cda38aa",
"assets/packages/icon_decoration/assets/fonts/Roboto/Roboto-Light.ttf": "6090d256d88dcd7f0244eaa4a3eafbba",
"assets/packages/icon_decoration/assets/fonts/Roboto/Roboto-Medium.ttf": "b2d307df606f23cb14e6483039e2b7fa",
"assets/packages/icon_decoration/assets/fonts/Roboto/Roboto-Regular.ttf": "f36638c2135b71e5a623dca52b611173",
"assets/packages/icon_decoration/assets/fonts/Roboto/Roboto-Thin.ttf": "4f0b85f5b601a405bdc7b23aad6d2a47",
"assets/packages/unicons/icons/UniconsLine.ttf": "8924ce5cafaa7c12e593a2ef8478122f",
"assets/packages/unicons/icons/UniconsSolid.ttf": "580e5390f4d0c77fa9e8115af69e41c7",
"assets/packages/unicons/icons/UniconsThinline.ttf": "b9ac88a304738945c1b1fa4c168a14b9",
"assets/shaders/ink_sparkle.frag": "4096b5150bac93c41cbc9b45276bd90f",
"canvaskit/canvaskit.js": "eb8797020acdbdf96a12fb0405582c1b",
"canvaskit/canvaskit.wasm": "73584c1a3367e3eaf757647a8f5c5989",
"canvaskit/chromium/canvaskit.js": "0ae8bbcc58155679458a0f7a00f66873",
"canvaskit/chromium/canvaskit.wasm": "143af6ff368f9cd21c863bfa4274c406",
"canvaskit/skwasm.js": "87063acf45c5e1ab9565dcf06b0c18b8",
"canvaskit/skwasm.wasm": "2fc47c0a0c3c7af8542b601634fe9674",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "9315c35cff87dacbd19dd8622578b9da",
"flutter.js": "59a12ab9d00ae8f8096fffc417b6e84f",
"icons/Icon-192.png": "0bfd9c06ef40d006f804f2dd67848ad2",
"icons/Icon-512.png": "f75ed13fbe4e09d197d76b4b67167622",
"icons/Icon-maskable-192.png": "0bfd9c06ef40d006f804f2dd67848ad2",
"icons/Icon-maskable-512.png": "f75ed13fbe4e09d197d76b4b67167622",
"index.html": "525bad5b728fffba8abdffb3c2188cb3",
"/": "525bad5b728fffba8abdffb3c2188cb3",
"main.dart.js": "e15a66880c0a064ff32c7a182044b4bb",
"manifest.json": "76553982691202f44c5e7f64f20aac9e",
"version.json": "8a95bcf3044c72392273d21238be76f5"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
