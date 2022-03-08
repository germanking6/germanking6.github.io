'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "c3389841965196830726a01a54224083",
".git/config": "b8943b6c22da0cac60685dae5ef22dc3",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "81c9b485ac02d0bb8dc893f6b7ecf610",
".git/HEAD": "4216e2f4c73151ba63d3da7675b5d7d8",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "9342919014c7b2aa6aea894755f01776",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "9169b5bacad1dd2e82f3d4528a680017",
".git/logs/refs/heads/master": "85ba7fa082f7a8ca173c0204a9d206bd",
".git/logs/refs/heads/pruebas": "12be9eadfbac502c8a48309ef221fb75",
".git/logs/refs/remotes/origin/main": "c490d70819bcaba2d5fc59473abdb2dc",
".git/logs/refs/remotes/origin/pruebas": "2843225b574d28d8ee02b9f65536be91",
".git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
".git/objects/04/7dc8bbe85d753b868831564d846ba780652124": "5c82acec370f9d0382f1640080240f1b",
".git/objects/0d/50cba2d3a46ad8eb0dcc53ac4973fddda06922": "f693adaae0d3f3bd3a2c8a92592f21d3",
".git/objects/0f/1e744abe0febd7145324b3bb5349b7a02263ed": "436537477fab438e4b179706b25b4941",
".git/objects/14/bcec831a3dbf033e85f59d7ff99b87d3b5868b": "6666fdf932b7b4bb5aa33aa8cdaaadb9",
".git/objects/1f/06530fc3c88cba410d598365adf937c678adc2": "832adfa04cf6a23624eb11f3efd33b58",
".git/objects/1f/176b6cd4a598ea239af6cbb4a9fbc683c90145": "8fa1d54b17bab69c3599a97c17ee9aed",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/25/37905b35f861d4be995a322be16d9b17d6ed85": "60552ae2bb7ed92367af9353e0488804",
".git/objects/2d/26f49b39bbd8048d8d7c0e7aa5a4033e6f43de": "d131a66c8ef53d4a6f64c6799d0ef365",
".git/objects/32/46ad559eeae0370195978eaed83f1053ee13fd": "a043dbc0a0bda96ce2127799ccc27506",
".git/objects/39/aeefd0fa0dc08f6715d73ef9dc9360f1a77191": "c0e5dffa90ba7b07b619ebef63f9a150",
".git/objects/45/2c11e52f12064adf7dca7ee8a72967b5d3fe30": "984d323eefd417d4934ffb0b00fe4813",
".git/objects/45/80dd0a704bc01a35977b3af07f0f90c91b1360": "9785ff70d8b39476c0db11708b0f9d38",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/4b/825dc642cb6eb9a060e54bf8d69288fbee4904": "75589287973d2772c2fc69d664e10822",
".git/objects/50/a1f3976ddc4f662231ee45702f9566ddf2e336": "c133c98fb79a3a01eac3f8d645ce6c73",
".git/objects/52/480a63b1f184ea74afb06662aa98fa98864864": "6f8b2cf71be2b4830601f9db57eded45",
".git/objects/53/9aff0168e6fcdd88f4f4752e89a9d7668c2ef4": "1031f342667e465d6056cbe64d39eb3f",
".git/objects/58/31471e9c0eb55b08e4fed19428d59356ded866": "20709f746ed6fc8245d9984bd13efec5",
".git/objects/58/89eab03fb1f3870b26d988bedde5d8e2a909ae": "2d2ca3fbe455296f3a9d2d900fb2a5c5",
".git/objects/5f/1cf7348b9f4cd715769fa1213760e3c0f88eb2": "d878a79cc6f88a7fac5561b199409f46",
".git/objects/67/56fdc510e5a9be1fdc0bc1cdd3edcda27b74de": "aaf68295f9aebf0fc39068fea1a24b24",
".git/objects/78/7ec606491b13c3805af1dc6c3353d08e549c52": "bb6d729e5d348a190dce387a04654c4e",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/82/fd04fdaa5612290ffdf0bb6baabf24534c013a": "6b651a9551795da18fab645690d457e0",
".git/objects/85/ed80d867e6c992d18f29f7a0edef37246eac84": "a0458eb3ae93d1e910940ab19c34ff0c",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8e/49d7c0601a319352cad8cd6478fd56d0cb85d8": "51137203bd63d2365bee8b31f083760a",
".git/objects/8e/6a790a9583f9b093ecc1036b4eb63f3e068477": "7c4f1bf33e802ea333e69caa77a6f3d7",
".git/objects/97/23ef2819d81a6e430dd80f9bf5b6afa83edc7a": "c55dc437fe909a1a59fcb03cab928328",
".git/objects/9d/4e4239375c2b710bf12ae2b80dc292e3bd404a": "6ae36720cca7139ed75b2778802eda6a",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a2/02f2649d57ef074be942e3bf25ff515ea47001": "54e24e5d72e8ab676635ab24259a019c",
".git/objects/a2/0fb95449e6a8dacc0645d8ebc8f44c4aa9c0c6": "b3f5ccf2a34bb5c68ed52c8ddc6ebc5c",
".git/objects/a8/beffd3ad4fe54d6cabccf83a05477d6a986cd0": "6677888e4a051c7838b5b240c09f0981",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/b5/987cb9d84c8d9e7264e10160d2e06d75b2dca3": "7dd80825ecb8481a7bc11374887b3bfc",
".git/objects/b5/9f6379df1384af2024a4eda257e9bbbda425aa": "ff45621127489174465e6d2ec49e459e",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/ba/f27c96f08611c7a52fd99a9fcc3192cdcd5439": "7560d89a9ecef0ef59d9de7813cb754b",
".git/objects/c3/63d90cda408e40f475b27ebe5d6eccfe578362": "7f3544fe41c5f566398be0e7761e0e8d",
".git/objects/c3/a3d3d3283e2313751080267db96ab2f65e7d0a": "473c5069b097732ecb8993aa4ae46815",
".git/objects/c8/bbaba473132282c93d73b16428cb4e20030cce": "53ef924262e752efc6f2ddb79880f818",
".git/objects/cd/ec3950a090bd423f920f8de848f2511c95b223": "dbe706fd38d563b5faa8bf8cdb52794a",
".git/objects/ce/cccccb3ef40c9a2ae6843b4c50d46731bd4681": "790c2a063829fbdb9c8263ccde1c076b",
".git/objects/db/fa09a82701fb5ee535ba65f9d514d36ea6bb25": "02da73cbcc0c0a4692916a96ab0f3004",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e5/c02318d49a1906ccbd781ee0ee141501e4decd": "43b061b212504724bf3fb56670ab49da",
".git/objects/e9/77e9703f69cc29c42acefefaa893587bb80eb2": "f45e094a24b049d3425d819d17ffdfbb",
".git/objects/ef/f454e650ab8e38bbeab48d63cb22d432644e44": "e1e9a83227f6df7f4ab74908682108d2",
".git/objects/f2/7db4f115652ed19835b09aacec65b3fd86fb58": "faf0bc6af55fdf5363c0eb0ffeef6bce",
".git/objects/f9/1149f3df7fa48664470167548286c86c001540": "a868e064271b75b0f65e6cfb85755f13",
".git/objects/ff/32fd1d96add8cfd3e09e56312f8a00fad292dc": "cecadf7fc2969517cdd5f4f5b765b9ab",
".git/objects/ff/b63716f75356be52fac835bdf6473e3ea3efcc": "7f17eb00dcd386605f80ae7d555924f4",
".git/objects/ff/de779da17b8ea9cb21cf16813bcd13085768b2": "01e365aaf5e7fda4e4efe7a5efeabb61",
".git/ORIG_HEAD": "0fabc895c030f2a9287115f03f1dc986",
".git/refs/heads/master": "bafb50a8b14b350403fa78d4ebebb0f1",
".git/refs/heads/pruebas": "0555ae6d03e1c7c2d07da61658c8eefa",
".git/refs/remotes/origin/main": "580e940fbf8e94d6a0cd57fb504679ca",
".git/refs/remotes/origin/pruebas": "3aef768f65449bd3a845996608da3256",
"assets/AssetManifest.json": "2efbb41d7877d10aac9d091f58ccd7b9",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "7e7a6cccddf6d7b20012a548461d5d81",
"assets/NOTICES": "2e4e2769d2c9e0184933a632789d8eb1",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"canvaskit/canvaskit.js": "f00de1f742223b7cf4cec1c2a0cd9764",
"canvaskit/canvaskit.wasm": "efe4a5da0205bb8d8c5aca7dad981abd",
"canvaskit/profiling/canvaskit.js": "411ee45f5abb57975ee5243310c6953e",
"canvaskit/profiling/canvaskit.wasm": "c6681b1a749ad902eefcba11fed1cb3f",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "2820175149281d338f0b530755193281",
"/": "2820175149281d338f0b530755193281",
"main.dart.js": "dfda86d339a77f0d654f7c0c8626abcc",
"manifest.json": "67bc66c80d8e3369116142e7c2e949ca",
"version.json": "711679ff19b309634bd50dfb162108cb"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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
