import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { Router, Route, browserHistory } from 'react-router';
import thunk from 'redux-thunk';
import rootReducer from './reducers/index';
import App from './components/App';
import ConnectedItems from './containers/Items';
import ConnectedItemsNew from './containers/ItemsNew';
import ConnectedItemsShow from './containers/ItemsShow';
// import jquery from 'jquery';
import '../semantic/dist/semantic.css';

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(thunk),
)

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <Route path="/items" component={ConnectedItems} >
          <Route path="/items/new" component={ConnectedItemsNew} />
          <Route path="/items/:id" component={ConnectedItemsShow} />
        </Route>
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
);
