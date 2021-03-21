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
    "url": "1.jpeg",
    "revision": "e01e6434c0106d634b27e693cd9c13a2"
  },
  {
    "url": "2.jpeg",
    "revision": "8a01e649a335bde2478c53f6e04a2d30"
  },
  {
    "url": "3.jpeg",
    "revision": "c83fbf16b12b4f9ddd83b79235a94f09"
  },
  {
    "url": "4.jpeg",
    "revision": "b016e356a0ea52104f6f466de76bc66a"
  },
  {
    "url": "404.html",
    "revision": "49e26717be42bcd99fc95c524b8fd273"
  },
  {
    "url": "5.jpeg",
    "revision": "ff00ccffeeeedebacc53fb2f02e52fea"
  },
  {
    "url": "assets/css/0.styles.2163bcaa.css",
    "revision": "89e8f5db8c8e289cb03f24f1635c6ce4"
  },
  {
    "url": "assets/fonts/element-icons.535877f5.woff",
    "revision": "535877f50039c0cb49a6196a5b7517cd"
  },
  {
    "url": "assets/fonts/element-icons.732389de.ttf",
    "revision": "732389ded34cb9c52dd88271f1345af9"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.48009cd6.js",
    "revision": "8e1e56ee443965db454653eebf8547b9"
  },
  {
    "url": "assets/js/11.3ef22147.js",
    "revision": "44d80c123076201339d8cc6b6c71a1ab"
  },
  {
    "url": "assets/js/12.1078b9db.js",
    "revision": "130a92d3679daa5c8ea754c1a2d44cfc"
  },
  {
    "url": "assets/js/13.e30e191f.js",
    "revision": "e49b0b8f388edcce598a0363f96930b1"
  },
  {
    "url": "assets/js/14.7e523d97.js",
    "revision": "585add958a064329f0f96eb126d271a1"
  },
  {
    "url": "assets/js/15.214073fb.js",
    "revision": "a369083a68050987bbba5d8b157c1ccd"
  },
  {
    "url": "assets/js/16.d405661d.js",
    "revision": "c4452ce83b3116c9e260f6f53907272b"
  },
  {
    "url": "assets/js/17.e7074638.js",
    "revision": "e5a5e0c6ed5d129f1f7c690d75f7491b"
  },
  {
    "url": "assets/js/18.ac700e96.js",
    "revision": "674afc0ab38f2adf5aedf4f9248930c6"
  },
  {
    "url": "assets/js/19.4ed32732.js",
    "revision": "d15c3fcca3796d646f862beb81cf087c"
  },
  {
    "url": "assets/js/20.92dbd837.js",
    "revision": "4cca68133f505a66c046a18e2db82faf"
  },
  {
    "url": "assets/js/21.87254afa.js",
    "revision": "896314d80d0c79d7a7257651b2b0825d"
  },
  {
    "url": "assets/js/22.5ccdc7c2.js",
    "revision": "1f7311032e710c3c946cc94cf7729f68"
  },
  {
    "url": "assets/js/23.ee59309e.js",
    "revision": "281c677230879d81bc408e831c15a5da"
  },
  {
    "url": "assets/js/24.0a02ff84.js",
    "revision": "7de77ddf20e6168ebb0e768878df7ad8"
  },
  {
    "url": "assets/js/25.aba31f42.js",
    "revision": "33f1d0a53000269687b2c019be610fcd"
  },
  {
    "url": "assets/js/26.7d67af69.js",
    "revision": "cb8fc3b1f8aa29e78435120f2aaa901d"
  },
  {
    "url": "assets/js/27.7ff62f7f.js",
    "revision": "d358db32d5e9c51861619458c6fed5f2"
  },
  {
    "url": "assets/js/28.5342a643.js",
    "revision": "dab67799f2d0844f6462a4ca8d5c1aad"
  },
  {
    "url": "assets/js/29.17bba851.js",
    "revision": "7c1f65c77785a3dcba57ec289eec8dca"
  },
  {
    "url": "assets/js/3.43011e0b.js",
    "revision": "5797deaa03045b030430492a8e0011b9"
  },
  {
    "url": "assets/js/30.35afbacc.js",
    "revision": "00b7c8ad69050b9afa0a3ae6732aa635"
  },
  {
    "url": "assets/js/31.fa21b093.js",
    "revision": "6d249099fd9f1a2f041b160a239cd5ec"
  },
  {
    "url": "assets/js/32.9a9832fa.js",
    "revision": "8b6f63202f24af4defa237f766c8c1c1"
  },
  {
    "url": "assets/js/4.a48f21e3.js",
    "revision": "7d38217966a9fddd7df10ac2859bf85a"
  },
  {
    "url": "assets/js/5.eed9ec6e.js",
    "revision": "68cc6aa016ddd721401876b530aceca9"
  },
  {
    "url": "assets/js/6.94a14664.js",
    "revision": "65287ea1215ffad237081e484b710c69"
  },
  {
    "url": "assets/js/7.52aff822.js",
    "revision": "12ff1643e4d3edc9d3488daffc0e4a30"
  },
  {
    "url": "assets/js/8.6e89422d.js",
    "revision": "fc3b99511e95704d8b93a0d268167d75"
  },
  {
    "url": "assets/js/9.aadac41b.js",
    "revision": "9c0067f8986efe6e701b6d25f25b0073"
  },
  {
    "url": "assets/js/app.eb1f64e8.js",
    "revision": "04e77052de7519944918bd2500399878"
  },
  {
    "url": "assets/js/vendors~notification.c4421e20.js",
    "revision": "76078ea184902799882af0b3ccb56b70"
  },
  {
    "url": "chat.png",
    "revision": "39fad2947246c8676d8ae34c47939d10"
  },
  {
    "url": "coffee.jpeg",
    "revision": "f4fb651968cef56e279e1c10ed51b053"
  },
  {
    "url": "frp.png",
    "revision": "ddd3398a3de5a3ea2ba77881487787e5"
  },
  {
    "url": "guide/common/accesstoken.html",
    "revision": "32e81da3bcd6c48a45f70a2bc0fca864"
  },
  {
    "url": "guide/common/init.html",
    "revision": "cf111d1cf4696bff5c414414aa93f931"
  },
  {
    "url": "guide/donate/index.html",
    "revision": "2ce8904da13888eea17c2f82270279fc"
  },
  {
    "url": "guide/index.html",
    "revision": "3485869976430e7da6458ee5c035f5bb"
  },
  {
    "url": "guide/miniprogram/login.html",
    "revision": "68e5c33dd90ab43317d6258a4cca66d1"
  },
  {
    "url": "guide/miniprogram/ocr.html",
    "revision": "5098ae02cc1f611c26d9d94893863694"
  },
  {
    "url": "guide/miniprogram/qrcode.html",
    "revision": "162dbdd581511e89193b0735afc16e80"
  },
  {
    "url": "guide/miniprogram/subscribemsg.html",
    "revision": "19ddf935806842705882df913de1f7ba"
  },
  {
    "url": "guide/tools/frp.html",
    "revision": "50875ddd123eca7abe077a55944416fe"
  },
  {
    "url": "guide/wxcp/callback.html",
    "revision": "6da6480859758f693e8f56e73463e230"
  },
  {
    "url": "guide/wxcp/handmsg.html",
    "revision": "8fef73a5b659840763659d8a29db387c"
  },
  {
    "url": "guide/wxcp/media.html",
    "revision": "ea0a91f73db63547e51c9b0a4beb9d07"
  },
  {
    "url": "guide/wxcp/oauth.html",
    "revision": "0a36284ec0f7c5ca53acbef8761a3d85"
  },
  {
    "url": "guide/wxcp/sendmsg.html",
    "revision": "58d97484adbbd5ccbd9c33e1e6c937fc"
  },
  {
    "url": "guide/wxmp/callback.html",
    "revision": "6d17df67f5b09abfa5ce4788fa872344"
  },
  {
    "url": "guide/wxmp/custom_menu.html",
    "revision": "bdbd3c469a8c65a761d46087c04065de"
  },
  {
    "url": "guide/wxmp/jssdk.html",
    "revision": "442337cc07df68591c49b233da2f97a4"
  },
  {
    "url": "guide/wxmp/oauth.html",
    "revision": "0469167d176e0465b98725ecec4c4b70"
  },
  {
    "url": "guide/wxmp/sendmsg.html",
    "revision": "e967f51014308fd72c307f95532f9c90"
  },
  {
    "url": "guide/wxmp/templatemsg.html",
    "revision": "d1da5c56ce3ac9fc604ce6d8a0409925"
  },
  {
    "url": "guide/wxpay/api-v2.html",
    "revision": "ca626d33bb80e2f3f62548530adf7af9"
  },
  {
    "url": "guide/wxpay/api-v3.html",
    "revision": "9ad96b89103f5e7ea74ed967c1d29cd7"
  },
  {
    "url": "guide/wxpay/index.html",
    "revision": "2676ab2017070a9b19f6ca45c723eecb"
  },
  {
    "url": "index.html",
    "revision": "5919ba5e54ae5dff7e64f61714bea4b2"
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
