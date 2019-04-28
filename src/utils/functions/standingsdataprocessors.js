import{
  AL,
  NL,
  EAST,
  CENTRAL,
  WEST,
} from "../misc"

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
