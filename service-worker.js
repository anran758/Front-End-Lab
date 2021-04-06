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
    "revision": "32f865d3c8c22f20b4d0345be5e8685f"
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
    "url": "assets/img/wildcard.dddaaf33.png",
    "revision": "dddaaf330863cca0325e6a369b484b41"
  },
  {
    "url": "assets/img/youtube.3d47bd3c.png",
    "revision": "3d47bd3c65c96f547b4a8329e0d18564"
  },
  {
    "url": "assets/js/10.cfb30b37.js",
    "revision": "d5896de9d05ddd5f48fe3b276f5ee3c4"
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
    "url": "assets/js/21.24fd1c9a.js",
    "revision": "40ce55df7635f1bb5ef57eff3f0aaca8"
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
    "url": "assets/js/25.83a6f165.js",
    "revision": "fccaebab08f21528c4dfd63fd371dcfd"
  },
  {
    "url": "assets/js/26.1008ef38.js",
    "revision": "9f5781f9853c04eba6e7fac2dedcd5bf"
  },
  {
    "url": "assets/js/27.d32e89ce.js",
    "revision": "16ac78e53c22322da53ff7c6fe89956e"
  },
  {
    "url": "assets/js/28.b40835d4.js",
    "revision": "05a5d80ba09e402e821d11436f4bc394"
  },
  {
    "url": "assets/js/29.b4c0c46f.js",
    "revision": "ee8b2e0dbe6085963a53297781047c54"
  },
  {
    "url": "assets/js/3.d1273278.js",
    "revision": "f4e479982b8f33951c907b444761ac49"
  },
  {
    "url": "assets/js/30.c760b087.js",
    "revision": "da836be322f04ab0bf0c46e12d31ae12"
  },
  {
    "url": "assets/js/4.0ff4bcde.js",
    "revision": "8ebe96b40cff5572f9627f9005ab49fc"
  },
  {
    "url": "assets/js/5.4735e5f3.js",
    "revision": "46d5ffe23033ff5f8960aa83b2ef164e"
  },
  {
    "url": "assets/js/6.9f214d26.js",
    "revision": "72e195e300b1def2a83543b2e285829a"
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
    "url": "assets/js/app.7ff4ea32.js",
    "revision": "d83ab3cf02b876224c2c9005afca9800"
  },
  {
    "url": "css/index.html",
    "revision": "f693c6fcf6de96dd2ecbf2bd9163d12d"
  },
  {
    "url": "css/theory.html",
    "revision": "ad6cd861ad4d42163d04d8e6f4cb7cda"
  },
  {
    "url": "further/en.html",
    "revision": "0e270484817633d3fdbc47aea08a6def"
  },
  {
    "url": "further/glossary.html",
    "revision": "4c6e9bac7d67c52cbe7b3375744d3936"
  },
  {
    "url": "further/guide/ECMA-5/index.html",
    "revision": "13be91c1781773be59a7e1cb544a6569"
  },
  {
    "url": "further/guide/ECMA-6/index.html",
    "revision": "6a9b0b2af39dc92f1d528ceae3886fca"
  },
  {
    "url": "further/index.html",
    "revision": "a3f65f58cfee556d4cbe870e01291887"
  },
  {
    "url": "git/index.html",
    "revision": "16d920ef0c240b4b12a530762ea33e30"
  },
  {
    "url": "hero.png",
    "revision": "d1fed5cb9d0a4c4269c3bcc4d74d9e64"
  },
  {
    "url": "html/index.html",
    "revision": "e6af2a0751de15a295ec6587acc44659"
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
    "revision": "fbba63f7407d43b5b87f7f8ec7f4e090"
  },
  {
    "url": "javascript/index.html",
    "revision": "9a69240a2d56433e1fc53dfa04fe3462"
  },
  {
    "url": "mobile/index.html",
    "revision": "b8e853c2c09e1a9db61ef59d8c5c7ae8"
  },
  {
    "url": "operations/index.html",
    "revision": "223e2a587032abd14e745a812a8a131b"
  },
  {
    "url": "operations/issue.html",
    "revision": "aa634db3817710d6f71c640759dacef2"
  },
  {
    "url": "REGEXP/index.html",
    "revision": "cf71918d4ef9d331b9e8dedaf7885fd5"
  },
  {
    "url": "topic/2020.html",
    "revision": "4c40e8e1d31574ba38fac42a7fb4f28e"
  },
  {
    "url": "topic/js.html",
    "revision": "e67525b34d445cfff8763c85112ab903"
  },
  {
    "url": "topic/react.html",
    "revision": "5e8dd0825f4d357ec065afabc772fa8e"
  },
  {
    "url": "topic/vue.html",
    "revision": "af24e6ebbf1a50a73c9833851de842ba"
  },
  {
    "url": "topic/webpack.html",
    "revision": "a9b82adceecbd886d9b220d96418082d"
  },
  {
    "url": "typescript/index.html",
    "revision": "c6f9ec222c27e67ebad2edbb5691620e"
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
