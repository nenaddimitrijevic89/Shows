import { showService } from "../services/showService";
import * as actionTypes from "./actionTypes";
import { Show } from "../entities/show";

export const setInitShows = (shows) => {
  return {
    type: actionTypes.SET_INIT_SHOWS,
    shows: shows,
  };
};

export const setSingleShow = (show) => {
  return {
    type: actionTypes.SET_SINGLE_SHOW,
    show: show,
  };
};

export const fetchInitShows = () => {
  return (dispatch) => {
    showService.getInitShows().then((response) => {
      const shows = response.data.map((show) => new Show(show));
      dispatch(setInitShows(shows));
    });
  };
};

export const fetchSingleShow = (id) => {
  return (dispatch) => {
    showService.getSingleShow(id).then((response) => {
      const show = new Show(response.data);
      dispatch(setSingleShow(show));
    });
  };
};

export const changePage = (number, payload) => {
  return {
    type: actionTypes.CHANGE_PAGE,
    currentPage: number,
    filteredShows: payload,
  };
};
