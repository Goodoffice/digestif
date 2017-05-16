import React from 'react';

import Drawer from 'material-ui/Drawer';
import Paper from 'material-ui/Paper';
import MenuItem from 'material-ui/MenuItem';

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
  }

  renderSources() {
    return this.props.sources.get('results').map(source => (
        <MenuItem
          leftIcon={<RssFeedIcon />}
          onTouchTap={::this.handleTouchTapSource(source)}
          key={source.get('url')}>{source.get('name')}</MenuItem>
    ));
  }

  renderSavedSearches() {
    return this.props.savedSearches.get('results').map(savedSearch => (
        <MenuItem
          leftIcon={<SearchIcon />}>
          {savedSearch.get('query')}
        </MenuItem>
    ));
  }

  render() {
    return (
        <Drawer open={true} width={400}>
            <Paper>
              <MenuItem
                leftIcon={<LanguageIcon />}>
                All Jobs
              </MenuItem>
            </Paper>

            <Paper>
                <MenuItem
                  onClick={::this.props.openAddSavedSearchDialog}
                  leftIcon={<AddCircleOutlineIcon />}>
                  Add Saved Search
                </MenuItem>

                {this.renderSavedSearches()}
            </Paper>

            <Paper>
                <MenuItem
                  onClick={::this.openAddSourceDialog}
                  leftIcon={<AddCircleOutlineIcon />}>
                  Add Source
                </MenuItem>

                {this.renderSources()}
            </Paper>

            <AddSourceDialog
              onClose={::this.closeAddSourceDialog}
              createSource={this.props.createSource}
              open={this.state.addSourceDialogOpen} />

            <AddSavedSearchDialog
              onClose={::this.props.closeAddSavedSearchDialog}
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

