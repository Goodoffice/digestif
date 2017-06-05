import React, { Component }from 'react';
import CircularProgress from 'material-ui/CircularProgress';
import RaisedButton from 'material-ui/RaisedButton';

class JobListPaginator extends Component {
  constructor(props) {
    super(props);
    this._handleViewMore = this.handleViewMore.bind(this);
  }

  isLoading() {
    return (this.props.jobs.get('loading'));
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

  handleViewMore() {
    const { query, jobs } = this.props;
    this.props.fetchJobs(query, jobs.get('page') + 1);
  }
}

export default JobListPaginator;
