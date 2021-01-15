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
    "revision": "6346668c7bafa5fff798238a7abca57d"
  },
  {
    "url": "assets/css/0.styles.568a1a9e.css",
    "revision": "7a1491ea4722de7161a116e96aa25fed"
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
    "url": "assets/js/10.d373fc0d.js",
    "revision": "8baa354f66e887d16c35a4c2b9c6869b"
  },
  {
    "url": "assets/js/11.93c522ad.js",
    "revision": "f0bc75088a05ba8c8c72e79b1bbf0239"
  },
  {
    "url": "assets/js/12.717fb26f.js",
    "revision": "0d145acf29f2feb28612454d632ae71a"
  },
  {
    "url": "assets/js/13.0175127c.js",
    "revision": "e563ff7ef55211dccebedf3dff753e33"
  },
  {
    "url": "assets/js/14.ea28cfbf.js",
    "revision": "8891bcb7b5894527bc5a244b0a6f7daa"
  },
  {
    "url": "assets/js/15.63ef0ab7.js",
    "revision": "4168c9ed683e2ae0903511eddc49844e"
  },
  {
    "url": "assets/js/16.fd35657a.js",
    "revision": "98bb94c2e905b594ece66342e7e1c2aa"
  },
  {
    "url": "assets/js/17.617c16dc.js",
    "revision": "00ecfc33a69fb325322540291a4505eb"
  },
  {
    "url": "assets/js/18.78c3b20e.js",
    "revision": "8bb61c275e522adf6583e420d8490914"
  },
  {
    "url": "assets/js/19.d3b3134d.js",
    "revision": "8a4ddef1fd0b67dd0e42f3b3055ad76d"
  },
  {
    "url": "assets/js/2.9879a1bd.js",
    "revision": "fe60158cb211ab47c8e84be5f103b955"
  },
  {
    "url": "assets/js/20.65ebe5c0.js",
    "revision": "e6c5dc8eee6566bc4e83714355f7cdd6"
  },
  {
    "url": "assets/js/21.570f5a27.js",
    "revision": "a3b26e54c247a9fc968301a8400c8669"
  },
  {
    "url": "assets/js/22.973b1ba0.js",
    "revision": "1d2049ceca7f94c39116236c19986465"
  },
  {
    "url": "assets/js/23.b91c601b.js",
    "revision": "1538084025aa946a1f61cb32b0a378e8"
  },
  {
    "url": "assets/js/24.ed98c258.js",
    "revision": "7b223a1ddff04a2c8f787d12d9cf59dd"
  },
  {
    "url": "assets/js/25.9920aef1.js",
    "revision": "4e2db5ab8a396b2fd99f8cf209df7d51"
  },
  {
    "url": "assets/js/3.ecb19ede.js",
    "revision": "df4ce58d18dd369b531d10a5a8ede6ec"
  },
  {
    "url": "assets/js/4.d61f9fde.js",
    "revision": "3d18ea49ac33ac63c315d82496b1d432"
  },
  {
    "url": "assets/js/5.a85e15d3.js",
    "revision": "8a426f037073688111e8ccc6c1a7cdae"
  },
  {
    "url": "assets/js/6.b016cd7c.js",
    "revision": "f72484977c656cc5f77b8023464b4744"
  },
  {
    "url": "assets/js/7.38a5338f.js",
    "revision": "9cc23343078ef66f7024a096cd56436e"
  },
  {
    "url": "assets/js/8.87118d6b.js",
    "revision": "6b5e1cac5cac7f1396c04f3f573a57e4"
  },
  {
    "url": "assets/js/9.0025dc86.js",
    "revision": "1790d3a78c27689ff293dd903d17295a"
  },
  {
    "url": "assets/js/app.a847f893.js",
    "revision": "6974c24b995adac56fa3843febfbface"
  },
  {
    "url": "css/index.html",
    "revision": "f10c1c4fc0974897229bb16e47c98393"
  },
  {
    "url": "further/en.html",
    "revision": "2da0e3c4150901992bbc7f7a1f39c90b"
  },
  {
    "url": "further/glossary.html",
    "revision": "1d28154286fac05cea08d7d90b1993b8"
  },
  {
    "url": "further/guide/ECMA-5/index.html",
    "revision": "fa522b20f7beb6cb0daf0eef5566e95e"
  },
  {
    "url": "further/guide/ECMA-6/index.html",
    "revision": "c3c25cc3010783cb5d054a5b20c4db4b"
  },
  {
    "url": "further/index.html",
    "revision": "7cba89fb3a43dc46851eb24508167eb3"
  },
  {
    "url": "git/index.html",
    "revision": "2dc58e6c3f5d5e6482bc9759ade601f0"
  },
  {
    "url": "hero.png",
    "revision": "d1fed5cb9d0a4c4269c3bcc4d74d9e64"
  },
  {
    "url": "html/index.html",
    "revision": "7153d2fa241205a4c35a96c6d6c4f1d4"
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
    "revision": "80445769eaf0602de3a38b7ad1dd2c5e"
  },
  {
    "url": "javascript/index.html",
    "revision": "9616121f88d3c88edd4a8d80b53d2318"
  },
  {
    "url": "mobile/index.html",
    "revision": "8723e5882dceb94721f301759d50c770"
  },
  {
    "url": "operations/index.html",
    "revision": "cf4177594e888ab73b70801675ef8517"
  },
  {
    "url": "operations/issue.html",
    "revision": "eef85dbd854390b8caa3b896190c2ed3"
  },
  {
    "url": "REGEXP/index.html",
    "revision": "e794b864a744ed047ba9598d71bff4bf"
  },
  {
    "url": "topic/2020.html",
    "revision": "d53da4defccd4c4e1bbd271d9bfa651c"
  },
  {
    "url": "typescript/index.html",
    "revision": "95bc48afdfb64c56e1e5560795f340ec"
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
