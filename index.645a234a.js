const e="https://api.openweathermap.org/data/2.5";async function t(e){try{const t=await fetch(e);if(!t.ok)throw new Error(`HTTPS error! status: ${t.status}`);return await t.json()}catch(e){throw console.error("Fetch API Error:",e),e}}async function o(o){try{const n=`${e}/weather?q=${o}&appid=c28b86768a874c70b1ecd1343e8f0f24&units=metric`;return await t(n)}catch(e){throw console.error(`Error getting weather by city name "${o}":`,e),e}}async function n(o,n){try{const a=`${e}/weather?lat=${o}&lon=${n}&appid=c28b86768a874c70b1ecd1343e8f0f24&units=metric`;return await t(a)}catch(e){throw console.error(`Error getting weather by coordinates (lat: ${o}, lon: ${n}):`,e),e}}async function a(o){try{const n=`${e}/forecast?q=${o}&appid=c28b86768a874c70b1ecd1343e8f0f24&units=metric`;return await t(n)}catch(e){throw console.error(`Error getting weather forecast by city name "${o}":`,e),e}}async function r(e,o){try{const n=`https://api.openweathermap.org/geo/1.0/reverse?lat=${e}&lon=${o}&appid=c28b86768a874c70b1ecd1343e8f0f24`;return await t(n)}catch(t){throw console.error(`Error getting reverse geocoding for coordinates (lat: ${e}, lon: ${o}):`,t),t}}async function i(e){try{const t=await fetch(e);if(!t.ok)throw new Error(`Network response was not ok. Status: ${t.status}`);return await t.json()}catch(e){throw console.error("Fetch API Error:",e),e}}async function u(e,t=1,o=3){try{const n=`https://pixabay.com/api/?key=24587351-f51ecbfdd1a1ed72c58205b43&q=${e}&image_type=photo&per_page=${o}&page=${t}`;return console.log("Fetching image from URL:",n),await i(n)}catch(t){throw console.error(`Error fetching random images with query "${e}":`,t),t}}async function c(e){try{const t=await u(e,1,3),o=document.getElementById("background-image");t&&t.hits&&t.hits.length>0&&o?(o.style.backgroundImage=`url(${t.hits[0].webformatURL})`,o.style.backgroundSize="cover",o.style.backgroundPosition="center",o.style.height="100vh",o.style.width="100vw",o.style.position="fixed",o.style.zIndex="-1"):console.error("No images found or background element not found.")}catch(e){console.error("Error fetching image from Pixabay API:",e)}}const s={"New York":{author:"Mark Twain",quote:"The secret of getting ahead is getting started."},Paris:{author:"Victor Hugo",quote:"He who opens a school door, closes a prison."},London:{author:"William Shakespeare",quote:"To be, or not to be, that is the question."},Vienna:{author:"Sigmund Freud",quote:"Being entirely honest with oneself is a good exercise."},Rome:{author:"Marcus Aurelius",quote:"The happiness of your life depends upon the quality of your thoughts."},Tokyo:{author:"Haruki Murakami",quote:"And once the storm is over, you won’t remember how you made it through."},Dublin:{author:"James Joyce",quote:"A man of genius makes no mistakes. His errors are volitional and are the portals of discovery."},Moscow:{author:"Leo Tolstoy",quote:"Everyone thinks of changing the world, but no one thinks of changing himself."},Berlin:{author:"Albert Einstein",quote:"Life is like riding a bicycle. To keep your balance, you must keep moving."},Athens:{author:"Plato",quote:"The greatest wealth is to live content with little."},Beijing:{author:"Confucius",quote:"It does not matter how slowly you go as long as you do not stop."},Madrid:{author:"Miguel de Cervantes",quote:"The pen is the tongue of the mind."},Cairo:{author:"Naguib Mahfouz",quote:"You can tell whether a man is clever by his answers. You can tell whether a man is wise by his questions."},Lisbon:{author:"Fernando Pessoa",quote:"Literature is the most agreeable way of ignoring life."},"Buenos Aires":{author:"Jorge Luis Borges",quote:"I have always imagined that Paradise will be a kind of library."},"Mexico City":{author:"Octavio Paz",quote:"Solitude is the profoundest fact of the human condition."},Istanbul:{author:"Orhan Pamuk",quote:"Real museums are places where Time is transformed into Space."},Sydney:{author:"Patrick White",quote:"Life is always going to be stranger than fiction, because fiction has to be convincing, and life doesn't."},Johannesburg:{author:"Nelson Mandela",quote:"It always seems impossible until it’s done."},Bucharest:{author:"Mihai Eminescu",quote:"Toate-s vechi și nouă toate."},"Cluj-Napoca":{author:"Lucian Blaga",quote:"Eu nu strivesc corola de minuni a lumii."},"Timișoara":{author:"Ioan Slavici",quote:"Nu există prietenie mai frumoasă decât a unui om cu o carte."},"Iași":{author:"Mihail Sadoveanu",quote:"Adevărul este comoara cea mai de preț a omului."},"Constanța":{author:"Ovidiu",quote:"Găsesc în fiecare zi, fără excepție, o bucurie deosebită în studiu."},Sibiu:{author:"Emil Cioran",quote:"Pe culmile disperării."},"Brașov":{author:"George Coșbuc",quote:"De la lume adunate și-napoi la lume date."},Craiova:{author:"Marin Sorescu",quote:"Timpul este un tren care ne duce pe toți."},Oradea:{author:"Ady Endre",quote:"Viața este un cântec nesfârșit."},Arad:{author:"Ioan Slavici",quote:"Nu există prietenie mai frumoasă decât a unui om cu o carte."},"Ploiești":{author:"Nichita Stănescu",quote:"Ce bine că ești, ce mirare că sunt."},"Galați":{author:"Fănuș Neagu",quote:"În fiecare om sălășluiește o poveste."},"Pitești":{author:"Ion Minulescu",quote:"Într-o zi toate visele vor deveni amintiri."},Suceava:{author:"Eugen Lovinescu",quote:"Literatura este arta de a exprima frumosul."},"Bacău":{author:"George Bacovia",quote:"Plouă, plouă, plouă..."},"Târgu Mureș":{author:"Liviu Rebreanu",quote:"Cărțile sunt prietenii cei mai liniștiți și constanți."},"Baia Mare":{author:"Ion Creangă",quote:"Amintirile din copilărie sunt povestite cu sufletul unui om mare."},"Buzău":{author:"Vasile Voiculescu",quote:"Poezia este o stare de grație."},"Satu Mare":{author:"Ady Endre",quote:"Viața este un cântec nesfârșit."},"Brăila":{author:"Panait Istrati",quote:"Omul este măsura tuturor lucrurilor."},"Los Angeles":{author:"Ray Bradbury",quote:"You don’t have to burn books to destroy a culture. Just get people to stop reading them."},"San Francisco":{author:"Jack London",quote:"The proper function of man is to live, not to exist."},"Hong Kong":{author:"Eileen Chang",quote:"Every form of happiness is private."},Singapore:{author:"Lee Kuan Yew",quote:"The first thing you must remember is that Singapore is an artificial creation."},Dubai:{author:"Mohammed bin Rashid Al Maktoum",quote:"The race for excellence has no finish line."},Bangkok:{author:"Pridi Banomyong",quote:"Peace is preferable to war."},Toronto:{author:"Margaret Atwood",quote:"A word after a word after a word is power."},Chicago:{author:"Ernest Hemingway",quote:"There is nothing to writing. All you do is sit down at a typewriter and bleed."},Seoul:{author:"Han Kang",quote:"The more precious something is, the more you want to avoid it."}};async function l(e){return s[e]||null}async function d(e){return e?e.quote:"No quotes found for the specified city."}async function h(e){try{!function(e){const t=document.getElementById("additional-weather-card");if(t){const o=new Date;t.querySelector(".current-date").textContent=o.toLocaleDateString(),t.querySelector(".current-time").textContent=o.toLocaleTimeString();const n=new Date(1e3*e.sys.sunrise).toLocaleTimeString(),a=new Date(1e3*e.sys.sunset).toLocaleTimeString();t.querySelector(".sunrise-time").textContent=`Sunrise: ${n}`,t.querySelector(".sunset-time").textContent=`Sunset: ${a}`}else console.error("Additional weather card element not found in the DOM")}(await o(e));const t=await l(e);!function(e,t){const o=document.getElementById("quote-card");o?(o.querySelector(".quote-text").textContent=e,o.querySelector(".quote-author").textContent=`— ${t}`):console.error("Quote card element not found in the DOM")}(await d(t),t.author)}catch(e){console.error("Error fetching additional weather data:",e)}}function m(e){const t=document.getElementById("city-name"),o=document.getElementById("temperature"),n=document.getElementById("description"),a=document.getElementById("humidity"),r=document.getElementById("min-temp"),i=document.getElementById("max-temp"),u=document.getElementById("weather-card"),s=document.getElementById("forecast-container"),l=document.getElementById("chart-container");t&&o&&n&&a&&r&&i&&u?(t.textContent=e.name,o.textContent=`${Math.round(e.main.temp)}`,n.innerHTML=`<img src="${g(e.weather[0].icon)}" alt="${e.weather[0].description}" title="${e.weather[0].description}">`,a.textContent=`Humidity: ${e.main.humidity}%`,r.textContent=`${Math.round(e.main.temp_min)} °C`,i.textContent=`${Math.round(e.main.temp_max)} °C`,c(e.name),s&&(s.style.display="none"),l&&(l.style.display="none")):console.error("One or more elements not found in the DOM"),h(e.name)}function g(e){return`https://openweathermap.org/img/wn/${e}.png`}async function y(e){try{m(await o(e))}catch(e){console.error("Error fetching weather data:",e)}}async function f(e,t){try{const o=await n(e,t),a=await r(e,t);o.name=a[0].name,m(o)}catch(e){console.error("Error fetching weather data:",e)}}function p(){navigator.geolocation?navigator.geolocation.getCurrentPosition((e=>{const{latitude:t,longitude:o}=e.coords;f(t,o)}),(e=>{console.error("Error getting location:",e),y("București")})):(console.error("Geolocation is not supported by this browser"),y("București"));const e=document.getElementById("today-weather"),t=document.getElementById("five-day-forecast"),o=document.getElementById("show-chart"),n=document.getElementById("chart-content");e&&e.addEventListener("click",(()=>{y(document.getElementById("city-name").textContent),e.focus()})),t&&t.addEventListener("click",(async()=>{const e=document.getElementById("city-name").textContent;try{!function(e){const t=document.getElementById("forecast-container"),o=document.getElementById("chart-container"),n=document.getElementById("forecast-location");t.innerHTML="",n.textContent=e.city.name,e.list.forEach(((e,o)=>{if(o%8==0){const o=document.createElement("div");o.classList.add("forecast-day");const n=new Date(1e3*e.dt),a=n.toLocaleDateString("en-US",{weekday:"long"}),r=n.toLocaleDateString("en-US",{day:"numeric",month:"short"});o.innerHTML=`\n        <h3 class="date">${a}</h3>\n        <p class="date">${r}</p>\n        <img src="${g(e.weather[0].icon)}" alt="${e.weather[0].description}">\n        <p class="temp temp-min">${Math.round(e.main.temp_min)}°C</p>\n        <p class="temp temp-max">${Math.round(e.main.temp_max)}°C</p>\n        <p class="more-info">more info</p>\n      `,t.appendChild(o)}})),t&&(t.style.display="flex",t.style.justifyContent="space-around"),o&&(o.style.display="block")}(await a(e)),t.focus()}catch(e){console.error("Error fetching 5-day forecast data:",e)}})),o&&o.addEventListener("click",(()=>{n.innerHTML="<p>Aici va fi afișat graficul cu vremea.</p>",o.focus()}))}function w(){const e=document.getElementById("favorites-list");if(e){e.innerHTML="",(JSON.parse(localStorage.getItem("favorites"))||[]).forEach((t=>{const o=document.createElement("li");o.textContent=t;const n=document.createElement("span");n.textContent="×",n.classList.add("remove-favorite"),n.addEventListener("click",(()=>{!function(e){let t=JSON.parse(localStorage.getItem("favorites"))||[];t=t.filter((t=>t!==e)),localStorage.setItem("favorites",JSON.stringify(t)),w()}(t)})),o.appendChild(n),e.appendChild(o)}))}}function q(){const e=document.getElementById("city-input"),t=document.getElementById("star-icon");e?(console.log("City input element found."),e.addEventListener("keydown",(function(t){if("Enter"===t.key){t.preventDefault();const o=e.value.trim();o&&y(o)}}))):console.warn("City input element not found."),t?(console.log("Star icon element found."),t.addEventListener("click",(()=>{const t=e.value.trim();t&&function(e){let t=JSON.parse(localStorage.getItem("favorites"))||[];t.includes(e)?alert(`${e} is already in your favorites.`):(t.push(e),localStorage.setItem("favorites",JSON.stringify(t)),w(),alert(`${e} has been added to your favorites.`))}(t)}))):console.warn("Star icon element not found."),w()}document.addEventListener("DOMContentLoaded",(async()=>{q(),p(),h()}));
//# sourceMappingURL=index.645a234a.js.map
