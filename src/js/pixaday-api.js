import axios from 'axios';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

export function getImages(SearchData) {
  return axios
    .get('https://pixabay.com/api/', {
      params: {
        key: '48848610-9eaece9d33812a504b30c12d0',
        q: `${SearchData}`,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
      },
    })
    .then(res => {
      if (res.data.hits.length === 0) {
        throw new Error('No images');
      }
      return res.data.hits;
    })
    .catch(error => {
      iziToast.error({
        message:
          'Sorry, there are no images matching your search query. Please try again!',
        position: 'topRight',
      });
      return Promise.reject(error);
    });
}
// getImages('dog')
//   .then(images => console.log(images))
//   .catch(() => console.log('Handled error'));
