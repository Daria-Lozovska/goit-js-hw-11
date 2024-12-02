import{i as l,S as w}from"./assets/vendor-BrddEoy-.js";(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&o(a)}).observe(document,{childList:!0,subtree:!0});function n(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(e){if(e.ep)return;e.ep=!0;const t=n(e);fetch(e.href,t)}})();const v="47376168-762e2e3775122625ea22809a6",$="https://pixabay.com/api/";function m(r,i=1,n=40){const o=`${$}?key=${v}&q=${encodeURIComponent(r)}&image_type=photo&orientation=horizontal&safesearch=true&page=${i}&per_page=${n}`;return fetch(o).then(e=>{if(!e.ok)throw new Error("Failed to fetch images");return e.json()})}function b(r){r.innerHTML=""}function p(r,i){const n=r.map(({webformatURL:o,largeImageURL:e,tags:t,likes:a,views:g,comments:y,downloads:L})=>`
    <a href="${e}" class="gallery__item">
      <div class="photo-card">
        <img src="${o}" alt="${t}" loading="lazy" />
        <div class="info">
          <li><h3>Likes</h3> <p>${a}</p></li>
          <li><h3>Views</h3> <p>${g}</p></li>
          <li><h3>Comments</h3> <p>${y}</p></li>
          <li><h3>Downloads</h3> <p>${L}</p></li>
        </div>
      </div>
    </a>
  `).join("");i.insertAdjacentHTML("beforeend",n)}const h=document.querySelector("#search-form"),u=document.querySelector(".gallery"),s=document.querySelector(".loader");let c="",d=1,f;h.addEventListener("submit",function(r){if(r.preventDefault(),c=h.elements.searchQuery.value.trim(),!c){l.error({title:"Error",message:"Please enter a search query!"});return}d=1,b(u),s.classList.remove("is-hidden"),m(c,d).then(function(i){if(s.classList.add("is-hidden"),i.hits.length===0){l.warning({title:"No results",message:"Sorry, no images found!"});return}p(i.hits,u),f=new w(".gallery a"),f.refresh()}).catch(function(i){l.error({title:"Error",message:i.message}),s.classList.add("is-hidden")})});window.addEventListener("scroll",function(){window.innerHeight+window.scrollY>=document.body.offsetHeight-100&&(d+=1,s.classList.remove("is-hidden"),m(c,d).then(function(r){s.classList.add("is-hidden"),p(r.hits,u),f.refresh()}).catch(function(r){l.error({title:"Error",message:r.message}),s.classList.add("is-hidden")}))});
//# sourceMappingURL=index.js.map
