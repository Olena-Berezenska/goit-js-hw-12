import{a as b,i as u,S as w}from"./assets/vendor-CaxwOL5b.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))l(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const i of s.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&l(i)}).observe(document,{childList:!0,subtree:!0});function a(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerPolicy&&(s.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?s.credentials="include":t.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function l(t){if(t.ep)return;t.ep=!0;const s=a(t);fetch(t.href,s)}})();const m=40;async function h(e,o){try{const a=await b.get("https://pixabay.com/api/",{params:{key:"48848610-9eaece9d33812a504b30c12d0",q:`${e}`,image_type:"photo",orientation:"horizontal",safesearch:!0,page:o,per_page:m}});if(a.data.hits.length===0)throw new Error("No images");return{images:a.data.hits,total:a.data.total}}catch(a){return u.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}),Promise.reject(a)}}const v=document.querySelector(".gallery");function E(e){return`<li class="gallery-item">
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
</li>`}function S(e){return e.map(E).join("")}function f(e){const o=S(e);v.insertAdjacentHTML("beforeend",o),g.refresh()}let g=new w(".gallery a",{captionType:"alt",captionDelay:250,captionPosition:"bottom",captionsData:"alt"});g.on("shown.simplelightbox",function(){console.log("Lightbox is shown")});const r={InputData:document.querySelector(".js-form-inline"),gallery:document.querySelector(".gallery"),btnLoadMore:document.querySelector(".js-btn-load"),loadElem:document.querySelector(".loader")};let n=1,c=0,p="";r.InputData.addEventListener("submit",P);async function P(e){e.preventDefault(),y("form"),n=1;const a=new FormData(e.target).get("imgSearch").trim();if(p=a,!a){r.loadElem.classList.add("hidden");return}r.gallery.innerHTML="";try{const{images:l,total:t}=await h(a,n);c=t,console.log(c),f(l),L(),d()}catch(l){r.btnLoadMore.classList.add("hidden"),r.loadElem.classList.add("hidden"),console.log("Handled error",l)}finally{e.target.reset()}}r.btnLoadMore.addEventListener("click",D);async function D(){y("button"),n+=1;try{const{images:e,total:o}=await h(p,n);f(e),d();const l=r.gallery.firstElementChild.getBoundingClientRect().height;window.scrollBy({top:l*2,behavior:"smooth"})}catch(e){console.error("Load more error:",e)}finally{L()}}function d(){const e=Math.ceil(c/m),o=n>=e;console.log(o),o?(r.btnLoadMore.classList.add("hidden"),u.info({message:`We're sorry, but you've reached the end of search results.
`,position:"bottomRight"})):r.btnLoadMore.classList.remove("hidden")}function y(e){r.loadElem.classList.remove("hidden"),e==="form"?(r.loadElem.style.margin="10px auto",r.InputData.after(r.loadElem)):e==="button"&&(console.log("spinerOn"),r.btnLoadMore.classList.add("hidden"))}function L(){r.loadElem.classList.add("hidden"),r.btnLoadMore.classList.remove("hidden"),d()}
//# sourceMappingURL=index.js.map
