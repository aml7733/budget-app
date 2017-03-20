import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import { Router, Route, browserHistory } from 'react-router';
import thunk from 'redux-thunk';
import rootReducer from './reducers/index';
import App from './components/App';
import ItemsContainer from './containers/ItemsContainer';
import ItemNewContainer from './containers/ItemNewContainer';
import ItemShow from './containers/ItemShow';



const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  )
)

// const store = createStore(rootReducer, applyMiddleware(thunk))

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <Route path="/items" component={ItemsContainer} >
          <Route path="/items/new" component={ItemNewContainer} />
          <Route path="/items/:id" component={ItemShow} />
        </Route>
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
);
