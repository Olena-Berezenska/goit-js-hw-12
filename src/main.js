import iziToast from 'izitoast';
import { getImages, PER_PAGE } from './js/pixaday-api.js';
import { renderImages } from './js/render-functions.js';

const refs = {
  InputData: document.querySelector('.js-form-inline'),
  gallery: document.querySelector('.gallery'),
  btnLoadMore: document.querySelector('.js-btn-load'),
  loadElem: document.querySelector('.loader'),
};

let currentPage = 1;
let totalPages = 0;
let searchQuery = '';

refs.InputData.addEventListener('submit', handleInputData);

async function handleInputData(e) {
  e.preventDefault();
  showSpinner('form');
  currentPage = 1;
  const searchData = new FormData(e.target);
  const searchDatavalue = searchData.get('imgSearch').trim();
  searchQuery = searchDatavalue;
  if (!searchDatavalue) return;
  refs.gallery.innerHTML = '';
  try {
    const { images, total } = await getImages(searchDatavalue, currentPage);
    totalPages = total;
    console.log(totalPages);
    renderImages(images);
    hideSpinner();
    checkBtnStatus();
  } catch (error) {
    refs.btnLoadMore.classList.add('hidden');
    refs.loadElem.classList.add('hidden');
    console.log('Handled error', error);
  } finally {
    e.target.reset();
  }
}
//==========================================
refs.btnLoadMore.addEventListener('click', loadMore);
async function loadMore() {
  showSpinner('button');
  currentPage += 1;
  const { images, total } = await getImages(searchQuery, currentPage);
  renderImages(images);
  hideSpinner();
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
function showSpinner(position) {
  refs.loadElem.classList.remove('hidden');

  if (position === 'form') {
    refs.loadElem.style.margin = '10px auto';
    refs.InputData.after(refs.loadElem);
  } else if (position === 'button') {
    refs.btnLoadMore.classList.add('hidden');
    refs.btnLoadMore.before(refs.loadElem);
  }
}

function hideSpinner() {
  refs.loadElem.classList.add('hidden');
  refs.btnLoadMore.classList.remove('hidden');
}
