/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "0a14e66d40bcb0444afe3bc9eb587629"
  },
  {
    "url": "assets/css/0.styles.7c75eff0.css",
    "revision": "a9a4fcc3395d7d889882d34cf96f97a2"
  },
  {
    "url": "assets/img/anima-loading.987a20ca.gif",
    "revision": "987a20ca6dec8041959d0df60b537df6"
  },
  {
    "url": "assets/img/auto-width.ff609947.gif",
    "revision": "ff6099474f202ef22c37f8fcca159cce"
  },
  {
    "url": "assets/img/avatar-1.86a7ee23.png",
    "revision": "86a7ee2383604b759d717ec78e6ef0a7"
  },
  {
    "url": "assets/img/background-more.0e00a028.png",
    "revision": "0e00a0287a23b945b140843830512f8a"
  },
  {
    "url": "assets/img/box-model-example.228c2571.png",
    "revision": "228c257187559a1386ff494ceabad197"
  },
  {
    "url": "assets/img/browse-http-request.84fd44e2.png",
    "revision": "84fd44e2013d908be282703caf0ee338"
  },
  {
    "url": "assets/img/drawing_graphics.972b4827.png",
    "revision": "972b482746ab69092d615277e42397c8"
  },
  {
    "url": "assets/img/flexbox-2.d4a6dbcd.gif",
    "revision": "d4a6dbcdae6b6c81b89db5de90229130"
  },
  {
    "url": "assets/img/image-hover.a54357c4.gif",
    "revision": "a54357c4bf16e52f9f40647a606ad4e7"
  },
  {
    "url": "assets/img/regex.4fe466ae.jpg",
    "revision": "4fe466aea58cc6277936b3d828d0f7a5"
  },
  {
    "url": "assets/img/regexper.748c4ada.png",
    "revision": "748c4ada5c49a466391725541da41566"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/img/tcp-1.b5e1eff7.png",
    "revision": "b5e1eff7034d37428ffe5c2b4e999f7f"
  },
  {
    "url": "assets/img/tcp-2.4dd0a848.png",
    "revision": "4dd0a8483fd4405683510726e537e942"
  },
  {
    "url": "assets/img/vue-lifecycle-v3.b1ccfc95.svg",
    "revision": "b1ccfc95dedf6303cd47917c533b3fc3"
  },
  {
    "url": "assets/img/wildcard.dddaaf33.png",
    "revision": "dddaaf330863cca0325e6a369b484b41"
  },
  {
    "url": "assets/img/youtube.3d47bd3c.png",
    "revision": "3d47bd3c65c96f547b4a8329e0d18564"
  },
  {
    "url": "assets/js/10.53d2610a.js",
    "revision": "e703361b72aa97fa8cc811d37e9ec414"
  },
  {
    "url": "assets/js/11.ca2b3b6e.js",
    "revision": "32fc2f23af8db01128756f4c7dd674a7"
  },
  {
    "url": "assets/js/12.5f28529e.js",
    "revision": "70446c109e833160d0d467334d3f7448"
  },
  {
    "url": "assets/js/13.bd1e6d8f.js",
    "revision": "e11beef5bdb06e1f0b7a21da25361d16"
  },
  {
    "url": "assets/js/14.1d6a7e91.js",
    "revision": "7b26620eac2e239ef566cb6a1ec4e599"
  },
  {
    "url": "assets/js/15.76389a78.js",
    "revision": "48b407ab870eeb934469e6f7b88d103c"
  },
  {
    "url": "assets/js/16.be57113e.js",
    "revision": "a031d501437c1f23940ce92020c7d4d7"
  },
  {
    "url": "assets/js/17.29468d01.js",
    "revision": "3706419ca631026b3c9438708baefe3c"
  },
  {
    "url": "assets/js/18.21bfc688.js",
    "revision": "097992d93a876bc5b98e52ea07390594"
  },
  {
    "url": "assets/js/19.ca5bf8e5.js",
    "revision": "296bcc61333e165728752d56ac1a10d8"
  },
  {
    "url": "assets/js/2.dd11b671.js",
    "revision": "f9f5f70ef3f6884b4cce4b90d8019b6f"
  },
  {
    "url": "assets/js/20.2a2a4c1e.js",
    "revision": "4f97603e56964b933ff27345a7c4c072"
  },
  {
    "url": "assets/js/21.936b9ed9.js",
    "revision": "e4f29bd0b00af5c56423cfd098819f65"
  },
  {
    "url": "assets/js/22.2158d763.js",
    "revision": "dc5d43209a3c4e3087e4ba0a59ccd0bd"
  },
  {
    "url": "assets/js/23.740cff7f.js",
    "revision": "b5e5e1c80f130d21158f5e33facb8764"
  },
  {
    "url": "assets/js/24.a192f10c.js",
    "revision": "6609f6b18f21afa769ce2d90b14b53bb"
  },
  {
    "url": "assets/js/25.14e266a6.js",
    "revision": "018bf03a0babadf464731cf0dc31bb32"
  },
  {
    "url": "assets/js/26.3d49a83a.js",
    "revision": "e20b0bb60b9f66949fdd8ff804a846dc"
  },
  {
    "url": "assets/js/27.a98d0339.js",
    "revision": "da35ecc8c4caf333ae48bb0997f97a6a"
  },
  {
    "url": "assets/js/28.558c102a.js",
    "revision": "307c08755ca86848b1b5a6a9c12f7224"
  },
  {
    "url": "assets/js/29.a74ef1c5.js",
    "revision": "e0fd269d20f5e3cce547b5e70407c41a"
  },
  {
    "url": "assets/js/3.b7851be8.js",
    "revision": "bbc1d119cbd6cd0e78f45d03a08f2a42"
  },
  {
    "url": "assets/js/30.12f5bcd9.js",
    "revision": "bc4a2b851178c4dd0bd47e667f7ea279"
  },
  {
    "url": "assets/js/4.965ae2a0.js",
    "revision": "3bc29a5770147c069d6a35d64fabcd03"
  },
  {
    "url": "assets/js/5.7c8daeee.js",
    "revision": "9ed2f2b29faf1c88fc6d49a4377fa966"
  },
  {
    "url": "assets/js/6.bfdbd473.js",
    "revision": "7f34d652407242e894c3932bdd8a0b44"
  },
  {
    "url": "assets/js/7.41774179.js",
    "revision": "ef982ae5ae1c94288d0ffacb687b4a4a"
  },
  {
    "url": "assets/js/8.3d603ca8.js",
    "revision": "76234808d87d5a4e76e6bd710ac2d2bb"
  },
  {
    "url": "assets/js/9.3c30c90f.js",
    "revision": "fb421df3e4590973a782d2c2ae8df6aa"
  },
  {
    "url": "assets/js/app.1b07547c.js",
    "revision": "53ec15843f91f2a93ef00b960eded942"
  },
  {
    "url": "css/index.html",
    "revision": "91f79d73d107deab5b6e0c4d1813acc3"
  },
  {
    "url": "css/theory.html",
    "revision": "35e5c8714653da6c8503d35503672404"
  },
  {
    "url": "further/en.html",
    "revision": "e220db5fc12cad380e8fbd2f905380b6"
  },
  {
    "url": "further/glossary.html",
    "revision": "119f62c78e3991ed05b668c8c856ef29"
  },
  {
    "url": "further/guide/ECMA-5/index.html",
    "revision": "cf5bc68d701aee23471f010e7e29b142"
  },
  {
    "url": "further/guide/ECMA-6/index.html",
    "revision": "19426127ce33aa7f4e496c8b63164f17"
  },
  {
    "url": "further/index.html",
    "revision": "93205713d64c87d5e1c3c7f927c78dbf"
  },
  {
    "url": "git/index.html",
    "revision": "8d105e41878317d3863c60d3be1a235c"
  },
  {
    "url": "hero.png",
    "revision": "d1fed5cb9d0a4c4269c3bcc4d74d9e64"
  },
  {
    "url": "html/index.html",
    "revision": "eb6913d652752d0ca1bd7def40e99964"
  },
  {
    "url": "icons/android-chrome-192x192.png",
    "revision": "9d3f6a84421ecbd578f5496080762e09"
  },
  {
    "url": "icons/android-chrome-512x512.png",
    "revision": "a05263d748bf4ed259cedae2b2f28858"
  },
  {
    "url": "icons/apple-touch-icon-120x120.png",
    "revision": "936d6e411cabd71f0e627011c3f18fe2"
  },
  {
    "url": "icons/apple-touch-icon-152x152.png",
    "revision": "1a034e64d80905128113e5272a5ab95e"
  },
  {
    "url": "icons/apple-touch-icon-180x180.png",
    "revision": "c43cd371a49ee4ca17ab3a60e72bdd51"
  },
  {
    "url": "icons/apple-touch-icon-60x60.png",
    "revision": "9a2b5c0f19de617685b7b5b42464e7db"
  },
  {
    "url": "icons/apple-touch-icon-76x76.png",
    "revision": "af28d69d59284dd202aa55e57227b11b"
  },
  {
    "url": "icons/apple-touch-icon.png",
    "revision": "9e289eeea31b53d717ee95d4ad40ba5f"
  },
  {
    "url": "icons/favicon-16x16.png",
    "revision": "e9c1c9351a6a6323781408c182caff9c"
  },
  {
    "url": "icons/favicon-32x32.png",
    "revision": "5cbe7b62c0026834fbdf943356f10446"
  },
  {
    "url": "icons/logo.svg",
    "revision": "c15691bd028f3a5ce679bfda8f86d4b0"
  },
  {
    "url": "icons/msapplication-icon-144x144.png",
    "revision": "b89032a4a5a1879f30ba05a13947f26f"
  },
  {
    "url": "icons/mstile-150x150.png",
    "revision": "058a3335d15a3eb84e7ae3707ba09620"
  },
  {
    "url": "icons/safari-pinned-tab.svg",
    "revision": "f22d501a35a87d9f21701cb031f6ea17"
  },
  {
    "url": "index.html",
    "revision": "d2d2035ca2715a637883197f272dd429"
  },
  {
    "url": "javascript/index.html",
    "revision": "8bb7244df553352aa52f1a2d3158a8b4"
  },
  {
    "url": "mobile/index.html",
    "revision": "3e0abbd78609a1a97beb2fcc94095114"
  },
  {
    "url": "operations/index.html",
    "revision": "fc09703f63b1057a6c50d2b804be25a8"
  },
  {
    "url": "operations/issue.html",
    "revision": "31b729675e6f8449ef1467f79539fc1d"
  },
  {
    "url": "REGEXP/index.html",
    "revision": "7ab711e9a5237b42031e503f4d79ba09"
  },
  {
    "url": "topic/2020.html",
    "revision": "a059e10ba0369deae7b133796d68f18e"
  },
  {
    "url": "topic/js.html",
    "revision": "8e89db05be14f53b47e7b234440f524d"
  },
  {
    "url": "topic/react.html",
    "revision": "c24a3ed8a5d7b84b876a318ba04f219b"
  },
  {
    "url": "topic/vue.html",
    "revision": "4e1c3e3e8296a9f120036ad98f79ac98"
  },
  {
    "url": "topic/webpack.html",
    "revision": "9f5781497bde0e448abbb6a99ade4429"
  },
  {
    "url": "typescript/index.html",
    "revision": "1cba608bc97b92dd2920f948f34a2b5d"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
