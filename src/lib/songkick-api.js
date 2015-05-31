import {key} from '../src/consts';

export default {
    gigs: (id, page = 1) => fetch(`http://api.songkick.com/api/3.0/artists/${id}/gigography.json?apikey=${key}&page=${page}`)
        .then(function(response) {
            return response.json();
        })
        .then(function(json) {
            return json.resultsPage
        }),
    artists: (query, page = 1) => fetch(`http://api.songkick.com/api/3.0/search/artists.json?query=${query}&apikey=${key}&page=${page}`)
        .then(function(response) {
            return response.json();
        })
        .then(function(json) {
            return json.resultsPage
        })
}