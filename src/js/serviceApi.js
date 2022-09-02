const key = 'bef2e1469ade062164db331fc6ab2f25';
const url = 'https://api.themoviedb.org/3/movie/76341';

class serviceApi {
  constructor() {
    this.searchValue = '';
    this.page = 1;
  }

  async serviceApi() {
    try {
      const url = 'https://api.themoviedb.org';
      const key = 'bef2e1469ade062164db331fc6ab2f25';
      return await await fetch(
        `${url}/3/trending/all/week?api_key=${key}&media_type=all&time_window=week`
      ).json();
    } catch {
      console.error();
    }
  }

  ressetPage() {
    this.page = 1;
  }
  incrementPage() {
    this.page += 1;
  }

  get query() {
    return this.searchValue;
  }

  set query(nuwQuery) {
    this.searchValue = nuwQuery;
  }
}

// async serviceApi() {

//   try {
//         const key = 'bef2e1469ade062164db331fc6ab2f25';
//     const url = 'https://api.themoviedb.org';
//     return await (
//       await fetch(
//         `${url}/3/trending/all/week?api_key=${key}&media_type=all&time_window=week`
//       )
//     )

//   } catch {
//     console.error();
//   }
// }
