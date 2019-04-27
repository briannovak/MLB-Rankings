import React from 'react'
import{
  Text,
  View,
} from 'react-native'
import {boilerPlate} from '../styles'


class DivisionSelection extends React.Component{
  render(){
    let{
      container
    } = boilerPlate
    return(
      <View style = {container}>
        <Text>DivisionSelection</Text>
      </View>
    )
  }
}

export default DivisionSelection
