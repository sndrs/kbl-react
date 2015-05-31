import Flux from 'flux';

export default class ArtistDispatcher extends Flux.Dispatcher {

    setArtist (artist) {
        this.dispatch(artist);
    }

}