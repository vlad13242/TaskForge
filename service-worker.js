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
    "url": "03-01.jpg",
    "revision": "61ccd31b9a99e4dc0b2115d7a181dc71"
  },
  {
    "url": "03-02.jpg",
    "revision": "0e42c83dcc174ebfdbb611ab0956fcd9"
  },
  {
    "url": "03-03.jpg",
    "revision": "dd23072447e0798b536bd162235d14c3"
  },
  {
    "url": "03-04.jpg",
    "revision": "661a64ee2776ef94b23ba82f7ee50969"
  },
  {
    "url": "03-05.jpg",
    "revision": "6f52dcb2ccb40af28a65a4b796eb918d"
  },
  {
    "url": "03-06.jpg",
    "revision": "2643698d9412e41a449c1edee719fb29"
  },
  {
    "url": "03-07.jpg",
    "revision": "c4a788f41d803f8b9bddb5adc0513be6"
  },
  {
    "url": "03-08.jpg",
    "revision": "4c810503ec4bc1adfd29904056fc2886"
  },
  {
    "url": "03-09.jpg",
    "revision": "9c798bc91f80f84b6b0e7f7fba26d65b"
  },
  {
    "url": "03-10.jpg",
    "revision": "bb5b18b65591e9d058edbc14b02c6ba5"
  },
  {
    "url": "03-11.jpg",
    "revision": "6a88d8f48c63e79c72ec45ae84a8d9ff"
  },
  {
    "url": "04-01.jpg",
    "revision": "4bbafd5dd4000461cef55f669139b17b"
  },
  {
    "url": "05-01.jpg",
    "revision": "8d54b111a4b6b5fb4cd39e4c7261b927"
  },
  {
    "url": "06-01.jpg",
    "revision": "cf2dab320c48c5ead6fe105863629e4e"
  },
  {
    "url": "06-02.jpg",
    "revision": "aa286f8fd6540b7a7b6d36392a63f505"
  },
  {
    "url": "06-03.jpg",
    "revision": "239fa5fb2a9063f1e261ae2db81fceef"
  },
  {
    "url": "06-04.jpg",
    "revision": "a2dbf924afd6a8580ce4a2d2bcd6e049"
  },
  {
    "url": "06-05.jpg",
    "revision": "22f4f542b283cdc3d027eb664424d3c8"
  },
  {
    "url": "06-06.jpg",
    "revision": "12017ddd5b9179e8f53e93044acee998"
  },
  {
    "url": "06-07.jpg",
    "revision": "1ded65fc56da9f0008ae4ef2eacc8175"
  },
  {
    "url": "1.jpg",
    "revision": "f1ea37a492254cc85dd6fd1e89b1a6b4"
  },
  {
    "url": "1.png",
    "revision": "d41d8cd98f00b204e9800998ecf8427e"
  },
  {
    "url": "12-01.jpg",
    "revision": "cc85570b3c89f73291af87791115986a"
  },
  {
    "url": "12-02.jpg",
    "revision": "f2b24c5c4beb21d5302c64b59445927a"
  },
  {
    "url": "12-03.jpg",
    "revision": "61fe98dff39d0887978deb0af605571b"
  },
  {
    "url": "12-04.jpg",
    "revision": "ff2468e7fbb03e034be0ffd7312dc7d9"
  },
  {
    "url": "12-05.jpg",
    "revision": "a126fe17514d81279c677666fd459d9d"
  },
  {
    "url": "12-06.jpg",
    "revision": "c25686b2f77ac7c5a2d4706f43e40132"
  },
  {
    "url": "12-07.jpg",
    "revision": "de17f3eb1df503250bcf1a5a4b533eec"
  },
  {
    "url": "12-08.jpg",
    "revision": "f3b58c768c18919a6fa2ab59ea6627db"
  },
  {
    "url": "13-01.jpg",
    "revision": "b22f06060909d43d796a8ffd4b0743a0"
  },
  {
    "url": "13-02.jpg",
    "revision": "2d2bca0518716a8dfaf37ef5c15e54ee"
  },
  {
    "url": "13-03.jpg",
    "revision": "fec1a3db903dc05c462fb6f384a400d6"
  },
  {
    "url": "2.jpg",
    "revision": "572bc2e4ef3efb7c81bbbcac5f09147b"
  },
  {
    "url": "3.jpg",
    "revision": "248757985bb49f73624c6923057530ac"
  },
  {
    "url": "4.jpg",
    "revision": "407c52446e2e463c4f8e494d52dbe485"
  },
  {
    "url": "404.html",
    "revision": "d4eef8f672bcf9a61ae1b424b52d3f76"
  },
  {
    "url": "5.jpg",
    "revision": "7e861769b640afa00fcc0ac4b72d9c52"
  },
  {
    "url": "assets/css/0.styles.7efb9838.css",
    "revision": "02ee3b3b941b4ee8aed83a1a9d9bda44"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/img/test1.55504f97.jpg",
    "revision": "55504f9747517e20abe5541326210c11"
  },
  {
    "url": "assets/img/test2.1163e763.jpg",
    "revision": "1163e763bfcf12f8632e84015bb3d323"
  },
  {
    "url": "assets/img/test3.393deaf1.jpg",
    "revision": "393deaf10c2289ec82779e29fc863e5d"
  },
  {
    "url": "assets/img/test4.b4cee8bf.jpg",
    "revision": "b4cee8bfd703975ec03b30fd2a318d4e"
  },
  {
    "url": "assets/img/test5.224c6171.jpg",
    "revision": "224c61716f2128765f11e85c0104ac8e"
  },
  {
    "url": "assets/img/test6.97cf5dcf.jpg",
    "revision": "97cf5dcfc4f9246e263ed640ec99aacb"
  },
  {
    "url": "assets/img/test7.730d627e.jpg",
    "revision": "730d627ea6dda6f0baec3323c1fffed4"
  },
  {
    "url": "assets/js/10.987eab03.js",
    "revision": "960769676b2efa8db56afbfd94c56b21"
  },
  {
    "url": "assets/js/11.e88c2f10.js",
    "revision": "088b8e03b243821fd63dfbff62e63ede"
  },
  {
    "url": "assets/js/12.6beda826.js",
    "revision": "17f513ff64e37b0a320add8bc8a401b3"
  },
  {
    "url": "assets/js/13.9e7b54bd.js",
    "revision": "2339ddaf5a0575e1d763a9881a35544f"
  },
  {
    "url": "assets/js/14.9641b9d8.js",
    "revision": "4b61d861f030fcbbfb7e0df26032ac46"
  },
  {
    "url": "assets/js/15.c399c4a7.js",
    "revision": "5e1a68991902cae2181592463c6b54c9"
  },
  {
    "url": "assets/js/16.39a08d75.js",
    "revision": "756be00cdd418640c6e90d83b059846a"
  },
  {
    "url": "assets/js/17.195e87be.js",
    "revision": "02334af64b77b5f582b05544e9915347"
  },
  {
    "url": "assets/js/18.e8ff4723.js",
    "revision": "3b235c7b1454f8d885421fdb8061e46d"
  },
  {
    "url": "assets/js/19.5103567b.js",
    "revision": "d6c90e0683fc071c80054550f15c0538"
  },
  {
    "url": "assets/js/2.b05b6408.js",
    "revision": "4b6fe114fa1393010a29fbdaa4cb7ee9"
  },
  {
    "url": "assets/js/20.83a5a2ef.js",
    "revision": "d6fc44a5a5dfdd114537ca858055fa80"
  },
  {
    "url": "assets/js/21.f10715b4.js",
    "revision": "ffe37a57923ebf00f23e671500775e96"
  },
  {
    "url": "assets/js/22.31d74684.js",
    "revision": "4a115908890f98e4b28b18723070813a"
  },
  {
    "url": "assets/js/23.982cebac.js",
    "revision": "86eafa50e241bbc619b082d8dfeb0fed"
  },
  {
    "url": "assets/js/24.25511181.js",
    "revision": "37c0efd0a6236156b4af771b0b92f4dd"
  },
  {
    "url": "assets/js/26.cdcf961d.js",
    "revision": "f683ac99beb1badde3e5fb377b65dcde"
  },
  {
    "url": "assets/js/3.2993a557.js",
    "revision": "38bd6ba3e3dff577781e84e749305fc8"
  },
  {
    "url": "assets/js/4.f1431eab.js",
    "revision": "9eef17a3bf6ff2f5a65ac1b97d1bd4ce"
  },
  {
    "url": "assets/js/5.5884a570.js",
    "revision": "4ddb90ee53d96f9526c27c44b58f623c"
  },
  {
    "url": "assets/js/6.21000c2c.js",
    "revision": "b8ef28ad7a5f2d6f66d3aeba3159d924"
  },
  {
    "url": "assets/js/7.65afe2dc.js",
    "revision": "f13a5d572304c1bc22de490459638c3b"
  },
  {
    "url": "assets/js/8.7be0851e.js",
    "revision": "dd31e52a5cd3dab0e1aff0fed225c178"
  },
  {
    "url": "assets/js/9.30fcfcb7.js",
    "revision": "87f0ec0fd8b57284e02585d24e8d9f23"
  },
  {
    "url": "assets/js/app.ea8646fd.js",
    "revision": "5bd1db81e1cda74dfa26d3582178bd3b"
  },
  {
    "url": "conclusion/index.html",
    "revision": "d0f2e9fd8f9fcd7db72c37eae91a8ea4"
  },
  {
    "url": "design/index.html",
    "revision": "87a7231635976d366654879dd4fd4e23"
  },
  {
    "url": "index.html",
    "revision": "bd734739fb7409ae31ca04a8074bc7b0"
  },
  {
    "url": "intro/index.html",
    "revision": "70671e386238a661c74e57693dd29576"
  },
  {
    "url": "license.html",
    "revision": "70a2edbdcd1a16b29dc6ec11e14ab937"
  },
  {
    "url": "myAvatar.png",
    "revision": "b76db1e62eb8e7fca02a487eb3eac10c"
  },
  {
    "url": "requirements/index.html",
    "revision": "84787bd87f539eeaf40ecc505df57065"
  },
  {
    "url": "requirements/stakeholders-needs.html",
    "revision": "d1f8aff4b8487973f66c7d6e4e4a6226"
  },
  {
    "url": "requirements/state-of-the-art.html",
    "revision": "11236acfcf6471cbe03cbc429f3d3747"
  },
  {
    "url": "software/index.html",
    "revision": "c5f5e29b647a49b13a77a09d0687c55c"
  },
  {
    "url": "test/index.html",
    "revision": "e9f9d2fd3395a5fbc6bafdf22c7c6d26"
  },
  {
    "url": "use cases/index.html",
    "revision": "e4c9c00804370684083748d0d7b6dd6f"
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
