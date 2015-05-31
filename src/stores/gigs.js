import bindAll from 'lodash/function/bindAll';

import Songkick from 'lib/songkick-api';

import alt from '../alt';
import ArtistStore from './artist';

class GigsStore {

    constructor () {
        bindAll(this, 'getGigs');

        this.gigs = null;
        this.artistId = ArtistStore.getState().artist.id;

        ArtistStore.listen(this.getGigs);
    }

    setGigs (gigs) {
        this.setState({
            gigs: gigs
        });
    }

    getGigs (data) {
        if (this.artistId === data.artist.id) {
            return;
        }

        this.artistId = data.artist.id;
        Songkick.gigs(this.artistId)
            .then((json) => {
                console.log(json, 'got json');
                this.setGigs(json);
            }).catch(function(ex) {
                console.error('parsing failed', ex)
            });
    }
}

export default alt.createStore(GigsStore, 'GigsStore');