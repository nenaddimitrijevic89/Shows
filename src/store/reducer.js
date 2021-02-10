import * as actionTypes from "./actionTypes";

const initialState = {
  shows: null,
  singleShow: null,
  searchedShows: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_INIT_SHOWS:
      return {
        ...state,
        shows: action.shows,
        singleShow: null
      };
    case actionTypes.SET_SINGLE_SHOW:
      return {
        ...state,
        singleShow: action.show,
        searchedShows: null,
      };
    case actionTypes.SET_SEARCHED_SHOWS:
      return {
        ...state,
        searchedShows: action.shows,
      };
    default:
      return state;
  }
};

export default reducer;
