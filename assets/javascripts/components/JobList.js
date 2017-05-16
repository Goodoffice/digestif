import React from 'react';
import {List} from 'material-ui/List';
import CircularProgress from 'material-ui/CircularProgress';
import JobListItem from './JobListItem';

export default class extends React.Component {

    getTitle() {
      return "All Jobs";
    }

    render() {
        if (this.isLoading()) {
            return (<CircularProgress />);
        }
        else {
            return (
                <div className="job-list">
                  <h2>{this.getTitle()}</h2>
                  <List>
                      {this.renderItems()}
                  </List>
                </div>
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
