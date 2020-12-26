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
    "revision": "eabf44eba80e51a444cde3589a6b8f8f"
  },
  {
    "url": "assets/css/0.styles.5f314a78.css",
    "revision": "2bfd6f9f9deb4c2d9647002b03453f3e"
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
    "url": "assets/img/wildcard.dddaaf33.png",
    "revision": "dddaaf330863cca0325e6a369b484b41"
  },
  {
    "url": "assets/img/youtube.3d47bd3c.png",
    "revision": "3d47bd3c65c96f547b4a8329e0d18564"
  },
  {
    "url": "assets/js/10.8e2bb6c9.js",
    "revision": "0145c3256621af833e028f7b7aea5aec"
  },
  {
    "url": "assets/js/11.11086550.js",
    "revision": "132516baff74c715439c0cd0118130bb"
  },
  {
    "url": "assets/js/12.cdf9df99.js",
    "revision": "4e9491b0aa0d0920dbbd54879973429e"
  },
  {
    "url": "assets/js/13.20e1f2e8.js",
    "revision": "1f323807dd23eb54e8857fc8152b1d78"
  },
  {
    "url": "assets/js/14.3c941d22.js",
    "revision": "54c594bef59fb39024551dc1c1398a19"
  },
  {
    "url": "assets/js/15.23ca3dbb.js",
    "revision": "a1246efd29fd86fe711cd518fee728e4"
  },
  {
    "url": "assets/js/16.6a89357b.js",
    "revision": "1dfcfd8c3cde590c7ad9f41706c19a1c"
  },
  {
    "url": "assets/js/17.625959da.js",
    "revision": "f85fb5add64b172e600aa224d8335852"
  },
  {
    "url": "assets/js/18.b94ccb28.js",
    "revision": "1dba9bb553e172b1cf6f67eeebcac637"
  },
  {
    "url": "assets/js/19.e199cec1.js",
    "revision": "5e5bfabc216ccda920d73f4b9b42ef63"
  },
  {
    "url": "assets/js/2.9a3fe56a.js",
    "revision": "d12d2da05e5e349ae9df4b324710edd9"
  },
  {
    "url": "assets/js/20.8003694a.js",
    "revision": "12c48a31d68da7cb23036f30357d21e2"
  },
  {
    "url": "assets/js/21.37d17652.js",
    "revision": "91e21ca47cfaedc5545eb772a3024dae"
  },
  {
    "url": "assets/js/22.5e9569bf.js",
    "revision": "032eca1861d4f5e56f5e4af55db6d2f2"
  },
  {
    "url": "assets/js/23.d762adf5.js",
    "revision": "29583febbf9bc41fbea36ac9398468dd"
  },
  {
    "url": "assets/js/24.d8bb8f08.js",
    "revision": "71d1dee733250a6616d3c4324fb2ef61"
  },
  {
    "url": "assets/js/3.b6ecb846.js",
    "revision": "3893901fb4233a8f3555f98c6119d933"
  },
  {
    "url": "assets/js/4.88b13e9f.js",
    "revision": "7e5c5304d77835f2dc00312e7e80f7d5"
  },
  {
    "url": "assets/js/5.f936d390.js",
    "revision": "141a6ee4b66f6b6e2e4c6c3de2bd202f"
  },
  {
    "url": "assets/js/6.a1ed3d85.js",
    "revision": "2c07e6cb6b608bb319a229fd079d0d35"
  },
  {
    "url": "assets/js/7.20255447.js",
    "revision": "4ca9c3390a4ea6f96a46795a2e8875a1"
  },
  {
    "url": "assets/js/8.9f778e62.js",
    "revision": "8b4aac0cea963e0c42d136549c505fee"
  },
  {
    "url": "assets/js/9.65ca0f6d.js",
    "revision": "858441575a5f3f00236cf225f1587514"
  },
  {
    "url": "assets/js/app.96e85cd8.js",
    "revision": "107fccf500cc026e534f5a1305c2c660"
  },
  {
    "url": "css/index.html",
    "revision": "fc30aa5b2c5e0dc1c58bb7ae6dd2dd5f"
  },
  {
    "url": "further/en.html",
    "revision": "bc9485a40e36b5e863e02fd70d3441e6"
  },
  {
    "url": "further/glossary.html",
    "revision": "0198ca571fce61782cbb2c5147374b06"
  },
  {
    "url": "further/guide/ECMA-5/index.html",
    "revision": "6b72d46e7b3a80a28cff2da4310a1e2b"
  },
  {
    "url": "further/guide/ECMA-6/index.html",
    "revision": "093e862319359a4a4611330b2391c4ae"
  },
  {
    "url": "further/index.html",
    "revision": "1b8f3910a5ec6b158bb7e3042defc277"
  },
  {
    "url": "git/index.html",
    "revision": "6dfd950985ad2da55770b98b0f55dc0c"
  },
  {
    "url": "hero.png",
    "revision": "d1fed5cb9d0a4c4269c3bcc4d74d9e64"
  },
  {
    "url": "html/index.html",
    "revision": "271849b73b7616fef1cc474f27739620"
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
    "revision": "1dc8ece788cf1c022006eedf2afd2ccf"
  },
  {
    "url": "javascript/index.html",
    "revision": "935072cd5f84daf97d06a607055cbcfe"
  },
  {
    "url": "mobile/index.html",
    "revision": "3a17b6f954364f9d383f84479138ae77"
  },
  {
    "url": "operations/index.html",
    "revision": "4752772cdef48a976baceb48bd70e62b"
  },
  {
    "url": "operations/issue.html",
    "revision": "1ff749a935bba58ccfbbb278a12490ee"
  },
  {
    "url": "REGEXP/index.html",
    "revision": "97ec3691d8d1c4d62729598d587c8d25"
  },
  {
    "url": "topic/2020.html",
    "revision": "da1649bf249cf26994f36d953b74b737"
  },
  {
    "url": "typescript/index.html",
    "revision": "fabe0b762ebd89a396306a62f0f86a3f"
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
