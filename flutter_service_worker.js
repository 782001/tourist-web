'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.json": "11dfefa93dd6e3053371c2451291bb6d",
"assets/AssetManifest.smcbin": "f5acabeb886eba9b2d0fa60ea8ff448f",
"assets/assets/images/background.jpg": "1709f270977d3fc30c2478793cf153d2",
"assets/assets/images/background2.jpg": "22d1fd318210d2e5e5f9a0f663ec3c83",
"assets/assets/images/child.jpeg": "098175dd49d276c0f961bb93efca7b7a",
"assets/assets/images/cold.png": "48b4cfed996bef545098ab3c59e0c3d8",
"assets/assets/images/cool.jpeg": "6d0e953465104963b92c3a6a8e0365ff",
"assets/assets/images/current.png": "6b8d9b156a175c2dde76b6503c0c8749",
"assets/assets/images/dieseases_icon.jpeg": "a3b9dbdfcf5ed58604f7b71a97fa4378",
"assets/assets/images/down.png": "bad8d758dabda0b7e966d2882b246b8e",
"assets/assets/images/facebook.png": "4ce7a9138727037b53c000b540aa2477",
"assets/assets/images/google.png": "858fbe5dcadc270b68cf661d206ae52a",
"assets/assets/images/Head.png": "89fae69f482d598796e99ef1ad97c578",
"assets/assets/images/heart.jpeg": "bcf8263b14a4dd7377e1dfc1acdc9622",
"assets/assets/images/homeImage.jpg": "679683bf86e74912f6767069cbd9d47a",
"assets/assets/images/homeImage2.jpg": "afd51bea6a9493db7babe87101b739c9",
"assets/assets/images/location.png": "f001e26c61e8a355f0b9aec7951b3456",
"assets/assets/images/loge.png": "2eb61d53c0a56e9439562f025efbfbd7",
"assets/assets/images/login.png": "25c991e29e1acb7308436cdafd7c3242",
"assets/assets/images/M-removebg-preview.png": "ef8313e18abe929cbf9e3de666afc9c9",
"assets/assets/images/M.jpg": "70388a43ce0fb4c8583e66365a059957",
"assets/assets/images/Maha.jpg": "2ed4c7e86e6b2daefd8ff496a306743c",
"assets/assets/images/mahatat.png": "ae294af3abeb6e99d2768ed6b698c27e",
"assets/assets/images/mahatatBoa.jpg": "67a8a136a57d0f7492c7fe99ff698aec",
"assets/assets/images/my_icon.png": "7a09b4ce2531029e538699bfa7ee6034",
"assets/assets/images/my_icon.svg": "7a09b4ce2531029e538699bfa7ee6034",
"assets/assets/images/my_logo.jpg": "8a6af296549de758db408f1e4016d564",
"assets/assets/images/nerest.png": "b12eb5ef897f1dbe16abbc358f7da488",
"assets/assets/images/practice_Healthy_habit.png": "08c42937e16381a5e1656a7f1c7255d9",
"assets/assets/images/respect.png": "075240e62383b3d3822bad11c9a3830a",
"assets/assets/images/ret.jpg": "67a8a136a57d0f7492c7fe99ff698aec",
"assets/assets/images/ret.png": "bea87e167a8d44decf194735b16e65c2",
"assets/assets/images/test.jpg": "842ff545b24655cc55cb70770265122e",
"assets/assets/images/test2.jpg": "e25f20502d34387cf962e0d8d62146e0",
"assets/assets/images/twitter.png": "f3a9f3c44d4b923e46ad2c7c5e434f02",
"assets/assets/images/Video.png": "21b9a3ac704555686f51fcad4c84d796",
"assets/assets/images/west.png": "f598f7292aaf18d6bfc06fbfd4c25a01",
"assets/assets/images/World%2520Down%2520Syndrome%2520day-bro.png": "0f74735f14dc2cfd5347bca658431459",
"assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
"assets/fonts/MaterialIcons-Regular.otf": "038640dad47be35aba38e8bcac185c7c",
"assets/lang/ar.json": "910418fb7f42db4b7bdac8e2d59995bb",
"assets/lang/en.json": "de4d32e8d66273d58be139d58cdc51a8",
"assets/NOTICES": "120e0033cf6bb8095772cda110dce266",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "57d849d738900cfd590e9adc7e208250",
"assets/packages/fluttertoast/assets/toastify.css": "910ddaaf9712a0b0392cf7975a3b7fb5",
"assets/packages/fluttertoast/assets/toastify.js": "18cfdd77033aa55d215e8a78c090ba89",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "f25e8e701660fb45e2a81ff3f43c6d5c",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "a5d7457fda15b7622c14f432ba63039a",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "b72c617acdf2227c8b1413215f620711",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"canvaskit/canvaskit.js": "76f7d822f42397160c5dfc69cbc9b2de",
"canvaskit/canvaskit.wasm": "f48eaf57cada79163ec6dec7929486ea",
"canvaskit/chromium/canvaskit.js": "8c8392ce4a4364cbb240aa09b5652e05",
"canvaskit/chromium/canvaskit.wasm": "fc18c3010856029414b70cae1afc5cd9",
"canvaskit/skwasm.js": "1df4d741f441fa1a4d10530ced463ef8",
"canvaskit/skwasm.wasm": "6711032e17bf49924b2b001cef0d3ea3",
"canvaskit/skwasm.worker.js": "19659053a277272607529ef87acf9d8a",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "6b515e434cea20006b3ef1726d2c8894",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "cf3c9c835c542d826aa54318fc27464e",
"/": "cf3c9c835c542d826aa54318fc27464e",
"main.dart.js": "f8c1050b53dc8aadcdf93a1ebcfc0fc0",
"manifest.json": "681f7d6791bb643b4f890efff8eab241",
"version.json": "b9df26ed7744b0a7f8a4f6fb9813e79d"};
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
