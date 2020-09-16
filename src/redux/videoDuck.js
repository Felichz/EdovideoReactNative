import API from '../utils/api';

// Constants
export const SET_SUGGESTION_LIST = 'SET_SUGGESTION_LIST';
export const SET_CATEGORY_LIST = 'SET_CATEGORY_LIST';
export const SELECT_MOVIE = 'SELECT_MOVIE';

// Reducer
const initialState = {
  suggestionList: [],
  categoryList: [],
  selectedMovie: null,
};

export function videoReducer(state = initialState, action) {
  switch (action.type) {
    case SET_SUGGESTION_LIST:
      return {...state, suggestionList: action.payload};
    case SET_CATEGORY_LIST:
      return {...state, categoryList: action.payload};
    case SELECT_MOVIE:
      return {...state, selectedMovie: action.payload};
  }
}

// Async action creators
export const fetchSuggestions = async (dispatch) => {
  try {
    console.log('fetchSuggestions');
    const suggestionList = await API.getSuggestion(
      Math.round(Math.random() * 10),
    );
    console.log('finish fetchSuggestions');
    dispatch({
      type: SET_SUGGESTION_LIST,
      payload: suggestionList,
    });
  } catch (e) {
    console.log('error fetching suggestions');
  }
};

export const fetchCategories = async (dispatch) => {
  try {
    console.log('fetchCategories');
    const movieList = await API.getMovies();
    console.log('finish fetchCategories');
    // Pick unique categories
    const usedCategories = [];
    const categoryList = [];
    movieList.forEach((movie) => {
      if (!usedCategories.includes(movie.genres[0])) {
        usedCategories.push(movie.genres[0]);

        categoryList.push({
          id: movie.id,
          genre: movie.genres[0],
          image: movie.background_image,
        });
      }
    });

    dispatch({
      type: SET_CATEGORY_LIST,
      payload: categoryList,
    });
  } catch (e) {
    console.log('error fetching categories');
  }
};

export function selectMovie(dispatch, movie) {
  dispatch({
    type: SELECT_MOVIE,
    payload: movie,
  });
}
