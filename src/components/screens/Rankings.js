import React from 'react'
import{
  Text,
  View,
} from 'react-native'
import {connect} from 'react-redux'
import TeamCard from '../TeamCard'
import DivisionBanner from '../DivisionBanner'
import {rankingsScreenStyle, shadowStyle} from '../styles'
import{
  EAST,
  CENTRAL,
  WEST,
  NL,
  AL
} from '../../utils/misc'
import {teamcardcreator} from '../../utils/functions/teamcardcreator'

class Rankings extends React.Component{
  teamCardReturner = ()=>{
    let{
      league,
      division,
      ALEast,
      ALWest,
      ALCentral,
      NLEast,
      NLWest,
      NLCentral,
    } = this.props
    //the switch statement below checks for which league and division currently occupies the application state
    //and returns the team card JSX arr created with the appropriate data
    switch(true){
      case league === AL && division === EAST:
        return ALEast.map(team=>teamcardcreator(team))
        break;
      case league === AL && division === WEST:
        return ALWest.map(team=>teamcardcreator(team))
        break;
      case league === AL && division === CENTRAL:
        return ALCentral.map(team=>teamcardcreator(team))
        break;
      case league === NL && division === EAST:
        return NLEast.map(team=>teamcardcreator(team))
        break;
      case league === NL && division === WEST:
        return NLWest.map(team=>teamcardcreator(team))
        break;
      case league === NL && division === CENTRAL:
        return NLCentral.map(team=>teamcardcreator(team))
        break;
      default:
        return
    }
  }

  render(){
    let{
      masterContainer
    } = rankingsScreenStyle
    let{
      league,
      division,
    } = this.props
    return(
      <View style = {masterContainer}>
        <DivisionBanner
          league={league}
          division={division}
          />
        <View style={shadowStyle.container}>
        <TeamCard
          team = "Team"
          wins = "W"
          losses = "L"
          pct = "PCT"
          />
        {this.teamCardReturner()}
      </View>

      </View>
    )
  }
}

const mapStateToProps = ({main})=>{
  let{
    league,
    division,
    ALEast,
    ALWest,
    ALCentral,
    NLEast,
    NLWest,
    NLCentral,
  } = main
  return{
    league,
    division,
    ALEast,
    ALWest,
    ALCentral,
    NLEast,
    NLWest,
    NLCentral,
  }
}

export default connect(mapStateToProps, {})(Rankings)
