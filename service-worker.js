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
    "revision": "7e9c12473dfce86da492fb98ba8605a0"
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
    "url": "assets/img/mvvm-design.a73f4794.png",
    "revision": "a73f47946354559cecd290684cd15774"
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
    "url": "assets/js/10.a1d05808.js",
    "revision": "3dc94902a712a13d4aad67d968143438"
  },
  {
    "url": "assets/js/11.d5ab43c9.js",
    "revision": "2523bf619f673981ab9fd3202cade5c2"
  },
  {
    "url": "assets/js/12.3842438d.js",
    "revision": "97d4057803cef90cd72e806302847794"
  },
  {
    "url": "assets/js/13.3d9e8296.js",
    "revision": "19ef406ebc61d1edb1a84a8680519435"
  },
  {
    "url": "assets/js/14.8e94d4eb.js",
    "revision": "868a42acfe3cf7be39a5babdb2fea389"
  },
  {
    "url": "assets/js/15.c4ac5dbd.js",
    "revision": "19bbf6e318a65e0ad84a1646b84b1c41"
  },
  {
    "url": "assets/js/16.0bab477b.js",
    "revision": "ebb8b17013734015678d90c0d74825fb"
  },
  {
    "url": "assets/js/17.d0d5757c.js",
    "revision": "8b90a51c29701ef61d8a0837c2d16b09"
  },
  {
    "url": "assets/js/18.9a4ef9ed.js",
    "revision": "83146c7551f4702ec89049ac9f92778b"
  },
  {
    "url": "assets/js/19.e8491ae9.js",
    "revision": "344c026ba9fc4e655fa9e236eaabd32c"
  },
  {
    "url": "assets/js/2.8da06e8a.js",
    "revision": "b560ee130ccfb163f25dfcfe4bd7108c"
  },
  {
    "url": "assets/js/20.2c725af9.js",
    "revision": "076d41733cf5a77c457a6b236ddb5894"
  },
  {
    "url": "assets/js/21.10e87515.js",
    "revision": "82553232041f941e42314659aff6bdfd"
  },
  {
    "url": "assets/js/22.8c53e8dc.js",
    "revision": "dd4d485740f1581e08006d1bd2dac2f4"
  },
  {
    "url": "assets/js/23.a554b14e.js",
    "revision": "5dbafd7f5c9993de0d5f0f8f3c05d04a"
  },
  {
    "url": "assets/js/24.21092e92.js",
    "revision": "879555d2f599fd69a5e7870920a5f7ab"
  },
  {
    "url": "assets/js/25.3c34ac7f.js",
    "revision": "724a7c2bd02015165fbefd55f7dfe23f"
  },
  {
    "url": "assets/js/26.3da3a3e9.js",
    "revision": "9693f7551cc23ec2462d0861e8c93d5d"
  },
  {
    "url": "assets/js/27.392ef148.js",
    "revision": "2dd094cb21c2e44ac9b53ac059471c14"
  },
  {
    "url": "assets/js/28.d36f1edf.js",
    "revision": "92d34e5e3754aa4e0d8a3e2ce45695c5"
  },
  {
    "url": "assets/js/29.64746066.js",
    "revision": "162f99ee51dcb8425a79b7ba479c9b40"
  },
  {
    "url": "assets/js/3.a899c7c9.js",
    "revision": "2ce9b6a07cca8777e785d3d19e799655"
  },
  {
    "url": "assets/js/30.c1566d74.js",
    "revision": "a9212e43d70845dc1a26e515f83ae4e6"
  },
  {
    "url": "assets/js/4.9d78f6ae.js",
    "revision": "d43dd95d8bd590fcf127f5c7fb9913ed"
  },
  {
    "url": "assets/js/5.b31af9b8.js",
    "revision": "f74132f340cb7b770dc6c44735190f52"
  },
  {
    "url": "assets/js/6.c336eb54.js",
    "revision": "f8fb1bdfdff5c8eb9c6068db151744e6"
  },
  {
    "url": "assets/js/7.6742dcd6.js",
    "revision": "e025a25a3071b316f202f457275d7478"
  },
  {
    "url": "assets/js/8.49ac6693.js",
    "revision": "c04b7d5ae11edee3c2fa3c8a620c8990"
  },
  {
    "url": "assets/js/9.f8be94ac.js",
    "revision": "92a846f4002ec65624e3429513a62060"
  },
  {
    "url": "assets/js/app.7daa1d3e.js",
    "revision": "0f5e16ecce26102135d90685a87e26e0"
  },
  {
    "url": "css/index.html",
    "revision": "ebf4fba3ca433bbb5921d673ec6acd54"
  },
  {
    "url": "css/theory.html",
    "revision": "a362ab57722c3dfeaf97ca74ba3cf013"
  },
  {
    "url": "further/en.html",
    "revision": "fa96ea9c8cf759c01bd7cca19075d42d"
  },
  {
    "url": "further/glossary.html",
    "revision": "4084caeddfd1311b69cc60af629c6cb5"
  },
  {
    "url": "further/guide/ECMA-5/index.html",
    "revision": "de1478d386529411aec9092645e3dd24"
  },
  {
    "url": "further/guide/ECMA-6/index.html",
    "revision": "469a55624a8bc330e47898db3fa0d100"
  },
  {
    "url": "further/index.html",
    "revision": "f7fbfa3fac4b3a24df638b98c2897f0a"
  },
  {
    "url": "git/index.html",
    "revision": "c7ab7faee3da839c922f633b948f3a65"
  },
  {
    "url": "hero.png",
    "revision": "d1fed5cb9d0a4c4269c3bcc4d74d9e64"
  },
  {
    "url": "html/index.html",
    "revision": "cfe4850b37cf48848c4dde4dbec7314c"
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
    "revision": "92a450d5f0a0c34bd2805b0334cc05a9"
  },
  {
    "url": "javascript/index.html",
    "revision": "c4ae4b4cd2d23734cbe408598e531fe4"
  },
  {
    "url": "mobile/index.html",
    "revision": "e1fd25839886eed583a0776df8d03dee"
  },
  {
    "url": "operations/index.html",
    "revision": "082ec65411ab81685f69cec9e0833ee2"
  },
  {
    "url": "operations/issue.html",
    "revision": "5a1ed15a24d90d81fc1059796f679a3c"
  },
  {
    "url": "REGEXP/index.html",
    "revision": "f617e0b9cd736c09001bbf92fe6dccc4"
  },
  {
    "url": "topic/2020.html",
    "revision": "284ae4418999fd0f4a13d07e61b3a7ed"
  },
  {
    "url": "topic/js.html",
    "revision": "5d05c6df93d0144026f7540c50a61f24"
  },
  {
    "url": "topic/react.html",
    "revision": "87e8012887c0db414c80f058e1fb290d"
  },
  {
    "url": "topic/vue.html",
    "revision": "bdbdeb2f5b3266076210a998832f12f4"
  },
  {
    "url": "topic/webpack.html",
    "revision": "67290a2ccd3c16a57ca33c91feb36851"
  },
  {
    "url": "typescript/index.html",
    "revision": "7129fed4521d75cf4292ff6a53b9e14f"
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
