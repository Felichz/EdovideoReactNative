const API_URL = 'https://yts.mx/api/v2/',
  MOVIE_LIST = API_URL + 'list_movies.json',
  MOVIE_SUGGESTIONS = API_URL + 'movie_suggestions.json';

class Api {
  async fetchMovies(url) {
    try {
      const res = await fetch(url);
      const {data} = await res.json();
      return data.movies;
    } catch (err) {
      return [];
    }
  }

  async getSuggestion(id) {
    return await this.fetchMovies(MOVIE_SUGGESTIONS + `?movie_id=${id}`);
  }

  async getMovies() {
    return await this.fetchMovies(MOVIE_LIST);
  }

  async searchMovie(title) {
    const movies = await this.fetchMovies(
      MOVIE_LIST + `?query_term=${title}&limit=1&sort_by=rating`,
    );

    return movies[0];
  }
}

export default new Api();
