(()=>{"use strict";var r={122:(r,n,e)=>{e.d(n,{Z:()=>c});var t=e(537),o=e.n(t),a=e(645),i=e.n(a)()(o());i.push([r.id,"@import url(https://fonts.googleapis.com/css2? family = Abrir + Sans: wght @ 400; 700 & display = swap);"]),i.push([r.id,":root {\r\n    --primary-color: rgb(143, 117, 31);\r\n    --primary-color-dark: rgb(116, 19, 116);\r\n}\r\n\r\n* {\r\n    box-sizing: border-box;\r\n    outline: 0;\r\n}\r\n\r\nbody {\r\n    padding: 0;\r\n    margin: 0;\r\n    background-color: var( --primary-color);\r\n    font-family: 'Open sans', sans-serif;\r\n    font-size: 1.3em;\r\n    line-height: 1.5em;\r\n}\r\n\r\n.container {\r\n    max-width: 640px;\r\n    margin: 50px auto;\r\n    background-color: white;\r\n    padding: 20px;\r\n    display: flex;\r\n    flex-direction: column;\r\n}\r\n\r\n.container h1 {\r\n    text-align: center;\r\n    margin-bottom: 40px; \r\n}\r\n\r\n.cpf-gerado {\r\n    font-size: 2em;\r\n    color: var(--primary-color);\r\n    text-align: center;\r\n    font-weight: bold;\r\n    margin-bottom: 40px;\r\n}\r\n\r\n.set-cpf {\r\n    align-self: center;\r\n    border: 1px solid black;\r\n    width: 70px;\r\n    height: 25px;\r\n    box-shadow: 5px 5px 7px var(--primary-color);\r\n    background-color: rgb(219, 170, 36);\r\n}\r\n\r\n.set-cpf:hover {\r\n    background-color: brown;\r\n    color: white;\r\n}","",{version:3,sources:["webpack://./src/assets/css/style.css"],names:[],mappings:"AAEA;IACI,kCAAkC;IAClC,uCAAuC;AAC3C;;AAEA;IACI,sBAAsB;IACtB,UAAU;AACd;;AAEA;IACI,UAAU;IACV,SAAS;IACT,uCAAuC;IACvC,oCAAoC;IACpC,gBAAgB;IAChB,kBAAkB;AACtB;;AAEA;IACI,gBAAgB;IAChB,iBAAiB;IACjB,uBAAuB;IACvB,aAAa;IACb,aAAa;IACb,sBAAsB;AAC1B;;AAEA;IACI,kBAAkB;IAClB,mBAAmB;AACvB;;AAEA;IACI,cAAc;IACd,2BAA2B;IAC3B,kBAAkB;IAClB,iBAAiB;IACjB,mBAAmB;AACvB;;AAEA;IACI,kBAAkB;IAClB,uBAAuB;IACvB,WAAW;IACX,YAAY;IACZ,4CAA4C;IAC5C,mCAAmC;AACvC;;AAEA;IACI,uBAAuB;IACvB,YAAY;AAChB",sourcesContent:["@import url('https://fonts.googleapis.com/css2? family = Abrir + Sans: wght @ 400; 700 & display = swap');\r\n\r\n:root {\r\n    --primary-color: rgb(143, 117, 31);\r\n    --primary-color-dark: rgb(116, 19, 116);\r\n}\r\n\r\n* {\r\n    box-sizing: border-box;\r\n    outline: 0;\r\n}\r\n\r\nbody {\r\n    padding: 0;\r\n    margin: 0;\r\n    background-color: var( --primary-color);\r\n    font-family: 'Open sans', sans-serif;\r\n    font-size: 1.3em;\r\n    line-height: 1.5em;\r\n}\r\n\r\n.container {\r\n    max-width: 640px;\r\n    margin: 50px auto;\r\n    background-color: white;\r\n    padding: 20px;\r\n    display: flex;\r\n    flex-direction: column;\r\n}\r\n\r\n.container h1 {\r\n    text-align: center;\r\n    margin-bottom: 40px; \r\n}\r\n\r\n.cpf-gerado {\r\n    font-size: 2em;\r\n    color: var(--primary-color);\r\n    text-align: center;\r\n    font-weight: bold;\r\n    margin-bottom: 40px;\r\n}\r\n\r\n.set-cpf {\r\n    align-self: center;\r\n    border: 1px solid black;\r\n    width: 70px;\r\n    height: 25px;\r\n    box-shadow: 5px 5px 7px var(--primary-color);\r\n    background-color: rgb(219, 170, 36);\r\n}\r\n\r\n.set-cpf:hover {\r\n    background-color: brown;\r\n    color: white;\r\n}"],sourceRoot:""}]);const c=i},645:r=>{r.exports=function(r){var n=[];return n.toString=function(){return this.map((function(n){var e="",t=void 0!==n[5];return n[4]&&(e+="@supports (".concat(n[4],") {")),n[2]&&(e+="@media ".concat(n[2]," {")),t&&(e+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),e+=r(n),t&&(e+="}"),n[2]&&(e+="}"),n[4]&&(e+="}"),e})).join("")},n.i=function(r,e,t,o,a){"string"==typeof r&&(r=[[null,r,void 0]]);var i={};if(t)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(i[s]=!0)}for(var u=0;u<r.length;u++){var l=[].concat(r[u]);t&&i[l[0]]||(void 0!==a&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=a),e&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=e):l[2]=e),o&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=o):l[4]="".concat(o)),n.push(l))}},n}},537:r=>{r.exports=function(r){var n=r[1],e=r[3];if(!e)return n;if("function"==typeof btoa){var t=btoa(unescape(encodeURIComponent(JSON.stringify(e)))),o="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(t),a="/*# ".concat(o," */"),i=e.sources.map((function(r){return"/*# sourceURL=".concat(e.sourceRoot||"").concat(r," */")}));return[n].concat(i).concat([a]).join("\n")}return[n].join("\n")}},379:r=>{var n=[];function e(r){for(var e=-1,t=0;t<n.length;t++)if(n[t].identifier===r){e=t;break}return e}function t(r,t){for(var a={},i=[],c=0;c<r.length;c++){var s=r[c],u=t.base?s[0]+t.base:s[0],l=a[u]||0,p="".concat(u," ").concat(l);a[u]=l+1;var f=e(p),A={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==f)n[f].references++,n[f].updater(A);else{var d=o(A,t);t.byIndex=c,n.splice(c,0,{identifier:p,updater:d,references:1})}i.push(p)}return i}function o(r,n){var e=n.domAPI(n);return e.update(r),function(n){if(n){if(n.css===r.css&&n.media===r.media&&n.sourceMap===r.sourceMap&&n.supports===r.supports&&n.layer===r.layer)return;e.update(r=n)}else e.remove()}}r.exports=function(r,o){var a=t(r=r||[],o=o||{});return function(r){r=r||[];for(var i=0;i<a.length;i++){var c=e(a[i]);n[c].references--}for(var s=t(r,o),u=0;u<a.length;u++){var l=e(a[u]);0===n[l].references&&(n[l].updater(),n.splice(l,1))}a=s}}},569:r=>{var n={};r.exports=function(r,e){var t=function(r){if(void 0===n[r]){var e=document.querySelector(r);if(window.HTMLIFrameElement&&e instanceof window.HTMLIFrameElement)try{e=e.contentDocument.head}catch(r){e=null}n[r]=e}return n[r]}(r);if(!t)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");t.appendChild(e)}},216:r=>{r.exports=function(r){var n=document.createElement("style");return r.setAttributes(n,r.attributes),r.insert(n,r.options),n}},565:(r,n,e)=>{r.exports=function(r){var n=e.nc;n&&r.setAttribute("nonce",n)}},795:r=>{r.exports=function(r){var n=r.insertStyleElement(r);return{update:function(e){!function(r,n,e){var t="";e.supports&&(t+="@supports (".concat(e.supports,") {")),e.media&&(t+="@media ".concat(e.media," {"));var o=void 0!==e.layer;o&&(t+="@layer".concat(e.layer.length>0?" ".concat(e.layer):""," {")),t+=e.css,o&&(t+="}"),e.media&&(t+="}"),e.supports&&(t+="}");var a=e.sourceMap;a&&"undefined"!=typeof btoa&&(t+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),n.styleTagTransform(t,r,n.options)}(n,r,e)},remove:function(){!function(r){if(null===r.parentNode)return!1;r.parentNode.removeChild(r)}(n)}}}},589:r=>{r.exports=function(r,n){if(n.styleSheet)n.styleSheet.cssText=r;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(r))}}}},n={};function e(t){var o=n[t];if(void 0!==o)return o.exports;var a=n[t]={id:t,exports:{}};return r[t](a,a.exports,e),a.exports}e.n=r=>{var n=r&&r.__esModule?()=>r.default:()=>r;return e.d(n,{a:n}),n},e.d=(r,n)=>{for(var t in n)e.o(n,t)&&!e.o(r,t)&&Object.defineProperty(r,t,{enumerable:!0,get:n[t]})},e.o=(r,n)=>Object.prototype.hasOwnProperty.call(r,n),(()=>{function r(r,n){(null==n||n>r.length)&&(n=r.length);for(var e=0,t=new Array(n);e<n;e++)t[e]=r[e];return t}function n(r,n){for(var e=0;e<n.length;e++){var t=n[e];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(r,t.key,t)}}var t=function(){function e(r){!function(r,n){if(!(r instanceof n))throw new TypeError("Cannot call a class as a function")}(this,e),Object.defineProperty(this,"cpfLimpo",{writable:!1,enumerable:!0,configurable:!1,value:r.replace(/\D+/g,"")})}var t,o,a;return t=e,a=[{key:"geraDigito",value:function(n){var e,t=0,o=n.length+1,a=function(n,e){var t="undefined"!=typeof Symbol&&n[Symbol.iterator]||n["@@iterator"];if(!t){if(Array.isArray(n)||(t=function(n,e){if(n){if("string"==typeof n)return r(n,e);var t=Object.prototype.toString.call(n).slice(8,-1);return"Object"===t&&n.constructor&&(t=n.constructor.name),"Map"===t||"Set"===t?Array.from(n):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?r(n,e):void 0}}(n))||e&&n&&"number"==typeof n.length){t&&(n=t);var o=0,a=function(){};return{s:a,n:function(){return o>=n.length?{done:!0}:{done:!1,value:n[o++]}},e:function(r){throw r},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,c=!0,s=!1;return{s:function(){t=t.call(n)},n:function(){var r=t.next();return c=r.done,r},e:function(r){s=!0,i=r},f:function(){try{c||null==t.return||t.return()}finally{if(s)throw i}}}}(n);try{for(a.s();!(e=a.n()).done;){var i=e.value;t+=o*Number(i),o--}}catch(r){a.e(r)}finally{a.f()}var c=11-t%11;return c<=9?String(c):"0"}}],(o=[{key:"éSequência",value:function(){return this.cpfLimpo.charAt(0).repeat(11)===this.cpfLimpo}},{key:"geraNovoCpf",value:function(){var r=this.cpfLimpo.slice(0,-2),n=e.geraDigito(r);return r+n+e.geraDigito(r+n)}},{key:"valida",value:function(){return!!this.cpfLimpo&&"string"==typeof this.cpfLimpo&&11===this.cpfLimpo.length&&!this.éSequência()&&(this.geraNovoCpf(),this.geraNovoCpf()===this.cpfLimpo)}}])&&n(t.prototype,o),a&&n(t,a),Object.defineProperty(t,"prototype",{writable:!1}),e}();function o(r,n){for(var e=0;e<n.length;e++){var t=n[e];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(r,t.key,t)}}console.log("Cheguei Aqui!");var a,i=function(){function r(){!function(r,n){if(!(r instanceof n))throw new TypeError("Cannot call a class as a function")}(this,r)}var n,e;return n=r,e=[{key:"rand",value:function(){var r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1e8,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:999999999;return String(Math.floor(Math.random()*(n-r)+r))}},{key:"geraNovoCpf",value:function(){var r=this.rand(),n=t.geraDigito(r),e=r+n+t.geraDigito(r+n);return this.formatado(e)}},{key:"formatado",value:function(r){return r.slice(0,3)+"."+r.slice(3,6)+"."+r.slice(6,9)+"-"+r.slice(9,11)}}],e&&o(n.prototype,e),Object.defineProperty(n,"prototype",{writable:!1}),r}(),c=e(379),s=e.n(c),u=e(795),l=e.n(u),p=e(569),f=e.n(p),A=e(565),d=e.n(A),m=e(216),g=e.n(m),v=e(589),h=e.n(v),y=e(122),b={};b.styleTagTransform=h(),b.setAttributes=d(),b.insert=f().bind(null,"head"),b.domAPI=l(),b.insertStyleElement=g(),s()(y.Z,b),y.Z&&y.Z.locals&&y.Z.locals,a=new i,document.querySelector(".cpf-gerado").innerHTML=a.geraNovoCpf(),document.querySelector("button").addEventListener("click",(function(){!function(){var r=new i;document.querySelector(".cpf-gerado").innerHTML=r.geraNovoCpf()}()}))})()})();
//# sourceMappingURL=bundle.js.map