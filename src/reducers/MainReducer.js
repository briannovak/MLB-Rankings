import{
  RANKINGS_REQUEST,
  ERROR_CHANGED,
  DIVISION_CHANGED,
  LEAGUE_CHANGED,
} from '../actions/Types'
//this is the sole reducer for the app
const INITIAL_STATE = {
  league:null,
  division:null,
  ALEast:[],
  ALWest:[],
  ALCentral:[],
  NLEast:[],
  NLWest:[],
  NLCentral:[],
  loading:true,
  error:null,
}


export default (state = INITIAL_STATE, action)=>{

    const{
        type,
        payload
    } = action

    switch(type){
        case RANKINGS_REQUEST:
        return{...state, loading:false, ...payload}

        case ERROR_CHANGED:
        return{...state, loading:false, error:payload.error}

        case DIVISION_CHANGED:
        return{...state, division:payload.division}

        case LEAGUE_CHANGED:
        return{...state, league:payload.league}

        default:
        return state
    }
}
