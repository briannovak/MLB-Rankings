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
                      title = "MLB"
                      />
                      <Scene
                      key = "divisionselection"
                      component={DivisionSelection}
                      title = "Select Division"
                      />
                      <Scene
                      key = "rankings"
                      component={Rankings}
                      title = "Rankings"
                      />
                    </Scene>
                </Scene>
            </Router>
        )
    }
}

export default RouterComponent
