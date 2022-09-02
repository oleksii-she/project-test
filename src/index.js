const gallery = document.querySelector('.gallery_list');

const searchInput = document.querySelectorAll('.search_input');
console.log(searchInput);
async function markupGallery(data) {
  console.log(data);
  const markup = await data
    .map(el => {
      let title = el.original_title;
      if (title === undefined) {
        title = el.original_name;
        return `   <li class="gallery_item"><a href="">
        <img class="gallery_img" src="https://image.tmdb.org/t/p/w500${el.poster_path}" alt="${el.title}"/></a>
          <div><h2 class="gallery_title">${el.title}<span>ganre</span></h2></div>
      </li>`;
      }
      return `   <li class="gallery_item"><a href="">
        <img class="gallery_img" src="https://image.tmdb.org/t/p/w500${el.poster_path}" alt="${el.title}"/></a>
          <div><h2 class="gallery_title">${el.title}<span>ganre</span></h2></div>
      </li>`;
    })
    .join('');

  gallery.innerHTML = markup;
}
serviceApi();
