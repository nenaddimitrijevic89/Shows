import * as actionTypes from "./actionTypes";

const initialState = {
  shows: null,
  filteredShows: null,
  singleShow: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_INIT_SHOWS:
      return {
        ...state,
        shows: action.shows,
      };
    case actionTypes.SET_SINGLE_SHOW:
      return {
        ...state,
        singleShow: action.show,
      };
    case actionTypes.CHANGE_PAGE:
      return {
        ...state,
        // currentPage: action.number,
        filteredShows: action.payload
      };
    default:
      return state;
  }
};

export default reducer;
