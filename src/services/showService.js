import { baseURL } from "../shared/baseURL";

class ShowService {
  getInitShows() {
    return baseURL.get("shows");
  }

  getSingleShow(id) {
    return baseURL.get(`shows/${id}`);
  }

  getSearchedShows(query) {
    return baseURL.get(`search/shows?q=${query}`);
  }

  getSeasons(id) {
    return baseURL.get(`http://api.tvmaze.com/shows/${id}/seasons`);
  }
}

export const showService = new ShowService();
