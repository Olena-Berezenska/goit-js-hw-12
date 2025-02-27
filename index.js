import{a as y,i as d,S as b}from"./assets/vendor-CaxwOL5b.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))s(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function a(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(t){if(t.ep)return;t.ep=!0;const o=a(t);fetch(t.href,o)}})();const u=40;async function m(e,r){try{const a=await y.get("https://pixabay.com/api/",{params:{key:"48848610-9eaece9d33812a504b30c12d0",q:`${e}`,image_type:"photo",orientation:"horizontal",safesearch:!0,page:r,per_page:u}});if(a.data.hits.length===0)throw new Error("No images");return{images:a.data.hits,total:a.data.total}}catch(a){return d.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}),Promise.reject(a)}}const L=document.querySelector(".gallery");function w(e){return`<li class="gallery-item">
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
</li>`}function v(e){return e.map(w).join("")}function g(e){const r=v(e);L.insertAdjacentHTML("beforeend",r),h.refresh()}let h=new b(".gallery a",{captionType:"alt",captionDelay:250,captionPosition:"bottom",captionsData:"alt"});h.on("shown.simplelightbox",function(){console.log("Lightbox is shown")});const l={InputData:document.querySelector(".js-form-inline"),loader:document.querySelector(".loader"),gallery:document.querySelector(".gallery"),btnLoadMore:document.querySelector(".js-btn-load"),loadElem:document.querySelector(".js-loader")};let n=1,c=0,p="";l.InputData.addEventListener("submit",P);async function P(e){e.preventDefault();const a=new FormData(e.target).get("imgSearch");if(p=a,!!a){l.gallery.innerHTML="",l.loader.style.display="block";try{const{images:s,total:t}=await m(a,n);c=t,console.log(c),g(s)}catch(s){console.log("Handled error",s)}finally{l.loader.style.display="none",e.target.reset()}f()}}l.btnLoadMore.addEventListener("click",S);async function S(){n+=1;const{images:e,total:r}=await m(p,n);g(e),f();const s=l.gallery.firstElementChild.getBoundingClientRect().height;window.scrollBy({top:s*2,behavior:"smooth"})}function f(){const r=Math.ceil(c/u)<=n;console.log(r),r?(l.btnLoadMore.classList.add("hidden"),d.info({message:`We're sorry, but you've reached the end of search results.
`,position:"bottomRight"})):l.btnLoadMore.classList.remove("hidden")}
//# sourceMappingURL=index.js.map
