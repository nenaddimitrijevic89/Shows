import * as actionTypes from './actionTypes';

const initialState = {
    shows: null,
    singleShow: null
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SET_INIT_SHOWS:
            return {
                ...state,
                shows: action.shows
            }
        case actionTypes.SET_SINGLE_SHOW:
            return {
                ...state,
                singleShow: action.show
            }
        default: return state;
    }
};

export default reducer;