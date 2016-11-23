import React from 'react';
import {List, ListItem} from 'material-ui/List';
import Avatar from 'material-ui/Avatar';
import CircularProgress from 'material-ui/CircularProgress';
import moment from 'moment';

export default class extends React.Component {
    render() {
        if (this.isLoading()) {
            return (<CircularProgress />);
        }
        else {
            return (
                <List>
                    {this.renderItems()}
                </List>
            );
        }
    }

    isLoading() {
        return (this.props.jobs.get('loading'));
    }

    renderItems() {
        return this.props.jobs.get('results').map(entry => (
            <ListItem
                leftAvatar={<Avatar src={entry.get('favicon_url')} />}
                key={entry.get('guid')}
                primaryText={entry.get('title')}
                secondaryText={moment(entry.get('published_at')).fromNow()} />
        ));
    }
}
