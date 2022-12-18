'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "0300bdc8880fdb6781391a181ee16299",
"index.html": "7b63de41b8951070858a3927f73903fc",
"/": "7b63de41b8951070858a3927f73903fc",
"main.dart.js": "e52be1d531808554d670203521c85e3e",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "f00f6cc9199af98db23a2bcbf16ebfe2",
"assets/AssetManifest.json": "5d20316d1fc2c764f7d7d5349133a2b7",
"assets/NOTICES": "858538989e27343a931cdb7f81b257ce",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/shaders/ink_sparkle.frag": "c400813703b515d3899f63906dcd8a6d",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/assets/anim.gif": "aac13adc6992032c38fb8693c3fc7db0",
"assets/assets/Stationery.png": "166b08a9e7a8a8500a9be2c4a5e0c997",
"assets/assets/not_supported.jpeg": "ba28ba018d24c483dba1d26e34509ca9",
"assets/assets/banner.png": "5f961e013ad288bb16191b49c26342ec",
"assets/assets/home.png": "d65f62b207afb2a2f7ce23499e63f3a8",
"assets/assets/contact-us.png": "efd2481448148c1c57e07f3f904b3608",
"assets/assets/icons/support.png": "1d96b6fadf04dcb6e2c6388275b025f7",
"assets/assets/icons/icon.png": "be2622afb29eb8c2d2bd135bc89d75d6",
"assets/assets/icons/sticker_stat.png": "57e7316b0cb599c55d7182110e8fb787",
"assets/assets/icons/templates.png": "0d3dc27c5cb2062f9bc57ba41582e54a",
"assets/assets/icons/home.png": "78fe9516dafcd3e8c462c1075ac8b235",
"assets/assets/icons/sign-out-alt%25201.png": "08c5c08e6e7330be9923b394a36de94b",
"assets/assets/icons/background.png": "368d244859fda30fe7a577aa29fee80b",
"assets/assets/icons/menu.png": "73dd7ee02bff0bb33af1fed8097d950e",
"assets/assets/icons/frame_stat.png": "9aa06afc0e416b20514c9d9e0929b632",
"assets/assets/icons/logo.png": "e2f18132b5f138482c7823cbd5342f8d",
"assets/assets/icons/frame.png": "a5c0a077b7a7872ada46b6b964866eac",
"assets/assets/icons/menu_stat.png": "a98929936159fc96391ab6a8eeb592e6",
"assets/assets/icons/sticker.png": "066084e5a055f839621d6cc18433eb59",
"assets/assets/icons/background_stat.png": "83311079534bc1a51a057ba3f69c20ac",
"assets/assets/Stationery%2520cup.png": "166b08a9e7a8a8500a9be2c4a5e0c997",
"assets/assets/logo.svg": "20253ad29beb2f944b13fb4ea9816187",
"assets/assets/sticker.png": "a44d9e6a4f09b01b0bb140ed6bf3acf9",
"assets/assets/lamp.png": "107316a909044c21224a41bac23ba32f",
"assets/assets/menu%25201.png": "424634d387e3f7e05a464247c02956b1",
"assets/assets/layout%25201.png": "8a12cb33bfc929cf2938ee9c42470298"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
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
