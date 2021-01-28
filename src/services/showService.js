import { baseURL } from '../shared/baseURL';

class ShowService{

    getInitShows(){
        return baseURL.get('shows')
    }

    getSingleShow(id){
        return baseURL.get(`shows/${id}`)
    }
};

export const showService = new ShowService();