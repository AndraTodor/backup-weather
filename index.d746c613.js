!function(){function t(t){return t&&t.__esModule?t.default:t}var e={};function r(t,e,r,n,o,a,i){try{var c=t[a](i),u=c.value}catch(t){return void r(t)}c.done?e(u):Promise.resolve(u).then(n,o)}Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t){return function(){var e=this,n=arguments;return new Promise((function(o,a){var i=t.apply(e,n);function c(t){r(i,o,a,c,u,"next",t)}function u(t){r(i,o,a,c,u,"throw",t)}c(void 0)}))}};var n={},o=function(t){"use strict";var e,r=Object.prototype,n=r.hasOwnProperty,o="function"==typeof Symbol?Symbol:{},a=o.iterator||"@@iterator",i=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function u(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{u({},"")}catch(t){u=function(t,e,r){return t[e]=r}}function s(t,e,r,n){var o=e&&e.prototype instanceof y?e:y,a=Object.create(o.prototype),i=new B(n||[]);return a._invoke=function(t,e,r){var n=h;return function(o,a){if(n===f)throw new Error("Generator is already running");if(n===d){if("throw"===o)throw a;return T()}for(r.method=o,r.arg=a;;){var i=r.delegate;if(i){var c=L(i,r);if(c){if(c===m)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(n===h)throw n=d,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n=f;var u=l(t,e,r);if("normal"===u.type){if(n=r.done?d:p,u.arg===m)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(n=d,r.method="throw",r.arg=u.arg)}}}(t,r,i),a}function l(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}t.wrap=s;var h="suspendedStart",p="suspendedYield",f="executing",d="completed",m={};function y(){}function g(){}function v(){}var w={};u(w,a,(function(){return this}));var x=Object.getPrototypeOf,b=x&&x(x(C([])));b&&b!==r&&n.call(b,a)&&(w=b);var E=v.prototype=y.prototype=Object.create(w);function k(t){["next","throw","return"].forEach((function(e){u(t,e,(function(t){return this._invoke(e,t)}))}))}function q(t,e){function r(o,a,i,c){var u=l(t[o],t,a);if("throw"!==u.type){var s=u.arg,h=s.value;return h&&"object"==typeof h&&n.call(h,"__await")?e.resolve(h.__await).then((function(t){r("next",t,i,c)}),(function(t){r("throw",t,i,c)})):e.resolve(h).then((function(t){s.value=t,i(s)}),(function(t){return r("throw",t,i,c)}))}c(u.arg)}var o;this._invoke=function(t,n){function a(){return new e((function(e,o){r(t,n,e,o)}))}return o=o?o.then(a,a):a()}}function L(t,r){var n=t.iterator[r.method];if(n===e){if(r.delegate=null,"throw"===r.method){if(t.iterator.return&&(r.method="return",r.arg=e,L(t,r),"throw"===r.method))return m;r.method="throw",r.arg=new TypeError("The iterator does not provide a 'throw' method")}return m}var o=l(n,t.iterator,r.arg);if("throw"===o.type)return r.method="throw",r.arg=o.arg,r.delegate=null,m;var a=o.arg;return a?a.done?(r[t.resultName]=a.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=e),r.delegate=null,m):a:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,m)}function S(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function I(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function B(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(S,this),this.reset(!0)}function C(t){if(t){var r=t[a];if(r)return r.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var o=-1,i=function r(){for(;++o<t.length;)if(n.call(t,o))return r.value=t[o],r.done=!1,r;return r.value=e,r.done=!0,r};return i.next=i}}return{next:T}}function T(){return{value:e,done:!0}}return g.prototype=v,u(E,"constructor",v),u(v,"constructor",g),g.displayName=u(v,c,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===g||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,v):(t.__proto__=v,u(t,c,"GeneratorFunction")),t.prototype=Object.create(E),t},t.awrap=function(t){return{__await:t}},k(q.prototype),u(q.prototype,i,(function(){return this})),t.AsyncIterator=q,t.async=function(e,r,n,o,a){void 0===a&&(a=Promise);var i=new q(s(e,r,n,o),a);return t.isGeneratorFunction(r)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},k(E),u(E,c,"Generator"),u(E,a,(function(){return this})),u(E,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=C,B.prototype={constructor:B,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(I),!t)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function o(n,o){return c.type="throw",c.arg=t,r.next=n,o&&(r.method="next",r.arg=e),!!o}for(var a=this.tryEntries.length-1;a>=0;--a){var i=this.tryEntries[a],c=i.completion;if("root"===i.tryLoc)return o("end");if(i.tryLoc<=this.prev){var u=n.call(i,"catchLoc"),s=n.call(i,"finallyLoc");if(u&&s){if(this.prev<i.catchLoc)return o(i.catchLoc,!0);if(this.prev<i.finallyLoc)return o(i.finallyLoc)}else if(u){if(this.prev<i.catchLoc)return o(i.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return o(i.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=t,i.arg=e,a?(this.method="next",this.next=a.finallyLoc,m):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),m},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),I(r),m}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;I(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,r,n){return this.delegate={iterator:C(t),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=e),m}},t}(n);try{regeneratorRuntime=o}catch(t){"object"==typeof globalThis?globalThis.regeneratorRuntime=o:Function("r","regeneratorRuntime = r")(o)}var a="c28b86768a874c70b1ecd1343e8f0f24",i="https://api.openweathermap.org/data/2.5",c="https://api.openweathermap.org/geo/1.0";function u(t){return s.apply(this,arguments)}function s(){return(s=t(e)(t(n).mark((function e(r){var o,a;return t(n).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch(r);case 3:if((o=t.sent).ok){t.next=6;break}throw new Error("HTTPS error! status: ".concat(o.status));case 6:return t.next=8,o.json();case 8:return a=t.sent,t.abrupt("return",a);case 12:throw t.prev=12,t.t0=t.catch(0),console.error("Fetch API Error:",t.t0),t.t0;case 16:case"end":return t.stop()}}),e,null,[[0,12]])})))).apply(this,arguments)}function l(t){return h.apply(this,arguments)}function h(){return(h=t(e)(t(n).mark((function e(r){var o;return t(n).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,o="".concat(i,"/weather?q=").concat(r,"&appid=").concat(a,"&units=metric"),t.next=4,u(o);case 4:return t.abrupt("return",t.sent);case 7:throw t.prev=7,t.t0=t.catch(0),console.error('Error getting weather by city name "'.concat(r,'":'),t.t0),t.t0;case 11:case"end":return t.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}function p(t,e){return f.apply(this,arguments)}function f(){return(f=t(e)(t(n).mark((function e(r,o){var c;return t(n).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,c="".concat(i,"/weather?lat=").concat(r,"&lon=").concat(o,"&appid=").concat(a,"&units=metric"),t.next=4,u(c);case 4:return t.abrupt("return",t.sent);case 7:throw t.prev=7,t.t0=t.catch(0),console.error("Error getting weather by coordinates (lat: ".concat(r,", lon: ").concat(o,"):"),t.t0),t.t0;case 11:case"end":return t.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}function d(t){return m.apply(this,arguments)}function m(){return(m=t(e)(t(n).mark((function e(r){var o;return t(n).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,o="".concat(i,"/forecast?q=").concat(r,"&appid=").concat(a,"&units=metric"),t.next=4,u(o);case 4:return t.abrupt("return",t.sent);case 7:throw t.prev=7,t.t0=t.catch(0),console.error('Error getting weather forecast by city name "'.concat(r,'":'),t.t0),t.t0;case 11:case"end":return t.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}function y(t,e){return g.apply(this,arguments)}function g(){return(g=t(e)(t(n).mark((function e(r,o){var i;return t(n).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,i="".concat(c,"/reverse?lat=").concat(r,"&lon=").concat(o,"&appid=").concat(a),t.next=4,u(i);case 4:return t.abrupt("return",t.sent);case 7:throw t.prev=7,t.t0=t.catch(0),console.error("Error getting reverse geocoding for coordinates (lat: ".concat(r,", lon: ").concat(o,"):"),t.t0),t.t0;case 11:case"end":return t.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}var v="24587351-f51ecbfdd1a1ed72c58205b43",w="https://pixabay.com/api";function x(t){return b.apply(this,arguments)}function b(){return(b=t(e)(t(n).mark((function e(r){var o,a;return t(n).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch(r);case 3:if((o=t.sent).ok){t.next=6;break}throw new Error("Network response was not ok. Status: ".concat(o.status));case 6:return t.next=8,o.json();case 8:return a=t.sent,t.abrupt("return",a);case 12:throw t.prev=12,t.t0=t.catch(0),console.error("Fetch API Error:",t.t0),t.t0;case 16:case"end":return t.stop()}}),e,null,[[0,12]])})))).apply(this,arguments)}function E(t){return k.apply(this,arguments)}function k(){return k=t(e)(t(n).mark((function e(r){var o,a,i,c=arguments;return t(n).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return o=c.length>1&&void 0!==c[1]?c[1]:1,a=c.length>2&&void 0!==c[2]?c[2]:3,t.prev=1,i="".concat(w,"/?key=").concat(v,"&q=").concat(r,"&image_type=photo&per_page=").concat(a,"&page=").concat(o),console.log("Fetching image from URL:",i),t.next=6,x(i);case 6:return t.abrupt("return",t.sent);case 9:throw t.prev=9,t.t0=t.catch(1),console.error('Error fetching random images with query "'.concat(r,'":'),t.t0),t.t0;case 13:case"end":return t.stop()}}),e,null,[[1,9]])}))),k.apply(this,arguments)}function q(t){return L.apply(this,arguments)}function L(){return(L=t(e)(t(n).mark((function e(r){var o,a;return t(n).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,E(r,1,3);case 3:o=t.sent,a=document.getElementById("background-image"),o&&o.hits&&o.hits.length>0&&a?(a.style.backgroundImage="url(".concat(o.hits[0].webformatURL,")"),a.style.backgroundSize="cover",a.style.backgroundPosition="center",a.style.height="100vh",a.style.width="100vw",a.style.position="fixed",a.style.zIndex="-1"):console.error("No images found or background element not found."),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),console.error("Error fetching image from Pixabay API:",t.t0);case 11:case"end":return t.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}var S={"New York":{author:"Mark Twain",quote:"The secret of getting ahead is getting started."},Paris:{author:"Victor Hugo",quote:"He who opens a school door, closes a prison."},London:{author:"William Shakespeare",quote:"To be, or not to be, that is the question."},Vienna:{author:"Sigmund Freud",quote:"Being entirely honest with oneself is a good exercise."},Rome:{author:"Marcus Aurelius",quote:"The happiness of your life depends upon the quality of your thoughts."},Tokyo:{author:"Haruki Murakami",quote:"And once the storm is over, you won’t remember how you made it through."},Dublin:{author:"James Joyce",quote:"A man of genius makes no mistakes. His errors are volitional and are the portals of discovery."},Moscow:{author:"Leo Tolstoy",quote:"Everyone thinks of changing the world, but no one thinks of changing himself."},Berlin:{author:"Albert Einstein",quote:"Life is like riding a bicycle. To keep your balance, you must keep moving."},Athens:{author:"Plato",quote:"The greatest wealth is to live content with little."},Beijing:{author:"Confucius",quote:"It does not matter how slowly you go as long as you do not stop."},Madrid:{author:"Miguel de Cervantes",quote:"The pen is the tongue of the mind."},Cairo:{author:"Naguib Mahfouz",quote:"You can tell whether a man is clever by his answers. You can tell whether a man is wise by his questions."},Lisbon:{author:"Fernando Pessoa",quote:"Literature is the most agreeable way of ignoring life."},"Buenos Aires":{author:"Jorge Luis Borges",quote:"I have always imagined that Paradise will be a kind of library."},"Mexico City":{author:"Octavio Paz",quote:"Solitude is the profoundest fact of the human condition."},Istanbul:{author:"Orhan Pamuk",quote:"Real museums are places where Time is transformed into Space."},Sydney:{author:"Patrick White",quote:"Life is always going to be stranger than fiction, because fiction has to be convincing, and life doesn't."},Johannesburg:{author:"Nelson Mandela",quote:"It always seems impossible until it’s done."},Bucharest:{author:"Mihai Eminescu",quote:"Toate-s vechi și nouă toate."},"Cluj-Napoca":{author:"Lucian Blaga",quote:"Eu nu strivesc corola de minuni a lumii."},"Timișoara":{author:"Ioan Slavici",quote:"Nu există prietenie mai frumoasă decât a unui om cu o carte."},"Iași":{author:"Mihail Sadoveanu",quote:"Adevărul este comoara cea mai de preț a omului."},"Constanța":{author:"Ovidiu",quote:"Găsesc în fiecare zi, fără excepție, o bucurie deosebită în studiu."},Sibiu:{author:"Emil Cioran",quote:"Pe culmile disperării."},"Brașov":{author:"George Coșbuc",quote:"De la lume adunate și-napoi la lume date."},Craiova:{author:"Marin Sorescu",quote:"Timpul este un tren care ne duce pe toți."},Oradea:{author:"Ady Endre",quote:"Viața este un cântec nesfârșit."},Arad:{author:"Ioan Slavici",quote:"Nu există prietenie mai frumoasă decât a unui om cu o carte."},"Ploiești":{author:"Nichita Stănescu",quote:"Ce bine că ești, ce mirare că sunt."},"Galați":{author:"Fănuș Neagu",quote:"În fiecare om sălășluiește o poveste."},"Pitești":{author:"Ion Minulescu",quote:"Într-o zi toate visele vor deveni amintiri."},Suceava:{author:"Eugen Lovinescu",quote:"Literatura este arta de a exprima frumosul."},"Bacău":{author:"George Bacovia",quote:"Plouă, plouă, plouă..."},"Târgu Mureș":{author:"Liviu Rebreanu",quote:"Cărțile sunt prietenii cei mai liniștiți și constanți."},"Baia Mare":{author:"Ion Creangă",quote:"Amintirile din copilărie sunt povestite cu sufletul unui om mare."},"Buzău":{author:"Vasile Voiculescu",quote:"Poezia este o stare de grație."},"Satu Mare":{author:"Ady Endre",quote:"Viața este un cântec nesfârșit."},"Brăila":{author:"Panait Istrati",quote:"Omul este măsura tuturor lucrurilor."},"Los Angeles":{author:"Ray Bradbury",quote:"You don’t have to burn books to destroy a culture. Just get people to stop reading them."},"San Francisco":{author:"Jack London",quote:"The proper function of man is to live, not to exist."},"Hong Kong":{author:"Eileen Chang",quote:"Every form of happiness is private."},Singapore:{author:"Lee Kuan Yew",quote:"The first thing you must remember is that Singapore is an artificial creation."},Dubai:{author:"Mohammed bin Rashid Al Maktoum",quote:"The race for excellence has no finish line."},Bangkok:{author:"Pridi Banomyong",quote:"Peace is preferable to war."},Toronto:{author:"Margaret Atwood",quote:"A word after a word after a word is power."},Chicago:{author:"Ernest Hemingway",quote:"There is nothing to writing. All you do is sit down at a typewriter and bleed."},Seoul:{author:"Han Kang",quote:"The more precious something is, the more you want to avoid it."}};function I(t){return B.apply(this,arguments)}function B(){return(B=t(e)(t(n).mark((function e(r){return t(n).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",S[r]||null);case 1:case"end":return t.stop()}}),e)})))).apply(this,arguments)}function C(t){return T.apply(this,arguments)}function T(){return(T=t(e)(t(n).mark((function e(r){return t(n).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!r){t.next=2;break}return t.abrupt("return",r.quote);case 2:return t.abrupt("return","No quotes found for the specified city.");case 3:case"end":return t.stop()}}),e)})))).apply(this,arguments)}function M(t){return P.apply(this,arguments)}function P(){return(P=t(e)(t(n).mark((function e(r){var o;return t(n).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,l(r);case 3:return O(t.sent),t.next=7,I(r);case 7:return o=t.sent,t.next=10,C(o);case 10:_(t.sent,o.author),t.next=17;break;case 14:t.prev=14,t.t0=t.catch(0),console.error("Error fetching additional weather data:",t.t0);case 17:case"end":return t.stop()}}),e,null,[[0,14]])})))).apply(this,arguments)}function O(t){var e=document.getElementById("additional-weather-card");if(e){var r=new Date;e.querySelector(".current-date").textContent=r.toLocaleDateString(),e.querySelector(".current-time").textContent=r.toLocaleTimeString();var n=new Date(1e3*t.sys.sunrise).toLocaleTimeString(),o=new Date(1e3*t.sys.sunset).toLocaleTimeString();e.querySelector(".sunrise-time").textContent="Sunrise: ".concat(n),e.querySelector(".sunset-time").textContent="Sunset: ".concat(o)}else console.error("Additional weather card element not found in the DOM")}function _(t,e){var r=document.getElementById("quote-card");r?(r.querySelector(".quote-text").textContent=t,r.querySelector(".quote-author").textContent="— ".concat(e)):console.error("Quote card element not found in the DOM")}function N(t){var e=document.getElementById("city-name"),r=document.getElementById("temperature"),n=document.getElementById("description"),o=document.getElementById("humidity"),a=document.getElementById("min-temp"),i=document.getElementById("max-temp"),c=document.getElementById("weather-card"),u=document.getElementById("forecast-container"),s=document.getElementById("chart-container");e&&r&&n&&o&&a&&i&&c?(e.textContent=t.name,r.textContent="".concat(Math.round(t.main.temp)),n.innerHTML='<img src="'.concat(j(t.weather[0].icon),'" alt="').concat(t.weather[0].description,'" title="').concat(t.weather[0].description,'">'),o.textContent="Humidity: ".concat(t.main.humidity,"%"),a.textContent="".concat(Math.round(t.main.temp_min)," °C"),i.textContent="".concat(Math.round(t.main.temp_max)," °C"),q(t.name),u&&(u.style.display="none"),s&&(s.style.display="none")):console.error("One or more elements not found in the DOM"),M(t.name)}function A(t){var e=document.getElementById("forecast-container"),r=document.getElementById("chart-container"),n=document.getElementById("forecast-location");e.innerHTML="",n.textContent=t.city.name,t.list.forEach((function(t,r){if(r%8==0){var n=document.createElement("div");n.classList.add("forecast-day");var o=new Date(1e3*t.dt),a=o.toLocaleDateString("en-US",{weekday:"long"}),i=o.toLocaleDateString("en-US",{day:"numeric",month:"short"});n.innerHTML='\n        <h3 class="date">'.concat(a,'</h3>\n        <p class="date">').concat(i,'</p>\n        <img src="').concat(j(t.weather[0].icon),'" alt="').concat(t.weather[0].description,'">\n        <p class="temp temp-min">').concat(Math.round(t.main.temp_min),'°C</p>\n        <p class="temp temp-max">').concat(Math.round(t.main.temp_max),'°C</p>\n        <p class="more-info">more info</p>\n      '),e.appendChild(n)}})),e&&(e.style.display="flex",e.style.justifyContent="space-around"),r&&(r.style.display="block")}function j(t){return"https://openweathermap.org/img/wn/".concat(t,".png")}function D(t){return H.apply(this,arguments)}function H(){return(H=t(e)(t(n).mark((function e(r){return t(n).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,l(r);case 3:N(t.sent),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),console.error("Error fetching weather data:",t.t0);case 10:case"end":return t.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}function F(){return(F=t(e)(t(n).mark((function e(r,o){var a,i;return t(n).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,p(r,o);case 3:return a=t.sent,t.next=6,y(r,o);case 6:i=t.sent,a.name=i[0].name,N(a),t.next=14;break;case 11:t.prev=11,t.t0=t.catch(0),console.error("Error fetching weather data:",t.t0);case 14:case"end":return t.stop()}}),e,null,[[0,11]])})))).apply(this,arguments)}function G(){navigator.geolocation?navigator.geolocation.getCurrentPosition((function(t){var e=t.coords;!function(t,e){F.apply(this,arguments)}(e.latitude,e.longitude)}),(function(t){console.error("Error getting location:",t),D("București")})):(console.error("Geolocation is not supported by this browser"),D("București"));var r=document.getElementById("today-weather"),o=document.getElementById("five-day-forecast"),a=document.getElementById("show-chart"),i=document.getElementById("chart-content");r&&r.addEventListener("click",(function(){D(document.getElementById("city-name").textContent),r.focus()})),o&&o.addEventListener("click",t(e)(t(n).mark((function e(){var r;return t(n).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=document.getElementById("city-name").textContent,t.prev=1,t.next=4,d(r);case 4:A(t.sent),o.focus(),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(1),console.error("Error fetching 5-day forecast data:",t.t0);case 12:case"end":return t.stop()}}),e,null,[[1,9]])})))),a&&a.addEventListener("click",(function(){i.innerHTML="<p>Aici va fi afișat graficul cu vremea.</p>",a.focus()}))}function J(){var t=document.getElementById("favorites-list");t&&(t.innerHTML="",(JSON.parse(localStorage.getItem("favorites"))||[]).forEach((function(e){var r=document.createElement("li");r.textContent=e;var n=document.createElement("span");n.textContent="×",n.classList.add("remove-favorite"),n.addEventListener("click",(function(){!function(t){var e=JSON.parse(localStorage.getItem("favorites"))||[];e=e.filter((function(e){return e!==t})),localStorage.setItem("favorites",JSON.stringify(e)),J()}(e)})),r.appendChild(n),t.appendChild(r)})))}function R(){var t=document.getElementById("city-input"),e=document.getElementById("star-icon");t?(console.log("City input element found."),t.addEventListener("keydown",(function(e){if("Enter"===e.key){e.preventDefault();var r=t.value.trim();r&&D(r)}}))):console.warn("City input element not found."),e?(console.log("Star icon element found."),e.addEventListener("click",(function(){var e=t.value.trim();e&&function(t){var e=JSON.parse(localStorage.getItem("favorites"))||[];e.includes(t)?alert("".concat(t," is already in your favorites.")):(e.push(t),localStorage.setItem("favorites",JSON.stringify(e)),J(),alert("".concat(t," has been added to your favorites.")))}(e)}))):console.warn("Star icon element not found."),J()}document.addEventListener("DOMContentLoaded",t(e)(t(n).mark((function e(){return t(n).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:R(),G(),M();case 3:case"end":return t.stop()}}),e)}))))}();
//# sourceMappingURL=index.d746c613.js.map
