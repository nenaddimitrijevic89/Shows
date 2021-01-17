import * as actionTypes from './actionTypes';

const initialState = {
    shows: null
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SET_INIT_SHOWS:
            return {
                ...state,
                shows: action.shows
            }
        default: return state;
    }
};

export default reducer;