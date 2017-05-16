import React, { Component } from 'react';

import Dialog from 'material-ui/Dialog';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';

class AddSavedSearchDialog extends Component {

  render() {
    const actions = [
      <FlatButton
        label="Cancel"
        primary={true}
        onTouchTap={this.props.onClose}
      />,
      <FlatButton
        label="Create Saved Search"
        primary={true}
        keyboardFocused={true}
        onTouchTap={::this.handleSubmit}
        />,
      ];

    return (
      <Dialog
        title="Add Saved Search"
        actions={actions}
        open={this.props.open}>

        <TextField
          onChange={::this.handleQueryChange}
          placeholder="Enter Query" />

      </Dialog>
    );
  }

  handleQueryChange(event, query) {
    this.setState({ query });
  }

  handleSubmit() {
    this.props.createSavedSearch({
      query: this.state.query
    });
  }

}

export default AddSavedSearchDialog;

