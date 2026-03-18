import{a as u,S as p,i as a}from"./assets/vendor-DQvd0HNi.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function n(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=n(e);fetch(e.href,t)}})();const f="https://pixabay.com/api/",m="55083969-985dcd53ed8fb60fc84f8ef8d";async function d(r){return(await u.get(f,{params:{key:m,q:r,image_type:"photo",orientation:"horizontal",safesearch:!0}})).data.hits}const c=document.querySelector(".gallery"),g=new p(".gallery a",{captionsData:"alt",captionDelay:250});function y(){c.innerHTML=""}function h(r){return r.map(({webformatURL:o,largeImageURL:n,tags:i,likes:e,views:t,comments:s,downloads:l})=>`
      <li class="gallery-item">
        <a href="${n}">
          <img src="${o}" alt="${i}" />
        </a>
        <div class="info">
          <p><b>Likes:</b> ${e}</p>
          <p><b>Views:</b> ${t}</p>
          <p><b>Comments:</b> ${s}</p>
          <p><b>Downloads:</b> ${l}</p>
        </div>
      </li>
    `).join("")}function b(r){const o=h(r);c.insertAdjacentHTML("beforeend",o),g.refresh()}const L=document.querySelector(".form");L.addEventListener("submit",async r=>{r.preventDefault();const n=r.currentTarget.elements["search-text"].value.trim();if(n===""){a.warning({message:"Введіть текст для пошуку!",position:"topRight"});return}y();try{const i=await d(n);if(i.length===0){a.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}b(i)}catch{a.error({message:"Сталася помилка при запиті!",position:"topRight"})}});
//# sourceMappingURL=index.js.map
