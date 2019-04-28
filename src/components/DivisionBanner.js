import React from 'react'
import{
  View,
  Text,
} from 'react-native'
import {divisionBannerStyle} from './styles'
//functional component for division banner
const DivisionBanner =(props)=>{
  let{
    container,
    text
  } = divisionBannerStyle
  let{
    league,
    division
  } = props
  return(
    <Text style = {text}>{`${league} ${division}`}</Text>
  )
}

export default DivisionBanner
