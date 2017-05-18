import React, { Component } from 'react';

import Dialog from 'material-ui/Dialog';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';

class AddSourceDialog extends Component {

  constructor(props) {
    super(props);

    this._handleURLChange = this.handleURLChange.bind(this);
    this._handleNameChange = this.handleNameChange.bind(this);
    this._handleSubmit = this.handleSubmit.bind(this);
  }

  render() {
    const actions = [
      <FlatButton
        label="Cancel"
        primary={true}
        onTouchTap={this.props.onClose}
      />,
      <FlatButton
        label="Create Source"
        primary={true}
        keyboardFocused={true}
        onTouchTap={this._handleSubmit}
        />,
      ];

    return (
      <Dialog
        title="Add Source"
        actions={actions}
        open={this.props.open}>

        <TextField
          onChange={this._handleURLChange}
          placeholder="Enter URL" />

        <TextField
          onChange={this._handleNameChange}
          placeholder="Enter Source Name (optional)" />

      </Dialog>
    );
  }

  handleURLChange(event, url) {
    this.setState({ url });
  }
  handleNameChange(event, name) {
    this.setState({ name });
  }

  handleSubmit() {
    this.props.createSource({
      name: this.state.name,
      url: this.state.url
    });

    this.props.onClose();
  }

}

export default AddSourceDialog;

