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
    // ganresInfo.map(q => {
    //   if (q.id === el.genre_ids[0]) {
    //     el.genre_ids[0] = q.name;
    //   }

    //   if (q.id === el.genre_ids[1]) {
    //     el.genre_ids[1] = q.name;
    //   }
    //   if (q.id === el.genre_ids[2]) {
    //     el.genre_ids[2] = q.name;
    //   }
    //   if (q.id === el.genre_ids[3]) {
    //     el.genre_ids[3] = q.name;
    //   }
    //   if (q.id === el.genre_ids[4]) {
    //     el.genre_ids[4] = q.name;
    //   }
    // });

    //лишає з дати тільки рік
    const realeaseData = el.release_date.slice(0, 4);

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
  console.log(id);
  serviceApi.idNumber = id;
  serviceApi.idVideo = id;
  const videoresp = await serviceApi.serviceTrailerMovie();
  const respData = await serviceApi.serviceIdMovie();

  let ganres = respData.genres.map(el => el.name);
  // 616037 629176 507086 682507 539681 852448
  if (poster === null) {
    modalBox.innerHTML = `
    <div class="img_box">
    <img class="click-card-js modal_img" src="https://img.freepik.com/free-vector/glitch-error-404-page_23-2148105404.jpg?w=996&t=st=1662636904~exp=1662637504~hmac=6929048a20459487fdcf38b8077d000703b9a860b7d7ee1bb32f889a47b1edd8" alt="" class="modal_img" />
    </div>
    <div class="text-content_box">
      <h2 class="modal_title">${respData.original_title}</h2>
      <div class="category_box">
        <ul class="category_list">
          <li class="category_item">Vote / Votes <p> <span class="vote">${
            respData.vote_average
          }</span><span class="slash">/</span>${respData.vote_count}</p></li>
          <li class="category_item">Popularity <p>${respData.popularity}<p></li>
          <li class="category_item">Original Title</li>
          <li class="category_item">Genre</li>
        </ul>
        <ul class="categiryApi_list">

          <li class="categiryApi_item"></li>
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
  } else {
    modalBox.innerHTML = `
    <div class="img_box">
    <img class="click-card-js modal_img"    src="https://image.tmdb.org/t/p/w500${poster}" alt="" class="modal_img" />
    </div>
    <div class="text-content_box">
      <h2 class="modal_title">${respData.original_title}</h2>
      <div class="category_box">
        <ul class="category_list">
          <li class="category_item">Vote / Votes <p> <span class="vote">${
            respData.vote_average
          }</span><span class="slash">/</span>${respData.vote_count}</p></li>
          <li class="category_item">Popularity <p>${respData.popularity}<p></li>
          <li class="category_item">Original Title</li>
          <li class="category_item">Genre</li>
        </ul>
        <ul class="categiryApi_list">

          <li class="categiryApi_item"></li>
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

    if (videoresp.results[0]) {
      modalBox.innerHTML = `
      <div class="img_box">
  
      <img class="click-card-js modal_img" src="https://image.tmdb.org/t/p/w500${poster}" alt="" class="modal_img" />
      <button class="play_video">
      <a href="#" class="playBut">
    
      <svg
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        xmlns:a="http://ns.adobe.com/AdobeSVGViewerExtensions/3.0/"
        x="0px"
        y="0px"
        width="64px"
        height="64px"
        viewBox="0 0 213.7 213.7"
        enable-background="new 0 0 213.7 213.7"
        xml:space="preserve"
        stroke-width="15"
      >
        <polygon
          class="triangle"
          id="XMLID_18_"
          fill="none"
          stroke-width="15"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-miterlimit="10"
          points="
    73.5,62.5 148.5,105.8 73.5,149.1 "
        />

        <circle
          class="circle"
          id="XMLID_17_"
          fill="none"
          stroke-width="7"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-miterlimit="10"
          cx="106.8"
          cy="106.8"
          r="103.3"
        />
      </svg>
    </a>
  </div>
    </button>
      </div>
      <div class="text-content_box">
        <h2 class="modal_title">${respData.original_title}</h2>
        <div class="category_box">
          <ul class="category_list">
            <li class="category_item">Vote / Votes <p> <span class="vote">${
              respData.vote_average
            }</span><span class="slash">/</span>${respData.vote_count}</p></li>
            <li class="category_item">Popularity <p>${
              respData.popularity
            }<p></li>
            <li class="category_item">Original Title</li>
            <li class="category_item">Genre</li>
          </ul>
          <ul class="categiryApi_list">
  
            <li class="categiryApi_item"></li>
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
      const cl = document
        .querySelector('.play_video')
        .addEventListener('click', e => {
          const replacement = document.querySelector('.img_box');
          replacement.innerHTML = `<iframe
          class="treiler_iframe"
              width="364"
              height="437"
              src="https://www.youtube.com/embed/${videoresp.results[0].key}"
              frameborder="0"
              allowfullscreen
               >
               </iframe>`;
        });
    }
  }

  document.querySelector(
    '.backdrop'
  ).style.backgroundImage = `url(https://image.tmdb.org/t/p/original${respData.backdrop_path})`;

  modal.classList.remove('is-hiden');
  document.body.classList.add('scrollOFF');
  const ganre = document.querySelector('.ganre');
  const btnModalClose = document.querySelector('.btn_close');
  btnModalClose.addEventListener('click', closeModal);

  // iFrameVideo(respData.original_title, respData.id);
}

function closeModal() {
  modalBox.innerHTML = '';
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

// async function iFrameVideo(name, id) {
//   const da = document.querySelector('.img_box');

//   serviceApi.idVideo = id;
//   const videoresp = await serviceApi.serviceTrailerMovie();
//   if (videoresp.results[4].key) {
//     da.innerHTML = `<iframe
//     width="364"
//     height="437"
//     src="https://www.youtube.com/embed/${videoresp.results[0].key}"
//     frameborder="0"
//     allowfullscreen
//     >
//     </iframe>`;
//   }
// }

export { markupGallery, openModal };
{
  /* <svg
xmlns="http://www.w3.org/2000/svg"
width="64"
height="64"
class="icon_play"
viewBox="0 0 32 32"
>
<path d="M16 0c-8.837 0-16 7.163-16 16s7.163 16 16 16 16-7.163 16-16-7.163-16-16-16zM16 29c-7.18 0-13-5.82-13-13s5.82-13 13-13 13 5.82 13 13-5.82 13-13 13zM12 9l12 7-12 7z"></path>
</svg> */
}
