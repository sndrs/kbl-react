import alt from '../alt';
import ArtistActions from '../actions/artist';

class ArtistStore {

    constructor () {
        this.bindListeners({
            setArtist: ArtistActions.setArtist
        });

        this.artist = {};
    }

    setArtist (artist) {
        this.setState({
            artist: artist
        });
    }
}

export default alt.createStore(ArtistStore, 'ArtistStore');