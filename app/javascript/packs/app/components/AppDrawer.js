import React from 'react';

import { debounce, capitalize } from 'lodash';
import {
    Link
} from 'react-router-dom';

import Drawer from 'material-ui/Drawer';
import Paper from 'material-ui/Paper';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';

import RssFeedIcon from 'material-ui/svg-icons/communication/rss-feed';
import AddCircleOutlineIcon from 'material-ui/svg-icons/content/add-circle-outline';
import LanguageIcon from 'material-ui/svg-icons/action/language';
import SearchIcon from 'material-ui/svg-icons/action/search';

import AddSourceDialog from './AddSourceDialog';
import AddSavedSearchDialog from './AddSavedSearchDialog';

const LinkedMenuItem = props => (
  <MenuItem
    value={props.to}
    containerElement={<Link to={props.to} />}
    {...props}>
    {props.children}
  </MenuItem>
);

const selectedMenuItemStyle = {
  fontWeight: 'bold'
};

class AppDrawer extends React.Component {

  constructor(props) {
    super(props);

    this._onSearch = debounce(this.onSearch.bind(this), 500);
  }

  renderSavedSearches() {
    return this.props.savedSearches.get('results').map(savedSearch => {
      const pathname = "/search/" + savedSearch.get('query');

      return (
        <MenuItem
          value={pathname}
          containerElement={<Link to={pathname} />}
          {...this.props}>
          {capitalize(savedSearch.get('query'))} ({savedSearch.get('entry_count')})
        </MenuItem>
      );
    });
  }

  render() {
    return (
        <Drawer
          open={this.props.open}>
            <div className="brand">Hacker Leads</div>

            <TextField
              style={{ width: "100%", paddingLeft: '1em' }}
              onChange={this._onSearch}
              placeholder="Search" />

            <Menu
              selectedMenuItemStyle={selectedMenuItemStyle}
              value={this.props.router.get('location').get('pathname')}>

              <MenuItem
                value='/starred'
                containerElement={<Link to='/starred' />}
                {...this.props}>
                Starred
              </MenuItem>

              <MenuItem
                value='/'
                containerElement={<Link to='/' />}
                {...this.props}>
                All Jobs
              </MenuItem>

              {this.renderSavedSearches()}
            </Menu>

        </Drawer>
    );
  }

  onSearch(query) {
    this.props.fetchJobs({
      query: query,
      page: 1
    });
  }

  handleTouchTapSource(source) {
    return () => {
      this.props.fetchJobs({ source_id: source.get('id') })
    };
  }

}

export default AppDrawer;

