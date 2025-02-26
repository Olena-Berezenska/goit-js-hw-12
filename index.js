import{a as c,i as u,S as d}from"./assets/vendor-DDn4O9LD.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))a(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const n of s.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&a(n)}).observe(document,{childList:!0,subtree:!0});function o(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerPolicy&&(s.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?s.credentials="include":t.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function a(t){if(t.ep)return;t.ep=!0;const s=o(t);fetch(t.href,s)}})();function m(e){return c.get("https://pixabay.com/api/",{params:{key:"48848610-9eaece9d33812a504b30c12d0",q:`${e}`,image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(r=>{if(r.data.hits.length===0)throw new Error("No images");return r.data.hits}).catch(r=>(u.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}),Promise.reject(r)))}const p=document.querySelector(".gallery");function h(e){return`<li class="gallery-item">
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
</li>`}function f(e){return e.map(h).join("")}function g(e){const r=f(e);p.innerHTML=r,i.refresh()}let i=new d(".gallery a",{captionType:"alt",captionDelay:250,captionPosition:"bottom",captionsData:"alt"});i.on("shown.simplelightbox",function(){console.log("Lightbox is shown")});const l={InputData:document.querySelector(".js-form-inline"),loader:document.querySelector(".loader"),gallery:document.querySelector(".gallery")};l.InputData.addEventListener("submit",y);function y(e){e.preventDefault(),console.log("Form element:",e.target);const o=new FormData(e.target).get("imgSearch");console.log(o),o&&(l.gallery.innerHTML="",l.loader.style.display="block",m(o).then(a=>{g(a),console.log(a)}).catch(()=>console.log("Handled error")).finally(()=>{l.loader.style.display="none",e.target.reset()}))}
//# sourceMappingURL=index.js.map
