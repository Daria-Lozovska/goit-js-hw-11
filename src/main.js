import { fetchImages } from './js/pixabay-api.js';
import { clearGallery, renderImages } from './js/render-functions.js';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const form = document.querySelector('#search-form');
const gallery = document.querySelector('.gallery');
const loader = document.querySelector('.loader');

let query = '';
let page = 1;
let lightbox;

form.addEventListener('submit', async (event) => {
  event.preventDefault();
  
  query = form.elements.searchQuery.value.trim();
  if (!query) {
    iziToast.error({ title: 'Error', message: 'Please enter a search query!' });
    return;
  }

  page = 1;
  clearGallery(gallery);
  loader.style.display = 'block';
  
  try {
    const { hits, totalHits } = await fetchImages(query, page);
    loader.style.display = 'none';
    
    if (hits.length === 0) {
      iziToast.warning({ title: 'No results', message: 'Sorry, there are no images matching your search query. Please try again!' });
      return;
    }
    
    renderImages(hits, gallery);
    lightbox = new SimpleLightbox('.gallery a');
    lightbox.refresh();
    
  } catch (error) {
    iziToast.error({ title: 'Error', message: error.message });
    loader.style.display = 'none';
  }
});

window.addEventListener('scroll', async () => {
  if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 100) {
    page += 1;
    loader.style.display = 'block';

    try {
      const { hits } = await fetchImages(query, page);
      loader.style.display = 'none';
      
      renderImages(hits, gallery);
      lightbox.refresh();
    } catch (error) {
      iziToast.error({ title: 'Error', message: error.message });
      loader.style.display = 'none';
    }
  }
});