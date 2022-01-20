import React from "react";
import { StyleSheet,Text } from "react-native"
import { color} from "card/src/theme/color"
import { HorizontalLayout,VerticalLayout} from "./index"

const DollerView =()=>{
    return(
        <VerticalLayout style={{...customStyle.currenyBorder}}>
         <Text style={{...customStyle.dollerCurrenyStyle}}>$$</Text>
        </VerticalLayout>
    )
}
export default DollerView

const customStyle = StyleSheet.create({
    currenyBorder:{
        width:50,
        height:30,
        backgroundColor:color.SECOND_PRIMARY_COLOR,
        alignItems:'center',
        justifyContent:'center',
        borderRadius:5
    },
    dollerCurrenyStyle:{
        fontSize:14,
        fontWeight:'bold',
        color:'white',
    },
   
})