if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let i=Promise.resolve();return r[e]||(i=new Promise((async i=>{if("document"in self){const r=document.createElement("script");r.src=e,document.head.appendChild(r),r.onload=i}else importScripts(e),i()}))),i.then((()=>{if(!r[e])throw new Error(`Module ${e} didn’t register its module`);return r[e]}))},i=(i,r)=>{Promise.all(i.map(e)).then((e=>r(1===e.length?e[0]:e)))},r={require:Promise.resolve(i)};self.define=(i,c,d)=>{r[i]||(r[i]=Promise.resolve().then((()=>{let r={};const a={uri:location.origin+i.slice(1)};return Promise.all(c.map((i=>{switch(i){case"exports":return r;case"module":return a;default:return e(i)}}))).then((e=>{const i=d(...e);return r.default||(r.default=i),r}))})))}}define("./service-worker.js",["./workbox-65969207"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"2021/10/15/Java多线程编程一/index.html",revision:"d16787a9e2c454f9c521071039bff2f6"},{url:"2021/10/15/第一篇博客/index.html",revision:"b53609a54d063bb27b4e47d0755c8754"},{url:"2021/10/21/canvas基础/index.html",revision:"e7dab7dc68fb3731fef4bf02584c540c"},{url:"about/index.html",revision:"3ec2dfa64d961e54dc4a7080e9cd1686"},{url:"archives/2021/10/index.html",revision:"a7818d8a465fd8adc9b80252b49ca0b0"},{url:"archives/2021/index.html",revision:"ccd993b15d61549a790ea8e59e2dbb81"},{url:"archives/index.html",revision:"0de51c511561d64444db9fc657cfbbb1"},{url:"bibi/index.html",revision:"05afabc4cc19e37a7501f44c74d0627f"},{url:"categories/index.html",revision:"91b5b52b6f119d1d13b1ceaeeaed6576"},{url:"categories/Java/index.html",revision:"df59faba9eaedb29a255f5f785be644f"},{url:"categories/前端/index.html",revision:"5c3d82eac89763cd2d7b32473f373d9a"},{url:"categories/数据结构/index.html",revision:"c1b17fd1b5308fed95c43bd44c5f6e93"},{url:"css/index.css",revision:"aedeec68affe784ee4f4906b9a609a33"},{url:"css/var.css",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"css/webkit.css",revision:"276eda7aa3d0d635077a73cbcc52a5eb"},{url:"img/404.jpg",revision:"4ef3cfb882b6dd4128da4c8745e9a507"},{url:"img/algolia.svg",revision:"88450dd56ea1a00ba772424b30b7d34d"},{url:"img/back.png",revision:"a05bdf16c2024e4af070d7d58e99d8ee"},{url:"img/favicon.png",revision:"7a8c47cb5a2149c1a1af21e90ecd9ca7"},{url:"img/friend_404.gif",revision:"68af0be9d22722e74665ef44dd532ba8"},{url:"img/icon.png",revision:"1c34ea6f3cb506aeb64fedd9d25f9c3b"},{url:"img/son_back.png",revision:"bee41220188706ca9b831e7403cb2c52"},{url:"index.html",revision:"3b6aa0b6bd388f37b5b41f071838b47a"},{url:"js/main.js",revision:"240e062def7897dd4c03a12bf07fdc65"},{url:"js/search/algolia.js",revision:"533d980c0d50a0d0d7fe34c41a3e2100"},{url:"js/search/local-search.js",revision:"33b3c0e197c029d5b198059220bbd5ab"},{url:"js/tw_cn.js",revision:"b3810513e04b13b2d18c6b779c883f85"},{url:"js/twopeople.js",revision:"b5484768e71194c9bea7749bb323edeb"},{url:"js/twopeople1.js",revision:"b502913b917b200a02b600a79b504c8e"},{url:"js/utils.js",revision:"12cef07c2e9bc8841a5380df4fd342f5"},{url:"js/zdog.dist.js",revision:"18fc7f1a923e59d554fc2cd247b0ced5"},{url:"link/index.html",revision:"14423d8684c4b1fa30fbc8f78a5b2499"},{url:"music/index.html",revision:"a7dee8cefe5348c598e7b007f36b3d00"},{url:"tags/BFS/index.html",revision:"70276543eb7707fd7a641140e053c794"},{url:"tags/C/index.html",revision:"3bcff74c5392608497702ce60e5b2050"},{url:"tags/canvas/index.html",revision:"6216a382ee09fc7b1634681ff8f71b05"},{url:"tags/HTML5/index.html",revision:"fc5784eb985f535ba597ecbc3fe0eed7"},{url:"tags/index.html",revision:"b0e98b0a57d4da524e3ea3f199159a46"},{url:"tags/Java/index.html",revision:"51217f2d6a9dc70815e92bca31409e65"},{url:"tags/JavaScript/index.html",revision:"14b6d0b51fbe1c5e393120c194d70d88"},{url:"tags/多线程/index.html",revision:"19238adae6b1b29534a9cc806f57756a"},{url:"tags/数据结构/index.html",revision:"a791a02c91f0e11bddb675d26c7b8fc6"},{url:"timeline/index.html",revision:"8c7a59256caccd1fc6ef4c9a66d4f0c1"}],{}),e.registerRoute(/^https:\/\/cdn\.example\.com\/.*/,new e.CacheFirst,"GET")}));
//# sourceMappingURL=service-worker.js.map
