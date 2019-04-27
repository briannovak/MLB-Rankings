import{
  RANKINGS_REQUEST,
  ERROR_CHANGED,
  DIVISION_CHANGED,
  LEAGUE_CHANGED,
} from '../actions/Types'
import axios from 'axios'
import {REQUEST_URL} from '../utils/misc'

//action to change division
export const divisionChanged = (str)=>{
  return{
    type:DIVISION_CHANGED,
    payload:str
  }
}

//action to change league
export const leagueChanged = (str)=>{
  return{
    type:DIVISION_CHANGED,
    payload:str
  }
}

//placeholder for asynchronous action to grab data for rankings
export const rankingsRequest = ()=>{
  return{
    type:RANKINGS_REQUEST,
    payload:'payload'
  }
}
