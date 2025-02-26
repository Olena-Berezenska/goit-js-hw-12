import 'simplelightbox/dist/simple-lightbox.min.css';

import SimpleLightbox from 'simplelightbox';

const container = document.querySelector('.gallery');
function imageTemplate(image) {
  return `<li class="gallery-item">
  <a class="gallery-link" href="${image.largeImageURL}">
    <img
      class="gallery-image"
      src="${image.webformatURL}"
      alt="${image.tags}"
    />
    <ul class="list-descr">
     <li class="descr-item">
       <h2 class="descr-title">Likes</h2>
       <p class="descr-value">${image.likes}</p>
     </li>
     <li class ="descr-item">
       <h2 class="descr-title">Views</h2>
       <p class="descr-value">${image.views}</p>
     </li>
     <li class ="descr-item">
       <h2 class="descr-title">Comments</h2>
       <p class="descr-value">${image.comments}</p>
     </li>
     <li class ="descr-item">
       <h2 class="descr-title">Downloads</h2>
      <p class="descr-value">${image.downloads}</p>
     </li>
    </ul>
  </a>
</li>`;
}

function imageSTemplate(images) {
  return images.map(imageTemplate).join('');
}

export function renderImages(images) {
  const markup = imageSTemplate(images);
  container.innerHTML = markup;
  gallery.refresh();
}

let gallery = new SimpleLightbox('.gallery a', {
  captionType: 'alt',
  captionDelay: 250,
  captionPosition: 'bottom',
  captionsData: 'alt',
});
gallery.on('shown.simplelightbox', function () {
  console.log('Lightbox is shown');
});
