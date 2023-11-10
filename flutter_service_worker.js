'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "a3e5b97ee2b0d6a2b73a4c92e303af83",
".git/config": "d56cd409c6f81aa16b0e715366737a89",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "a668d0895bda05940a38834122903cfd",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
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
".git/index": "6ec1e0e03113b034237f31b780f2600c",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "6cb9c8d53a56b8af77872175e685d5fe",
".git/logs/refs/heads/main": "6cb9c8d53a56b8af77872175e685d5fe",
".git/logs/refs/remotes/origin/main": "0ee9c1e4470dca1d119dae4d4ab65046",
".git/objects/03/c531a7a4eadfbb97e5434401927ee31890cf33": "fe6b24f60048b7f218835d95c2c650ae",
".git/objects/05/5f3e1e7942717fbdbcc0b771d890905b2924b5": "b6cd7249d153582cc57c9909989afdd5",
".git/objects/06/5a156ad876ae75d08bca0aabc8c1e01f285abb": "1338ac20d12542d14345378e2fe2be26",
".git/objects/06/94dc8e7718ead7ca197eebdac78c94ccc0f026": "9f36fb1469bf247fee7a2fdf23189811",
".git/objects/0b/85bcdb86bf9e9f9fda81b13cec9c9349d47d77": "77cbf4b6cc88e2471afd14a98ef2e0ed",
".git/objects/0c/596a4e0d66b145cf89a620e7b763a0b4986226": "7f9652dda62d1cb99474276b97407016",
".git/objects/0f/63314842c22e6c5da2c3ea5dde87ed9ca24d69": "347e007286c367e1915f91378ed03a01",
".git/objects/13/7bdc30182f0003e1210f096b429714c41d56b6": "0db6f90655e7d5e6331833eb6b80d9fd",
".git/objects/13/cd596d130b66354002357dfa2c3d7939031e75": "368daeca1841cc00e61c5a4295f667c9",
".git/objects/17/5b96f41048ee497bcde2678d0021f5c5c89adf": "2a1a7c6cb6d3e39b7a95d114f8790120",
".git/objects/19/08bba1004c59f410f76be6ad6abf4d8120ad6a": "37c09490bb1659172849e8ea7ae86ca1",
".git/objects/1d/384f3748038966a5c7316223edf120dd5894dd": "a8d542276aa823dfefb8d26439e1077a",
".git/objects/1d/be72d4c6f2ddfeb82468636c1a1ca92548e113": "ca0b4773cc33cfe0bb69afe9a07a6698",
".git/objects/1e/bf993c04c08e17a0122730f8d7ce6e139c8bad": "eeb4f0d71f24758335fe1753273ad6c2",
".git/objects/1f/686edd1465272558af328ca43cb7189a0059e6": "5e83820f6d3e5392693d45bc239b2b61",
".git/objects/23/637bc3573701e2ad80a6f8be31b82926b4715f": "5f84f5c437bb2791fdc8411523eae8ff",
".git/objects/26/c359cabd5c8f1bade3b1c87f5533f718d649cd": "ecef26d4c4788bc313e96163be6c95ac",
".git/objects/27/2ae9ed6e1a4c8b8a16fb5ab59d9325fc79d613": "4eed0b5849d5f6f57bba42c98f764266",
".git/objects/28/463b095421bd36fd443106616d6ae15ea43b15": "6c93a8e5aa3ab2f505fda95453cd4ec6",
".git/objects/2d/0471ef9f12c9641643e7de6ebf25c440812b41": "d92fd35a211d5e9c566342a07818e99e",
".git/objects/32/dacaa60d9fb2ff3cd75790687f94b31600918b": "a5303f04fa709fcd7f08d25fe74fc400",
".git/objects/35/5f597cc596b184f29e710983a7fc6dcff1a50b": "4e9fb06aa76534a8333065478027b79a",
".git/objects/35/91af41948adc8001f3586d76b91181311953fc": "c91d33b29071dcff3b2b3385383761cb",
".git/objects/35/edc77aa24ffa781966a6a6b92691855a5a0ca1": "4541038f42e7f2815470f6a72a55c799",
".git/objects/37/7580cbf691d03aea79c63a3a251b1b48ac01f1": "c196d282a50e3c372b4445c6b8868297",
".git/objects/3b/b0860a0981211a1ab11fced3e6dad7e9bc1834": "3f00fdcdb1bb283f5ce8fd548f00af7b",
".git/objects/3e/ad0c622c6ad759f2d0b6480c039dee8c33e5e0": "d2ce7ea6720de320ac5b8aa225344a5e",
".git/objects/41/8706d3b01ad95e5850c93866eea983adea8856": "3ac976ca89a2208cc646a2bd91e5abb2",
".git/objects/44/7bdd596a188c1b8fd8f77ba608b9d13ec23563": "df565d29807e84de994adde88c59e149",
".git/objects/4a/88303009213c4f1a2fac7b4896af5061550b30": "2636239d337116425cd162a1a1a088db",
".git/objects/50/78e2cdc39bdcab9d020ac52aafd643b505d6e3": "15bb84cc2ae4ae0a96ad9dcb7f0a1c87",
".git/objects/51/34e6402246228fb7f58ce8fe76727a61d99a62": "6b5e5b48febe40daec7062aecdc3b39f",
".git/objects/54/b8ead0a5f5fb6e8b2866b41e6c7dc0fce7e4f9": "6b3cc4919914066f29702bc0d9657de1",
".git/objects/58/0712131535a2d19c48568c15ed611b755a0c1f": "346f085405e7fff1b376640a458bef52",
".git/objects/62/a01d6826913d9efa140d2e9f4bc0f13918e607": "44ba2af6a4f05cb190463143170ae010",
".git/objects/62/abac66de69a8267219c57876395f11e940402c": "96445181e26f55246c8223e74fcddc49",
".git/objects/66/4c7d06f22b0d56600f7f0343916fbb6440cb25": "e2f2afd01fb8253fa538762a04fe1fc3",
".git/objects/6a/4c99ff95e35b18ff6db89926e9d16b59b88654": "e41ecc2d4fc5b4897fb876b1d8a62f1b",
".git/objects/70/010cc4761157d9d7cc2d082cf342e63fe1190a": "baf21d1dacab382149ee93266543ff40",
".git/objects/71/704f7b27a307c6f565fe489aed46b9644b7a9b": "a68602e4797ce8381af00fb360952155",
".git/objects/7a/a206e904230431be148f2d2a1b4bdd8aaa7e0b": "4b93d3434dfa87e5d04d93a81bc1687d",
".git/objects/7b/ac9a555a1167bf08824513ffaaa4cd7bf3eef8": "53e2f38076da9fa71487c21dbf2598e6",
".git/objects/84/bc1573e3bba23700816945f7385840181306dd": "d02ee5be709b77f58e95740805f5779b",
".git/objects/88/3e3c93c5b81caccbe9a26df9f290ef178fd9f7": "96e6ecb80fa9ae96df7cc7522aaec22b",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8c/7a1aed602a8b20ee16ef7547ee5b4b05931195": "4dcabefc81d7e74d94a376cce682ba2e",
".git/objects/8e/0565336ba814f1b7269b517b9fbce95d35f847": "1eca0fa2e1e1ed20278938eead3f6d00",
".git/objects/8e/7f4b338840099949781ab85496d7a67fae46f1": "7f2803c236e9e7d95ef6ed16a3a2bd13",
".git/objects/96/416d042ecb531df2ac014140e05b9b106c2b74": "2eab1a164d138720f5132f9ba4ca243f",
".git/objects/97/2d8be4e5f1f2950701e45ce4991e257e210062": "876942ce66927114543365431aa6d5d1",
".git/objects/9b/ea1b780e734e332a1f8f042da55aa4d9ba20c7": "64b3e9db23bae9830d24efdf1536138c",
".git/objects/9f/18ba9bdc6b695527dddb14023060b2b0ae15e7": "37a3e4deaa5376c0f06a6ec0906bdbb6",
".git/objects/a3/003ea0c4e58c6a85a14991b61b3cf1366020ef": "e6c7d1d83e841e131e0d06011b21a9b2",
".git/objects/a4/1761e4f9c63ce277de9565f4b24033a9810a0f": "5f26b5a5c0da07f1c12953984f7a167b",
".git/objects/a4/aa5da8c7f77443cfbc88d6f567efa6eb7b2b3e": "8fab2a32652e04bba35582f961c41238",
".git/objects/a9/6de28453e52b6fdb2e5e08d17cfa35d185e99e": "36b2dd65d25da44c85387f2fa1447fac",
".git/objects/a9/87a4e7746ac950c0ea0bb96aace82f3f809199": "c923373bb036019902773b74490f2579",
".git/objects/ac/f8b7643af2adf21a39f37b082935249e9874b3": "35ca6c6bcc176cd92740e57c2ea87ef2",
".git/objects/ae/37803d1933c3979fd1b939ff61cc667b0b70dc": "f5c08c98e82ebd9034dbd78b64a292fa",
".git/objects/b2/2fdb2d1fa6a3bced274617d58f6ab432bb0d8b": "1b405e4dfab487f51d41422d52600614",
".git/objects/b3/5f86662cdd0fddf30a832b72b0fbb8a09704c1": "43079cdce32dde8b6f0b5c8d9913f517",
".git/objects/b5/59df292810b65ce85a7b4aafefe41f37eab3ff": "f8444cd33812e1290b3f6cf027cfdeca",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b8/17c24c17f2bb176ec0829d045b1b4700df5d88": "70f58ae6a2de9ab530ab7d846a220cf7",
".git/objects/b8/315facb46fedd8a79ce23d556b66c903821e94": "8b6053bd55be08722cb5959c24486a05",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ba/c46ebb90e73baf1de8ba391c766758fab506b7": "de54ec9e5f40929b48d34a4135125864",
".git/objects/bb/ac29f5ef7a40bf14c0901bc1457724156bc0de": "1393f20f0610cabefe2d4f45865b0f54",
".git/objects/c7/7663172ca915a99a594ca17d06f527db05657d": "6335b074b18eb4ebe51f3a2c609a6ecc",
".git/objects/ca/21bf130464abbeaed8c73fe632fe189b84a5f9": "06ed38f525c7a28c6992b38901fd5764",
".git/objects/cb/623055a1264ec42992278aa5b8adae84e0052b": "9245b6cddec5130ccf575b5cf3bdb29c",
".git/objects/cc/6be782dc4b5c2bf1eb6524d6dfb32ac351b8d3": "de4bd10ba53cd4c957d47d29e378293e",
".git/objects/d2/60e9c4384a107f73928076e5f8d1818a5a80d0": "1108f05b9fd7d37664fdf6c364816e5f",
".git/objects/d3/efa7fd80d9d345a1ad0aaa2e690c38f65f4d4e": "610858a6464fa97567f7cce3b11d9508",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d8/bf892458e4d771015740ae8164f7869baf02fa": "5844269c3dd615821bc49c98ee079196",
".git/objects/d9/ecf9f07faf26e9e5dd8839ba2047a921d0405f": "49b94e8fd136f0df29d725d71ade5780",
".git/objects/da/d868781ad8ca5631553cbe4dad0252be3ea4c7": "e108adcb629a0f8813e439e8b9f6872a",
".git/objects/e4/7a58932a0f2bda59a5c2c92503da411bfbd0ba": "bee3e5f3f6819f2b58ba9377a777eb3e",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/eb/c22bcffdecd549571eed59fd23593f279656bf": "6280375a987e31c221c992cd142dd9ef",
".git/objects/f1/0a07db7cc295bafe4e9a0ceea8417433ecbb20": "12a7bd69cae2b3a46f4545771c01d159",
".git/objects/f5/3d04e9c6a335fd7bc71170b26c15b01b9f916a": "8dc7a4f9c883c0e6dfbf2d47767dfdc1",
".git/objects/f6/9cccacf3a47ea3b76d36dbd233c674dcd29c11": "10c78f5a21ee18d6b3e37adf5043555c",
".git/objects/fb/df4a54c874af8913e3afd5723db3d6fdcbe9a3": "1051ac647d5f8aa06310d7d9cf9a030a",
".git/refs/heads/main": "b910bd62da0ac6c49d34970ee28831a8",
".git/refs/remotes/origin/main": "b910bd62da0ac6c49d34970ee28831a8",
"assets/AssetManifest.json": "11dfefa93dd6e3053371c2451291bb6d",
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
"assets/lang/ar.json": "1b513aec958286c8c57a77559a8d27e4",
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
"index.html": "78b14882b087cafc00b14989fe742303",
"/": "78b14882b087cafc00b14989fe742303",
"main.dart.js": "2ae78dc0f40bda775bde3e433c0348fc",
"manifest.json": "2a3424ac2c8790f4de6e10715e73cafa",
"version.json": "18d8901f6cce4ee46cb05e029183869d"};
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
