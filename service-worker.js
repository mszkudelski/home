if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let s=Promise.resolve();return i[e]||(s=new Promise(async s=>{if("document"in self){const i=document.createElement("script");i.src=e,document.head.appendChild(i),i.onload=s}else importScripts(e),s()})),s.then(()=>{if(!i[e])throw new Error(`Module ${e} didn’t register its module`);return i[e]})},s=(s,i)=>{Promise.all(s.map(e)).then(e=>i(1===e.length?e[0]:e))},i={require:Promise.resolve(s)};self.define=(s,t,o)=>{i[s]||(i[s]=Promise.resolve().then(()=>{let i={};const r={uri:location.origin+s.slice(1)};return Promise.all(t.map(s=>{switch(s){case"exports":return i;case"module":return r;default:return e(s)}})).then(e=>{const s=o(...e);return i.default||(i.default=s),i})}))}}define("./service-worker.js",["./workbox-ec4d79a7"],(function(e){"use strict";self.addEventListener("message",e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()}),e.precacheAndRoute([{url:"https://mszkudelski.github.io/home//assets/img/jenkins-logo.png",revision:"f8facbb12562cfcd8ef3b19a6acd20e3"},{url:"https://mszkudelski.github.io/home//assets/img/jenkins-logo.webp",revision:"414c320f274d4321cd7e6af16ae3dd8b"},{url:"https://mszkudelski.github.io/home//assets/img/node-logo.png",revision:"41911525f41992aa6501c6aa2c18dc3b"},{url:"https://mszkudelski.github.io/home//assets/img/node-logo.webp",revision:"04f1ead597faed74edf33c4b6945d582"},{url:"https://mszkudelski.github.io/home//assets/img/zdjęcie1-min.jpg",revision:"88bb511739498038c748e52d3fc34614"},{url:"https://mszkudelski.github.io/home//assets/img/zdjęcie1-min.webp",revision:"d884512954df781d55baf8d0a00f3b45"},{url:"https://mszkudelski.github.io/home/bundle.js",revision:"8af1e7d16e20cbab4f18d94f7a6d4682"},{url:"https://mszkudelski.github.io/home/fonts/OpenSans-Regular.ttf?3ed9575dcc488c3e3a5bd66620bdf5a4",revision:"3ed9575dcc488c3e3a5bd66620bdf5a4"},{url:"https://mszkudelski.github.io/home/index.html",revision:"a1ccf82cd740e6815330721a5fff7c5f"}],{})}));
