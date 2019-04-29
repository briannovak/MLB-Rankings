import{
  RANKINGS_REQUEST,
  ERROR_CHANGED,
  DIVISION_CHANGED,
  LEAGUE_CHANGED,
} from "../actions/Types"
import axios from "axios"
import {REQUEST_URL} from "../utils/misc"
import {
  arrSortWinPercentageAssign,
  masterTeamFilter
} from "../utils/functions/standingsdataprocessors"

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
    type:LEAGUE_CHANGED,
    payload:str
  }
}

//performs asynchronous action to grab data for rankings as well as sort and delineate the data
//also account for errors
export const rankingsRequest = ()=>{
  return async(dispatch)=>{
    try{
      let standings = await axios.get(REQUEST_URL)
      let{
        data
      } = standings
      data = arrSortWinPercentageAssign(data)
      data = masterTeamFilter(data)
      let{
        ALEast,ALWest,ALCentral,NLEast, NLWest,NLCentral
      } = data
      dispatch({type: RANKINGS_REQUEST, payload:{ALEast, ALWest,ALCentral, NLEast, NLWest, NLCentral, loading:false}})
    }catch(err){
      dispatch({type: ERROR_CHANGED, payload:"We are experiencing technical difficulties."})
    }
  }
}
