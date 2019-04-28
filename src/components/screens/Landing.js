import React from 'react'
import{
  Text,
  View,
} from 'react-native'
import {connect} from 'react-redux'
import{
  rankingsRequest,
  leagueChanged
} from '../../actions'
import {boilerPlate} from '../styles'


class Landing extends React.Component{
  componentDidMount = ()=>{
    let{
      rankingsRequest
    } = this.props
    rankingsRequest()
  }
  render(){
    let{
      container
    } = boilerPlate
    return(
      <View style = {container}>
        <Text>Landing</Text>
      </View>
    )
  }
}

const mapStateToProps = ({main})=>{
  let{
    loading,
    error,
    NLEast,
  } = main
  return{
    loading,
    error,
    NLEast
  }
}

export default connect(mapStateToProps, {
  rankingsRequest,
  leagueChanged
})(Landing)
