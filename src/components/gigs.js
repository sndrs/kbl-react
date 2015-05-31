import React from 'react';
import map from 'lodash/collection/map';

import GigsStore from '../stores/gigs';

export default class Gigs extends React.Component {

    constructor (props) {
        super(props);

        this.state = GigsStore.getState().gigs;
    }

    componentDidMount () {
        GigsStore.listen(() => {
            this.setState(GigsStore.getState().gigs);
        })
    }

    render () {
        console.log(this.state, 'gigs.render');

        if (this.state !== null) {
            return (
                <table className="Gigs">
                    <thead>
                        <tr>
                            <th>Date</th>
                            <th>Gig</th>
                        </tr>
                    </thead>
                    <tbody>
                    {
                        map(this.state.results.event.reverse(), (event, i) =>
                            <tr key={i}>
                                <td style={{whiteSpace: "nowrap"}}>{event.start.date}</td>
                                <td>{event.displayName}</td>
                            </tr>
                        )
                    }
                    </tbody>
                </table>
            )
        } else {
            return false;
        }
    }
}