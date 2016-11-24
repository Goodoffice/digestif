import React from 'react';
import moment from 'moment';
import Avatar from 'material-ui/Avatar';
import {ListItem} from 'material-ui/List';

export default class extends React.Component {
    render() {
        return (
            <ListItem
                leftAvatar={<Avatar src={this.props.job.get('favicon_url')} />}
                primaryText={this.props.job.get('title')}
                secondaryText={moment(this.props.job.get('published_at')).fromNow()} />
        );
    }
}
