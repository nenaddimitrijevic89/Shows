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

export const setSearchedShows = (shows) => {
  return {
    type: actionTypes.SET_SEARCHED_SHOWS,
    shows: shows,
  };
};

export const setSearchedShowId = (id) => {
  return {
    type: actionTypes.SET_SEARCHED_SHOW_ID,
    id: id,
  };
};

export const fetchSearchedShowId = (id) => {
  return (dispatch) => dispatch(setSearchedShowId(id));
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
      console.log(response);
      const show = new Show(response.data);
      dispatch(setSingleShow(show));
    });
  };
};

export const fetchSearchedShows = (query) => {
  return (dispatch) => {
    showService.getSearchedShows(query).then((response) => {
      const shows = response.data.map((show) => ({
        name: show.show.name,
        id: show.show.id,
      }));
      dispatch(setSearchedShows(shows));
    });
  };
};
