import React from 'react'
import{
  Text,
  View,
  ActivityIndicator
} from 'react-native'
import {connect} from 'react-redux'
import {Actions} from 'react-native-router-flux'
import{
  rankingsRequest,
  leagueChanged
} from '../../actions'
import {landingScreenStyle} from '../styles'
import WelcomeText from '../WelcomeText'
import Button from '../common/Button'
import{NL,AL} from '../../utils/misc'

class Landing extends React.Component{
  componentDidMount = ()=>{
    let{
      rankingsRequest
    } = this.props
    rankingsRequest()
  }

  navigateToDivisionScreen = (league)=>{
    //this function is allocated to each league button
    //it navigates to the division selection screen as well as sets the data for the league piece of application state
    let{
      leagueChanged
    } = this.props
    leagueChanged(league)
    Actions.divisionselection()
  }

  buttonsReturner = ()=>{
    //this function either returns an activity indicator if loading or returns a pair of buttons with appropriate props
    let{
      loading,
      error
    } = this.props

    return(
        loading?
          <ActivityIndicator size="large" color="#0000ff" />
          :
          <View>
            <Button
              label = {`${AL} Division Selection`}
              onPress = {()=>this.navigateToDivisionScreen(AL)}
              />
            <Button
              label = {`${NL} Division Selection`}
              onPress = {()=>this.navigateToDivisionScreen(NL)}
              />
          </View>
      )
  }
  render(){
    //the ternary in the render either returns an error encountered in the data grab or returns the eventual outcome of the button return function
    let{
      loading,
      error
    } = this.props
    let{
      masterContainer,
      errorText
    } = landingScreenStyle
    return(
      <View style = {masterContainer}>
        <WelcomeText/>
        {error?
          <Text style ={errorText}>{error}</Text>
          :
          this.buttonsReturner()
        }
      </View>
    )
  }
}

const mapStateToProps = ({main})=>{
  let{
    loading,
    error,
  } = main
  return{
    loading,
    error,
  }
}

export default connect(mapStateToProps, {
  rankingsRequest,
  leagueChanged
})(Landing)
