import React from 'react';
import {List} from 'material-ui/List';
import CircularProgress from 'material-ui/CircularProgress';
import JobListItem from './JobListItem';

export default class extends React.Component {

  constructor(props) {
    super(props);

    this.props.fetchJobs({
      query: props.match.params.query,
      sourceId: props.match.params.sourceId
    });
  }

  getTitle() {
    if (this.props.match.params.query) {
      return '#' + this.props.match.params.query;
    }

    return "All Jobs";
  }

  componentWillReceiveProps(nextProps) {
    const query = this.props.match.params.query;
    const nextQuery = nextProps.match.params.query;
    if (query !== nextQuery) {
      this.props.fetchJobs({
        query: nextQuery,
        sourceId: this.props.match.params.sourceId
      });

      return
    }

    const sourceId = this.props.match.params.sourceId;
    const nextSourceId = nextProps.match.params.sourceId;
    if (query !== nextQuery) {
      this.props.fetchJobs({
        query: this.props.match.params.query,
        sourceId: nextSourceId
      });
    }
  }

  render() {
      if (this.isLoading()) {
          return (
            <div className="job-list job-list--loading">
              <CircularProgress />
            </div>
          );
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
            markRead={this.props.markRead}
            key={entry.get('id')}
            job={entry} />
      ));
  }
}
