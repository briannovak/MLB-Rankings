import{
  AL,
  NL,
  EAST,
  CENTRAL,
  WEST,
} from "../misc"

//the series of functons below are used in filter mechanisms
//to distill down data for each individual division within the respective leagues
export const alEastFilter = ({division, league})=>{
  return league === AL && division ===EAST
}
export const alWestFilter = ({division, league})=>{
  return league === AL && division ===WEST
}
export const alCentralFilter = ({division, league})=>{
  return league === AL && division ===CENTRAL
}
export const nlEastFilter = ({division, league})=>{
  return league === NL && division ===EAST
}
export const nlWestFilter = ({division, league})=>{
  return league === NL && division ===WEST
}
export const nlCentralFilter = ({division, league})=>{
  return league === NL && division ===CENTRAL
}

//this function takes in the initial array of data from the request
//and returns the array with each object being allocated a pct property
//the array is also sorted(descending) by this pct property
export const arrSortWinPercentageAssign = (arr)=>{
  arr.forEach((team)=>{
    let{
      wins,
      losses
    } = team
    team.pct = (wins/(wins+losses)).toFixed(3)
    return team
  })
  arr.sort((a,b) => {
  if(a.pct > b.pct)
   return 1
   else
   return -1
 })
  return arr.reverse()
}
