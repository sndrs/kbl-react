import React from 'react';
import domReady from 'domready';

import Search from './components/search';
import Gigs from './components/gigs';

class App extends React.Component {

    render () {
        return (
            <div>
                <Search />
                <Gigs />
            </div>
        )
    }

};

domReady(function () {
    React.render(<App />, document.getElementById('content'));
});
