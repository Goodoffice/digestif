var Router = ReactRouter.Router,
Route      = ReactRouter.Route,
IndexRoute = ReactRouter.IndexRoute;

ReactDOM.render((
  <Router history={ReactRouter.hashHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={App} />
    </Route>
  </Router>
), document.getElementById('app'));

