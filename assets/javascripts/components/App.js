import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';

import JobList from '../containers/JobList';
import AppDrawer from './AppDrawer';

import { Provider } from 'react-redux';
import { Map } from 'immutable';
import { createStore, compose, applyMiddleware } from 'redux';
import { ConnectedRouter as Router, connectRouter, routerMiddleware } from 'connected-react-router/immutable';
import { apiMiddleware } from 'redux-api-middleware';
import reducer from '../reducers/index';

import {
    Route,
    Link
} from 'react-router-dom';
import { createBrowserHistory } from 'history';


injectTapEventPlugin();

const history = createBrowserHistory();
const initialState = Map();

const store = createStore(
  connectRouter(history)(reducer),
  initialState,
  compose(
    applyMiddleware(
      routerMiddleware(history),
      apiMiddleware
    ),
  ),
);


class App extends React.Component {
    constructor(props) {
      super(props);
      this.props.fetchSources();
      this.props.fetchSavedSearches();
    }
    render() {
      return (
        <Router history={history}>
          <div>
              <AppDrawer {...this.props} />

              <Route path="/search/:query" component={JobList} />
              <Route path="/sources/:sourceId" component={JobList} />
              <Route exact path="/" component={JobList} />
          </div>
        </Router>
      );
    }
}

import { connect } from 'react-redux'

import fetchJobs from 'actions/fetchJobs';
import fetchSources from 'actions/fetchSources';
import fetchSavedSearches from 'actions/fetchSavedSearches';
import createSource from 'actions/createSource';
import createSavedSearch from 'actions/createSavedSearch';
import {
  openAddSavedSearchDialog,
  closeAddSavedSearchDialog
} from 'actions/ui';

export const mapStateToProps = (state, ownProps) => {
  return {
    sources: state.get('sources'),
    savedSearches: state.get('savedSearches'),
    jobs: state.get('jobs'),
    ui: state.get('ui')
  }
}

export const mapDispatchToProps = (dispatch, ownProps) => {
  return {
      fetchSources: () => dispatch(fetchSources()),
      fetchJobs: (params) => dispatch(fetchJobs(params)),
      fetchSavedSearches: (params) => dispatch(fetchSavedSearches(params)),
      createSource: (attributes) => dispatch(createSource(attributes)),
      createSavedSearch: (attributes) => dispatch(createSavedSearch(attributes)),
      openAddSavedSearchDialog: () => dispatch(openAddSavedSearchDialog()),
      closeAddSavedSearchDialog: () => dispatch(closeAddSavedSearchDialog())
  }
}

const ConnectedApp = connect(
  mapStateToProps,
  mapDispatchToProps
)(App)

const Wrapper = props => (
  <Provider store={store}>
    <MuiThemeProvider>
      <ConnectedApp />
    </MuiThemeProvider>
  </Provider>
);

export default Wrapper;
