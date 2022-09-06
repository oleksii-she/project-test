export { NewServiceApi };
const axios = require('axios').default;
const key = 'bef2e1469ade062164db331fc6ab2f25';
const url = 'https://api.themoviedb.org/3';
class NewServiceApi {
  constructor() {
    this.searchValue = '';
    this.page = 1;
  }

  async serviceMovieTopApi() {
    try {
      return await fetch(
        `${url}/trending/movie/week?api_key=${key}&media_type=all&time_window=week&page=${this.page}`
      ).then(res => res.json());
    } catch {
      console.error();
    }
  }

  async serviceSearchMovie() {
    try {
      return await fetch(
        `${url}/search/movie?api_key=${key}&query="${this.searchValue}"`
      ).then(res => res.json());
    } catch {
      console.error();
    }
  }

  ressetPage() {
    this.page = 1;
  }
  incrementPage() {
    return (this.page += 1);
  }
  decrementPage() {
    if (this.page <= 1) {
      return;
    }
    return (this.page -= 1);
  }
  get query() {
    return this.searchValue;
  }

  set query(nuwQuery) {
    this.searchValue = nuwQuery;
  }
  set pageNumber(nuwPage) {
    this.page = nuwPage;
  }
}

// // апі
// const key = 'bef2e1469ade062164db331fc6ab2f25';
// const url = 'https://api.themoviedb.org';

// async function serviceApi() {
//   try {
//     return await (
//       await fetch(
//         `${url}/3/trending/all/week?api_key=${key}&media_type=all&time_window=week`
//       )
//     )
//       .json()
//       .then(data => console.log(data));
//   } catch {
//     console.error();
//   }
// }
// //   = = = = == = == = = = = = = = = = == = =   ========= == = = = = == = = = = = = = == = = = = =  = = = = == =
// serviceApi();
