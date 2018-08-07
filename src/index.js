import React from 'react';
import ReactDOM from 'react-dom';
import './global.css';
import App from './App';
import {Provider} from 'react-redux'
import store from './data/store/store';
import registerServiceWorker from './registerServiceWorker';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {Router, Route, browserHistory, IndexRoute} from 'react-router';


import Calculator from './components/Calculator'
import Log from './components/Log'

const Root = () => (
  <MuiThemeProvider>
    <Provider store={store}>
      <Router history={browserHistory}>
        <Route path={`${process.env.PUBLIC_URL}/`} component={App}>
          <IndexRoute component={Calculator}/>
          <Route path={`${process.env.PUBLIC_URL}/log/`} component={Log}/>
        </Route>
      </Router>
    </Provider>
  </MuiThemeProvider>
)


ReactDOM.render(
  <Root/>,
  document.getElementById('root'));
registerServiceWorker();
