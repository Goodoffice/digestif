import React from 'react';

import {
    Link
} from 'react-router-dom';

import Drawer from 'material-ui/Drawer';
import Paper from 'material-ui/Paper';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import FlatButton from 'material-ui/FlatButton';

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

class AppDrawer extends React.Component {

  constructor(props) {
    super(props);
  }

  renderSources() {
    return this.props.sources.get('results').map(source => {
      const pathname = "/sources/" + source.get('id');

      return(
        <LinkedMenuItem
          to={pathname}
          key={source.get('url')}>
          {source.get('name')}
        </LinkedMenuItem>
      );
    });
  }

  renderSavedSearches() {
    return this.props.savedSearches.get('results').map(savedSearch => {
      const pathname = "/search/" + savedSearch.get('query');

      return (
        <LinkedMenuItem
          style={{fontWeight: savedSearch.get('unread_count') ? 'bold' : 'normal'}}
          to={pathname}
          key={savedSearch.get('query')}>
          #{savedSearch.get('query')} ({savedSearch.get('unread_count')})
        </LinkedMenuItem>
      );
    });
  }

  render() {
    return (
        <Drawer
          open={this.props.open}>
            <h1>Hacker Jobs</h1>

            <Menu
              selectedMenuItemStyle={ {backgroundColor: '#c00', color: '#FFFFFF'} }
              value={this.props.router.get('location').get('pathname')}>

              <LinkedMenuItem
                to="/">
                All Jobs
              </LinkedMenuItem>

              {this.renderSavedSearches()}
            </Menu>

        </Drawer>
    );
  }

  handleTouchTapSource(source) {
    return () => {
      this.props.fetchJobs({ source_id: source.get('id') })
    };
  }

}

export default AppDrawer;

