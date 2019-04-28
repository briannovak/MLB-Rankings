import React from 'react'
import{
  Text,
  View,
  TouchableOpacity
} from 'react-native'
import {buttonStyle} from '../styles'



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
