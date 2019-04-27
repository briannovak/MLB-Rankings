import React from 'react'
import{
  Text,
  View,
} from 'react-native'
import {boilerPlate} from '../styles'

class Rankings extends React.Component{
  render(){
    let{
      container
    } = boilerPlate
    return(
      <View style = {container}>
        <Text>Rankings</Text>
      </View>
    )
  }
}

export default Rankings
