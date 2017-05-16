import React from 'react';
import JobList from './JobList';
import AppDrawer from './AppDrawer';

export default class extends React.Component {
    constructor(props) {
        super(props);
        this.props.fetchSources();
        this.props.fetchJobs();
        this.props.fetchSavedSearches();
    }
    render() {
        return (
            <div>
                <AppDrawer {...this.props} />
                <JobList jobs={this.props.jobs} />
            </div>
        );
    }
}
