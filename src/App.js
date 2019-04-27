import React from 'react';
import {Provider} from 'react-redux'
import RouterComponent from './Router'



class App extends React.Component{
  render() {
    console.disableYellowBox = true;
    return (
      <RouterComponent/>
    );
  }
}


export default App
