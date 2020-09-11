const API_URL = 'https://yts.mx/api/v2/',
  MOVIE_SUGGESTIONS = API_URL + 'movie_suggestions.json';

class Api {
  async getSuggestion(id) {
    const res = await fetch(MOVIE_SUGGESTIONS + `?movie_id=${id}`);
    const {data} = await res.json();
    return data.movies;
  }
}

export default new Api();
