/* empty css                      */import{a as m,S as g,i as l}from"./assets/vendor-DQvd0HNi.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function s(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(e){if(e.ep)return;e.ep=!0;const r=s(e);fetch(e.href,r)}})();const h="https://pixabay.com/api/",b="55083969-985dcd53ed8fb60fc84f8ef8d";async function L(o,t=1){return(await m.get(h,{params:{key:b,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:15,page:t}})).data}const p=document.querySelector(".gallery"),d=document.querySelector(".loader"),v=new g(".gallery a",{captionsData:"alt",captionDelay:250});function P(){p.innerHTML=""}function q(o){return o.map(({webformatURL:t,largeImageURL:s,tags:a,likes:e,views:r,comments:i,downloads:y})=>`
      <li class="gallery-item">
        <a href="${s}">
          <img src="${t}" alt="${a}" />
        </a>
        <div class="info">
          <p><b>Likes:</b> ${e}</p>
          <p><b>Views:</b> ${r}</p>
          <p><b>Comments:</b> ${i}</p>
          <p><b>Downloads:</b> ${y}</p>
        </div>
      </li>
    `).join("")}function S(o){const t=q(o);p.insertAdjacentHTML("beforeend",t),v.refresh()}function w(){d.style.display="block"}function E(){d.style.display="none"}const $=document.querySelector(".form"),n=document.querySelector(".load-more");let u="",c=1;const M=15;n.style.display="none";async function f(o=!1){w();try{const t=await L(u,c);if(o&&P(),t.hits.length===0&&o){l.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}),n.style.display="none";return}S(t.hits);const s=Math.ceil(t.totalHits/M);c>=s?(n.style.display="none",l.info({message:"We're sorry, but you've reached the end of search results.",position:"topRight"})):n.style.display="block"}catch(t){console.error(t),l.error({message:"Сталася помилка при запиті!",position:"topRight"})}finally{E()}}$.addEventListener("submit",o=>{if(o.preventDefault(),u=o.currentTarget.elements["search-text"].value.trim(),!u){l.warning({message:"Введіть текст для пошуку!",position:"topRight"});return}c=1,n.style.display="none",f(!0)});n.addEventListener("click",()=>{c+=1,f()});
//# sourceMappingURL=index.js.map
