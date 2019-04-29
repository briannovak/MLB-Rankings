import{
  AL,
  NL,
  EAST,
  CENTRAL,
  WEST,
} from "../misc"


//The masterTeamFilter function iterates through the input array and pushes its elements into appropriate leaguedivision arrays
export const masterTeamFilter = (arr)=>{
  let ALEast = []
  let ALWest = []
  let ALCentral = []
  let NLEast = []
  let NLWest = []
  let NLCentral = []
  for(let i =0; i<arr.length; i++){
    let{league, division} = arr[i]
    if(league === AL && division ===EAST){
      ALEast.push(arr[i])
    }else if(league === AL && division ===WEST){
      ALWest.push(arr[i])
    }else if(league === AL && division ===CENTRAL){
      ALCentral.push(arr[i])
    }else if(league === NL && division ===EAST){
      NLEast.push(arr[i])
    }else if(league === NL && division ===WEST){
      NLWest.push(arr[i])
    }else if(league === NL && division ===CENTRAL){
      NLCentral.push(arr[i])
    }
  }
  return {ALEast,ALWest,ALCentral,NLEast, NLWest,NLCentral}
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
