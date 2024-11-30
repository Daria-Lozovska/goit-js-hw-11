import{i as l,S as L}from"./assets/vendor-BrddEoy-.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function s(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(e){if(e.ep)return;e.ep=!0;const r=s(e);fetch(e.href,r)}})();const $="47376168-762e2e3775122625ea22809a6",b="https://pixabay.com/api/";async function p(t,o=1,s=40){const i=`${b}?key=${$}&q=${encodeURIComponent(t)}&image_type=photo&orientation=horizontal&safesearch=true&page=${o}&per_page=${s}`,e=await fetch(i);if(!e.ok)throw new Error("Failed to fetch images");return e.json()}function v(t){t.innerHTML=""}function m(t,o){const s=t.map(({webformatURL:i,largeImageURL:e,tags:r,likes:a,views:h,comments:g,downloads:w})=>`
    <a href="${e}" class="gallery__item">
      <div class="photo-card">
        <img src="${i}" alt="${r}" loading="lazy" />
        <div class="info">
          <li><h3>Likes</h3> <p>${a}</p></li>
          <li><h3>Views</h3> <p>${h}</p></li>
          <li><h3>Comments</h3> <p>${g}</p></li>
          <li><h3>Downloads</h3> <p>${w}</p></li>
        </div>
      </div>
    </a>
  `).join("");o.insertAdjacentHTML("beforeend",s)}const y=document.querySelector("#search-form"),u=document.querySelector(".gallery"),n=document.querySelector(".loader");let c="",d=1,f;y.addEventListener("submit",async t=>{if(t.preventDefault(),c=y.elements.searchQuery.value.trim(),!c){l.error({title:"Error",message:"Please enter a search query!"});return}d=1,v(u),n.style.display="block";try{const{hits:o,totalHits:s}=await p(c,d);if(n.style.display="none",o.length===0){l.warning({title:"No results",message:"Sorry, there are no images matching your search query. Please try again!"});return}m(o,u),f=new L(".gallery a"),f.refresh()}catch(o){l.error({title:"Error",message:o.message}),n.style.display="none"}});window.addEventListener("scroll",async()=>{if(window.innerHeight+window.scrollY>=document.body.offsetHeight-100){d+=1,n.style.display="block";try{const{hits:t}=await p(c,d);n.style.display="none",m(t,u),f.refresh()}catch(t){l.error({title:"Error",message:t.message}),n.style.display="none"}}});
//# sourceMappingURL=index.js.map
