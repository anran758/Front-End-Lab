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
    "revision": "1df35efeb39c8e625b80e883425ffeb4"
  },
  {
    "url": "assets/css/0.styles.2fe69d74.css",
    "revision": "2ad7a01a672da234fbb357fc1ed1e65a"
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
    "url": "assets/js/11.1945b041.js",
    "revision": "d56c6a42ddf008fe6ea9c0293fc72842"
  },
  {
    "url": "assets/js/12.200e47bf.js",
    "revision": "29bfc8f950be7bbd9fa157e532489907"
  },
  {
    "url": "assets/js/13.33e68b02.js",
    "revision": "d9cb8a7f4b20b5c3e379d16c40c1d446"
  },
  {
    "url": "assets/js/14.5301a7ea.js",
    "revision": "673f9285c13a964b1a473aee64748460"
  },
  {
    "url": "assets/js/15.a13a9269.js",
    "revision": "e556aac977975e133d07bf4112d7d08e"
  },
  {
    "url": "assets/js/16.fbfe6aca.js",
    "revision": "fdb31715a175a3902a13efdb3af4fabd"
  },
  {
    "url": "assets/js/17.cf73c2c0.js",
    "revision": "781e1a82b698672812310cfc8a516786"
  },
  {
    "url": "assets/js/18.c1c1943b.js",
    "revision": "c049e151e01244c7bc7f01b300b04990"
  },
  {
    "url": "assets/js/19.c6c21f5d.js",
    "revision": "8f6d5f5974717be723c2e49807d91ae4"
  },
  {
    "url": "assets/js/2.902ef262.js",
    "revision": "79b01da71c4c798fe4c847c1a6c167d9"
  },
  {
    "url": "assets/js/20.bb2dee3e.js",
    "revision": "98db4bfae8159a6e0b7bb1f8fbac3f7c"
  },
  {
    "url": "assets/js/21.45442743.js",
    "revision": "dcca10e4a9f1ada3ca223ac4f14183a8"
  },
  {
    "url": "assets/js/22.d98acb5d.js",
    "revision": "169c7553ec9b052b466527ae241ba31c"
  },
  {
    "url": "assets/js/3.b6ecb846.js",
    "revision": "3893901fb4233a8f3555f98c6119d933"
  },
  {
    "url": "assets/js/4.344f8158.js",
    "revision": "c20a20fc55475f24a6fe053112976e84"
  },
  {
    "url": "assets/js/5.b96d279c.js",
    "revision": "8c9be029b0a267e53a2224f0e199693a"
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
    "url": "assets/js/9.1c168ea7.js",
    "revision": "e5828db7aa7ce4ce9877abab063981b7"
  },
  {
    "url": "assets/js/app.0c91daf8.js",
    "revision": "a7e6dfbe88c612f844f943833a958e12"
  },
  {
    "url": "css/index.html",
    "revision": "00d8e2ad43ba5519f173892a55a75bad"
  },
  {
    "url": "further/guide/ECMA-5/index.html",
    "revision": "6ba252834f9983edae3468808c4f8b3d"
  },
  {
    "url": "further/guide/ECMA-6/index.html",
    "revision": "e08aa90ba15f6e97388dba07a7bdd621"
  },
  {
    "url": "further/index.html",
    "revision": "de1a83a70977f6736d94e7ca6417a54e"
  },
  {
    "url": "git/index.html",
    "revision": "85e7ba232de6e2c166a51ad81ca35aef"
  },
  {
    "url": "hero.png",
    "revision": "d1fed5cb9d0a4c4269c3bcc4d74d9e64"
  },
  {
    "url": "html/index.html",
    "revision": "13eb39faa09dea259c2a80073339340c"
  },
  {
    "url": "icons/android-chrome-192x192.png",
    "revision": "f130a0b70e386170cf6f011c0ca8c4f4"
  },
  {
    "url": "icons/android-chrome-512x512.png",
    "revision": "0ff1bc4d14e5c9abcacba7c600d97814"
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
    "revision": "66830ea6be8e7e94fb55df9f7b778f2e"
  },
  {
    "url": "icons/favicon-16x16.png",
    "revision": "4bb1a55479d61843b89a2fdafa7849b3"
  },
  {
    "url": "icons/favicon-32x32.png",
    "revision": "98b614336d9a12cb3f7bedb001da6fca"
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
    "revision": "cc34bcf0123496d0bb727d5577372f2a"
  },
  {
    "url": "javascript/index.html",
    "revision": "297e90a28abdeeccaf4444d6995e8282"
  },
  {
    "url": "mobile/index.html",
    "revision": "57e6a0bda56bd8994af6f6b0362a8228"
  },
  {
    "url": "operations/index.html",
    "revision": "86a28b19e545b641e4ee0afe49ac235f"
  },
  {
    "url": "operations/issue.html",
    "revision": "c8329a019535c9d3d1e6f0e8bfca414b"
  },
  {
    "url": "REGEXP/index.html",
    "revision": "818fc09e6aa059531c31a219445f28d2"
  },
  {
    "url": "topic/2020.html",
    "revision": "295f6c01a27a80d1b7b91d07d106418e"
  },
  {
    "url": "typescript/index.html",
    "revision": "6d9b5b1e8dc756de95c2353ecb1e39b6"
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
