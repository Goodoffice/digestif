import React from 'react';
import moment from 'moment';
import Avatar from 'material-ui/Avatar';
import {ListItem} from 'material-ui/List';
import {capitalize} from 'lodash';

export default class extends React.Component {
    render() {
        return (
            <ListItem
                leftAvatar={this.getAvatar()}
                primaryText={this.props.job.get('title')}
                secondaryText={this.getSecondaryText()} />
        );
    }

    hasFavicon() {
        return !!this.props.job.get('favicon_url');
    }

    getAvatar() {
        if (this.hasFavicon()) {
            return (<Avatar backgroundColor='#ffffff' src={this.props.job.get('favicon_url')} />);
        }
        else {
            return (<Avatar backgroundColor='#ffffff' color='#000'>{this.getAvatarLetter()}</Avatar>);
        }
    }

    getAvatarLetter() {
        return capitalize(this.props.job.get('source_name')[0]);
    }

    getSecondaryText() {
        return moment(this.props.job.get('published_at')).fromNow() + " on " + this.props.job.get('source_name');
    }
}
