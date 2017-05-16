import React from 'react';

import Drawer from 'material-ui/Drawer';
import Paper from 'material-ui/Paper';
import MenuItem from 'material-ui/MenuItem';

import RssFeedIcon from 'material-ui/svg-icons/communication/rss-feed';
import AddCircleOutlineIcon from 'material-ui/svg-icons/content/add-circle-outline';
import LanguageIcon from 'material-ui/svg-icons/action/language';

import AddSourceDialog from './AddSourceDialog';

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
          key={source.url}>{source.get('name')}</MenuItem>
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

        </Drawer>
    );
  }

  openAddSourceDialog() {
    this.setState({ addSourceDialogOpen: true });
  }

  closeAddSourceDialog() {
    this.setState({ addSourceDialogOpen: false });
  }
}

export default AppDrawer;

