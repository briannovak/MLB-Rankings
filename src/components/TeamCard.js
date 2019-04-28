import React from 'react'
import{
  View,
  Text,
} from 'react-native'
import {teamCardStyle} from './styles'
//functional component for team card
const TeamCard =(props)=>{
  let{
    masterContainer,
    subContainer,
    text
  } = teamCardStyle
  let{
    team,
    wins,
    losses,
    pct
  } = props
  return(
    <View style = {masterContainer}>
      <View style = {subContainer}>
        <Text style = {text}>{team}</Text>
      </View>
      <View style = {subContainer}>
        <Text style = {text}>{wins}</Text>
      </View>
      <View style = {subContainer}>
        <Text style = {text}>{losses}</Text>
      </View>
      <View style = {[subContainer, {backgroundColor:'#FFFFCC'}]}>
        <Text style = {text}>{pct}</Text>
      </View>
    </View>
  )
}

export default TeamCard
