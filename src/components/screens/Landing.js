import React from 'react'
import{
  Text,
  View,
} from 'react-native'
import {connect} from 'react-redux'
import {boilerPlate} from '../styles'


class Landing extends React.Component{
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
    error
  } = main
  return{
    loading,
    error
  }
}

export default connect(mapStateToProps, {})(Landing)
