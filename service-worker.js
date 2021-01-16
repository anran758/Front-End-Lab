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
    "revision": "1f30dd9cf382f71b1b92512680261141"
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
    "url": "assets/js/10.1f318d95.js",
    "revision": "44b9a2fd85d951839a75b2ac87111d3f"
  },
  {
    "url": "assets/js/11.93c522ad.js",
    "revision": "f0bc75088a05ba8c8c72e79b1bbf0239"
  },
  {
    "url": "assets/js/12.0c16cd24.js",
    "revision": "7e951f2133e87935f1e3bcc56ab787d2"
  },
  {
    "url": "assets/js/13.e3244b9e.js",
    "revision": "89b52df4ba66f59de4134659d7cfaa39"
  },
  {
    "url": "assets/js/14.6c7fdc8e.js",
    "revision": "102efb478b2f0abe03d282fd95aaa838"
  },
  {
    "url": "assets/js/15.d7034c60.js",
    "revision": "ddcf996fa8f481b08843324f0d822644"
  },
  {
    "url": "assets/js/16.103edd07.js",
    "revision": "2992d720041e4d1fac895af5efe4cd28"
  },
  {
    "url": "assets/js/17.4d13eab4.js",
    "revision": "49da984b0fc6e158e0fd1a525d42e0e6"
  },
  {
    "url": "assets/js/18.1c43b515.js",
    "revision": "081b96186e136aa793428f2f9592dae5"
  },
  {
    "url": "assets/js/19.0782b73a.js",
    "revision": "c5cd5134d429b3f6126a4067b1dff117"
  },
  {
    "url": "assets/js/2.9879a1bd.js",
    "revision": "fe60158cb211ab47c8e84be5f103b955"
  },
  {
    "url": "assets/js/20.9ad1f611.js",
    "revision": "e6364811bb9c86830abe16c381545004"
  },
  {
    "url": "assets/js/21.069cad53.js",
    "revision": "71fe764c0dc1756dd9a16089302f82f9"
  },
  {
    "url": "assets/js/22.a212e2de.js",
    "revision": "d6b5f97d2752df7403b72eb9681f2c95"
  },
  {
    "url": "assets/js/23.22f962fd.js",
    "revision": "0626d40b951808c82bfb5452d99ab292"
  },
  {
    "url": "assets/js/24.9375b9ea.js",
    "revision": "7a6d58e3e26f0fe64c5bb1001469b687"
  },
  {
    "url": "assets/js/25.af914635.js",
    "revision": "30a35cf0029d5e5707780a85bae8d875"
  },
  {
    "url": "assets/js/26.84b9e1f9.js",
    "revision": "242d247e3dcf3e6ce00418277e455e7c"
  },
  {
    "url": "assets/js/3.a7eb30d8.js",
    "revision": "fc8d90f0187f7a4d744c045450cf19c6"
  },
  {
    "url": "assets/js/4.2c81f7d4.js",
    "revision": "6265bd4058918a3cfe2416f09111e801"
  },
  {
    "url": "assets/js/5.a85e15d3.js",
    "revision": "8a426f037073688111e8ccc6c1a7cdae"
  },
  {
    "url": "assets/js/6.602e35c4.js",
    "revision": "7e1572fba6aa986269c3046d94798af4"
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
    "url": "assets/js/app.00a70194.js",
    "revision": "20bf19f5e179900071b63538cf2627cc"
  },
  {
    "url": "css/index.html",
    "revision": "79afae4fe412f0218d54ef99b7d6415f"
  },
  {
    "url": "css/theory.html",
    "revision": "802091b8167ad2c720d0381e241cedca"
  },
  {
    "url": "further/en.html",
    "revision": "881342796d941f351373a0fbac6d9ad0"
  },
  {
    "url": "further/glossary.html",
    "revision": "ada29291b875a8efa5a4ed0c4969fbbd"
  },
  {
    "url": "further/guide/ECMA-5/index.html",
    "revision": "1be8d9a777b303e5a8b7750f09d08c36"
  },
  {
    "url": "further/guide/ECMA-6/index.html",
    "revision": "6a7dd541bec738bd6821d4f5ccf7f58a"
  },
  {
    "url": "further/index.html",
    "revision": "f855b2cd7b98e35f14c32291d048eddd"
  },
  {
    "url": "git/index.html",
    "revision": "e08a53c69ffce96c839d018cc4071409"
  },
  {
    "url": "hero.png",
    "revision": "d1fed5cb9d0a4c4269c3bcc4d74d9e64"
  },
  {
    "url": "html/index.html",
    "revision": "c6c19a8fc4609c2b8e617609036bd7a4"
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
    "revision": "d28ab6c26fc00f376d4038b5dca8b908"
  },
  {
    "url": "javascript/index.html",
    "revision": "99a8adb5a1f1d2534c6f8acf5bd9f6c3"
  },
  {
    "url": "mobile/index.html",
    "revision": "4d60701c216d0985f6c7ec64e04eac6c"
  },
  {
    "url": "operations/index.html",
    "revision": "a5ae99074fefc5399976e80723035a78"
  },
  {
    "url": "operations/issue.html",
    "revision": "eb35439bec5af90280f31c41c3932d50"
  },
  {
    "url": "REGEXP/index.html",
    "revision": "6f58e7e0a7620020dd73f41d567c54ec"
  },
  {
    "url": "topic/2020.html",
    "revision": "5e9a6fda88b293e58d9ccbd1c30c36bc"
  },
  {
    "url": "typescript/index.html",
    "revision": "b8f3e482d946ea001fb7860c4b0808cb"
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
