if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let s=Promise.resolve();return i[e]||(s=new Promise(async s=>{if("document"in self){const i=document.createElement("script");i.src=e,document.head.appendChild(i),i.onload=s}else importScripts(e),s()})),s.then(()=>{if(!i[e])throw new Error(`Module ${e} didn’t register its module`);return i[e]})},s=(s,i)=>{Promise.all(s.map(e)).then(e=>i(1===e.length?e[0]:e))},i={require:Promise.resolve(s)};self.define=(s,o,t)=>{i[s]||(i[s]=Promise.resolve().then(()=>{let i={};const r={uri:location.origin+s.slice(1)};return Promise.all(o.map(s=>{switch(s){case"exports":return i;case"module":return r;default:return e(s)}})).then(e=>{const s=t(...e);return i.default||(i.default=s),i})}))}}define("./service-worker.js",["./workbox-1bbb3e0e"],(function(e){"use strict";self.addEventListener("message",e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()}),e.precacheAndRoute([{url:"https://mszkudelski.github.io/home/assets/img/blog.webp",revision:"9b3a0a0b756ab64e84d222453d48a3a1"},{url:"https://mszkudelski.github.io/home/assets/img/css3-logo.webp",revision:"a3520bd02c1b1a358548184810e3d3bd"},{url:"https://mszkudelski.github.io/home/assets/img/docker-logo.webp",revision:"97712fc351099ee7771f3194e4a4e5cc"},{url:"https://mszkudelski.github.io/home/assets/img/favicon/android-chrome-192x192.png",revision:"a694e47fd8481adfbb4fe4acafc257c1"},{url:"https://mszkudelski.github.io/home/assets/img/favicon/android-chrome-512x512.png",revision:"7f6596c3f57e75f48cc90ab787e581db"},{url:"https://mszkudelski.github.io/home/assets/img/favicon/apple-touch-icon.png",revision:"f2886c03adedd0e696de4c319d5edc5b"},{url:"https://mszkudelski.github.io/home/assets/img/favicon/favicon-16x16.png",revision:"3cfad661f990dd7cf56b58cde41a4734"},{url:"https://mszkudelski.github.io/home/assets/img/favicon/favicon-32x32.png",revision:"670aea3a49b92ae00eba12460d22dc21"},{url:"https://mszkudelski.github.io/home/assets/img/favicon/favicon.ico",revision:"218de0c74b0e3c09153c46d9591223e1"},{url:"https://mszkudelski.github.io/home/assets/img/git-logo.webp",revision:"7f56929c5deaa0f3fe093128fb7edf07"},{url:"https://mszkudelski.github.io/home/assets/img/html-logo.webp",revision:"f29e5320a2fb8bd25b72f6d23c64a5fb"},{url:"https://mszkudelski.github.io/home/assets/img/jenkins-logo.webp",revision:"0f7c1ea9e999d0a7f5fe45936c826c38"},{url:"https://mszkudelski.github.io/home/assets/img/js-logo.webp",revision:"e22b5ff6a426d051ce897e763546c5c5"},{url:"https://mszkudelski.github.io/home/assets/img/nest-logo.webp",revision:"e8750d915ebe10271cc88f2753f90937"},{url:"https://mszkudelski.github.io/home/assets/img/ng-logo.webp",revision:"81558805c31027d235bb5a8cb9df4ab9"},{url:"https://mszkudelski.github.io/home/assets/img/node-logo.webp",revision:"0a9e3f0df2bd7b9ce7705cf5f58f0bdf"},{url:"https://mszkudelski.github.io/home/assets/img/profile-mobile.webp",revision:"028908537ca9da1c520e588237bb2342"},{url:"https://mszkudelski.github.io/home/assets/img/profile.webp",revision:"5912f730fa23ffb8fa700e8f681438e1"},{url:"https://mszkudelski.github.io/home/assets/img/rxjs-logo.webp",revision:"79c049bc0dd363017828f57dfb623fce"},{url:"https://mszkudelski.github.io/home/assets/img/ts-logo.webp",revision:"f34e934f6414d889554ef299034b657d"},{url:"https://mszkudelski.github.io/home/bundle.js",revision:"674f960eaa9f7b02f188c767111f17ba"},{url:"https://mszkudelski.github.io/home/fonts/opensans-regular-webfont.woff",revision:"e213adc4efb5312668f611ed8acb05a2"},{url:"https://mszkudelski.github.io/home/fonts/opensans-regular-webfont.woff2",revision:"f6479d55f0ddc0ca120e5bb299a31b05"},{url:"https://mszkudelski.github.io/home/fonts/opensans-semibold-webfont.woff",revision:"0a1ad2a71ede5142528911d7b28f92f2"},{url:"https://mszkudelski.github.io/home/fonts/opensans-semibold-webfont.woff2",revision:"1b932981a373c623d0c5f7e45e9acd6c"},{url:"https://mszkudelski.github.io/home/index.html",revision:"b47f09cc6747d4c5754c760f2434ccc0"},{url:"https://mszkudelski.github.io/home/main.css",revision:"e7b3504157d921d126d3f0c9ec777169"},{url:"https://mszkudelski.github.io/home/manifest.json",revision:"262f08db8cb71ef1a1f78f06e7b6a13c"}],{})}));
