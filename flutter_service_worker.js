'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "230dcb07859034002dcbb061daaba3b8",
"index.html": "8fb09e59788a95425e1a7ff891cd4152",
"/": "6610107c2ae1ec1a2e1afe3c0209e3a1",
"main.dart.js": "aeec2693ac9a9da8ba7964d0777da4bb",
"flutter.js": "6fef97aeca90b426343ba6c5c9dc5d4a",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "fd091ea5bc8f3ccc10f74bd67179fb6a",
"assets/AssetManifest.json": "7cea0d1b3fbde4088a19cc44b4755fa7",
"assets/NOTICES": "82f8bb2989357bbc7859b0296dd8d673",
"assets/FontManifest.json": "583bb59dbcfdf02a14cbbcaecf44c730",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.css": "5a8d0222407e388155d7d1395a75d5b9",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.html": "16911fcc170c8af1c5457940bd0bf055",
"assets/packages/daum_postcode_search/lib/assets/index.html": "6610107c2ae1ec1a2e1afe3c0209e3a1",
"assets/packages/daum_postcode_search/lib/assets/daum_search.html": "eb5094cc599a1b505392bf684dd21f37",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"assets/font/AppleSDGothicNeoH.ttf": "868657654af992968ba24ec0c50b8482",
"assets/font/AppleSDGothicNeoM.ttf": "3a44ffb1539dbcfce07e73ce69ea55de",
"assets/font/AppleSDGothicNeoEB.ttf": "eaafc4677b0f252b3404c5268e0eb26d",
"assets/font/AppleSDGothicNeoB.ttf": "67680f2eb947c5cbd58b40961b4a61e9",
"assets/font/AppleSDGothicNeoR.ttf": "ddf7d49e75259d7806e0b1f72bcb54e6",
"assets/AssetManifest.bin": "451cd92ab80ea906ecf6c810bf62604e",
"assets/fonts/MaterialIcons-Regular.otf": "8ad317f76244d2387ccd6790c9d34e43",
"assets/assets/file/test.xlsx": "00f2d168065c9c7418ac54119609f8a8",
"assets/assets/image/notification-bell.png": "fb18e794da735a16a69961636db64893",
"assets/assets/image/menus2x.png": "9821f865587fb888632a3cc63c8bd41d",
"assets/assets/image/g78232x.png": "e6c85eec7ea0b7f8aa3fd74f6c80e827",
"assets/assets/image/menuIcon.png": "5a9f8f7e6b691ce9abb3c1f02c3bf4c7",
"assets/assets/image/support.png": "b740d4824c160646428006f6155fae66",
"assets/assets/image/g2202.png": "f8734060cb75ff71b067b4baba2ad670",
"assets/assets/image/notification-bellDefault.png": "3624cf81483d8a7398045c73ddae579f",
"assets/assets/image/homepage%25201%2520%25E2%2580%2593%25201.png": "737a475921816b71e0e57c2f819eb177",
"assets/assets/image/previousRight2x.png": "739a3558b3fdc075d32afd5e40cdbc1d",
"assets/assets/image/downArrowRed.png": "c9243b5194f3c358f6e5dfb1b9c60867",
"assets/assets/image/folder2x.png": "6c6028d65df270339690075513f78e3d",
"assets/assets/image/previousDefault.png": "c59dadba724d3b9c9b43ec9b6281bebd",
"assets/assets/image/homepage2-1.png": "b54de6fbc71d33984b5890f831d90d89",
"assets/assets/image/informationManagement2x.png": "a690b1d1c4633225499291fe64508a64",
"assets/assets/image/userDefault.jpg": "ac5f8a6420095e84d8ed8e3366d1b8e9",
"assets/assets/image/userDefault.png": "c2a992f838a608357cc33e08727c183e",
"assets/assets/image/previous-right.png": "30eff51a1fb0202d4c2dd5c8d4bf38fe",
"assets/assets/image/download3x.png": "fcd08a2af797e667ebcccac91aee919d",
"assets/assets/image/g3992x.png": "12beb4667300659c4d4ee897a1c965a1",
"assets/assets/image/dotLine.png": "235c178e68465208cc2f7a477c43debf",
"assets/assets/image/menu-3.png": "51cf1a3bc7afb9d2f1a693aec481e04a",
"assets/assets/image/finance2x.png": "f1818d9c2c21c6679c38ac7d084f47c5",
"assets/assets/image/%25E1%2584%258B%25E1%2585%25B5%25E1%2584%2586%25E1%2585%25B5%25E1%2584%258C%25E1%2585%25B5%252018.png": "fa057a1c6c99cab3da2a475828d28fac",
"assets/assets/image/house2x.png": "400ec78c9bcdbe4501351a271bbaebeb",
"assets/assets/image/g48.png": "c109a5b4695ed29683b61f67961531ec",
"assets/assets/image/confirmation2x.png": "aec6379109611994e0d7c77dc6380ba5",
"assets/assets/image/menusDefault.png": "0b90fd4c867fc4a8342c3f5c63b725a5",
"assets/assets/image/menusDefault.jpg": "8b18c8cc93ed9657c0d4838755f3f941",
"assets/assets/image/g3402.png": "cdb3cef69dd8dbc883360f4ec9ab0081",
"assets/assets/image/Asset%2520Management.png": "d9bea86bf8c3cccfb18b14a7571cb541",
"assets/assets/image/g62x.png": "4d325528b6c812d74b21a37f8170fd83",
"assets/assets/image/upArrowGreen.png": "bfd870a64d4155b95819e809efeff990",
"assets/assets/image/warning32x.png": "eed20454b3aac25acc9fc13c8a585eba",
"assets/assets/image/image18.png": "43d5fe3f0a7994b1ce669b2ebd00ed7a",
"assets/assets/image/g22012x.png": "c039fad73d7866f607957d7faace6f69",
"assets/assets/image/search2x.png": "e82e7fd9062200c9a8554e274855cf4f",
"assets/assets/image/g21642x.png": "2bde70a6c8284db87de72779a08dc41c",
"assets/assets/image/send-button.png": "f6f575cae3cb89ec233828d66e3dd83c",
"assets/assets/image/user-2.png": "ccd96976527d9259346e3ce2dad75d4c",
"assets/assets/image/cancel2x.png": "dc55b65892551599f5af20da87699141",
"assets/assets/image/previous.png": "6d7b2e783a4429beb858f281e922ff62",
"assets/assets/image/blackBalloon.png": "cc29d7cbc0db954db54319ab1f6872cc",
"canvaskit/skwasm.js": "1df4d741f441fa1a4d10530ced463ef8",
"canvaskit/skwasm.wasm": "6711032e17bf49924b2b001cef0d3ea3",
"canvaskit/chromium/canvaskit.js": "8c8392ce4a4364cbb240aa09b5652e05",
"canvaskit/chromium/canvaskit.wasm": "fc18c3010856029414b70cae1afc5cd9",
"canvaskit/canvaskit.js": "76f7d822f42397160c5dfc69cbc9b2de",
"canvaskit/canvaskit.wasm": "f48eaf57cada79163ec6dec7929486ea",
"canvaskit/skwasm.worker.js": "19659053a277272607529ef87acf9d8a"};
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
