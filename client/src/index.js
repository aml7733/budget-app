import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, browserHistory } from 'react-router';
import App from './components/App';
import { createStore } from 'redux';
import manageItems from './reducers/manageItems';

const store = createStore(manageItems, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <Route path="/items" component={ItemsPage}>
          <Route path="/items/new" component={ItemsNew} />
          <Route path="/items/:id" component={ItemsShow} />
        </Route>
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
);
