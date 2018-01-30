import React from 'react';
import ReactDOM from 'react-dom';
import './global.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';



import Calculator from './components/Calculator'
import Log from './components/Log'

const Root = () => (
    <MuiThemeProvider>
    <Router history={browserHistory}>
      <Route path={`${process.env.PUBLIC_URL}/`} component={App}>
        <IndexRoute component={Calculator} />
        <Route path={`${process.env.PUBLIC_URL}/log`} component={Log} />
      </Route>
    </Router>
  </MuiThemeProvider>
)


ReactDOM.render(
  <Root />,
  document.getElementById('root'));
registerServiceWorker();
