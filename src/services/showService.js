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
    return baseURL.get(`shows/${id}/seasons`);
  }

  getCast(id) {
    return baseURL.get(`shows/${id}/cast`)
  }
}

export const showService = new ShowService();
