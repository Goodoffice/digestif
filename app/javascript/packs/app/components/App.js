import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';


import JobList from '../containers/JobList';
import AppDrawer from './AppDrawer';

import { Provider } from 'react-redux';
import { Map } from 'immutable';
import { createStore, compose, applyMiddleware } from 'redux';
import { ConnectedRouter as Router, connectRouter, routerMiddleware } from 'connected-react-router/immutable';
import { withRouter } from 'react-router-dom';
import { apiMiddleware } from '@aftonbladet/redux-api-middleware';
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

              <Route path="/starred" component={JobList} />
              <Route path="/search/:query" component={JobList} />
              <Route path="/sources/:sourceId" component={JobList} />
              <Route exact path="/" component={JobList} />
          </div>
        </Router>
      );
    }
}

import { connect } from 'react-redux'

import fetchJobs from '../actions/fetchJobs';
import fetchSources from '../actions/fetchSources';
import fetchSavedSearches from '../actions/fetchSavedSearches';
import createSource from '../actions/createSource';
import createSavedSearch from '../actions/createSavedSearch';
import {
  openAddSavedSearchDialog,
  closeAddSavedSearchDialog
} from '../actions/ui';

export const mapStateToProps = (state, ownProps) => {
  return {
    sources: state.get('sources'),
    savedSearches: state.get('savedSearches'),
    jobs: state.get('jobs'),
    ui: state.get('ui'),
    router: state.get('router')
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

import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

const muiTheme = getMuiTheme({
  palette: {
    primary1Color: '#0029EB',
    accent1Color: '#eb0000'
  }
});

const Wrapper = props => (
  <Provider store={store}>
    <MuiThemeProvider muiTheme={muiTheme}>
      <ConnectedApp />
    </MuiThemeProvider>
  </Provider>
);

export default Wrapper;
