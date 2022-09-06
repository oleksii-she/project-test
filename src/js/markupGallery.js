export default function markupGallery(data) {
  const gallery = document.querySelector('.gallery_list');
  document.querySelector('.gallery_list').innerHTML = '';
  data.forEach(el => {
    const movieEl = document.createElement('li');
    movieEl.classList.add('gallery_item');
    let name = el.original_title;
    if (el.poster_path === null) {
      return;
    }
    if (name === undefined) {
      name = el.original_name;

      movieEl.innerHTML = `<div class="modal_click-open">
          <img class="gallery_img" src="https://image.tmdb.org/t/p/w500${el.poster_path}" alt="${name}"/></div>
            <div class="title_container"><h2 class="gallery_title">${name} ${el.id}  <span>${el.genre_ids}</span></h2></div>
        `;
      gallery.appendChild(movieEl);
    } else {
      movieEl.innerHTML = `<div class="modal_click-open">
          <img class="gallery_img" src="https://image.tmdb.org/t/p/w500${el.poster_path}" alt="${name}"/></div>
            <div class="title_container"><h2 class="gallery_title">${name} ${el.id}  <span>${el.genre_ids}</span></h2></div>
        `;
    }
    movieEl.addEventListener('click', () => openModal(el.id));
    gallery.appendChild(movieEl);
  });
}

const modal = document.querySelector('.backdrop');
console.log(modal);
const modalBox = document.querySelector('.modal_box');
async function openModal(id) {
  const resp = await fetch(
    `https://api.themoviedb.org/3/movie/${id},?api_key=bef2e1469ade062164db331fc6ab2f25`
  );
  const respData = await resp.json();
  console.log(respData);
  modalBox.innerHTML = `
    <div class="img_box">
      <img src="https://image.tmdb.org/t/p/w500${respData.backdrop_path}" alt="" class="modal_img" />
    </div>
    <div class="text-content_box">
      <h2 class="modal_title">${respData.original_title}</h2>
      <div class="category_box">
        <ul class="category_list">
          <li class="category_item">Vote / Votes</li>
          <li class="category_item">Popularity</li>
          <li class="category_item">Original Title</li>
          <li class="category_item">Genre</li>
        </ul>
        <ul class="categiryApi_list">
          <li class="categiryApi_item">
            <span class="vote">${respData.vote_average}</span><span class="slash">/</span>${respData.vote_count}
          </li>
          <li class="categiryApi_item">${respData.popularity}</li>
          <li class="categiryApi_item categiryApi_style--upercase">${respData.original_title}</li>
          <li class="categiryApi_item categiryApi_style">${respData.genres[0].name} / ${respData.genres[1].name} </li>
        </ul>
      </div>
      <h2 class="about_title">About</h2>
      <p class="about_text">
     ${respData.overview}
      </p>
      <div class="modal-box_btn">
        <button class="watched_btn">add to Watched</button>
        <button class="queue_btn">add to queue</button>
      </div>
    </div>
  `;
  modal.classList.remove('is-hiden');

  const btnModalClose = document.querySelector('.btn_close');
  btnModalClose.addEventListener('click', closeModal);
}

function closeModal() {
  modal.classList.add('is-hiden');
}

export { markupGallery, openModal };

// const markup = data
// .map(el => {
//   console.log(el.poster_path);

//   let name = el.original_title;
//   if (el.poster_path === null) {
//     return;
//   }
//   if (name === undefined) {
//     name = el.original_name;
//     return `<li class="gallery_item"><a href="" class="modal_click-open">
//       <img class="gallery_img" src="https://image.tmdb.org/t/p/w500${el.poster_path}" alt="${name}"/></a>
//         <div class="title_container"><h2 class="gallery_title">${name}<span>ganre</span></h2></div>
//     </li>`;
//   } else {
//     return `<li class="gallery_item"><a href="" class="modal_click-open">
//       <img class="gallery_img" src="https://image.tmdb.org/t/p/w500${el.poster_path}" alt="${name}"/></a>
//         <div class="title_container"><h2 class="gallery_title">${name}<span>ganre</span></h2></div>
//     </li>`;
//   }
// })
// .join('');
// gallery;
// gallery.insertAdjacentHTML('afterbegin', markup);
// }
