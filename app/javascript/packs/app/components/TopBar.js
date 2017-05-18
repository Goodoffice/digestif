import React, { Component } from 'react';
import AppDrawer from './AppDrawer';
import AppBar from 'material-ui/AppBar';
import ExitIcon from 'material-ui/svg-icons/action/exit-to-app';

class TopBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      drawerOpen: false
    };

    this._handleLeftIconButtonTouchTap = this.handleLeftIconButtonTouchTap.bind(this);
  }

  render() {
    return (
      <div>
        <AppBar />

        <AppDrawer open={true} {...this.props} />
      </div>
    );
  }

  handleLeftIconButtonTouchTap() {
    this.setState({ drawerOpen: !this.state.drawerOpen });
  }
}

export default TopBar;
