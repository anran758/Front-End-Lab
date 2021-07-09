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
    "revision": "dfe2add88f0ffb86848a4d82dc290fce"
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
    "url": "assets/js/11.519ba01b.js",
    "revision": "df98b40da26cab72a213addb0658d1f6"
  },
  {
    "url": "assets/js/12.39cc6ca3.js",
    "revision": "e54ce3690f775739e72b93609c093a4f"
  },
  {
    "url": "assets/js/13.e91e7728.js",
    "revision": "2753d29d9e164bea7b7ad65085ab6a50"
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
    "url": "assets/js/18.9fe6a229.js",
    "revision": "2da2e3a57707874a7ae8302a9baba755"
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
    "url": "assets/js/22.1932e21c.js",
    "revision": "59fd6e3da8a77cd3255e07bea27bdb4b"
  },
  {
    "url": "assets/js/23.845a8511.js",
    "revision": "43a6f5f78b889153bf9b247f25803532"
  },
  {
    "url": "assets/js/24.8949837b.js",
    "revision": "111baa1bbe74cf35c5371e0277dfe953"
  },
  {
    "url": "assets/js/25.7e8eb8e0.js",
    "revision": "75a671d9811c806baee0e070fe2131a4"
  },
  {
    "url": "assets/js/26.922bfb58.js",
    "revision": "d76f33621976625a3dc647142bba5432"
  },
  {
    "url": "assets/js/27.675c89be.js",
    "revision": "736cd6f65f807aab18f55861655cf14b"
  },
  {
    "url": "assets/js/28.20440020.js",
    "revision": "8ac65e5dfd3d9f78023addcb5fce271b"
  },
  {
    "url": "assets/js/29.73e05d8e.js",
    "revision": "40f9a037617b899b4e4845f34405529d"
  },
  {
    "url": "assets/js/3.fbcf91a6.js",
    "revision": "1038d5b030dc5231eb3797df85dfd185"
  },
  {
    "url": "assets/js/30.9771b58a.js",
    "revision": "874b95f7780fb53a352b2fba38e2889f"
  },
  {
    "url": "assets/js/31.6755a233.js",
    "revision": "584b8c931f9617a473739eacb39c5e4c"
  },
  {
    "url": "assets/js/4.050bc6fc.js",
    "revision": "7d92712d83d4e3bd0e1becf9c7309d7d"
  },
  {
    "url": "assets/js/5.5ee46dd2.js",
    "revision": "cd92c5d9bc843acbcd09634647acf175"
  },
  {
    "url": "assets/js/6.c336eb54.js",
    "revision": "f8fb1bdfdff5c8eb9c6068db151744e6"
  },
  {
    "url": "assets/js/7.94539ea5.js",
    "revision": "2cf63218b707fb6fea93e5f58ec7869b"
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
    "url": "assets/js/app.867ed31b.js",
    "revision": "0dfd92776978d31ac356b5ea4cacf3a8"
  },
  {
    "url": "css/index.html",
    "revision": "dbbd8f044b833ebd4e019c7bf6e37ad5"
  },
  {
    "url": "css/theory.html",
    "revision": "e3352e3ea482e51e53bb1cf18f5a656d"
  },
  {
    "url": "further/en.html",
    "revision": "b06742eeb307b83c779a8bf259c83c46"
  },
  {
    "url": "further/glossary.html",
    "revision": "abf760af309e8666a371b680037391f5"
  },
  {
    "url": "further/guide/ECMA-5/index.html",
    "revision": "69ea3722765dd485c000e5fa0f1c4f2c"
  },
  {
    "url": "further/guide/ECMA-6/index.html",
    "revision": "d80706f1e16eb7f55c2ca92ff1523b25"
  },
  {
    "url": "further/index.html",
    "revision": "708f10370d1de6e5100127cc500768c9"
  },
  {
    "url": "git/index.html",
    "revision": "e3e6a6c3e6c9467b67f2f642f7eb842b"
  },
  {
    "url": "hero.png",
    "revision": "d1fed5cb9d0a4c4269c3bcc4d74d9e64"
  },
  {
    "url": "hg/index.html",
    "revision": "4393fb6a9de50c28c388d0847157db5b"
  },
  {
    "url": "html/index.html",
    "revision": "9f126cfe28718fe2990c248f24dd9d9f"
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
    "revision": "dfedd1e7d680f944562a5947924dbd97"
  },
  {
    "url": "javascript/index.html",
    "revision": "517280bed18e725b0f427108b3b8810d"
  },
  {
    "url": "mobile/index.html",
    "revision": "414e4c73a7da17d6e114cfdbdd0cec4e"
  },
  {
    "url": "operations/index.html",
    "revision": "2f5e8743b3077a86d0bfabd263ad058a"
  },
  {
    "url": "operations/issue.html",
    "revision": "ff1797611200546901fd20ea887dc25a"
  },
  {
    "url": "REGEXP/index.html",
    "revision": "e8877d4f766f4ea49e017b7219502f48"
  },
  {
    "url": "topic/2020.html",
    "revision": "4e3a22ab664b29d34dfd9184e9513538"
  },
  {
    "url": "topic/js.html",
    "revision": "69eeb43cca56421df60a10933f2a4086"
  },
  {
    "url": "topic/react.html",
    "revision": "38dadadb6972ca8efbfbdc691ab415ea"
  },
  {
    "url": "topic/vue.html",
    "revision": "e203ed4d0144e8c5c58c6ef6eac3a8b0"
  },
  {
    "url": "topic/webpack.html",
    "revision": "3b4a9e2b3fe0697cb3f28b502360f30d"
  },
  {
    "url": "typescript/index.html",
    "revision": "a4ab7b126b9ad36fe7bc7818a2786ae9"
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
