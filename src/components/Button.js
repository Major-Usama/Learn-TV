import React from 'react'
import { Dimensions, StyleSheet, Text, View,TouchableOpacity } from 'react-native'

const WIDTH = Dimensions.get('window').width
export default function Button({title,backColor,bWidth,onpress,width,disable}) {
    return (
        <TouchableOpacity
        disabled={disable}
        onPress={onpress}
        activeOpacity ={0.7}
        style={{...styles.buttonContainer,backgroundColor:backColor,borderWidth:bWidth,borderColor:'#515965',width:width}}>

            <Text style={styles.buttonText}>{title}</Text>
          
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({

buttonContainer:
{
    width:WIDTH-100,
    height:40,
    backgroundColor:'#E12836',
    borderRadius:20,
    justifyContent:'center',
    alignItems:'center',
    alignSelf:'center',
    marginBottom:20,

},

buttonText:
{
    color:'#fff',
    fontSize:14,
    
}

})
