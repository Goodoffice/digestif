import React from 'react';
import JobList from './JobList';
import AppDrawer from './AppDrawer';

export default class extends React.Component {
    constructor(props) {
        super(props);
        this.props.fetchSources();
        this.props.fetchJobs();
    }
    render() {
        return (
            <div>
                <AppDrawer
                  openAddSourceDialog={this.props.openAddSourceDialog}
                  createSource={this.props.createSource}
                  sources={this.props.sources} />
                <JobList jobs={this.props.jobs} />
            </div>
        );
    }
}
