import { showService } from '../services/showService';
import * as actionTypes from './actionTypes';
import { Show } from '../entities/show';

export const setShows = (shows) => {
    return {
        type: actionTypes.SET_INIT_SHOWS,
        shows: shows
    };
};

export const fetchInitShows = () => {
    return dispatch => {
        showService.getInitShows()
            .then(response => {
                // console.log(response.data);
                const shows = response.data.map(show => new Show(show))
                dispatch(setShows(shows));
            })
    }
};