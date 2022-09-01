const gallery = document.querySelector('.gallery_list');

// апі
const key = 'bef2e1469ade062164db331fc6ab2f25';
const url = 'https://api.themoviedb.org';

async function serviceApi() {
  try {
    return await (
      await fetch(
        `${url}/3/trending/all/week?api_key=${key}&media_type=all&time_window=week`
      )
    )
      .json()
      .then(data => markupGallery(data.results));
  } catch {
    console.error();
  }
}
//   = = = = == = == = = = = = = = = = == = =   ========= == = = = = == = = = = = = = == = = = = =  = = = = == =

async function markupGallery(data) {
  console.log(data);
  const markup = await data
    .map(el => {
      return `   <li class="gallery_item"><a href="">
        <img src="https://image.tmdb.org/t/p/w500${el.poster_path}" alt="${el.original_title}" class="gallery_img" /></a>
          <div><h2>${el.name}<span>ganre</span></h2></div>
      </li>`;
    })
    .join('');

  gallery.innerHTML = markup;
}
serviceApi();
