import React, { Component } from 'react';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';

class UserMenu extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log(this.props.signOut);
    return (
      <IconMenu
        anchorOrigin={{horizontal: 'right', vertical: 'top'}}
        targetOrigin={{horizontal: 'right', vertical: 'top'}}
        iconButtonElement={<IconButton><MoreVertIcon /></IconButton>}>
        <MenuItem
          onTouchTap={this.props.signOut}
          primaryText="Sign Out" />
      </IconMenu>
    );
  }

}

export default UserMenu;
