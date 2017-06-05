import React from 'react';
import {List} from 'material-ui/List';
import CircularProgress from 'material-ui/CircularProgress';
import RaisedButton from 'material-ui/RaisedButton';
import JobListItem from './JobListItem';
import { capitalize } from 'lodash';

export default class extends React.Component {

  constructor(props) {
    super(props);
    this.fetchJobs(this.props.match.params.query, 1);

    this._handleViewMore = this.handleViewMore.bind(this);
  }

  getQuery() {
    return this.props.jobs.get('query') || this.props.match.params.query;
  }

  getTitle() {
    if (this.getQuery()) {
      return capitalize(this.getQuery()) + " Leads";
    }
    else if (this.isStarred()) {
      return "Starred";
    }

    return "All Jobs";
  }

  isStarred() {
    return this.props.match.path === '/starred';
  }

  componentWillReceiveProps(nextProps) {
    const query = this.props.match.params.query;
    const nextQuery = nextProps.match.params.query;
    if (query !== nextQuery) {
      this.fetchJobs(nextQuery, 1);
    }
  }

  fetchJobs(query, page) {
    const { match, jobs } = this.props;

    this.props.fetchJobs({
      starred: this.isStarred(),
      query: query,
      sourceId: match.params.sourceId,
      page: page
    });
  }

  renderProgress() {
    if (this.isLoading()) {
      return (
        <CircularProgress />
      );
    }
  }

  render() {
    return (
        <div className="job-list">
          <h2>{this.getTitle()}</h2>
          <List>
              {this.renderItems()}
          </List>

          {this.renderPaginator()}
        </div>
    );
  }

  isLoading() {
      return (this.props.jobs.get('loading'));
  }

  handleViewMore() {
    const { match, jobs } = this.props;
    this.fetchJobs(match.params.query, jobs.get('page') + 1);
  }

  renderPaginator() {
    return (
      <div className="JobList__Paginator">
        {this.renderProgress()}
        {this.renderViewMoreButton()}
      </div>
    );
  }

  renderViewMoreButton() {
    if (this.props.jobs.get('more')) {
        return <RaisedButton label="View More" onTouchTap={this._handleViewMore} />
    }
  }

  hasLoadedItems() {
    return this.props.jobs.get('results').toJS().length > 0
  }
  isEmpty() {
    return !this.props.jobs.get('loading');
  }

  renderItems() {
    if (this.hasLoadedItems()) {
      return this.props.jobs.get('results').map(entry => (
          <JobListItem
            markRead={this.props.markRead}
            toggleStar={this.props.toggleStar}
            key={entry.get('id')}
            job={entry} />
      ));
    }
    else if (this.isEmpty()) {
      return (
        <div className="JobList__Empty">
          No leads today, boss.
        </div>
      );
    }
  }
}
