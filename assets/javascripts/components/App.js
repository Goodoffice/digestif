import React from 'react';
import JobList from './JobList';

export default class extends React.Component {
    constructor(props) {
        super(props);
        this.props.fetchJobs();
    }
    render() {
        console.log(this.props.jobs.toJS());
        return (
            <div>
                <h1>Hacker Jobs</h1>

                <JobList jobs={this.props.jobs} />
            </div>
        );
    }
}
