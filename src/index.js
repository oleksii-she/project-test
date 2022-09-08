import { NewServiceApi } from './js/serviceApi';
import { markupGallery, openModal, createModal } from './js/markupGallery';
const searchForm = document.querySelector('.search_form');
const gallery = document.querySelector('.gallery_list');
const paginationClick = document.querySelector('.pagination');

const serviceApi = new NewServiceApi();
const pageList = document.querySelector('.page_list');
const resultInput = document.querySelector('.result_input');

async function onSearch(e) {
  e.preventDefault();

  try {
    const search = e.target.elements.search.value;

    if (search === '') {
      return;
    }

    serviceApi.query = search;

    const data = await serviceApi.serviceSearchMovie();
    console.log(data);
    if (data.results.length === 0) {
      resultInput.textContent =
        'Search result not successful. Enter the correct movie name and';
    }
    markupGallery(data.results);
  } catch (error) {}
}

// top movie
async function topMoviePage() {
  const data = await serviceApi.serviceMovieTopApi();
  markupGallery(data.results);
}
topMoviePage();

async function idMovie() {
  const s = await serviceApi.serviceIdMovie();

  openModal(s);
}
idMovie();
searchForm.addEventListener('submit', onSearch);

// modal
