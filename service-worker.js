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
    "revision": "8d5b55440f0c378db231dda78145540c"
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
    "url": "assets/img/wildcard.dddaaf33.png",
    "revision": "dddaaf330863cca0325e6a369b484b41"
  },
  {
    "url": "assets/img/youtube.3d47bd3c.png",
    "revision": "3d47bd3c65c96f547b4a8329e0d18564"
  },
  {
    "url": "assets/js/10.ffc94b11.js",
    "revision": "cb04260f2c8bd37da9572e34295ac57c"
  },
  {
    "url": "assets/js/11.70ea8747.js",
    "revision": "1c102a29f187400e53e21b8171015601"
  },
  {
    "url": "assets/js/12.9bac0c6e.js",
    "revision": "b54ecdee8f7896a8f63d070141e149b8"
  },
  {
    "url": "assets/js/13.9c5408d2.js",
    "revision": "8d2ed04aac8a5b04f7c008a148d9a046"
  },
  {
    "url": "assets/js/14.89ea089a.js",
    "revision": "7c5e7d4c713e7a512eb754acca69c061"
  },
  {
    "url": "assets/js/15.e5a186ff.js",
    "revision": "d6b79d78283d0546c7cc54cc303dbf2c"
  },
  {
    "url": "assets/js/16.4870caba.js",
    "revision": "905d517a777999052aa9541b506f975d"
  },
  {
    "url": "assets/js/17.c6658c84.js",
    "revision": "1ff1a743de623066ca293395620f6107"
  },
  {
    "url": "assets/js/18.202f1ad9.js",
    "revision": "4539af85cd9be0bd4c5c84959223aa1f"
  },
  {
    "url": "assets/js/19.70f60eb0.js",
    "revision": "abd24fc1d242983d3b6f5af520f092c1"
  },
  {
    "url": "assets/js/2.43d623e4.js",
    "revision": "f073b626e3006faf74e0a455948f8753"
  },
  {
    "url": "assets/js/20.4d7cb7d1.js",
    "revision": "03dc828b89b53d173c5f5a55e05c10ce"
  },
  {
    "url": "assets/js/21.bc3a3a05.js",
    "revision": "ef42366451f029c66f56b7de00e2b80d"
  },
  {
    "url": "assets/js/22.019da6a2.js",
    "revision": "be0dd15005a37c31e323f89e6950c36f"
  },
  {
    "url": "assets/js/23.43a0528b.js",
    "revision": "eca3acbc0c229bb89fdf7c9fbb3656a9"
  },
  {
    "url": "assets/js/24.058920c6.js",
    "revision": "d00334aa7a572752b3775ad636e490d2"
  },
  {
    "url": "assets/js/25.782b9fe9.js",
    "revision": "b5bd06bfb5645721967d2b335a5023d5"
  },
  {
    "url": "assets/js/26.278b1303.js",
    "revision": "fb6f4201d129796f28ebc91ba7fd9c23"
  },
  {
    "url": "assets/js/27.3ab8fa59.js",
    "revision": "16dfcb9f3fe43437d18f0ff2b94cd889"
  },
  {
    "url": "assets/js/28.e3414e29.js",
    "revision": "c999ca8520ce481bfcce92c0d587a240"
  },
  {
    "url": "assets/js/29.e7071296.js",
    "revision": "7f0973dbff091aa725268e61a4593fe2"
  },
  {
    "url": "assets/js/3.5d7052d6.js",
    "revision": "659c0ea56f1ac310349b917176927283"
  },
  {
    "url": "assets/js/4.3288f0f7.js",
    "revision": "59270b892ade5b7a44840d1ba1f7863f"
  },
  {
    "url": "assets/js/5.25febf4b.js",
    "revision": "016b763436b74f91b484883b042d0200"
  },
  {
    "url": "assets/js/6.e01af638.js",
    "revision": "f1c8b322d9f35de8c56b0d88a3567482"
  },
  {
    "url": "assets/js/7.37a7e737.js",
    "revision": "acb257ffcd25157b4322e34b81e870e1"
  },
  {
    "url": "assets/js/8.27b3951b.js",
    "revision": "65672a9f469eaf6943d667f46bc062e7"
  },
  {
    "url": "assets/js/9.6564d21a.js",
    "revision": "e017422496b497a67507dde6ded37cc7"
  },
  {
    "url": "assets/js/app.90bc2dce.js",
    "revision": "80ea593d13ce88579a5782b8be2240c9"
  },
  {
    "url": "css/index.html",
    "revision": "b3d9f66534cd6d00567e096aa77240b7"
  },
  {
    "url": "css/theory.html",
    "revision": "972a9e776fd0bcb0d5c8c7bc13e3c96b"
  },
  {
    "url": "further/en.html",
    "revision": "535790ce66bd59e90a50ed8038cfbaf9"
  },
  {
    "url": "further/glossary.html",
    "revision": "6cc8d1e09b9d65dbc4f83618dbfeee29"
  },
  {
    "url": "further/guide/ECMA-5/index.html",
    "revision": "5d77807e48684661ad790cbeae8e3ffd"
  },
  {
    "url": "further/guide/ECMA-6/index.html",
    "revision": "3ba437b7009f7991eb8711d948096927"
  },
  {
    "url": "further/index.html",
    "revision": "2f760af7d42e6bf90558b3ad86919bf2"
  },
  {
    "url": "git/index.html",
    "revision": "7ea73bfdb4ed221186708e3182e23e4a"
  },
  {
    "url": "hero.png",
    "revision": "d1fed5cb9d0a4c4269c3bcc4d74d9e64"
  },
  {
    "url": "html/index.html",
    "revision": "c747666a48a798796142186c24b2b715"
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
    "revision": "c784d045d99c9bd881e117b4e148ff3e"
  },
  {
    "url": "javascript/index.html",
    "revision": "83acd63c9abaca1f242da78879209997"
  },
  {
    "url": "mobile/index.html",
    "revision": "139ba50b9418747d7ea8698fd2a0232b"
  },
  {
    "url": "operations/index.html",
    "revision": "1e49604c031c39909fe0ea56fb09fa60"
  },
  {
    "url": "operations/issue.html",
    "revision": "cac6899e1454dbbc4db0043ef07a7e38"
  },
  {
    "url": "REGEXP/index.html",
    "revision": "4524ae3f0472af3e4be97b1e41d3b3a9"
  },
  {
    "url": "topic/2020.html",
    "revision": "324af7cd4e88a8ca6ee75119194926a2"
  },
  {
    "url": "topic/react.html",
    "revision": "53d1de9fd6b235ac47723667165b419d"
  },
  {
    "url": "topic/vue.html",
    "revision": "8d2d49c22f3ec00ba0ee6da2bfe487b4"
  },
  {
    "url": "topic/webpack.html",
    "revision": "6ad6cbb36fcd5f5c9bb7bc4127e6ef1d"
  },
  {
    "url": "typescript/index.html",
    "revision": "6f6db357e88b1d217dcc62f38007b80e"
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
