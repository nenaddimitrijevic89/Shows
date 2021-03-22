import * as actionTypes from "./actionTypes";

const initialState = {
  shows: null,
  singleShow: null,
  seasons: null,
  cast: null,
  searchedShows: null,
  showId: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_INIT_SHOWS:
      return {
        ...state,
        shows: action.shows,
        singleShow: null,
        searchedShows: null,
        seasons: null,
        cast: null,
        showId: null,
      };
    case actionTypes.SET_SINGLE_SHOW:
      return {
        ...state,
        singleShow: action.show,
        searchedShows: null,
      };
    case actionTypes.SET_SEASONS:
      return {
        ...state,
        seasons: action.seasons,
      };
    case actionTypes.SET_CAST:
      return {
        ...state,
        cast: action.cast,
      };
    case actionTypes.SET_CREW:
      return {
        ...state,
        crew: action.crew,
      };
    case actionTypes.SET_SEARCHED_SHOWS:
      return {
        ...state,
        searchedShows: action.shows,
      };
    case actionTypes.SET_SHOW_ID:
      return {
        ...state,
        showId: action.id,
      };
    default:
      return state;
  }
};

export default reducer;
