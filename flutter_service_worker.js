'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "0300bdc8880fdb6781391a181ee16299",
"index.html": "5ddb55ae2e0fc10fefd861db5fc55011",
"/": "5ddb55ae2e0fc10fefd861db5fc55011",
"main.dart.js": "e52be1d531808554d670203521c85e3e",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "f00f6cc9199af98db23a2bcbf16ebfe2",
".git/config": "7651d3fc490b2b96c474d3948c714233",
".git/objects/95/a64885702afd7db77023124ca8ad302df6d7cd": "89239ab9b960a0451ce77e2676533097",
".git/objects/0c/0ff33d35ba2b75d819c96a0b9a047e01f6bd2e": "df2ad8e7f72357b726c18600abde2847",
".git/objects/66/60737564c585ffde169010d7cca74ef06ead57": "4d62461e1a33b56c1e6824a9e6ac117b",
".git/objects/3e/8b7359e9f29830368590a09ad22917b069d5ad": "b21e0b01890e59751e0199e4ffb9f1b7",
".git/objects/9b/36b7fd64b7a196e242867509edff1d9b72d029": "5b1a4af91aa549b77c148d5ebb295207",
".git/objects/56/af3c8a56d7be88a4f970e5b573469c9c1a8eac": "5116eb03e552391970deb9836b4fc59b",
".git/objects/58/5a172bd72e053827a893d28a8c0e84cacaef38": "5f559df4ea83bae6e80f1ce21c8bab90",
".git/objects/34/eae5d71764e0ea65edc6f5a9e5bc1c8f1d1835": "b0b0c85b44e361bb7225fd3f62965a9b",
".git/objects/05/e27e84d180e36f521f8f4245c4b8f471529068": "09b6b41882ec1596e69853c92fa8a869",
".git/objects/b4/130c8811856bb8e9089d952fffacea0a3bc826": "6f9716cfcc32f803f481d404971c658a",
".git/objects/a2/d9607a23ea5a2c2985e0200e5ec2cb793a8a35": "b1f0ddee86d125ced87086c132332de1",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "5a9f3522bf38ba5dd54f15a0f75cb0d7",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "fd4077bdd6e78092c2590334cd2e4adb",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "b1bfda8eb29e326a32fc89e9c85ae8dd",
".git/objects/e5/9aa499aa76ed187959aebf1f1b00e17243fd98": "169cf49f81f3a9180baad0dda8db13fb",
".git/objects/e2/745de9b801ee70770605ac9ac8cf10ddb9b5f2": "cf347f398c760cea11f96eef29aabbcb",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "01d8a507be49f15714be4d17b6947e52",
".git/objects/c6/980ebcc411567a8c4db5f851da43dd64b70646": "8e07126284987095fba0db7ad0cb479a",
".git/objects/4e/219f066cd62869a861c5fc642205a5380f2c73": "9d5d9a4c91c9d4fb9a0237e03bdef7a0",
".git/objects/pack/pack-3a1f495082ab4b3992c54e60ce5f0314f6784176.idx": "dca3f0944ce2399283a1b99237a285cb",
".git/objects/pack/pack-3a1f495082ab4b3992c54e60ce5f0314f6784176.pack": "1f6f0e155baf4ae267022fc2973cbb31",
".git/objects/29/34069610a3e27662f521d8edd1b30d0381bffe": "3d242c8ac1353808b9a3632d59a5bf29",
".git/objects/45/071c54bb7dd7dca67e01ba3885b518eb355b3b": "68f3e0c1373c023cb3b8ecd81f729735",
".git/objects/7b/9c44a64b15a761866c833b37764b6e0c5e11ad": "548c0b979da65703f2b8b6cef4d52470",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "b25b26893b8f92a4f583677ba27f0a7f",
".git/objects/10/7bd0d483d3dd08a4f2b2573c0ea053b1df90f6": "cd2a4cefb899d079ad6d9a4615e8c2c0",
".git/objects/75/cc889fbb46f0ae7addb8c668554636ac64d991": "3416f9cc09fb9c7586ad114cab3d5ac7",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e35fdc55764d9ed14315f6ff50093ab3",
".git/objects/6e/c67f885067e6a6758f833f7d6170115d584f39": "dd323d763f0aa0c6d527c88a126de123",
".git/objects/31/e6a0c62183b60bd92339c14093c7c0c2115c5a": "b8e7a405db4f14eb73baa07be3d0c084",
".git/objects/30/7434988f095077a20bd537ac5b493e8b162da0": "10bb5ded44aa9f37898740b1b8566b76",
".git/objects/5b/ecbf62b68bad614df53b825059bd7320094ffa": "8cd20b59f3ef6b7c36edf7fe7570648a",
".git/objects/39/153de25d1358f243176c620a999d59d6525d13": "5ad796777f795ae34c9e4104e9fcc318",
".git/objects/0f/e21754ab6a077890483c19a072f9757189808a": "b906513dd146bb0160510506d75ca063",
".git/objects/b8/aa5c956fa50e99ed4f7b037ec04069d56e613b": "6d5ace8bc242b635db062cf8da3cc341",
".git/objects/a9/2b4004cc1eff7e9fc6b99951a1374e408924df": "826ebacbc4b63eb926eb90de80af5dbb",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "b0c549c0aed479932cf26d094f76630e",
".git/objects/b7/fe047b096a9ff686c70d083ce381c24270ad4a": "bdc56e254f7cf1d18c561c3591e429aa",
".git/objects/db/afe3689d1dd23cc10e82f74c50ee82ab7611be": "2924e40d695d907ed1138bc3aba5df74",
".git/objects/de/28db843d7df6ed23b8a7526f6b6b4a83425fe7": "6d6f532e28da652c0cef326ce98de4a1",
".git/objects/b0/c27f59b41ee0ea2d5835cd1dfc516da02d686d": "5843a87a59fe4ce76fb71ef4d99cd572",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "9de9f2c6fa0aea6ee34b79162e9fc361",
".git/objects/a1/56d813c8a397d7ed06840bdb78b0814c5195cf": "ca2d355e83cf2a41cb764b819699b925",
".git/objects/a1/68e02c106f32f4caabcae2c612069337b89df5": "de426283caeecab9e9c1efc53cf2b2cf",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "d3184f8d69b8aa198a5a7a210764ede9",
".git/objects/c4/46d9b950fc5e5b9139ebb0f4f243859c7b4ac8": "8d3e4abf65d17cb3bcc7afad6938a935",
".git/objects/cd/22076013ce8b84475eae9bb4cd6c60b5460fbe": "35a0a9cd1e8a47b15c7c24b47370679e",
".git/objects/c2/433e56b320513a4ac648218359e2cd02c7cc66": "bda40861995e3bf79d38f98777ce0e79",
".git/objects/e9/2cfc303a6b87d016f2f6e44710891c5e87ae82": "36d6d87a5780861153e39b1853ae1170",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "0bb82caa96c962530864f28e847f4ab9",
".git/objects/2c/75619b28c4d88d344476cdd660e89c6217bfa0": "d58914533ab0008e22ecd2a74bf22ec2",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "5a97e1409617516f21f4a27552287f75",
".git/objects/41/a15b395af8724c700c872f4c6993088d0fd1f8": "acdf95acd5094bfba328c1c8bf16fa44",
".git/objects/12/368f20e18ebf7003227c188a030804302d96cb": "b68b765fa05709056cdbf9d740c8ad99",
".git/objects/1c/671141446dfe6360ed2d77f3bd0fd984e4c536": "a9b1ca06787f769c3e13a05139f48dfa",
".git/objects/7f/2b5d2b1499f630159a9b038d65b3b25d0bbfdd": "1ea388b5816c4b1dd3bef3d345f2794a",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "0aebccfd5866bfc3e7c8f625230c22f7",
".git/logs/HEAD": "970039847686bfd0cb14f57b62d8c280",
".git/logs/refs/heads/main": "d9961a431e626bfb38efdf0a3ac50d47",
".git/logs/refs/remotes/origin/main": "1cd3b3a5031234146014c7284927ecfb",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "01b1688f97f94776baae85d77b06048b",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
".git/hooks/update.sample": "517f14b9239689dff8bda3022ebd9004",
".git/refs/heads/main": "61aba7ed00cb86f7079f64a54911b29f",
".git/refs/remotes/origin/main": "61aba7ed00cb86f7079f64a54911b29f",
".git/index": "d7e6e4ed650ad271ae6d6087c6e128a1",
".git/packed-refs": "a891e6bb26eb0d480aef486a7e8ea166",
".git/COMMIT_EDITMSG": "a8297d555dd34879e8e48e1cf12acefa",
".git/FETCH_HEAD": "67375add2e7f62831f039503e85155b5",
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
