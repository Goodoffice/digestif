import React from 'react';
import {List} from 'material-ui/List';
import CircularProgress from 'material-ui/CircularProgress';
import JobListItem from './JobListItem';

export default class extends React.Component {
    render() {
        if (this.isLoading()) {
            return (<CircularProgress />);
        }
        else {
            return (
                <List>
                    {this.renderItems()}
                </List>
            );
        }
    }

    isLoading() {
        return (this.props.jobs.get('loading'));
    }

    renderItems() {
        return this.props.jobs.get('results').map(entry => (
            <JobListItem
                key={entry.get('id')}
                job={entry} />
        ));
    }
}
