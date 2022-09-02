import { NewServiceApi } from './js/serviceApi';
import { markupGallery } from './js/markupGallery';
const searchForm = document.querySelector('.search_form');
const gallery = document.querySelector('.gallery_list');

const serviceApi = new NewServiceApi();

function onSearch(e) {
  e.preventDefault();

  // try {
  //   serviceApi.query = e.target.elements.search.value;

  //   console.log(data);
  // } catch (error) {
  //   console.log(error);
  // }
}

// top movie
function topMoviePage() {
  serviceApi.serviceMovieTopApi().then(data => markupGallery(data.results));
}
topMoviePage();

searchForm.addEventListener('submit', onSearch);

///page

document.querySelector('.btns-pages').addEventListener('click', e => {
  // вешаем один обработчик события клика на весь блок
  const { target } = e; // цель, на которую мы кликнули
  const targetClassList = target.classList; // массив классов цели, на которую мы кликнули
  const allNumPages = [...document.querySelectorAll('.num-page')]; // массив всех нумерованых блоков (блоки с классом .num-page), оператор '...' здесь не просто так
  const activePageNumber = allNumPages.findIndex(i =>
    i.classList.contains('num-active')
  ); // номер (индекс) ранее выбранной страницы

  switch (
    true // этот оператор смотрит на какую кнопку мы кликнули
  ) {
    case targetClassList.contains('btn-left'):
      serviceApi.decrementPage();
      topMoviePage();
      return activePageNumber && setNum(-1, true); // если кликнули на кнопку влево
    case targetClassList.contains('btn-right'):
      serviceApi.incrementPage();
      topMoviePage();
      return activePageNumber - allNumPages.length + 1 && setNum(1, true); // если кликнули на кнопку вправо
    case targetClassList.contains('num-page'):
      return setNum(target.innerHTML); // если кликнули прямо на число
  }

  function setNum(num, direction = null) {
    // функция, которая задает выбранную страницу. параметр num - какую цифру мы выбрали (если мы нажали на цифру). параметр direction - направление стрелки, которую мы выбрали (если мы нажали на стрелку)
    allNumPages[activePageNumber].classList.remove('num-active'); // убирает класс .num-active с ранее выбранной страницы
    // здесь самый сок
    // если в вызываемой функции указан аргумент direction (он true или false), то берем индекс ранее выбранной цифры и плюсуем/минусуем 1, чтобы активировать предыдущую/следующую цифру
    // плюсовать или минусовать указывает аргумент num, который равен -1 либо 1
    // если в вызываемой функции не указан аргумен direction (он равен null) - значит мы кликнули прямо на число. берем содержимое выбранной цифры (через innerHTML) и по полученому индексу делаем элемент активным
    allNumPages[
      direction === null ? target.innerHTML - 1 : activePageNumber + num
    ].classList.add('num-active');
  }
});
// /  incrementPage()
