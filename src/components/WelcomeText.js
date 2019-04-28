import React from 'react'
import{
  View,
  Text,
} from 'react-native'
import {welcomeTextStyle} from './styles'



const WelcomeText =()=>{
  let{
    container,
    text
  } = welcomeTextStyle
  return(
    <View style = {container}>
      <View>
        <Text style = {text}>{`Welcome to the\nMLB Rankings App!`}</Text>
      </View>
    </View>
  )
}

export default WelcomeText
