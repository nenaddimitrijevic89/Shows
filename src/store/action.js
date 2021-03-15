import { showService } from "../services/showService";
import * as actionTypes from "./actionTypes";
import { Show } from "../entities/show";
import { Season } from "../entities/season";
import { Cast } from "../entities/cast";

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

export const setSeasons = (seasons) => {
  return {
    type: actionTypes.SET_SEASONS,
    seasons: seasons,
  };
};

export const setCast = (cast) => {
  return {
    type: actionTypes.SET_CAST,
    cast: cast,
  };
};

export const setSearchedShows = (shows) => {
  return {
    type: actionTypes.SET_SEARCHED_SHOWS,
    shows: shows,
  };
};

export const setShowId = (id) => {
  return {
    type: actionTypes.SET_SHOW_ID,
    id: id,
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
      console.log(response);
      const show = new Show(response.data);
      dispatch(setSingleShow(show));
    });
    showService.getSeasons(id).then((response) => {
      console.log(response.data);
      const seasons = response.data.map((season) => new Season(season));
      dispatch(setSeasons(seasons));
    });
    showService.getCast(id).then((response) => {
      console.log(response.data);
      const cast = response.data.map((cast) => new Cast(cast));
      dispatch(setCast(cast))
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
