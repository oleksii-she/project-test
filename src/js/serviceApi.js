export { NewServiceApi };
const key = 'bef2e1469ade062164db331fc6ab2f25';
const url = 'https://api.themoviedb.org/3';
export default class NewServiceApi {
  constructor() {
    this.searchValue = '';
    this.page = 1;
    this.id = NaN;
  }

  // сервіс  топ популярних фільмів за тиждень
  async serviceMovieTopApi() {
    try {
      const resp = await fetch(
        `${url}/trending/movie/week?api_key=${key}&media_type=all&time_window=week&page=${this.page}`
      );
      const respData = await resp.json();

      return respData;
    } catch (error) {
      console.error(error.message);
    }
  }

  // сервіс пошук фільмів за значенням
  async serviceSearchMovie() {
    try {
      const resp = await fetch(
        `${url}/search/movie?api_key=${key}&query="${this.searchValue}`
      );

      const respData = await resp.json();

      return respData;
    } catch (error) {
      console.error(error.message);
    }
  }

  // сервіс пошку фыльмыв по айді
  async serviceIdMovie() {
    try {
      const resp = await fetch(`${url}/movie/${this.id},?api_key=${key}`);

      const respData = await resp.json();

      return respData;
    } catch (error) {
      console.error(error.message);
    }
  }
  // async serviceVideoApi() {
  //   try {
  //     const resp = await fetch(
  //       `https://api.themoviedb.org/3/movie/${this.id}/videos?api_key=bef2e1469ade062164db331fc6ab2f25`
  //     );
  //     const respData = await resp.json();

  //     return respData;
  //   } catch (error) {
  //     console.error(error.message);
  //   }
  // }
  async ganresApi() {
    try {
      const resp = await fetch(
        `https://api.themoviedb.org/3//genre/movie/list?api_key=bef2e1469ade062164db331fc6ab2f25`
      );
      const respGanre = await resp.json();
      console.log(respGanre);
      return respGanre;
    } catch (error) {
      console.error(error.message);
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

  set idNumber(nuwId) {
    this.id = nuwId;
  }

  insertGenresToMovieObj() {
    return this.fetchPopularArticles().then(data => {
      return this.fetchGenres().then(genresList => {
        return data.map(movie => ({
          ...movie,
          release_date: movie.release_date.split('-')[0],
          genres: movie.genre_ids
            .map(id => genresList.filter(el => el.id === id))
            .flat(),
        }));
      });
    });
  }
}
