import React from 'react';

import { debounce, capitalize } from 'lodash';
import {
    Link
} from 'react-router-dom';

import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

import RssFeedIcon from 'material-ui/svg-icons/communication/rss-feed';
import AddCircleOutlineIcon from 'material-ui/svg-icons/content/add-circle-outline';
import LanguageIcon from 'material-ui/svg-icons/action/language';
import SearchIcon from 'material-ui/svg-icons/action/search';

import AddSourceDialog from './AddSourceDialog';
import AddSavedSearchDialog from './AddSavedSearchDialog';

class Header extends React.Component {

  constructor(props) {
    super(props);

    this._onSearch = debounce(this.onSearch.bind(this), 500);
  }

  renderSavedSearches() {
    return this.props.savedSearches.get('results').map(savedSearch => {
      const pathname = "/search/" + savedSearch.get('query');

      return (
        <RaisedButton
          style={{marginBottom: '0.5em', marginRight: '0.5em'}}
          value={pathname}
          containerElement={<Link to={pathname} />}
          label={`${capitalize(savedSearch.get('query'))} (${savedSearch.get('entry_count')})`}
          {...this.props} />
      );
    });
  }

  render() {
    return (
        <div className="Header">
            <h1>HackerLeads</h1>

            <TextField
              style={{ width: "100%", fontSize: '1.5em' }}
              onChange={this._onSearch}
              placeholder="Search 30+ sites for tech job leads" />

            <div className="Header__SavedSearches">
              {this.renderSavedSearches()}
            </div>
        </div>
    );
  }

  onSearch(event, query) {
    this.props.onSearch(query);
  }

  handleTouchTapSource(source) {
    return () => {
      this.props.fetchJobs({ source_id: source.get('id') })
    };
  }

}

export default Header;

