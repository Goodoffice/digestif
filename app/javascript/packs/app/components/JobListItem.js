import React from 'react';
import moment from 'moment';
import Avatar from 'material-ui/Avatar';
import {ListItem} from 'material-ui/List';
import {capitalize} from 'lodash';
import Chip from 'material-ui/Chip';

import StarIconButton from './StarIconButton';

import { blue500, red500, green500, purple500, yellow500, black, white } from 'material-ui/styles/colors';

const THEMES = [
    { backgroundColor: '#ed5900', color: white },
    { backgroundColor: '#EB0000', color: white },
    { backgroundColor: '#c8ed00', color: black },
    { backgroundColor: '#00EB71', color: black },
    { backgroundColor: '#2adcec', color: black },
    { backgroundColor: '#d800ee', color: white},
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
            rightIconButton={<StarIconButton checked={this.props.job.get('starred')} onChange={this._star}/>}
            primaryText={this.getPrimaryText()}
            secondaryText={this.getSecondaryText()} />
      );
  }

  hasFavicon() {
      return !!this.props.job.get('favicon_url');
  }

  getPrimaryText() {
    const text = this.props.job.get('title');
    return <div style={{fontWeight: this.props.job.get('unread') ? 'bold' : 'normal'}}>{text}</div>;
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
