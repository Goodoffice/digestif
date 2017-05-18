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

    this.state = {
      addSourceDialogOpen: false
    };

    this._openAddSavedSearchDialog = this.props.openAddSavedSearchDialog.bind(this);
    this._openAddSourceDialog = this.openAddSourceDialog.bind(this);

    this._closeAddSourceDialog = this.closeAddSourceDialog.bind(this);
    this._closeAddSavedSearchDialog = this.props.closeAddSavedSearchDialog.bind(this);
  }

  renderSources() {
    return this.props.sources.get('results').map(source => {
      const pathname = "/sources/" + source.get('id');

      return(
        <LinkedMenuItem
          to={pathname}
          leftIcon={<RssFeedIcon />}
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
          to={pathname}
          key={savedSearch.get('query')}
          leftIcon={<SearchIcon />}>
          #{savedSearch.get('query')}
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
                to="/"
                leftIcon={<LanguageIcon />}>
                All Jobs
              </LinkedMenuItem>

              {this.renderSavedSearches()}

              <div style={{padding: '0.5em 0'}}>
                <FlatButton
                  onClick={this._openAddSavedSearchDialog}
                  label="Add Saved Search"
                  icon={<AddCircleOutlineIcon />} />
              </div>

              {this.renderSources()}
              <div style={{padding: '0.5em 0'}}>
                <FlatButton
                  onClick={this._openAddSourceDialog}
                  label="Add Source"
                  icon={<AddCircleOutlineIcon />}/>
              </div>

            </Menu>

            <AddSourceDialog
              onClose={this._closeAddSourceDialog}
              createSource={this.props.createSource}
              open={this.state.addSourceDialogOpen} />

            <AddSavedSearchDialog
              onClose={this._closeAddSavedSearchDialog}
              createSavedSearch={this.props.createSavedSearch}
              open={this.props.ui.get('addSavedSearchDialogOpen')} />

        </Drawer>
    );
  }

  handleTouchTapSource(source) {
    return () => {
      this.props.fetchJobs({ source_id: source.get('id') })
    };
  }

  openAddSourceDialog() {
    this.setState({ addSourceDialogOpen: true });
  }

  closeAddSourceDialog() {
    this.setState({ addSourceDialogOpen: false });
  }

}

export default AppDrawer;

