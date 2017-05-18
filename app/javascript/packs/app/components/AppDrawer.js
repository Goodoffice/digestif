import React from 'react';

import {
    Link
} from 'react-router-dom';

import Drawer from 'material-ui/Drawer';
import Paper from 'material-ui/Paper';
import MenuItem from 'material-ui/MenuItem';
import FlatButton from 'material-ui/FlatButton';

import RssFeedIcon from 'material-ui/svg-icons/communication/rss-feed';
import AddCircleOutlineIcon from 'material-ui/svg-icons/content/add-circle-outline';
import LanguageIcon from 'material-ui/svg-icons/action/language';
import SearchIcon from 'material-ui/svg-icons/action/search';

import AddSourceDialog from './AddSourceDialog';
import AddSavedSearchDialog from './AddSavedSearchDialog';

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
    return this.props.sources.get('results').map(source => (
        <MenuItem
          leftIcon={<RssFeedIcon />}
          containerElement={<Link activeClassName="active" to={"/sources/" + source.get('id')} />}
          key={source.get('url')}>{source.get('name')}</MenuItem>
    ));
  }

  renderSavedSearches() {
    return this.props.savedSearches.get('results').map(savedSearch => (
        <MenuItem
          containerElement={<Link activeClassName="active" to={"/search/" + savedSearch.get('query')} />}
          leftIcon={<SearchIcon />}>
          #{savedSearch.get('query')}
        </MenuItem>
    ));
  }

  render() {
    return (
        <Drawer
          openSecondary={true}
          open={true}
          width={400}>
            <Paper>
              <MenuItem
                containerElement={<Link to="/" />}
                leftIcon={<LanguageIcon />}>
                All Jobs
              </MenuItem>
            </Paper>

            <Paper>
              {this.renderSavedSearches()}

              <div style={{padding: '0.5em 0'}}>
                <FlatButton
                  onClick={this._openAddSavedSearchDialog}
                  label="Add Saved Search"
                  icon={<AddCircleOutlineIcon />} />
              </div>

            </Paper>

            <Paper>
              {this.renderSources()}
              <div style={{padding: '0.5em 0'}}>
                <FlatButton
                  onClick={this._openAddSourceDialog}
                  label="Add Source"
                  icon={<AddCircleOutlineIcon />}/>
              </div>

            </Paper>

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

