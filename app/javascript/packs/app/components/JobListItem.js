import React from 'react';
import moment from 'moment';
import Avatar from 'material-ui/Avatar';
import {ListItem} from 'material-ui/List';
import {capitalize} from 'lodash';
import Chip from 'material-ui/Chip';

import StarIconButton from './StarIconButton';

import { blue500, red500, green500, purple500, yellow500, black, white } from 'material-ui/styles/colors';

const THEMES = [
    { backgroundColor: blue500, color: white },
    { backgroundColor: red500, color: white },
    { backgroundColor: green500, color: white },
    { backgroundColor: purple500, color: white },
    { backgroundColor: yellow500, color: black }
];


export default class extends React.Component {

  constructor(props) {
    super(props);
    this._read = this.read.bind(this);
    this._star = this.star.bind(this);
  }

  read() {
    this.props.markRead(this.props.job);
    window.open(this.props.job.get('url'));
  }

  star(event) {
    event.stopPropagation();
    this.props.toggleStar(this.props.job);
  }

  render() {
      return (
          <ListItem
            onTouchTap={this._read}
            style={{color: 'black'}}
            leftAvatar={this.getAvatar()}
            primaryText={this.getPrimaryText()}
            secondaryText={this.getSecondaryText()} />
      );
  }
            /*rightIconButton={<StarIconButton checked={this.props.job.get('starred')} onChange={this._star}/>}*/

  hasFavicon() {
      return !!this.props.job.get('favicon_url');
  }

  getPrimaryText() {
    const text = this.props.job.get('title');
    return <div className={this.props.job.get('unread') ? 'unread' : ''}>{text}</div>;
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
          <div style={{color: 'black'}}>
            {moment(this.props.job.get('published_at')).fromNow() + " on " + this.props.job.get('source_name')}
          </div>
      );
  }
}
