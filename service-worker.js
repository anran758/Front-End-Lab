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
    "revision": "fa3ea6c4caa0b30510b484c13e496d43"
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
    "url": "assets/js/10.53d2610a.js",
    "revision": "e703361b72aa97fa8cc811d37e9ec414"
  },
  {
    "url": "assets/js/11.9497bada.js",
    "revision": "0562e5ee28b747a458a0b296e297f52c"
  },
  {
    "url": "assets/js/12.9d3ec7ac.js",
    "revision": "6480d701dab105f7d53f7a618c592a5c"
  },
  {
    "url": "assets/js/13.d3f88e47.js",
    "revision": "227421f1f7e1448b7c0beb235215ba47"
  },
  {
    "url": "assets/js/14.8e94d4eb.js",
    "revision": "868a42acfe3cf7be39a5babdb2fea389"
  },
  {
    "url": "assets/js/15.9f74cb18.js",
    "revision": "cbac8aed85e2701836331f57a8364f65"
  },
  {
    "url": "assets/js/16.04205f9a.js",
    "revision": "de68a2f1dbde15370cf998ba054cd2f2"
  },
  {
    "url": "assets/js/17.a880aafe.js",
    "revision": "0a141e68e324d94287314432a73e7753"
  },
  {
    "url": "assets/js/18.3427c57c.js",
    "revision": "48795a5831a26fc69fa1aa9784e51f10"
  },
  {
    "url": "assets/js/19.7afb6994.js",
    "revision": "2e8c65b8e082d154db9f089b542e9a32"
  },
  {
    "url": "assets/js/2.8da06e8a.js",
    "revision": "b560ee130ccfb163f25dfcfe4bd7108c"
  },
  {
    "url": "assets/js/20.678a24f1.js",
    "revision": "d4fbee6d6de40c7f3b2e236c458fe0e6"
  },
  {
    "url": "assets/js/21.da64f771.js",
    "revision": "703a96465b9ea6f6bf0cfba35700195d"
  },
  {
    "url": "assets/js/22.5124ffad.js",
    "revision": "dc673405c30da49d9cf2c3d893eab4f6"
  },
  {
    "url": "assets/js/23.d970ceed.js",
    "revision": "4eb6f01e95479f89bb3c5a8f40537d40"
  },
  {
    "url": "assets/js/24.506161de.js",
    "revision": "ae7c9026dc29cc437e30e1e9a8b5c5ee"
  },
  {
    "url": "assets/js/25.ae740e3b.js",
    "revision": "77a0685313c596377f43014500ae4e74"
  },
  {
    "url": "assets/js/26.a2788e09.js",
    "revision": "346759ee5c02e6d80c94a7c4640655c0"
  },
  {
    "url": "assets/js/27.d6326deb.js",
    "revision": "8a693b8937580315b0d3613253f2013e"
  },
  {
    "url": "assets/js/28.754cff40.js",
    "revision": "73d780f90bb7737a809ae1e8e7bee9ec"
  },
  {
    "url": "assets/js/29.5d5e2534.js",
    "revision": "454e6a9beeb7b3590eead5aa5c3ec70d"
  },
  {
    "url": "assets/js/3.50a80f9f.js",
    "revision": "0b43ee6987f48fe11ef95662673fa2bf"
  },
  {
    "url": "assets/js/30.7a890b15.js",
    "revision": "132947100b3e337d349fe2624271a5c8"
  },
  {
    "url": "assets/js/31.f55cdaec.js",
    "revision": "5716627b4463c249611f20e3826de65a"
  },
  {
    "url": "assets/js/32.ab687f40.js",
    "revision": "0e6402bd60437ac758228c80d5f15814"
  },
  {
    "url": "assets/js/33.d9d3699d.js",
    "revision": "39cb9ccb8cab3d5635242f17cceae337"
  },
  {
    "url": "assets/js/4.c1430d63.js",
    "revision": "3d7b9708ebe42abbf0ecbacf826eaf4d"
  },
  {
    "url": "assets/js/5.69e9e9b0.js",
    "revision": "4f8346458b78f09bd977b0078891a09d"
  },
  {
    "url": "assets/js/6.c336eb54.js",
    "revision": "f8fb1bdfdff5c8eb9c6068db151744e6"
  },
  {
    "url": "assets/js/7.ae79556e.js",
    "revision": "1a7a2021ddd07cbe90ff9cd8f1ec584b"
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
    "url": "assets/js/app.696a2afd.js",
    "revision": "2a76df43a6c39b27d4156cabe1b26b15"
  },
  {
    "url": "css/index.html",
    "revision": "1115d82923c9a96030359d7910630b85"
  },
  {
    "url": "css/theory.html",
    "revision": "7a7f4470c36fb10a5bba7fd12a885d48"
  },
  {
    "url": "further/booklist.html",
    "revision": "a4636bcd126389da66252ac386c36297"
  },
  {
    "url": "further/en.html",
    "revision": "88a3ef298f2109a01e2e1e120c1a1140"
  },
  {
    "url": "further/glossary.html",
    "revision": "3eaf70d8941475ea62757d62d23bdf0f"
  },
  {
    "url": "further/guide/ECMA-5/index.html",
    "revision": "19feb6abe213a8c4f14c2a2f5f08bd97"
  },
  {
    "url": "further/guide/ECMA-6/index.html",
    "revision": "7adb59383d77fd2e99fe089286ccf797"
  },
  {
    "url": "further/index.html",
    "revision": "d404db63f555ef1d2b23d8d7114c9f1d"
  },
  {
    "url": "git/index.html",
    "revision": "4e02ca365e305245317f1408a545c0e3"
  },
  {
    "url": "hero.png",
    "revision": "d1fed5cb9d0a4c4269c3bcc4d74d9e64"
  },
  {
    "url": "hg/index.html",
    "revision": "9dedd3e83bbaaa2e346761990ac82d00"
  },
  {
    "url": "html/index.html",
    "revision": "e8d08a1e646e7c2a751774b807d89fc3"
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
    "revision": "a0676ce88af8e01545e4f2f7e7340af0"
  },
  {
    "url": "javascript/index.html",
    "revision": "cd4732a51a78d898aa2e0434cb7363f1"
  },
  {
    "url": "jira/index.html",
    "revision": "a01dc81754ddf495e0cb94b9e449a085"
  },
  {
    "url": "mobile/index.html",
    "revision": "2ad2606121a41fc9cfdf8660d1ca7593"
  },
  {
    "url": "operations/index.html",
    "revision": "cbc3fce512d89833dd4918830075f2c9"
  },
  {
    "url": "operations/issue.html",
    "revision": "8c45f0729d72c9c351bbf9231c235b58"
  },
  {
    "url": "REGEXP/index.html",
    "revision": "dd1762218502cdfe10df09c5ce77b576"
  },
  {
    "url": "topic/2020.html",
    "revision": "bb3c1aac36d9f7f983473716b232bdbf"
  },
  {
    "url": "topic/js.html",
    "revision": "855d39cef91a263146aa37c54387a5cd"
  },
  {
    "url": "topic/react.html",
    "revision": "a90cc7d6094c6eabf1eee7fde1ae8595"
  },
  {
    "url": "topic/vue.html",
    "revision": "1eea6b42e3eed4033b1d5fc74392c806"
  },
  {
    "url": "topic/webpack.html",
    "revision": "7f3835963b87c5ef6d6c884f29959302"
  },
  {
    "url": "typescript/index.html",
    "revision": "2910e02a01a6fb8cff33fdf4c77345e0"
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
