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
    "revision": "1fd110a42d9917588fc8e82d2b26e236"
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
    "url": "assets/js/10.37459e97.js",
    "revision": "b94dd0635c15c4563bc67046c1da149c"
  },
  {
    "url": "assets/js/11.4a4ac751.js",
    "revision": "9821c4ccbc4d301c98604a586f63fd1d"
  },
  {
    "url": "assets/js/12.39b00e6c.js",
    "revision": "1f7b09a3694861b2b3991bf2caf81471"
  },
  {
    "url": "assets/js/13.661b724d.js",
    "revision": "be379f6240ffd8981acfe60ad0d634c9"
  },
  {
    "url": "assets/js/14.fe6c1fb8.js",
    "revision": "6c919437a786f3c7d5a8a2414fffaaa4"
  },
  {
    "url": "assets/js/15.48b92ad2.js",
    "revision": "33752964adaa6bf406900721a875cbd7"
  },
  {
    "url": "assets/js/16.416adcd8.js",
    "revision": "ad5ad9604ba03512e303592c52852023"
  },
  {
    "url": "assets/js/17.9c8e9aff.js",
    "revision": "c3db9bf6d5e58fcc86b12b5e2eae90d5"
  },
  {
    "url": "assets/js/18.9573a034.js",
    "revision": "abda8499ad835710acfd741734b6ed77"
  },
  {
    "url": "assets/js/19.76ca4dc3.js",
    "revision": "907861fcaefad48fc4fcace536e4bcda"
  },
  {
    "url": "assets/js/2.e95dad7e.js",
    "revision": "3bdd2a36a886c75e6229b99c0a2fd9d9"
  },
  {
    "url": "assets/js/20.548f626b.js",
    "revision": "1becc4bece755691215588512337b30a"
  },
  {
    "url": "assets/js/21.bb32f83d.js",
    "revision": "3c1d143f05b6ddb8476fd75fde4b906d"
  },
  {
    "url": "assets/js/22.f47c3a4e.js",
    "revision": "458228127dd7de14550d77c27a4f0451"
  },
  {
    "url": "assets/js/23.681d0d87.js",
    "revision": "433f63e5366997b7fb0b15c64abb4df7"
  },
  {
    "url": "assets/js/24.f9dadd15.js",
    "revision": "74c181d1ccec206711fcf555734f54a5"
  },
  {
    "url": "assets/js/25.3795eab7.js",
    "revision": "959bdba2c5a917c3db9435719a356495"
  },
  {
    "url": "assets/js/26.6d9dc145.js",
    "revision": "8ec4d2f068d88566fab3e75bc119e276"
  },
  {
    "url": "assets/js/27.e49049ab.js",
    "revision": "a449859f15ad7c40473fb623b5d21bbd"
  },
  {
    "url": "assets/js/28.7fcceaee.js",
    "revision": "09e9f89913794e664059a8cef9357456"
  },
  {
    "url": "assets/js/29.294f3adf.js",
    "revision": "53c6b0f0fbbad964b6daed492e5433de"
  },
  {
    "url": "assets/js/3.cb0040aa.js",
    "revision": "ddc0028a3655e6b643ef0ad9b9345e40"
  },
  {
    "url": "assets/js/30.93056ef6.js",
    "revision": "3fc6d03b33dcc3eebfc6ff79f66412d2"
  },
  {
    "url": "assets/js/4.30383b3d.js",
    "revision": "f35bbc914c2e0c79b67e6026d860dca6"
  },
  {
    "url": "assets/js/5.32ecb454.js",
    "revision": "c58bcf35290b18ccd1f6fd262181a0d5"
  },
  {
    "url": "assets/js/6.f3295765.js",
    "revision": "82177ba13dce36ba2fbc8ee549788aac"
  },
  {
    "url": "assets/js/7.b57102b3.js",
    "revision": "7b66ca69ac9fbec2cc5c2b048c288bcc"
  },
  {
    "url": "assets/js/8.8bb8aafd.js",
    "revision": "c2d978289c28c8fa4cd53a7c2fd5a8b0"
  },
  {
    "url": "assets/js/9.086fa6ab.js",
    "revision": "6efaba9087c4064f80130f73e2c907a7"
  },
  {
    "url": "assets/js/app.f030e274.js",
    "revision": "ad5901d3b84bfdeb4bb6f1ecb274b0df"
  },
  {
    "url": "css/index.html",
    "revision": "a36861fd34b5ee288a3a0de264b8d455"
  },
  {
    "url": "css/theory.html",
    "revision": "d65b12ef7f4e38e8a0e734e9374b31d2"
  },
  {
    "url": "further/en.html",
    "revision": "a85a204ec20b3a2e862b4c4d04d49c2a"
  },
  {
    "url": "further/glossary.html",
    "revision": "cc23880faa9a3a6374c057291b0170e1"
  },
  {
    "url": "further/guide/ECMA-5/index.html",
    "revision": "49dcc8342602ebe9abba53a1d767a277"
  },
  {
    "url": "further/guide/ECMA-6/index.html",
    "revision": "a982bda2cb65a9639366403b44a9d7d6"
  },
  {
    "url": "further/index.html",
    "revision": "2c2f3101fce0717ffac9f02f4fa7200b"
  },
  {
    "url": "git/index.html",
    "revision": "ae23181ddcf08942582f539352c89ac1"
  },
  {
    "url": "hero.png",
    "revision": "d1fed5cb9d0a4c4269c3bcc4d74d9e64"
  },
  {
    "url": "html/index.html",
    "revision": "4426b5fa6c13555b83c1605d8540b86e"
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
    "revision": "110128b701eead6cee95d53a0b0d4ac9"
  },
  {
    "url": "javascript/index.html",
    "revision": "f375a50449011729fa3e00b9569b72e0"
  },
  {
    "url": "mobile/index.html",
    "revision": "8d983fad27f6aa8074e266684d023d3e"
  },
  {
    "url": "operations/index.html",
    "revision": "5122d1eed8f2ef0fc28ce616dbee2807"
  },
  {
    "url": "operations/issue.html",
    "revision": "c3317786b18b85b8695ab181c46e52c4"
  },
  {
    "url": "REGEXP/index.html",
    "revision": "48070e87534843bdb77c2beba9db6175"
  },
  {
    "url": "topic/2020.html",
    "revision": "02b4a4dded4a9df6b25012fbe244eae2"
  },
  {
    "url": "topic/js.html",
    "revision": "1a5b0ab8771d543562dd0c6dc12e3e7d"
  },
  {
    "url": "topic/react.html",
    "revision": "782e5b4d2e1409800abab88fbe1d4f4a"
  },
  {
    "url": "topic/vue.html",
    "revision": "7ab1acaea9c731bd69a651213664b7a8"
  },
  {
    "url": "topic/webpack.html",
    "revision": "356accf4218db3ce0300ffea253a59c5"
  },
  {
    "url": "typescript/index.html",
    "revision": "0cea2d053ed0de8511b13ea2d2c2427e"
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
