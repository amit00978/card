import React from "react";
import { connect } from 'react-redux';
import { VerticalLayout,HorizontalLayout,Card, DollerView,ProgrssBar } from "./components"
import { color} from "card/src/theme/color"
import { Text,StyleSheet,Image,  Dimensions } from "react-native"
import { Aspire } from "card/src/assets/index"
import * as actions from './redux/actions/index';
import  Icon from 'react-native-vector-icons/FontAwesome';
import ServiceFooter from "./screen/DebitCard/ServiceFooter"
  
const App =(props)=>{
    const { sp_limit } = props.basic
    const barWidth = (Dimensions.get('screen').width/100)*88;
return(
<VerticalLayout style={{...customStyle.container}}>
<Image source={Aspire}  style={{...customStyle.imageStyle}}/>
   {/* Upper Part */}
    <VerticalLayout style={{...customStyle.innerUpperCotainer}}>
        <HorizontalLayout style={{flex:1}}>
            <VerticalLayout style={{...customStyle.cardBalContainer,flex:0.43}}>
                <Text style={{...customStyle.textDebitStyle}}>Debit Card</Text>
                <Text style={{...customStyle.textAvailStyle}}>Available balance</Text>
                <HorizontalLayout>
                    <DollerView/>
                    <VerticalLayout>
                        <Text style={{...customStyle.currenyStyle}}>3,000</Text>
                    </VerticalLayout>
                </HorizontalLayout>
            </VerticalLayout>
            <VerticalLayout style={{flex:0.57}}>
                <HorizontalLayout style={{...customStyle.showCardContainer}}>
                    <HorizontalLayout style={{...customStyle.showCardStyle}}>
                    <Icon name="eye-slash" size={20} color={color.SECOND_PRIMARY_COLOR} />
                        <Text style={{...customStyle.cardShowText}}>Show card number</Text>
                    </HorizontalLayout>
                </HorizontalLayout>
            </VerticalLayout >
            </HorizontalLayout>
    </VerticalLayout>
    {/* Below Part */}
    <VerticalLayout style={{...customStyle.innerLowerContainer}}>
        <Card/>
        <HorizontalLayout style={{marginLeft:'7%',color:color.DARK_TEXT,marginTop:'-5%',marginBottom:"4%"}}>
            <Text>Debit Card spending limit</Text>
       <HorizontalLayout style={{...customStyle.barDataSpend}}>
            <Text style={{color:color.SECOND_PRIMARY_COLOR}}>${500}</Text>
            <Text style={{...customStyle.bar}}>|</Text>
            <Text style={{color:color.DISABLE_COLOR}}>${sp_limit}</Text>
       </HorizontalLayout>
        </HorizontalLayout>
        <VerticalLayout style={{...customStyle.barStyle}}>
            <ProgrssBar  
             width={ barWidth}
            value={"29"}
            backgroundColorOnComplete={color.SECOND_PRIMARY_COLOR}/>
        </VerticalLayout>
        <ServiceFooter {...props}/>
    </VerticalLayout>
</VerticalLayout>
)

}

const stateToProps = (state) => {

   return{
    basic: state.basic,
};
}
export default connect(stateToProps, actions)(App)

const customStyle = StyleSheet.create({
    bar:{
        color:color.DISABLE_COLOR,
        paddingLeft:5,
        paddingRight:5
    },
       barDataSpend:{
        flex:1,
        justifyContent:'flex-end',
        marginRight:'7%',
    
    },
    barStyle:{
        marginLeft:'7%'
    },
    container:{
        flex:1,
        backgroundColor:color.PRIMARY_COLOR
    },
    innerUpperCotainer:{
        flex:0.3
    },
    innerLowerContainer:{
        flex:0.7,
        backgroundColor:'white',
        borderTopLeftRadius:20,
        borderTopRightRadius:20
    },
    imageStyle:{
        width:30,
        height:30,
        top:20,
        position:'absolute',
        right:30
    },
    textDebitStyle:{
        fontSize:20,
        fontWeight:'bold',
        color:'white',
    },
    textAvailStyle:{
        fontSize:15,
        color:'white',
    },
    currenyStyle:{
        fontSize:20,
        fontWeight:'bold',
        color:'white',
        marginLeft:'10%'
    },
    dollerCurrenyStyle:{
        fontSize:14,
        fontWeight:'bold',
        color:'white',
    },
  
    cardBalContainer:{
        marginTop:'5%',
        height:'60%',
        marginLeft:'7%',
        justifyContent:'space-around'
    },
    cardShowText:{
        marginLeft:10,
        color:color.SECOND_PRIMARY_COLOR
    },
    showCardStyle :{
        backgroundColor:'white',
        padding:10,
        borderRadius:5,
        height:'20%',
        marginTop:'69%'
    },
    showCardContainer:{
        flex:1,
        justifyContent:'space-around'
    },
    cardContainer:{
        height:'40%',
        width:'90%',
        backgroundColor:color.SECOND_PRIMARY_COLOR,
        marginLeft:'5%',
        borderRadius:10,
        marginTop:-50

    }
})