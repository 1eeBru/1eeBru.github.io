if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let i=Promise.resolve();return a[e]||(i=new Promise((async i=>{if("document"in self){const a=document.createElement("script");a.src=e,document.head.appendChild(a),a.onload=i}else importScripts(e),i()}))),i.then((()=>{if(!a[e])throw new Error(`Module ${e} didn’t register its module`);return a[e]}))},i=(i,a)=>{Promise.all(i.map(e)).then((e=>a(1===e.length?e[0]:e)))},a={require:Promise.resolve(i)};self.define=(i,r,d)=>{a[i]||(a[i]=Promise.resolve().then((()=>{let a={};const c={uri:location.origin+i.slice(1)};return Promise.all(r.map((i=>{switch(i){case"exports":return a;case"module":return c;default:return e(i)}}))).then((e=>{const i=d(...e);return a.default||(a.default=i),a}))})))}}define("./service-worker.js",["./workbox-65969207"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"2021/10/15/Java多线程编程一/index.html",revision:"06d3011cc3877af00e7364cbb2dfed90"},{url:"2021/10/15/第一篇博客/index.html",revision:"902eb14cb37a6f0b2b86433bcba3af06"},{url:"2021/10/21/canvas基础/index.html",revision:"4d2c367a42f5c5e3db6cfda6bbb89029"},{url:"2021/10/23/Javascript异步与Promise/index.html",revision:"fc85acf73ebc4f376da006f3d2f8fd0d"},{url:"2021/10/23/理解Javascript回调函数/index.html",revision:"344da09e95a3374814c6ceddcb235cd7"},{url:"2021/10/23/计算机网络复习攻略/index.html",revision:"7a5e4369439b76b7bd5f5a7084303bb2"},{url:"2021/10/29/LCP1106题解/index.html",revision:"e8a96528b52d05bd4f132cd24e7d3436"},{url:"about/index.html",revision:"d201b7c5b630a9ec0a2b2889bd6d116a"},{url:"archives/2021/10/index.html",revision:"058d20d4f92fd1bb286e137205153e84"},{url:"archives/2021/index.html",revision:"fd055438ce2e20d1a359db07c01de505"},{url:"archives/index.html",revision:"9f9a8fe56535fb946f9c6f5916c80c4a"},{url:"artitalk/index.html",revision:"573f0310c57116dd401e370adb04ef7d"},{url:"categories/index.html",revision:"53f0bbbb8b931c909c6f2973d912e763"},{url:"categories/Java/index.html",revision:"3b6f5a27ce541afdde5ff40c0dd27866"},{url:"categories/JavaScript/index.html",revision:"63233b4139a2bf0ff334ab2ab41a2626"},{url:"categories/前端/index.html",revision:"5560f1288eccabfdcb35f8e432ae4ecc"},{url:"categories/数据结构/index.html",revision:"d4eaf5e4dad59e45c4e7ce1906a9ee1d"},{url:"categories/期末复习/index.html",revision:"8e1b89bc3325d8b6fc94cabce98f97bd"},{url:"categories/算法/index.html",revision:"5951553e5a3cbe13c70861d953bbc871"},{url:"css/APlayer.min.css",revision:"fbe994054426fadb2dff69d824c5c67a"},{url:"css/index.css",revision:"aedeec68affe784ee4f4906b9a609a33"},{url:"css/var.css",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"css/webkit.css",revision:"80a2b2e9f427257015333e2e75750994"},{url:"img/404.jpg",revision:"4ef3cfb882b6dd4128da4c8745e9a507"},{url:"img/algolia.svg",revision:"88450dd56ea1a00ba772424b30b7d34d"},{url:"img/back.png",revision:"a05bdf16c2024e4af070d7d58e99d8ee"},{url:"img/favicon.png",revision:"7a8c47cb5a2149c1a1af21e90ecd9ca7"},{url:"img/friend_404.gif",revision:"68af0be9d22722e74665ef44dd532ba8"},{url:"img/icon.png",revision:"1c34ea6f3cb506aeb64fedd9d25f9c3b"},{url:"img/son_back.png",revision:"bee41220188706ca9b831e7403cb2c52"},{url:"index.html",revision:"ec2c043e63b40678c613652746658b92"},{url:"js/APlayer.min.js",revision:"8f1017e7a73737e631ff95fa51e4e7d7"},{url:"js/main.js",revision:"240e062def7897dd4c03a12bf07fdc65"},{url:"js/Meting.min.js",revision:"bfac0368480fd344282ec018d28f173d"},{url:"js/search/algolia.js",revision:"533d980c0d50a0d0d7fe34c41a3e2100"},{url:"js/search/local-search.js",revision:"33b3c0e197c029d5b198059220bbd5ab"},{url:"js/tw_cn.js",revision:"b3810513e04b13b2d18c6b779c883f85"},{url:"js/utils.js",revision:"12cef07c2e9bc8841a5380df4fd342f5"},{url:"link/index.html",revision:"b66936e233c484a353bef2e7f45e6a8a"},{url:"live2dw/assets/moc/hijiki.2048/texture_00.png",revision:"817ca52e35fef3ef3a452127d1c88f43"},{url:"live2dw/lib/L2Dwidget.0.min.js",revision:"32973883fcac0a9ae6cc79c0ea25fda2"},{url:"live2dw/lib/L2Dwidget.min.js",revision:"094cbace49a39548bed64abff5988b05"},{url:"music/index.html",revision:"9affa58b7720bad0a4c8c19a7afef897"},{url:"tags/BFS/index.html",revision:"d3844d752dafaa941417e5299b707f59"},{url:"tags/C/index.html",revision:"f23d4cd8c690150752a7a00c2ae3b01d"},{url:"tags/canvas/index.html",revision:"6146cabbbd254eecb337718a1a240055"},{url:"tags/Dijkstra-双栈算法/index.html",revision:"51511a845d64a16b44e66e9ef7e29373"},{url:"tags/ES6/index.html",revision:"1efd3ba87b38ed91e94de3a927124c34"},{url:"tags/HTML5/index.html",revision:"d5f1e8f7ee3a50217d9db6103008cbc5"},{url:"tags/index.html",revision:"9cd31f4f07088c6a0a8a190fdbae4e3e"},{url:"tags/Java/index.html",revision:"4a9613631a8e78971f51eefc797b058f"},{url:"tags/JavaScript/index.html",revision:"a23490c45acea2aa568cbf11d83f4cbc"},{url:"tags/Promise/index.html",revision:"756f61d9024a1a381448dbf17a7a4a69"},{url:"tags/前端/index.html",revision:"4c98a4f5f537d1d71801491e2506b935"},{url:"tags/力扣/index.html",revision:"56ffe1b1ca32c4b4cb53d466bb278244"},{url:"tags/回调函数/index.html",revision:"7b0b7b3fad18274291be5a5eb1b2af4f"},{url:"tags/多线程/index.html",revision:"853d45b5a881ba7b5cb1f4c8f03b2958"},{url:"tags/数据结构/index.html",revision:"f2d1560fd3f2ffcd2bc72064d2d652e6"},{url:"tags/算法/index.html",revision:"d56efb6a03907a180134ab04484545c8"},{url:"tags/计算机网络/index.html",revision:"5dd472efcbcee8cafa600d53fc7f952b"},{url:"timeline/index.html",revision:"8d0e580686da4271427da5e102273933"}],{}),e.registerRoute(/^https:\/\/cdn\.example\.com\/.*/,new e.CacheFirst,"GET")}));
//# sourceMappingURL=service-worker.js.map
