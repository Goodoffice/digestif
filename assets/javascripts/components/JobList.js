import React from 'react';
import {List} from 'material-ui/List';
import CircularProgress from 'material-ui/CircularProgress';
import JobListItem from './JobListItem';

export default class extends React.Component {

  constructor(props) {
    super(props);

    this.props.fetchJobs({
      query: props.match.params.query
    });
  }

  getTitle() {
    if (this.props.match.params.query) {
      return this.props.match.params.query;
    }

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
