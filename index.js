import{a as b,i as u,S as w}from"./assets/vendor-CaxwOL5b.js";(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))l(o);new MutationObserver(o=>{for(const s of o)if(s.type==="childList")for(const c of s.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&l(c)}).observe(document,{childList:!0,subtree:!0});function r(o){const s={};return o.integrity&&(s.integrity=o.integrity),o.referrerPolicy&&(s.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?s.credentials="include":o.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function l(o){if(o.ep)return;o.ep=!0;const s=r(o);fetch(o.href,s)}})();const m=40;async function h(e,a){try{const r=await b.get("https://pixabay.com/api/",{params:{key:"48848610-9eaece9d33812a504b30c12d0",q:`${e}`,image_type:"photo",orientation:"horizontal",safesearch:!0,page:a,per_page:m}});if(r.data.hits.length===0)throw new Error("No images");return{images:r.data.hits,total:r.data.total}}catch(r){return u.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}),Promise.reject(r)}}const E=document.querySelector(".gallery");function v(e){return`<li class="gallery-item">
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
</li>`}function S(e){return e.map(v).join("")}function f(e){const a=S(e);E.insertAdjacentHTML("beforeend",a),g.refresh()}let g=new w(".gallery a",{captionType:"alt",captionDelay:250,captionPosition:"bottom",captionsData:"alt"});g.on("shown.simplelightbox",function(){console.log("Lightbox is shown")});const t={InputData:document.querySelector(".js-form-inline"),gallery:document.querySelector(".gallery"),btnLoadMore:document.querySelector(".js-btn-load"),loadElem:document.querySelector(".loader")};let n=1,d=0,p="";t.InputData.addEventListener("submit",P);async function P(e){e.preventDefault(),L("form"),t.btnLoadMore.classList.add("hidden"),n=1;const r=new FormData(e.target).get("imgSearch").trim();if(p=r,!r){t.loadElem.classList.add("hidden");return}t.gallery.innerHTML="";try{const{images:l,total:o}=await h(r,n);d=o,console.log(d),f(l),i(),y()}catch(l){i(),console.log("Handled error",l)}finally{e.target.reset()}}t.btnLoadMore.addEventListener("click",D);async function D(){L("button"),t.btnLoadMore.classList.add("hidden"),n+=1;try{const{images:e,total:a}=await h(p,n);f(e),i(),y();const l=t.gallery.firstElementChild.getBoundingClientRect().height;window.scrollBy({top:l*2,behavior:"smooth"})}catch(e){console.error("Load more error:",e),i()}}function y(){const e=Math.ceil(d/m),a=n>=e;console.log(a),a?(t.btnLoadMore.classList.add("hidden"),u.info({message:`We're sorry, but you've reached the end of search results.
`,position:"bottomRight"})):t.btnLoadMore.classList.remove("hidden")}function L(e){t.loadElem.classList.remove("hidden"),e==="form"?(t.loadElem.style.position="relative",t.loadElem.style.margin="10px auto",t.InputData.after(t.loadElem)):e==="button"&&(t.loadElem.style.position="absolute",t.loadElem.style.margin="20px auto",t.btnLoadMore.after(t.loadElem))}function i(){t.loadElem.classList.add("hidden")}
//# sourceMappingURL=index.js.map
