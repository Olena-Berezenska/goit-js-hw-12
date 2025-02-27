import iziToast from 'izitoast';
import { getImages, PER_PAGE } from './js/pixaday-api.js';
import { renderImages } from './js/render-functions.js';

const refs = {
  InputData: document.querySelector('.js-form-inline'),
  loader: document.querySelector('.loader'),
  gallery: document.querySelector('.gallery'),
  btnLoadMore: document.querySelector('.js-btn-load'),
  loadElem: document.querySelector('.js-loader'),
};

let currentPage = 1;
let totalPages = 0;
let searchQuery = '';

refs.InputData.addEventListener('submit', handleInputData);

async function handleInputData(e) {
  e.preventDefault();
  const searchData = new FormData(e.target);
  const searchDatavalue = searchData.get('imgSearch');
  searchQuery = searchDatavalue;
  if (!searchDatavalue) return;
  refs.gallery.innerHTML = '';
  refs.loader.style.display = 'block';
  try {
    const { images, total } = await getImages(searchDatavalue, currentPage);
    totalPages = total;
    console.log(totalPages);
    renderImages(images);
  } catch (error) {
    console.log('Handled error', error);
  } finally {
    refs.loader.style.display = 'none';
    e.target.reset();
  }
  checkBtnStatus();
}
//==========================================
refs.btnLoadMore.addEventListener('click', loadMore);
async function loadMore() {
  currentPage += 1;
  const { images, total } = await getImages(searchQuery, currentPage);
  renderImages(images);
  checkBtnStatus();
  const info = refs.gallery.firstElementChild.getBoundingClientRect();
  const height = info.height;
  window.scrollBy({
    top: height * 2,
    behavior: 'smooth',
  });
}

//=============================================
function checkBtnStatus() {
  const maxPage = Math.ceil(totalPages / PER_PAGE);
  const isLastPage = maxPage <= currentPage;
  console.log(isLastPage);
  if (isLastPage) {
    refs.btnLoadMore.classList.add('hidden');
    iziToast.info({
      message: `We're sorry, but you've reached the end of search results.
`,
      position: 'bottomRight',
    });
  } else {
    refs.btnLoadMore.classList.remove('hidden');
  }
}
