import { showService } from "../services/showService";
import * as actionTypes from "./actionTypes";
import { Show } from "../entities/show";
import { Season } from "../entities/season";
import { Cast } from "../entities/cast";
import { Crew } from "../entities/crew";
import { Image } from "../entities/image";

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

export const setCrew = (crew) => {
  return {
    type: actionTypes.SET_CREW,
    crew: crew,
  };
};

export const setImages = (image) => {
  return {
    type: actionTypes.SET_IMAGES,
    images: image
  }
}

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
      const show = new Show(response.data);
      dispatch(setSingleShow(show));
    });
    showService.getSeasons(id).then((response) => {
      const seasons = response.data.map((season) => new Season(season));
      dispatch(setSeasons(seasons));
    });
    showService.getCast(id).then((response) => {
      const cast = response.data.map((cast) => new Cast(cast));
      dispatch(setCast(cast));
    });
    showService.getCrew(id).then(response => {
      const crew = response.data.map(crew => new Crew(crew));
      dispatch(setCrew(crew));
    });
    showService.getShowImages(id).then(response => {
      const images = response.data.map(image => new Image(image));
      dispatch(setImages(images));
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
