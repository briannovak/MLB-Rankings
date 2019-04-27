import React from 'react';
import {Provider} from 'react-redux'
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import RouterComponent from './Router'
import reducers from './reducers';


class App extends React.Component{
  render() {
    console.disableYellowBox = true;
    const store = createStore(reducers, {} , applyMiddleware(ReduxThunk));
    return (
      <Provider store = {store}>
        <RouterComponent/>
      </Provider>

    );
  }
}


export default App
