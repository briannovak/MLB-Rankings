import React from 'react'
import {Scene, Router} from 'react-native-router-flux'
import Landing from './components/screens/Landing'
import Rankings from './components/screens/Rankings'
import DivisionSelection from './components/screens/DivisionSelection'


class RouterComponent extends React.Component{
    render(){
        return(
            <Router>
                <Scene key ="root" hideNavBar>
                  <Scene key = "main">
                      <Scene
                      key = "landing"
                      component={Landing}
                      hideNavBar={true}
                      />
                      <Scene
                      key = "divisionselection"
                      component={DivisionSelection}
                      hideNavBar={true}
                      />
                      <Scene
                      key = "rankings"
                      component={Rankings}
                      hideNavBar={true}
                      />
                    </Scene>
                </Scene>
            </Router>
        )
    }
}

export default RouterComponent
