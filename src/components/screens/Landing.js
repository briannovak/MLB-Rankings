import React from 'react'
import{
  Text,
  View,
} from 'react-native'
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

export default Landing
