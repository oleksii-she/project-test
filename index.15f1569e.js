!function(){function e(e){return e&&e.__esModule?e.default:e}var t={};function r(e,t,r,n,i,a,o){try{var c=e[a](o),s=c.value}catch(e){return void r(e)}c.done?t(s):Promise.resolve(s).then(n,i)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return function(){var t=this,n=arguments;return new Promise((function(i,a){var o=e.apply(t,n);function c(e){r(o,i,a,c,s,"next",e)}function s(e){r(o,i,a,c,s,"throw",e)}c(void 0)}))}};var n={},i=function(e){"use strict";var t,r=Object.prototype,n=r.hasOwnProperty,i="function"==typeof Symbol?Symbol:{},a=i.iterator||"@@iterator",o=i.asyncIterator||"@@asyncIterator",c=i.toStringTag||"@@toStringTag";function s(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{s({},"")}catch(e){s=function(e,t,r){return e[t]=r}}function u(e,t,r,n){var i=t&&t.prototype instanceof m?t:m,a=Object.create(i.prototype),o=new O(n||[]);return a._invoke=function(e,t,r){var n=d;return function(i,a){if(n===f)throw new Error("Generator is already running");if(n===p){if("throw"===i)throw a;return q()}for(r.method=i,r.arg=a;;){var o=r.delegate;if(o){var c=E(o,r);if(c){if(c===v)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(n===d)throw n=p,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n=f;var s=l(e,t,r);if("normal"===s.type){if(n=r.done?p:h,s.arg===v)continue;return{value:s.arg,done:r.done}}"throw"===s.type&&(n=p,r.method="throw",r.arg=s.arg)}}}(e,r,o),a}function l(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(e){return{type:"throw",arg:e}}}e.wrap=u;var d="suspendedStart",h="suspendedYield",f="executing",p="completed",v={};function m(){}function y(){}function g(){}var _={};s(_,a,(function(){return this}));var w=Object.getPrototypeOf,b=w&&w(w(M([])));b&&b!==r&&n.call(b,a)&&(_=b);var x=g.prototype=m.prototype=Object.create(_);function k(e){["next","throw","return"].forEach((function(t){s(e,t,(function(e){return this._invoke(t,e)}))}))}function L(e,t){function r(i,a,o,c){var s=l(e[i],e,a);if("throw"!==s.type){var u=s.arg,d=u.value;return d&&"object"==typeof d&&n.call(d,"__await")?t.resolve(d.__await).then((function(e){r("next",e,o,c)}),(function(e){r("throw",e,o,c)})):t.resolve(d).then((function(e){u.value=e,o(u)}),(function(e){return r("throw",e,o,c)}))}c(s.arg)}var i;this._invoke=function(e,n){function a(){return new t((function(t,i){r(e,n,t,i)}))}return i=i?i.then(a,a):a()}}function E(e,r){var n=e.iterator[r.method];if(n===t){if(r.delegate=null,"throw"===r.method){if(e.iterator.return&&(r.method="return",r.arg=t,E(e,r),"throw"===r.method))return v;r.method="throw",r.arg=new TypeError("The iterator does not provide a 'throw' method")}return v}var i=l(n,e.iterator,r.arg);if("throw"===i.type)return r.method="throw",r.arg=i.arg,r.delegate=null,v;var a=i.arg;return a?a.done?(r[e.resultName]=a.value,r.next=e.nextLoc,"return"!==r.method&&(r.method="next",r.arg=t),r.delegate=null,v):a:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,v)}function S(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function j(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function O(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(S,this),this.reset(!0)}function M(e){if(e){var r=e[a];if(r)return r.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var i=-1,o=function r(){for(;++i<e.length;)if(n.call(e,i))return r.value=e[i],r.done=!1,r;return r.value=t,r.done=!0,r};return o.next=o}}return{next:q}}function q(){return{value:t,done:!0}}return y.prototype=g,s(x,"constructor",g),s(g,"constructor",y),y.displayName=s(g,c,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===y||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,g):(e.__proto__=g,s(e,c,"GeneratorFunction")),e.prototype=Object.create(x),e},e.awrap=function(e){return{__await:e}},k(L.prototype),s(L.prototype,o,(function(){return this})),e.AsyncIterator=L,e.async=function(t,r,n,i,a){void 0===a&&(a=Promise);var o=new L(u(t,r,n,i),a);return e.isGeneratorFunction(r)?o:o.next().then((function(e){return e.done?e.value:o.next()}))},k(x),s(x,c,"Generator"),s(x,a,(function(){return this})),s(x,"toString",(function(){return"[object Generator]"})),e.keys=function(e){var t=[];for(var r in e)t.push(r);return t.reverse(),function r(){for(;t.length;){var n=t.pop();if(n in e)return r.value=n,r.done=!1,r}return r.done=!0,r}},e.values=M,O.prototype={constructor:O,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(j),!e)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=t)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var r=this;function i(n,i){return c.type="throw",c.arg=e,r.next=n,i&&(r.method="next",r.arg=t),!!i}for(var a=this.tryEntries.length-1;a>=0;--a){var o=this.tryEntries[a],c=o.completion;if("root"===o.tryLoc)return i("end");if(o.tryLoc<=this.prev){var s=n.call(o,"catchLoc"),u=n.call(o,"finallyLoc");if(s&&u){if(this.prev<o.catchLoc)return i(o.catchLoc,!0);if(this.prev<o.finallyLoc)return i(o.finallyLoc)}else if(s){if(this.prev<o.catchLoc)return i(o.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return i(o.finallyLoc)}}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var i=this.tryEntries[r];if(i.tryLoc<=this.prev&&n.call(i,"finallyLoc")&&this.prev<i.finallyLoc){var a=i;break}}a&&("break"===e||"continue"===e)&&a.tryLoc<=t&&t<=a.finallyLoc&&(a=null);var o=a?a.completion:{};return o.type=e,o.arg=t,a?(this.method="next",this.next=a.finallyLoc,v):this.complete(o)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),v},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),j(r),v}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var i=n.arg;j(r)}return i}}throw new Error("illegal catch attempt")},delegateYield:function(e,r,n){return this.delegate={iterator:M(e),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=t),v}},e}(n);try{regeneratorRuntime=i}catch(e){"object"==typeof globalThis?globalThis.regeneratorRuntime=i:Function("r","regeneratorRuntime = r")(i)}var a={};Object.defineProperty(a,"__esModule",{value:!0}),a.default=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")};var o={};function c(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}Object.defineProperty(o,"__esModule",{value:!0}),o.default=function(e,t,r){t&&c(e.prototype,t);r&&c(e,r);return e};var s="bef2e1469ade062164db331fc6ab2f25",u="https://api.themoviedb.org/3",l=function(){"use strict";function r(){e(a)(this,r),this.searchValue="",this.page=1,this.id=NaN}return e(o)(r,[{key:"serviceMovieTopApi",value:function(){var r=this;return e(t)(e(n).mark((function t(){var i,a;return e(n).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("".concat(u,"/trending/movie/week?api_key=").concat(s,"&media_type=all&time_window=week&page=").concat(r.page));case 3:return i=e.sent,e.next=6,i.json();case 6:return a=e.sent,e.abrupt("return",a);case 10:e.prev=10,e.t0=e.catch(0),console.error(e.t0.message);case 13:case"end":return e.stop()}}),t,null,[[0,10]])})))()}},{key:"serviceSearchMovie",value:function(){var r=this;return e(t)(e(n).mark((function t(){var i,a;return e(n).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("".concat(u,"/search/movie?api_key=").concat(s,'&query="').concat(r.searchValue));case 3:return i=e.sent,e.next=6,i.json();case 6:return a=e.sent,e.abrupt("return",a);case 10:e.prev=10,e.t0=e.catch(0),console.error(e.t0.message);case 13:case"end":return e.stop()}}),t,null,[[0,10]])})))()}},{key:"serviceIdMovie",value:function(r){return e(t)(e(n).mark((function t(){var i,a;return e(n).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("".concat(u,"/movie/").concat(r,",?api_key=").concat(s));case 3:return i=e.sent,e.next=6,i.json();case 6:return a=e.sent,e.abrupt("return",a);case 10:e.prev=10,e.t0=e.catch(0),console.error(e.t0.message);case 13:case"end":return e.stop()}}),t,null,[[0,10]])})))()}},{key:"ressetPage",value:function(){this.page=1}},{key:"incrementPage",value:function(){return this.page+=1}},{key:"decrementPage",value:function(){if(!(this.page<=1))return this.page-=1}},{key:"query",get:function(){return this.searchValue},set:function(e){this.searchValue=e}},{key:"pageNumber",set:function(e){this.page=e}},{key:"idNumber",set:function(e){this.id=e}}]),r}(),d=new l,h=[{id:28,name:"Action"},{id:12,name:"Adventure"},{id:16,name:"Animation"},{id:35,name:"Comedy"},{id:80,name:"Crime"},{id:99,name:"Documentary"},{id:18,name:"Drama"},{id:10751,name:"Family"},{id:14,name:"Fantasy"},{id:36,name:"History"},{id:27,name:"Horror"},{id:10402,name:"Music"},{id:9648,name:"Mystery"},{id:10749,name:"Romance"},{id:878,name:"Science Fiction"},{id:10770,name:"TV Movie"},{id:53,name:"Thriller"},{id:10752,name:"War"},{id:37,name:"Western"}];function f(e){var t=document.querySelector(".gallery_list");document.querySelector(".gallery_list").innerHTML="",e.forEach((function(e){h.map((function(t){t.id===e.genre_ids[0]&&(e.genre_ids[0]=t.name),t.id===e.genre_ids[1]&&(e.genre_ids[1]=t.name),t.id===e.genre_ids[2]&&(e.genre_ids[2]=t.name),t.id===e.genre_ids[3]&&(e.genre_ids[3]=t.name),t.id===e.genre_ids[4]&&(e.genre_ids[4]=t.name)}));var r=e.release_date.slice(0,4);console.log(e.genre_ids);var n=document.createElement("li");n.classList.add("gallery_item"),null===e.poster_path?n.innerHTML='<div class="modal_click-open" id="'.concat(e.id,'">\n      <img class="gallery_img" src="https://img.freepik.com/free-vector/glitch-error-404-page_23-2148105404.jpg?w=996&t=st=1662636904~exp=1662637504~hmac=6929048a20459487fdcf38b8077d000703b9a860b7d7ee1bb32f889a47b1edd8" alt="').concat(e.original_title,'"/></div>\n        <div class="title_container"><h2 class="gallery_title">').concat(e.original_title,'</h2>\n        <div><p class="ganre">').concat(e.genre_ids," ").concat(r,"</p></div>\n        </div>"):n.innerHTML='<div class="modal_click-open" id="'.concat(e.id,'">\n      <img class="gallery_img" src="https://image.tmdb.org/t/p/w500').concat(e.poster_path,'" alt="').concat(e.original_title,'"/></div>\n        <div class="title_container"><h2 class="gallery_title">').concat(e.original_title,'</h2>\n        <div><p class="ganre">').concat(e.genre_ids," ").concat(r,"</p></div>\n        </div>"),t.appendChild(n),n.addEventListener("click",(function(){return m(e.id,e.poster_path)}))}))}var p=document.querySelector(".backdrop"),v=document.querySelector(".modal_box");function m(e,t){return y.apply(this,arguments)}function y(){return(y=e(t)(e(n).mark((function t(r,i){var a,o;return e(n).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return d.idNumber,e.next=3,d.serviceIdMovie(r);case 3:a=e.sent,o=a.genres.map((function(e){return e.name})),"https://image.tmdb.org/t/p/w500".concat(i),v.innerHTML='\n    <div class="img_box">\n    <img src="'.concat(i,'" alt="" class="modal_img" />\n    </div>\n    <div class="text-content_box">\n      <h2 class="modal_title">').concat(a.original_title,'</h2>\n      <div class="category_box">\n        <ul class="category_list">\n          <li class="category_item">Vote / Votes</li>\n          <li class="category_item">Popularity</li>\n          <li class="category_item">Original Title</li>\n          <li class="category_item">Genre</li>\n        </ul>\n        <ul class="categiryApi_list">\n          <li class="categiryApi_item">\n            <span class="vote">').concat(a.vote_average,'</span><span class="slash">/</span>').concat(a.vote_count,'\n          </li>\n          <li class="categiryApi_item">').concat(a.popularity,'</li>\n          <li class="categiryApi_item categiryApi_style--upercase">').concat(a.original_title,'</li>\n          <li class="categiryApi_item categiryApi_style ganre">').concat(String(o).replaceAll(","," / "),' </li>\n        </ul>\n      </div>\n      <h2 class="about_title">About</h2>\n      <p class="about_text">\n     ').concat(a.overview,'\n      </p>\n      <div class="modal-box_btn">\n        <button class="watched_btn">add to Watched</button>\n        <button class="queue_btn">add to queue</button>\n      </div>\n    </div>\n  '),document.querySelector(".backdrop").style.backgroundImage="url(https://image.tmdb.org/t/p/original".concat(a.backdrop_path,")"),p.classList.remove("is-hiden"),document.body.classList.add("scrollOFF"),document.querySelector(".ganre"),document.querySelector(".btn_close").addEventListener("click",g);case 13:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function g(){p.classList.add("is-hiden"),document.body.classList.remove("scrollOFF")}window.addEventListener("click",(function(e){e.target===p&&g()})),window.addEventListener("keydown",(function(e){"Escape"===e.code&&g()}));var _=document.querySelector(".search_form"),w=(document.querySelector(".gallery_list"),document.querySelector(".pagination"),new l),b=(document.querySelector(".page_list"),document.querySelector(".result_input"));function x(){return(x=e(t)(e(n).mark((function t(r){var i,a;return e(n).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r.preventDefault(),e.prev=1,""!==(i=r.target.elements.search.value)){e.next=5;break}return e.abrupt("return");case 5:return w.query=i,e.next=8,w.serviceSearchMovie();case 8:a=e.sent,console.log(a),0===a.results.length&&(b.textContent="Search result not successful. Enter the correct movie name and"),f(a.results),e.next=16;break;case 14:e.prev=14,e.t0=e.catch(1);case 16:case"end":return e.stop()}}),t,null,[[1,14]])})))).apply(this,arguments)}function k(){return(k=e(t)(e(n).mark((function t(){return e(n).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,w.serviceMovieTopApi();case 2:f(e.sent.results);case 4:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function L(){return(L=e(t)(e(n).mark((function t(){return e(n).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,w.serviceIdMovie();case 2:m(e.sent);case 4:case"end":return e.stop()}}),t)})))).apply(this,arguments)}!function(){k.apply(this,arguments)}(),function(){L.apply(this,arguments)}(),_.addEventListener("submit",(function(e){return x.apply(this,arguments)}))}();
//# sourceMappingURL=index.15f1569e.js.map
