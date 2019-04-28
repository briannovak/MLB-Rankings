import React from 'react'
import{
  Text,
  View,
  TouchableOpacity
} from 'react-native'
import {buttonStyle} from '../styles'


//functional component for button used throughout the app
const Button =(props)=>{
  let{
    text,
    container
  } = buttonStyle
  let{
    label,
    onPress
  } = props
  return(
    <TouchableOpacity onPress = {onPress}>
      <View style = {container}>
        <Text style = {text}>{label}</Text>
      </View>
    </TouchableOpacity>
  )
}

export default Button
