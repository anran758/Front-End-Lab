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
    "revision": "5331f9e07dcb193de88b559b1566f1ac"
  },
  {
    "url": "assets/css/0.styles.598a8a72.css",
    "revision": "3a58db40d19a3c57f18d1364b60c7d11"
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
    "url": "assets/img/wildcard.dddaaf33.png",
    "revision": "dddaaf330863cca0325e6a369b484b41"
  },
  {
    "url": "assets/img/youtube.3d47bd3c.png",
    "revision": "3d47bd3c65c96f547b4a8329e0d18564"
  },
  {
    "url": "assets/js/10.1b7aceeb.js",
    "revision": "d1cf57d8763d892d23aa31b6ba3449ce"
  },
  {
    "url": "assets/js/11.5054fcae.js",
    "revision": "bfabc9f0711482e0653606c98bcd3119"
  },
  {
    "url": "assets/js/12.ec95fd6a.js",
    "revision": "7bbf534970f9b9834dcbdd01e95ba835"
  },
  {
    "url": "assets/js/13.189161f3.js",
    "revision": "de4699539fbb6e59080c246bd80af775"
  },
  {
    "url": "assets/js/14.c67ee07e.js",
    "revision": "1271b2203cd9a96c32fa3a6f7f1a2f50"
  },
  {
    "url": "assets/js/15.988d1507.js",
    "revision": "857264a5b21536cf27854cbba8e054cc"
  },
  {
    "url": "assets/js/16.421e0fdd.js",
    "revision": "14cf0d8f9d1184b52ba83f5519baf4c2"
  },
  {
    "url": "assets/js/17.16064589.js",
    "revision": "34c5c2d8f5ad33b72d64fbb61ebc1792"
  },
  {
    "url": "assets/js/18.48dae1d0.js",
    "revision": "e6f140397f3891897706e9feaba3f08e"
  },
  {
    "url": "assets/js/19.ce99456d.js",
    "revision": "ee31495bc8e0cc92df1127081ce41cbe"
  },
  {
    "url": "assets/js/2.bbbbf786.js",
    "revision": "2e950d761e8077bf441a23e90820954d"
  },
  {
    "url": "assets/js/20.f3e9f8a3.js",
    "revision": "1c8f17b6a4de0ce4cfd3c4e5ed335c9a"
  },
  {
    "url": "assets/js/21.f1952a42.js",
    "revision": "1030ca7bd329a2dc6b69bf81c08825d7"
  },
  {
    "url": "assets/js/22.1c005594.js",
    "revision": "4bacf706ac4f8fa134bed77747d3637c"
  },
  {
    "url": "assets/js/23.d86caa46.js",
    "revision": "af5af74ccd02ac22d7a2859ab98e3c20"
  },
  {
    "url": "assets/js/24.688fd878.js",
    "revision": "3bb473750f190cbbd04635cb8c406ec5"
  },
  {
    "url": "assets/js/25.a3c4e690.js",
    "revision": "fd23647957d6e47cc8625870096d338a"
  },
  {
    "url": "assets/js/26.ef91bc83.js",
    "revision": "74cae1f4444c5765261f17a75734bcc2"
  },
  {
    "url": "assets/js/27.0e36f832.js",
    "revision": "961228fa03157f82e5718fd2745d9d00"
  },
  {
    "url": "assets/js/28.dcf8080d.js",
    "revision": "828cd162c7ae68f77b9c71a82cfedd9c"
  },
  {
    "url": "assets/js/29.a6afb771.js",
    "revision": "d3d0d79606f6f2679410536c91b50557"
  },
  {
    "url": "assets/js/3.d1273278.js",
    "revision": "f4e479982b8f33951c907b444761ac49"
  },
  {
    "url": "assets/js/4.7ba053a9.js",
    "revision": "c3e44ebe02a8e8676d61dc736d36a83a"
  },
  {
    "url": "assets/js/5.4735e5f3.js",
    "revision": "46d5ffe23033ff5f8960aa83b2ef164e"
  },
  {
    "url": "assets/js/6.c9b9a70f.js",
    "revision": "c79333dab30e1247d11affcfc61af0d6"
  },
  {
    "url": "assets/js/7.915779a9.js",
    "revision": "408b8a83cfd080b4eaa420c6ae0b4597"
  },
  {
    "url": "assets/js/8.09add6ea.js",
    "revision": "19afc0072ac189d55b5b1a676e84c1f0"
  },
  {
    "url": "assets/js/9.e7daab79.js",
    "revision": "9d0b49706ca29aa15a83c22d3f501d6f"
  },
  {
    "url": "assets/js/app.c94eddd6.js",
    "revision": "2c338bb7397a44e6d1052f2745b52aea"
  },
  {
    "url": "css/index.html",
    "revision": "80d755bf47073e449d86141aa6a3c163"
  },
  {
    "url": "css/theory.html",
    "revision": "ac7b6ddda4110d7b69d13fb64ab03afa"
  },
  {
    "url": "further/en.html",
    "revision": "a5b4dc07ef271f9cfe9697a948b3a8ca"
  },
  {
    "url": "further/glossary.html",
    "revision": "419c5a5697e9c450d9a2ef058543e4f5"
  },
  {
    "url": "further/guide/ECMA-5/index.html",
    "revision": "0ea9f19918ebe3a6cfe4b641fa68a313"
  },
  {
    "url": "further/guide/ECMA-6/index.html",
    "revision": "b477364f2403ee5d52e58632b3da6adb"
  },
  {
    "url": "further/index.html",
    "revision": "2239c7e7c33773a98753a7f266302ffe"
  },
  {
    "url": "git/index.html",
    "revision": "0f1c0f8a88bc9dfa839b2ba902ba0dcf"
  },
  {
    "url": "hero.png",
    "revision": "d1fed5cb9d0a4c4269c3bcc4d74d9e64"
  },
  {
    "url": "html/index.html",
    "revision": "8c55614adda4a89046f6b6627780f387"
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
    "revision": "acce161987eb9efe138e664bee74a0af"
  },
  {
    "url": "javascript/index.html",
    "revision": "ed7eacbce77b1c6de29cf5220e81eea8"
  },
  {
    "url": "mobile/index.html",
    "revision": "f2c0c0d31c94fd491273994d514521d7"
  },
  {
    "url": "operations/index.html",
    "revision": "85dd26c2712e83bc3aa1c123d6d691c2"
  },
  {
    "url": "operations/issue.html",
    "revision": "217520e722babda5558e23adb67195c1"
  },
  {
    "url": "REGEXP/index.html",
    "revision": "7d2a22ec840a7caa0d685ec24b868abc"
  },
  {
    "url": "topic/2020.html",
    "revision": "1636628397f3db44d6923fd8ad2325e6"
  },
  {
    "url": "topic/react.html",
    "revision": "51f009208ea89c154e9019b6de2d8212"
  },
  {
    "url": "topic/vue.html",
    "revision": "a82a247d59f334cad4182a22e6955d48"
  },
  {
    "url": "topic/webpack.html",
    "revision": "9cd504d3c7bc838b944bc1e9804e763b"
  },
  {
    "url": "typescript/index.html",
    "revision": "b9eafba974ff305879e525f5dfabd185"
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
