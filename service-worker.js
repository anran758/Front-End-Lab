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
    "revision": "4084d925fe8c9bb5921be393a2e37c6d"
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
    "url": "assets/js/12.200e47bf.js",
    "revision": "29bfc8f950be7bbd9fa157e532489907"
  },
  {
    "url": "assets/js/13.222d2dd4.js",
    "revision": "0acbba1f992b502d4857f6f61388a9fe"
  },
  {
    "url": "assets/js/14.f7bd1c53.js",
    "revision": "c4eaca61f641e04285c1be4294263886"
  },
  {
    "url": "assets/js/15.34f8de48.js",
    "revision": "5e32cf0aeb95d894e66033a423eeee11"
  },
  {
    "url": "assets/js/16.ae32bcab.js",
    "revision": "84c2a559fa890bb399de809a3dac31a9"
  },
  {
    "url": "assets/js/17.126b004a.js",
    "revision": "261ff548153f2a7378eb4596cee6e214"
  },
  {
    "url": "assets/js/18.8af70bb9.js",
    "revision": "bc6c84ff6cdd26bda33d70754c385df5"
  },
  {
    "url": "assets/js/19.86496007.js",
    "revision": "ae9e71680124d083e9da5c17b8653861"
  },
  {
    "url": "assets/js/2.902ef262.js",
    "revision": "79b01da71c4c798fe4c847c1a6c167d9"
  },
  {
    "url": "assets/js/20.145f3309.js",
    "revision": "994dd9ff5b3dfe6559d9674c288c7e56"
  },
  {
    "url": "assets/js/21.06e8130f.js",
    "revision": "acfc80c29ce5b0601d00ab02bd7c3761"
  },
  {
    "url": "assets/js/22.9b341a59.js",
    "revision": "d44f2d2ccdedb2f6730118830cda24e8"
  },
  {
    "url": "assets/js/23.1cc2829e.js",
    "revision": "b7028e2cd1dfca150ab735428abd2862"
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
    "url": "assets/js/5.1c675427.js",
    "revision": "68781971bc0de1960602f7837a32dc78"
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
    "url": "assets/js/9.9f29df39.js",
    "revision": "e86feb5c30d33832b461fb43729aab46"
  },
  {
    "url": "assets/js/app.79de9a1c.js",
    "revision": "e494b1b9e38d988572e6cf46fec0b0c8"
  },
  {
    "url": "css/index.html",
    "revision": "4400b53115962ec6a4728a7e91ee78ab"
  },
  {
    "url": "further/glossary.html",
    "revision": "dcd0f6ac199dcf409303622d348017a9"
  },
  {
    "url": "further/guide/ECMA-5/index.html",
    "revision": "03c231ba71b8d1923af60170679ecf73"
  },
  {
    "url": "further/guide/ECMA-6/index.html",
    "revision": "0cdc8191b63b72378197575574777aff"
  },
  {
    "url": "further/index.html",
    "revision": "e2ce50a1c9fbc20c1fa56c37c7833199"
  },
  {
    "url": "git/index.html",
    "revision": "61a0051d025ce4634eca76be66f9a4bd"
  },
  {
    "url": "hero.png",
    "revision": "d1fed5cb9d0a4c4269c3bcc4d74d9e64"
  },
  {
    "url": "html/index.html",
    "revision": "c8f80264d134f127fabfb61e2638f303"
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
    "revision": "db83a16923cbaff74dd968de03ee738c"
  },
  {
    "url": "javascript/index.html",
    "revision": "b2b42efee957ab404c2c7065576da35c"
  },
  {
    "url": "mobile/index.html",
    "revision": "0e7b98614b6a6e8859672ff5f6cc4768"
  },
  {
    "url": "operations/index.html",
    "revision": "3ba87f1b23607872e4036468d7626e29"
  },
  {
    "url": "operations/issue.html",
    "revision": "fa443508518ddb3d720273fab668645a"
  },
  {
    "url": "REGEXP/index.html",
    "revision": "f770a1419761f1297cd7e7805e721a64"
  },
  {
    "url": "topic/2020.html",
    "revision": "c6a0f780bd0a51ff9ffdc83001557c22"
  },
  {
    "url": "typescript/index.html",
    "revision": "b115a3f80c7bb4b2da1ee379a72cc720"
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
