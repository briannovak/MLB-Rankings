import React from 'react'
import TeamCard from  '../../components/TeamCard'
//this function is mapped through to produce the array of team cards rendered on the rankings screen
export const teamcardcreator = (organization)=>{
  let{
    wins,
    losses,
    pct,
    team
  } = organization
  return(
    <TeamCard
    team = {team}
    wins = {wins}
    losses = {losses}
    pct = {pct}
    key = {team}
    />
  )
}
