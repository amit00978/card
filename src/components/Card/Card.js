import React,{useState} from "react";
import {Image,Text ,StyleSheet} from "react-native"
import { color} from "../../theme/color"
import {VerticalLayout ,HorizontalLayout} from "../index"
import { fullLogo,visa } from "card/src/assets/index"
const Card =()=>{
    const [num ,setNum] = useState()
    const   number = () => {
        if (!num) {
            var string = "";
        } else {
            var string = num.toString();
        }

        const maxLength = 16;

        if (string.length > maxLength) string = string.slice(0, maxLength);

        while (string.length < maxLength) {
            string += "•"
        }

   
            const amountOfSpaces = Math.ceil(maxLength/4);

            for (var i = 1; i <= amountOfSpaces; i++) {
                var space_index = (i * 4 + (i - 1));
                string = string.slice(0, space_index) + " " + string.slice(space_index)
            }
    

        return string;
    }
   return(
       <VerticalLayout style={{...customStyle.container}}>
            <VerticalLayout style={{...customStyle.cardContainer}}>
                <Image source={fullLogo}  style={{...customStyle.imageStyle}}/>
            <VerticalLayout style={{...customStyle.cardInnerUpperContainer}}>
                <Text style={{...customStyle.customerNameText}}>Mark Henry</Text>

           </VerticalLayout>
           <VerticalLayout style={{...customStyle.cardInnerLowerContainer}}>
                <Text style={{...customStyle.cardNumText}}>{number()}</Text>
                <VerticalLayout>
                    <HorizontalLayout style={{...customStyle.cardInfoContainer}}>
                        <VerticalLayout>
                            <Text style={{...customStyle.validThuText}}>Thru:12/22</Text>
                        </VerticalLayout>
                        <VerticalLayout>
                            <Text style={{...customStyle.cvvText}}>CVV: ***</Text>
                        </VerticalLayout>
                    </HorizontalLayout>
                </VerticalLayout>
           </VerticalLayout>
           <Image source={visa}  style={{...customStyle.visaStyle}}/>
            </VerticalLayout>

    </VerticalLayout>
   )
}
export default Card


const customStyle = StyleSheet.create({
    container:{
        height:"45%",
        width:'100%'
    },
    cardContainer:{
        height:'100%',
        width:'90%',
        backgroundColor:color.SECOND_PRIMARY_COLOR,
        marginLeft:'5%',
        borderRadius:10,
        marginTop:-50

    },
    imageStyle:{
        width:100,
        height:20,
        tintColor:'white',
        position:'absolute',
        right:10,
        top:20,
        resizeMode: "contain",  
    },
    visaStyle:{
        width:100,
        height:20,
        tintColor:'white',
        position:'absolute',
        right:10,
        bottom:20,
        resizeMode: "contain",    
    },
    customerNameText:{
        color:'white',
        fontWeight:'bold',
        fontSize:20
    },
    cardInnerUpperContainer:{
        flex:0.5,
        justifyContent:'flex-end',
        marginLeft:"5%"
    },
    cardInnerLowerContainer:{
        flex:0.5,
        marginLeft:"5%"

    },
    cardNumText:{
        color:'white',
        fontSize:40
    },
    cardInfoContainer:{
        height:50,
        width:'50%',
        justifyContent:'space-between'
    },
    validThuText:{
        color:'white',
        fontSize:13
    },
    cvvText:{
        color:'white',
        fontSize:13
    }
})