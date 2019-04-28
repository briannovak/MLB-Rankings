import React from 'react'
import{
  Text,
  View,
} from 'react-native'
import {connect} from 'react-redux'
import {Actions} from 'react-native-router-flux'
import{
  divisionChanged,
} from '../../actions'
import {divisionSelectionScreenStyle} from '../styles'
import Button from '../common/Button'
import{
  EAST,
  CENTRAL,
  WEST,
} from '../../utils/misc'

class DivisionSelection extends React.Component{
  navigateToRankingsScreen = (division)=>{
    //this function is allocated to each division button
    //it navigates to the rankings screen as well as sets the data for the division piece of application state
    let{
    divisionChanged,
  } = this.props
  divisionChanged(division)
  Actions.rankings()
  }
  render(){
    let{
      masterContainer,
    }= divisionSelectionScreenStyle
    let{
      league
    } = this.props
    return(
      <View style = {masterContainer}>
        <Button
        label = {`${league} ${EAST}`}
        onPress = {()=>this.navigateToRankingsScreen(EAST)}
        />
        <Button
        label = {`${league} ${CENTRAL}`}
        onPress = {()=>this.navigateToRankingsScreen(CENTRAL)}
        />
        <Button
        label = {`${league} ${WEST}`}
        onPress = {()=>this.navigateToRankingsScreen(WEST)}
        />
      </View>
    )
  }
}

const mapStateToProps = ({main})=>{
  let{
    league
  } = main
  return{
    league
  }
}

export default connect(mapStateToProps, {divisionChanged})(DivisionSelection)
