if(!self.define){const s=s=>{"require"!==s&&(s+=".js");let e=Promise.resolve();return i[s]||(e=new Promise(async e=>{if("document"in self){const i=document.createElement("script");i.src=s,document.head.appendChild(i),i.onload=e}else importScripts(s),e()})),e.then(()=>{if(!i[s])throw new Error(`Module ${s} didn’t register its module`);return i[s]})},e=(e,i)=>{Promise.all(e.map(s)).then(s=>i(1===s.length?s[0]:s))},i={require:Promise.resolve(e)};self.define=(e,o,t)=>{i[e]||(i[e]=Promise.resolve().then(()=>{let i={};const r={uri:location.origin+e.slice(1)};return Promise.all(o.map(e=>{switch(e){case"exports":return i;case"module":return r;default:return s(e)}})).then(s=>{const e=t(...s);return i.default||(i.default=e),i})}))}}define("./service-worker.js",["./workbox-1bbb3e0e"],(function(s){"use strict";self.addEventListener("message",s=>{s.data&&"SKIP_WAITING"===s.data.type&&self.skipWaiting()}),s.precacheAndRoute([{url:"https://mszkudelski.github.io/home/assets/img/blog.png",revision:"bd8d75d71a7b79bd7e3e5795930fd460"},{url:"https://mszkudelski.github.io/home/assets/img/css3-logo.png",revision:"2b7bb68c8c938b2cda21648f2a1a3f87"},{url:"https://mszkudelski.github.io/home/assets/img/docker-logo.png",revision:"61fff04c12524727c459dbfb841a62fe"},{url:"https://mszkudelski.github.io/home/assets/img/git-logo.png",revision:"728ff5a8e44d74cd0f2359ef0a9ec88a"},{url:"https://mszkudelski.github.io/home/assets/img/html-logo.png",revision:"00dc622157af87a42dad36d794bb0747"},{url:"https://mszkudelski.github.io/home/assets/img/jenkins-logo.png",revision:"f8facbb12562cfcd8ef3b19a6acd20e3"},{url:"https://mszkudelski.github.io/home/assets/img/js-logo.png",revision:"abb91b8c42d37c6f8bd3d90a5f38b878"},{url:"https://mszkudelski.github.io/home/assets/img/nest-logo.png",revision:"aeb6ba6edadc5658e5dff0c0e221824d"},{url:"https://mszkudelski.github.io/home/assets/img/ng-logo.png",revision:"2efa7b0cb5f86df297e06449ed5a6760"},{url:"https://mszkudelski.github.io/home/assets/img/node-logo.png",revision:"41911525f41992aa6501c6aa2c18dc3b"},{url:"https://mszkudelski.github.io/home/assets/img/rxjs-logo.png",revision:"b8c3f7215a3647455de88d7ffaa24935"},{url:"https://mszkudelski.github.io/home/assets/img/ts-logo.png",revision:"808e9509d4a27c7572cd2db89bb3bf4e"},{url:"https://mszkudelski.github.io/home/assets/img/zdjęcie1-min.jpg",revision:"88bb511739498038c748e52d3fc34614"},{url:"https://mszkudelski.github.io/home/bundle.js",revision:"63261a66227b40bc2cb2cd68496fa76f"},{url:"https://mszkudelski.github.io/home/fonts/opensans-regular-webfont.woff",revision:"e213adc4efb5312668f611ed8acb05a2"},{url:"https://mszkudelski.github.io/home/fonts/opensans-regular-webfont.woff2",revision:"f6479d55f0ddc0ca120e5bb299a31b05"},{url:"https://mszkudelski.github.io/home/fonts/opensans-semibold-webfont.woff",revision:"0a1ad2a71ede5142528911d7b28f92f2"},{url:"https://mszkudelski.github.io/home/fonts/opensans-semibold-webfont.woff2",revision:"1b932981a373c623d0c5f7e45e9acd6c"},{url:"https://mszkudelski.github.io/home/index.html",revision:"72af539752763025306a76f895ddc0f2"},{url:"https://mszkudelski.github.io/home/manifest.json",revision:"262f08db8cb71ef1a1f78f06e7b6a13c"}],{})}));
