(()=>{"use strict";var n={538:(n,r,e)=>{e.d(r,{Z:()=>s});var t=e(81),o=e.n(t),i=e(645),a=e.n(i)()(o());a.push([n.id,"/* http://meyerweb.com/eric/tools/css/reset/ \r\n   v2.0 | 20110126\r\n   License: none (public domain)\r\n*/\r\n\r\nhtml, body, div, span, applet, object, iframe,\r\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\r\na, abbr, acronym, address, big, cite, code,\r\ndel, dfn, em, img, ins, kbd, q, s, samp,\r\nsmall, strike, strong, sub, sup, tt, var,\r\nb, u, i, center,\r\ndl, dt, dd, ol, ul, li,\r\nfieldset, form, label, legend,\r\ntable, caption, tbody, tfoot, thead, tr, th, td,\r\narticle, aside, canvas, details, embed, \r\nfigure, figcaption, footer, header, hgroup, \r\nmenu, nav, output, ruby, section, summary,\r\ntime, mark, audio, video {\r\n\tmargin: 0;\r\n\tpadding: 0;\r\n\tborder: 0;\r\n\tfont-size: 100%;\r\n\tfont: inherit;\r\n\tvertical-align: baseline;\r\n}\r\n/* HTML5 display-role reset for older browsers */\r\narticle, aside, details, figcaption, figure, \r\nfooter, header, hgroup, menu, nav, section {\r\n\tdisplay: block;\r\n}\r\nbody {\r\n\tline-height: 1;\r\n}\r\nol, ul {\r\n\tlist-style: none;\r\n}\r\nblockquote, q {\r\n\tquotes: none;\r\n}\r\nblockquote:before, blockquote:after,\r\nq:before, q:after {\r\n\tcontent: '';\r\n\tcontent: none;\r\n}\r\ntable {\r\n\tborder-collapse: collapse;\r\n\tborder-spacing: 0;\r\n}",""]);const s=a},402:(n,r,e)=>{e.d(r,{Z:()=>v});var t=e(81),o=e.n(t),i=e(645),a=e.n(i),s=e(667),l=e.n(s),c=new URL(e(92),e.b),p=new URL(e(969),e.b),f=new URL(e(313),e.b),d=new URL(e(20),e.b),u=new URL(e(562),e.b),x=new URL(e(141),e.b),h=a()(o()),m=l()(c),b=l()(p),g=l()(f),_=l()(d),w=l()(u),y=l()(x);h.push([n.id,"/* nunito-300 - latin_cyrillic */\r\n@font-face {\r\n  font-family: 'Nunito';\r\n  font-style: normal;\r\n  font-weight: 300;\r\n  src: local(''),\r\n       url("+m+") format('woff2'), /* Chrome 26+, Opera 23+, Firefox 39+ */\r\n       url("+b+") format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */\r\n}\r\n/* nunito-600 - latin_cyrillic */\r\n@font-face {\r\n  font-family: 'Nunito';\r\n  font-style: normal;\r\n  font-weight: 600;\r\n  src: local(''),\r\n       url("+g+") format('woff2'), /* Chrome 26+, Opera 23+, Firefox 39+ */\r\n       url("+_+") format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */\r\n}\r\n/* nunito-900 - latin_cyrillic */\r\n@font-face {\r\n  font-family: 'Nunito';\r\n  font-style: normal;\r\n  font-weight: 900;\r\n  src: local(''),\r\n       url("+w+") format('woff2'), /* Chrome 26+, Opera 23+, Firefox 39+ */\r\n       url("+y+") format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */\r\n}\r\n\r\nhtml {\r\n  box-sizing: border-box;\r\n}\r\n\r\n*, *::after, *::before {\r\n  box-sizing: inherit;\r\n}\r\n\r\nbody {\r\n  font-family: Nunito, sans-serif;\r\n  background-color: #ffffff;\r\n  line-height: 1.5;\r\n  font-size: 18px;\r\n  color: #434343;\r\n}\r\n\r\nh1 {\r\n  text-transform: uppercase;\r\n}\r\n\r\nbutton {\r\n  font: inherit;\r\n  cursor: pointer;\r\n}\r\n\r\n.header {\r\n  background-color: #296C82;\r\n  padding-top: 13px;\r\n  padding-bottom: 13px;\r\n}\r\n\r\n.header__container {\r\n  padding: 0 30px;\r\n  max-width: 1140px;\r\n  margin: 0 auto;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: space-between;\r\n}\r\n\r\n.header__title {\r\n  color: #ffffff;\r\n  font-weight: 900;\r\n  font-size: 30px;\r\n  text-transform: uppercase;\r\n}\r\n\r\n.main {\r\n  padding: 60px 30px;\r\n}\r\n\r\n.main__title {\r\n  font-weight: 300;\r\n  font-size: 50px;\r\n  text-align: center;\r\n  margin-bottom: 30px;\r\n}\r\n\r\n.main__box {\r\n  margin: 0 auto;\r\n  max-width: 800px;\r\n  height: 540px;\r\n  box-shadow: 0px 2px 20px rgba(0, 0, 0, 0.1);\r\n  border-radius: 30px;\r\n}\r\n\r\n.main__subtitle {\r\n  font-weight: 300;\r\n  font-size: 26px;\r\n  text-align: center;\r\n  margin: 60px;\r\n}\r\n\r\n.main__subtitle_result {\r\n  margin-bottom: 50px;\r\n}\r\n\r\n.main__btn {\r\n  min-width: 230px;\r\n  height: 50px;\r\n  padding: 0 24px;\r\n  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.1);\r\n  border-radius: 8px;\r\n  border: none;\r\n  background-color: transparent;\r\n  font-weight: 600;\r\n  font-size: 18px;\r\n  color: #296C82;\r\n  display: block;\r\n  margin: 0 auto;\r\n  transition-property: background-color, color;\r\n  transition-duration: 0.24s;\r\n  transition-timing-function: ease-in-out;\r\n}\r\n\r\n.main__btn:hover {\r\n background-color: #296C82;\r\n color: #fff;\r\n}\r\n\r\n.selection {\r\n  padding: 50px;\r\n}\r\n\r\n.selection__list {\r\n  display: flex;\r\n  flex-direction: column;\r\n  overflow-y: auto;\r\n  max-height: 100%;\r\n  scrollbar-color: rgba(140, 140, 140, 0.1);\r\n  scrollbar-width: thin;\r\n}\r\n\r\n.selection__list::-webkit-scrollbar {\r\n  width: 6px;\r\n}\r\n\r\n.selection__list::-webkit-scrollbar-thumb {\r\n  background-color: rgba(140, 140, 140, 0.1);\r\n  border-radius: 8px;\r\n}\r\n\r\n.selection__item {\r\n  display: flex;\r\n  margin-bottom: 15px;\r\n  \r\n}\r\n\r\n.selection__item:last-child {\r\n  margin-bottom: 0px;\r\n}\r\n\r\n.selection__theme {\r\n  width: 100%;\r\n  max-width: 520px;\r\n  background: #F1F9FB;\r\n  border-radius: 12px;\r\n  font-weight: 600;\r\n  font-size: 22px;\r\n  text-align: left;\r\n  border: none;\r\n  padding: 16px 20px;\r\n  transition-property: background-color, color;\r\n  transition-duration: 0.24s;\r\n  transition-timing-function: ease-in-out;\r\n}\r\n\r\n.selection__theme:hover {\r\n  background: #e3f4f8;\r\n}\r\n\r\n.selection__theme:not(:last-child) {\r\n  margin-right: 20px;\r\n}\r\n\r\n.selection__result {\r\n  width: min-content;\r\n}\r\n\r\n.selection__result-ratio {\r\n  display: block;\r\n  text-align: center;\r\n  font-weight: 600;\r\n  font-size: 22px;\r\n  color: #296C82;\r\n}\r\n\r\n.selection__result-text {\r\n  display: block;\r\n  font-weight: 300;\r\n  text-align: center;\r\n  font-size: 12px;\r\n  line-height: 110%;\r\n  color: #8C8C8C;\r\n}\r\n\r\n.main__box_question {\r\n  padding: 60px 120px;\r\n  height: auto;\r\n  min-height: 540px;\r\n  position: relative;\r\n}\r\n\r\n.main__form-question {\r\n  position: relative;\r\n}\r\n\r\n.main__form-question::after {\r\n  content: attr(data-count);\r\n  position: absolute;\r\n  bottom: 0;\r\n  right: 0;\r\n  font-weight: 300;\r\n  font-size: 18px;\r\n  color: #8C8C8C;\r\n}\r\n\r\n.answer {\r\n  position: relative;\r\n  display: block;\r\n  margin-bottom: 26px;\r\n  font-weight: 600;\r\n  font-size: 18px;\r\n  line-height: 40px;\r\n  padding-left: 65px;\r\n  cursor: pointer;\r\n}\r\n\r\n.answer__checkbox {\r\n  position: absolute;\r\n  -webkit-appearance: none;\r\n  -moz-appearance: none;\r\n  appearance: none;\r\n  width: 40px;\r\n  height: 40px;\r\n  margin: 0 0 0 -65px;\r\n  cursor: pointer;\r\n}\r\n\r\n.answer__checkbox::before {\r\n  content: '';\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  display: block;\r\n  width: 40px;\r\n  height: 40px;\r\n  background-color: #ffffff;\r\n  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.15);\r\n  border-radius: 8px;\r\n}\r\n\r\n.answer__checkbox::after {\r\n  content: '';\r\n  position: absolute;\r\n  top: 15px;\r\n  left: 12px;\r\n  height: 8px;\r\n  width: 17px;\r\n  border-style: solid;\r\n  border-color: #434343;\r\n  border-width: 0 0 2px 2px;\r\n  transform: rotate(-45deg);\r\n  opacity: 0;\r\n  transition: opacity 0.24s ease;\r\n}\r\n\r\n.answer__checkbox:checked:after {\r\n  opacity: 1;\r\n}\r\n\r\n.answer__checkbox:focus:before,\r\n.answer__checkbox:hover:before {\r\n  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);\r\n}\r\n\r\n.answer__radio {\r\n  position: absolute;\r\n  --webkit-appearance: none;\r\n  -moz-appearance: none;\r\n  appearance: none;\r\n  width: 40px;\r\n  height: 40px;\r\n  margin: 0 0 0 -65px;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  cursor: pointer;\r\n}\r\n\r\n.answer__radio::before {\r\n  content: '';\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  display: block;\r\n  width: 40px;\r\n  height: 40px;\r\n  background-color: #ffffff;\r\n  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.15);\r\n  border-radius: 50%;\r\n}\r\n\r\n.answer__radio::after {\r\n  content: '';\r\n  position: relative;\r\n  z-index: inherit;\r\n  height: 14px;\r\n  width: 14px;\r\n  background-color: #434343;\r\n  border-radius: 50%;\r\n  opacity: 0;\r\n  transition: opacity 0.24s ease;\r\n}\r\n\r\n.answer__radio:checked:after {\r\n  opacity: 1;\r\n}\r\n\r\n.answer__radio:focus:before,\r\n.answer__radio:hover:before {\r\n  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.3);\r\n}\r\n\r\n.main__box_result {\r\n  padding: 60px;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n}\r\n\r\n.result__box {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  margin-bottom: auto;\r\n}\r\n\r\n.result__ratio {\r\n  width: 127px;\r\n  height: 127px;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  background-color: #8C8C8C;\r\n  border-radius: 50%;\r\n  color: #FFFFFF;\r\n  font-weight: 600;\r\n  font-size: 32px;\r\n  margin-bottom: 20px;\r\n}\r\n\r\n.result__ratio_1 {\r\n  background: #DC1C1C;\r\n}\r\n\r\n.result__ratio_2 {\r\n  background: #EFCF24;\r\n}\r\n\r\n.result__ratio_3 {\r\n  background: #49F050;\r\n}\r\n\r\n.result__text {\r\n  font-weight: 600;\r\n  font-size: 18px;\r\n}\r\n\r\n@media (max-width: 1024px) {\r\n  .selection__list {\r\n    padding-right: 30px;\r\n  }\r\n\r\n  .selection__theme {\r\n    font-size: 20px;\r\n  }\r\n}\r\n\r\n@media (max-width: 769px) {\r\n  .header__container {\r\n    padding: 0 20px;\r\n  }\r\n\r\n  .main {\r\n    padding: 40px 20px;\r\n  }\r\n\r\n  .main__title {\r\n    font-style: 34px;\r\n  }\r\n\r\n  .main__box {\r\n    padding: 40px;\r\n  }\r\n\r\n  .selection__list {\r\n    padding-right: 15px;\r\n  }\r\n\r\n  .selection__theme {\r\n    font-size: 18px;\r\n  }\r\n\r\n  .selection__item {\r\n    margin-bottom: 10px;\r\n  }\r\n\r\n  .selection__result {\r\n    display: flex;\r\n    align-items: center;\r\n  }\r\n\r\n  .selection__result-text {\r\n    display: none;\r\n    margin-right: 15px;\r\n  }\r\n}\r\n\r\n@media (max-width: 560px) {\r\n  .main__btn:not(.result__return) {\r\n    margin-left: 0;\r\n    min-width: 100%;\r\n  }\r\n\r\n  .main__form-question::after {\r\n    bottom: -35px;\r\n  }\r\n\r\n  .main__subtitle {\r\n    font-size: 20px;\r\n  }\r\n\r\n  .main {\r\n    padding: 30px 10px;\r\n  }\r\n\r\n  .main__box {\r\n    padding: 15px;\r\n    border-radius: 15px;\r\n  }\r\n\r\n  .selection__result-ratio {\r\n    font-size: 18px;\r\n  }\r\n}",""]);const v=h},645:n=>{n.exports=function(n){var r=[];return r.toString=function(){return this.map((function(r){var e="",t=void 0!==r[5];return r[4]&&(e+="@supports (".concat(r[4],") {")),r[2]&&(e+="@media ".concat(r[2]," {")),t&&(e+="@layer".concat(r[5].length>0?" ".concat(r[5]):""," {")),e+=n(r),t&&(e+="}"),r[2]&&(e+="}"),r[4]&&(e+="}"),e})).join("")},r.i=function(n,e,t,o,i){"string"==typeof n&&(n=[[null,n,void 0]]);var a={};if(t)for(var s=0;s<this.length;s++){var l=this[s][0];null!=l&&(a[l]=!0)}for(var c=0;c<n.length;c++){var p=[].concat(n[c]);t&&a[p[0]]||(void 0!==i&&(void 0===p[5]||(p[1]="@layer".concat(p[5].length>0?" ".concat(p[5]):""," {").concat(p[1],"}")),p[5]=i),e&&(p[2]?(p[1]="@media ".concat(p[2]," {").concat(p[1],"}"),p[2]=e):p[2]=e),o&&(p[4]?(p[1]="@supports (".concat(p[4],") {").concat(p[1],"}"),p[4]=o):p[4]="".concat(o)),r.push(p))}},r}},667:n=>{n.exports=function(n,r){return r||(r={}),n?(n=String(n.__esModule?n.default:n),/^['"].*['"]$/.test(n)&&(n=n.slice(1,-1)),r.hash&&(n+=r.hash),/["'() \t\n]|(%20)/.test(n)||r.needQuotes?'"'.concat(n.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):n):n}},81:n=>{n.exports=function(n){return n[1]}},91:n=>{n.exports=function(n,r){return r||(r={}),n?(n=String(n.__esModule?n.default:n),r.hash&&(n+=r.hash),r.maybeNeedQuotes&&/[\t\n\f\r "'=<>`]/.test(n)?'"'.concat(n,'"'):n):n}},379:n=>{var r=[];function e(n){for(var e=-1,t=0;t<r.length;t++)if(r[t].identifier===n){e=t;break}return e}function t(n,t){for(var i={},a=[],s=0;s<n.length;s++){var l=n[s],c=t.base?l[0]+t.base:l[0],p=i[c]||0,f="".concat(c," ").concat(p);i[c]=p+1;var d=e(f),u={css:l[1],media:l[2],sourceMap:l[3],supports:l[4],layer:l[5]};if(-1!==d)r[d].references++,r[d].updater(u);else{var x=o(u,t);t.byIndex=s,r.splice(s,0,{identifier:f,updater:x,references:1})}a.push(f)}return a}function o(n,r){var e=r.domAPI(r);return e.update(n),function(r){if(r){if(r.css===n.css&&r.media===n.media&&r.sourceMap===n.sourceMap&&r.supports===n.supports&&r.layer===n.layer)return;e.update(n=r)}else e.remove()}}n.exports=function(n,o){var i=t(n=n||[],o=o||{});return function(n){n=n||[];for(var a=0;a<i.length;a++){var s=e(i[a]);r[s].references--}for(var l=t(n,o),c=0;c<i.length;c++){var p=e(i[c]);0===r[p].references&&(r[p].updater(),r.splice(p,1))}i=l}}},569:n=>{var r={};n.exports=function(n,e){var t=function(n){if(void 0===r[n]){var e=document.querySelector(n);if(window.HTMLIFrameElement&&e instanceof window.HTMLIFrameElement)try{e=e.contentDocument.head}catch(n){e=null}r[n]=e}return r[n]}(n);if(!t)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");t.appendChild(e)}},216:n=>{n.exports=function(n){var r=document.createElement("style");return n.setAttributes(r,n.attributes),n.insert(r,n.options),r}},565:(n,r,e)=>{n.exports=function(n){var r=e.nc;r&&n.setAttribute("nonce",r)}},795:n=>{n.exports=function(n){var r=n.insertStyleElement(n);return{update:function(e){!function(n,r,e){var t="";e.supports&&(t+="@supports (".concat(e.supports,") {")),e.media&&(t+="@media ".concat(e.media," {"));var o=void 0!==e.layer;o&&(t+="@layer".concat(e.layer.length>0?" ".concat(e.layer):""," {")),t+=e.css,o&&(t+="}"),e.media&&(t+="}"),e.supports&&(t+="}");var i=e.sourceMap;i&&"undefined"!=typeof btoa&&(t+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),r.styleTagTransform(t,n,r.options)}(r,n,e)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(r)}}}},589:n=>{n.exports=function(n,r){if(r.styleSheet)r.styleSheet.cssText=n;else{for(;r.firstChild;)r.removeChild(r.firstChild);r.appendChild(document.createTextNode(n))}}},969:(n,r,e)=>{n.exports=e.p+"img/nunito-v20-latin_cyrillic-300.woff"},92:(n,r,e)=>{n.exports=e.p+"img/nunito-v20-latin_cyrillic-300.woff2"},20:(n,r,e)=>{n.exports=e.p+"img/nunito-v20-latin_cyrillic-600.woff"},313:(n,r,e)=>{n.exports=e.p+"img/nunito-v20-latin_cyrillic-600.woff2"},141:(n,r,e)=>{n.exports=e.p+"img/nunito-v20-latin_cyrillic-900.woff"},562:(n,r,e)=>{n.exports=e.p+"img/nunito-v20-latin_cyrillic-900.woff2"},582:(n,r,e)=>{n.exports=e.p+"img/logo.svg"}},r={};function e(t){var o=r[t];if(void 0!==o)return o.exports;var i=r[t]={id:t,exports:{}};return n[t](i,i.exports,e),i.exports}e.m=n,e.n=n=>{var r=n&&n.__esModule?()=>n.default:()=>n;return e.d(r,{a:r}),r},e.d=(n,r)=>{for(var t in r)e.o(r,t)&&!e.o(n,t)&&Object.defineProperty(n,t,{enumerable:!0,get:r[t]})},e.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),e.o=(n,r)=>Object.prototype.hasOwnProperty.call(n,r),(()=>{var n;e.g.importScripts&&(n=e.g.location+"");var r=e.g.document;if(!n&&r&&(r.currentScript&&(n=r.currentScript.src),!n)){var t=r.getElementsByTagName("script");t.length&&(n=t[t.length-1].src)}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),e.p=n})(),e.b=document.baseURI||self.location.href,(()=>{var n=e(91),r=e.n(n),t=new URL(e(582),e.b);r()(t);var o=e(379),i=e.n(o),a=e(795),s=e.n(a),l=e(569),c=e.n(l),p=e(565),f=e.n(p),d=e(216),u=e.n(d),x=e(589),h=e.n(x),m=e(538),b={};b.styleTagTransform=h(),b.setAttributes=f(),b.insert=c().bind(null,"head"),b.domAPI=s(),b.insertStyleElement=u(),i()(m.Z,b),m.Z&&m.Z.locals&&m.Z.locals;var g=e(402),_={};_.styleTagTransform=h(),_.setAttributes=f(),_.insert=c().bind(null,"head"),_.domAPI=s(),_.insertStyleElement=u(),i()(g.Z,_),g.Z&&g.Z.locals&&g.Z.locals})()})();