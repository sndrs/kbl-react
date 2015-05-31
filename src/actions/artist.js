import alt from '../alt';

class ArtistActions {

    setArtist (artist) {
        this.dispatch(artist);
    }

}

export default alt.createActions(ArtistActions);