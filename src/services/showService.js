import { baseURL } from '../shared/baseURL';

class ShowService{

    getInitShows(){
        return baseURL.get('shows')
    }
};

export const showService = new ShowService();