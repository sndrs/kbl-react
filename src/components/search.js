import React from 'react';
import map from 'lodash/collection/map';
import bindAll from 'lodash/function/bindAll';

import Songkick from 'lib/songkick-api';

import ArtistActions from '../actions/artist';
import ArtistStore from '../stores/artist';
import ArtistDispatcher from '../dispatchers/artist';

class Results extends React.Component {

    constructor (props) {
        super(props);

        this.state = {
            results: []
        };
    }

    componentWillReceiveProps (nextProps) {
        if (nextProps.searchTerm.length) {
            Songkick.artists(nextProps.searchTerm)
                .then((json) => {
                    this.setState({
                        results: json.results.artist
                    });
                }).catch(function(ex) {
                    console.log('parsing failed', ex)
                })
        }
    }

    setArtist (artist) {
        ArtistActions.setArtist(artist);
        console.log(ArtistDispatcher);
        // ArtistDispatcher.setArtist(artist);
    }

    render () {
        return (
            <ul className="Search-results"> {
                map(this.state.results, (artist, i) =>
                    <li key={i} onClick={this.setArtist.bind(this, artist)}>{artist.displayName}</li>
                )
            } </ul>
        )
    }
}

export default class Search extends React.Component {

    constructor (props) {
        super(props);

        bindAll(this, 'updateValue');

        this.state = {
            searchTerm: ''
        };
    }

    componentDidMount () {
        ArtistStore.listen(() => {
            this.setState({
                searchTerm: ArtistStore.getState().artist.displayName
            });
        })
    }

    updateValue () {
        this.setState({
            searchTerm: event.target.value
        });
    }

    render () {
        return (
            <div className="Search">
                <input
                    type='text'
                    value={this.state.searchTerm}
                    placeholder='Search'
                    hasFeedback
                    onChange={this.updateValue}
                />
                <Results searchTerm={this.state.searchTerm} setArtist={this.props.setArtist} />
            </div>
        )
    }
}