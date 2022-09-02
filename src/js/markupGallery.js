const gallery = document.querySelector('.gallery_list');

function markupGallery(data) {
  const markup = data
    .map(el => {
      let name = el.original_title;
      if (name === undefined) {
        name = el.original_name;
        return `   <li class="gallery_item"><a href="">
          <img class="gallery_img" src="https://image.tmdb.org/t/p/w500${el.poster_path}" alt="${name}"/></a>
            <div><h2 class="gallery_title">${name}<span>ganre</span></h2></div>
        </li>`;
      } else {
        return `<li class="gallery_item"><a href="">
          <img class="gallery_img" src="https://image.tmdb.org/t/p/w500${el.poster_path}" alt="${name}"/></a>
            <div><h2 class="gallery_title">${name}<span>ganre</span></h2></div>
        </li>`;
      }
    })
    .join('');

  gallery.innerHTML = markup;
}

export { markupGallery };
