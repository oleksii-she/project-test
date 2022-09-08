import { NewServiceApi } from './serviceApi';
const serviceApi = new NewServiceApi();

const ganresInfo = [
  {
    id: 28,
    name: 'Action',
  },
  {
    id: 12,
    name: 'Adventure',
  },
  {
    id: 16,
    name: 'Animation',
  },
  {
    id: 35,
    name: 'Comedy',
  },
  {
    id: 80,
    name: 'Crime',
  },
  {
    id: 99,
    name: 'Documentary',
  },
  {
    id: 18,
    name: 'Drama',
  },
  {
    id: 10751,
    name: 'Family',
  },
  {
    id: 14,
    name: 'Fantasy',
  },
  {
    id: 36,
    name: 'History',
  },
  {
    id: 27,
    name: 'Horror',
  },
  {
    id: 10402,
    name: 'Music',
  },
  {
    id: 9648,
    name: 'Mystery',
  },
  {
    id: 10749,
    name: 'Romance',
  },
  {
    id: 878,
    name: 'Science Fiction',
  },
  {
    id: 10770,
    name: 'TV Movie',
  },
  {
    id: 53,
    name: 'Thriller',
  },
  {
    id: 10752,
    name: 'War',
  },
  {
    id: 37,
    name: 'Western',
  },
];

export default function markupGallery(data) {
  const gallery = document.querySelector('.gallery_list');

  document.querySelector('.gallery_list').innerHTML = '';
  data.forEach(el => {
    //порівняння айді з масивом всіх жанрів
    ganresInfo.map(q => {
      if (q.id === el.genre_ids[0]) {
        el.genre_ids[0] = q.name;
      }

      if (q.id === el.genre_ids[1]) {
        el.genre_ids[1] = q.name;
      }
      if (q.id === el.genre_ids[2]) {
        el.genre_ids[2] = q.name;
      }
      if (q.id === el.genre_ids[3]) {
        el.genre_ids[3] = q.name;
      }
      if (q.id === el.genre_ids[4]) {
        el.genre_ids[4] = q.name;
      }
    });

    //лишає з дати тільки рік
    const realeaseData = el.release_date.slice(0, 4);
    console.log(el.genre_ids);
    const movieEl = document.createElement('li');
    movieEl.classList.add('gallery_item');
    // якщо картинка відсутня, то міняє її на це забраження
    if (el.poster_path === null) {
      movieEl.innerHTML = `<div class="modal_click-open" id="${el.id}">
      <img class="gallery_img" src="https://img.freepik.com/free-vector/glitch-error-404-page_23-2148105404.jpg?w=996&t=st=1662636904~exp=1662637504~hmac=6929048a20459487fdcf38b8077d000703b9a860b7d7ee1bb32f889a47b1edd8" alt="${el.original_title}"/></div>
        <div class="title_container"><h2 class="gallery_title">${el.original_title}</h2>
        <div><p class="ganre">${el.genre_ids} ${realeaseData}</p></div>
        </div>`;
    } else {
      movieEl.innerHTML = `<div class="modal_click-open" id="${el.id}">
      <img class="gallery_img" src="https://image.tmdb.org/t/p/w500${el.poster_path}" alt="${el.original_title}"/></div>
        <div class="title_container"><h2 class="gallery_title">${el.original_title}</h2>
        <div><p class="ganre">${el.genre_ids} ${realeaseData}</p></div>
        </div>`;
    }

    gallery.appendChild(movieEl);

    movieEl.addEventListener('click', () => openModal(el.id, el.poster_path));
  });
}

const modal = document.querySelector('.backdrop');

const modalBox = document.querySelector('.modal_box');

async function openModal(id, poster) {
  serviceApi.idNumber === id;
  const respData = await serviceApi.serviceIdMovie(id);
  // const resp = await fetch(
  //   `https://api.themoviedb.org/3/movie/${id},?api_key=bef2e1469ade062164db331fc6ab2f25`
  // );
  // const respData = await resp.json();
  let ganres = respData.genres.map(el => el.name);
  let posters = `https://image.tmdb.org/t/p/w500${poster}`;
  // if (posters === null) {
  //   let poster = `https://img.freepik.com/free-vector/glitch-error-404-page_23-2148105404.jpg?w=996&t=st=1662636904~exp=1662637504~hmac=6929048a20459487fdcf38b8077d000703b9a860b7d7ee1bb32f889a47b1edd8`;
  // }

  modalBox.innerHTML = `
    <div class="img_box">
    <img src="${poster}" alt="" class="modal_img" />
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
            <span class="vote">${
              respData.vote_average
            }</span><span class="slash">/</span>${respData.vote_count}
          </li>
          <li class="categiryApi_item">${respData.popularity}</li>
          <li class="categiryApi_item categiryApi_style--upercase">${
            respData.original_title
          }</li>
          <li class="categiryApi_item categiryApi_style ganre">${String(
            ganres
          ).replaceAll(',', ' / ')} </li>
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
  document.querySelector(
    '.backdrop'
  ).style.backgroundImage = `url(https://image.tmdb.org/t/p/original${respData.backdrop_path})`;

  modal.classList.remove('is-hiden');
  document.body.classList.add('scrollOFF');
  const ganre = document.querySelector('.ganre');
  const btnModalClose = document.querySelector('.btn_close');
  btnModalClose.addEventListener('click', closeModal);
}

function closeModal() {
  modal.classList.add('is-hiden');
  document.body.classList.remove('scrollOFF');
}

window.addEventListener('click', e => {
  if (e.target === modal) {
    closeModal();
  }
});

window.addEventListener('keydown', e => {
  if (e.code === 'Escape') {
    closeModal();
  }
});

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
