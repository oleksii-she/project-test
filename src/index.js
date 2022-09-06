import { NewServiceApi } from './js/serviceApi';
import { markupGallery, openModal, createModal } from './js/markupGallery';
const searchForm = document.querySelector('.search_form');
const gallery = document.querySelector('.gallery_list');
const paginationClick = document.querySelector('.pagination');

const serviceApi = new NewServiceApi();
const pageList = document.querySelector('.page_list');
const resultInput = document.querySelector('.result_input');

function onSearch(e) {
  e.preventDefault();

  try {
    const search = e.target.elements.search.value;

    if (search === '') {
      return;
    }

    serviceApi.query = search;
    serviceApi.serviceSearchMovie().then(data => {
      if (data.results.length === 0) {
        resultInput.textContent =
          'Search result not successful. Enter the correct movie name and';
      }
      markupGallery(data.results);
    });
  } catch (error) {
    console.log(error);
  }
}

// top movie
function topMoviePage() {
  serviceApi.serviceMovieTopApi().then(data => markupGallery(data.results));
}
topMoviePage();

searchForm.addEventListener('submit', onSearch);

// modal
