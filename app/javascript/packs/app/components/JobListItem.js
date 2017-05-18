import React from 'react';
import moment from 'moment';
import Avatar from 'material-ui/Avatar';
import {ListItem} from 'material-ui/List';
import {capitalize} from 'lodash';
import Chip from 'material-ui/Chip';

import { blue500, red500, green500, purple500, yellow500, black, white } from 'material-ui/styles/colors';

const THEMES = [
    { backgroundColor: blue500, color: white },
    { backgroundColor: red500, color: white },
    { backgroundColor: green500, color: white },
    { backgroundColor: purple500, color: white },
    { backgroundColor: yellow500, color: black }
];

export default class extends React.Component {
    render() {
        return (
            <a style={{textDecoration: 'none'}} href={this.props.job.get('url')} target="_blank">
                <ListItem
                    leftAvatar={this.getAvatar()}
                    primaryText={this.props.job.get('title')}
                    secondaryText={this.getSecondaryText()} />
            </a>
        );
    }

    hasFavicon() {
        return !!this.props.job.get('favicon_url');
    }

    getAvatar() {
        const themeIndex = this.props.job.get('source_id') % THEMES.length;
        return (<Avatar {...THEMES[themeIndex]}>{this.getAvatarLetter()}</Avatar>);
    }

    getAvatarLetter() {
        return capitalize(this.props.job.get('source_name')[0]);
    }

    getSecondaryText() {
        return (
            moment(this.props.job.get('published_at')).fromNow() + " on " + this.props.job.get('source_name')
        );
    }
}
