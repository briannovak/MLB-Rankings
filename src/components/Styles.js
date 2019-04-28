import {
  StyleSheet,
  Dimensions,
} from 'react-native'
const{
  height,
  width
} = Dimensions.get('window')
//scaling fonts, heights, and widths in accordance with screen dimensions allow ui to carry over all screen sizes
export const landingScreenStyle = StyleSheet.create({
  masterContainer:{
    flex:1,
    alignItems:'center',
    justifyContent:'space-evenly'
  },
  errorText:{
    fontSize:width*0.04,
    color:'red'
  }
})

export const divisionSelectionScreenStyle = StyleSheet.create({
  masterContainer:{
    flex:1,
    alignItems:'center',
    justifyContent:'center'
  },

})

export const welcomeTextStyle =StyleSheet.create({
  container:{
    width:width*0.80,
    justifyContent:'center',
    alignItems:'center'
  },
  text:{
    fontSize:width*0.06,
    textAlign:'center'
  }
})

export const buttonStyle =StyleSheet.create({
  container:{
    width:width*.80,
    height:height*0.08,
    borderWidth:1,
    justifyContent:'center',
    alignItems:'center'
  },
  text:{
    fontSize:width*0.04
  }
})
