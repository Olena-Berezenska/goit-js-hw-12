import{a as b,i as d,S as w}from"./assets/vendor-CaxwOL5b.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))n(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function s(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(t){if(t.ep)return;t.ep=!0;const r=s(t);fetch(t.href,r)}})();const u=40;async function m(e,o){try{const s=await b.get("https://pixabay.com/api/",{params:{key:"48848610-9eaece9d33812a504b30c12d0",q:`${e}`,image_type:"photo",orientation:"horizontal",safesearch:!0,page:o,per_page:u}});if(s.data.hits.length===0)throw new Error("No images");return{images:s.data.hits,total:s.data.total}}catch(s){return d.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}),Promise.reject(s)}}const v=document.querySelector(".gallery");function E(e){return`<li class="gallery-item">
  <a class="gallery-link" href="${e.largeImageURL}">
    <img
      class="gallery-image"
      src="${e.webformatURL}"
      alt="${e.tags}"
    />
    <ul class="list-descr">
     <li class="descr-item">
       <h2 class="descr-title">Likes</h2>
       <p class="descr-value">${e.likes}</p>
     </li>
     <li class ="descr-item">
       <h2 class="descr-title">Views</h2>
       <p class="descr-value">${e.views}</p>
     </li>
     <li class ="descr-item">
       <h2 class="descr-title">Comments</h2>
       <p class="descr-value">${e.comments}</p>
     </li>
     <li class ="descr-item">
       <h2 class="descr-title">Downloads</h2>
      <p class="descr-value">${e.downloads}</p>
     </li>
    </ul>
  </a>
</li>`}function P(e){return e.map(E).join("")}function h(e){const o=P(e);v.insertAdjacentHTML("beforeend",o),f.refresh()}let f=new w(".gallery a",{captionType:"alt",captionDelay:250,captionPosition:"bottom",captionsData:"alt"});f.on("shown.simplelightbox",function(){console.log("Lightbox is shown")});const a={InputData:document.querySelector(".js-form-inline"),gallery:document.querySelector(".gallery"),btnLoadMore:document.querySelector(".js-btn-load"),loadElem:document.querySelector(".loader")};let l=1,c=0,g="";a.InputData.addEventListener("submit",S);async function S(e){e.preventDefault(),y("form"),l=1;const s=new FormData(e.target).get("imgSearch").trim();if(g=s,!!s){a.gallery.innerHTML="";try{const{images:n,total:t}=await m(s,l);c=t,console.log(c),h(n),L(),p()}catch(n){a.btnLoadMore.classList.add("hidden"),a.loadElem.classList.add("hidden"),console.log("Handled error",n)}finally{e.target.reset()}}}a.btnLoadMore.addEventListener("click",M);async function M(){y("button"),l+=1;const{images:e,total:o}=await m(g,l);h(e),L(),p();const n=a.gallery.firstElementChild.getBoundingClientRect().height;window.scrollBy({top:n*2,behavior:"smooth"})}function p(){const o=Math.ceil(c/u)<=l;console.log(o),o?(a.btnLoadMore.classList.add("hidden"),d.info({message:`We're sorry, but you've reached the end of search results.
`,position:"bottomRight"})):a.btnLoadMore.classList.remove("hidden")}function y(e){a.loadElem.classList.remove("hidden"),e==="form"?(a.loadElem.style.margin="10px auto",a.InputData.after(a.loadElem)):e==="button"&&(a.btnLoadMore.classList.add("hidden"),a.btnLoadMore.before(a.loadElem))}function L(){a.loadElem.classList.add("hidden"),a.btnLoadMore.classList.remove("hidden")}
//# sourceMappingURL=index.js.map
