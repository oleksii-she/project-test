import { NewServiceApi } from './js/serviceApi';
import { markupGallery } from './js/markupGallery';
const searchForm = document.querySelector('.search_form');
const gallery = document.querySelector('.gallery_list');
const serviceApi = new NewServiceApi();
console.log(serviceApi);
function onSearch(e) {
  e.preventDefault();
  try {
    serviceApi.query = e.target.elements.search.value;

    console.log(data);
  } catch (error) {
    console.log(error);
  }
}
searchForm.addEventListener('submit', onSearch);

serviceApi.serviceMovieTopApi().then(data => markupGallery(data.results));
