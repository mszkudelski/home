!function(n){var r={};function o(e){if(r[e])return r[e].exports;var t=r[e]={i:e,l:!1,exports:{}};return n[e].call(t.exports,t,t.exports,o),t.l=!0,t.exports}o.m=n,o.c=r,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)o.d(n,r,function(e){return t[e]}.bind(null,r));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="https://mszkudelski.github.io/home/",o(o.s=10)}({10:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(11);n(12),window.__routes.materials=function(e){e.innerHTML=r.MaterialsTemplate;var t=document.querySelector("#articles");fetch("articles.html").then(function(e){return e.json()}).then(function(e){return t.innerHTML=e})}},11:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.MaterialsTemplate='\n  <main>\n    <section class="articles section">\n        <div class="content"  id="articles">\n        </div>\n    </section>\n  </main> \n'},12:function(e,t,n){}});