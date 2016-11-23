import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
import Component from 'containers/App';
import { Provider } from 'react-redux';

import createStore from 'createStore';

injectTapEventPlugin();
const store = createStore();


const App = () => (
    <Provider store={store}>
        <MuiThemeProvider>
            <Component />
        </MuiThemeProvider>
    </Provider>
);

ReactDOM.render(
    <App />,
    document.getElementById('app')
);

