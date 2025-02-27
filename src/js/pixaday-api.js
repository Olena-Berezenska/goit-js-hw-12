import axios from 'axios';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

export const PER_PAGE = 40;
export async function getImages(SearchData, currentPage) {
  try {
    const res = await axios.get('https://pixabay.com/api/', {
      params: {
        key: '48848610-9eaece9d33812a504b30c12d0',
        q: `${SearchData}`,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
        page: currentPage,
        per_page: PER_PAGE,
      },
    });
    if (res.data.hits.length === 0) {
      throw new Error('No images');
    }
    return {
      images: res.data.hits,
      total: res.data.total,
    };
  } catch (error) {
    iziToast.error({
      message:
        'Sorry, there are no images matching your search query. Please try again!',
      position: 'topRight',
    });
    return Promise.reject(error);
  }
}
