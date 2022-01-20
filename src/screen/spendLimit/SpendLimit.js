import React,{ useState } from "react";
import { connect } from 'react-redux';
import { VerticalLayout,HorizontalLayout,Card, DollerView } from "../../components"
import { color} from "card/src/theme/color"
import * as actions from '../../redux/actions/index';
import { Text,StyleSheet,Image,TextInput ,Button, TouchableOpacity} from "react-native"
import { Aspire } from "card/src/assets/index"
import  Icon from 'react-native-vector-icons/FontAwesome';
import ServiceFooter from "card/src/screen/DebitCard/ServiceFooter"
  
const SpendLimit =(props)=>{
    const [spend,setSpend] = useState(0)
    const { sp_limit } = props.basic
    const { spendLimit } = props
return(
<VerticalLayout style={{...customStyle.container}}>
<Image source={Aspire}  style={{...customStyle.imageStyle}}/>

    {/* back Button */}
    <TouchableOpacity style={{...customStyle.arrowLeft}} onPress={()=>{
       props.navigation.goBack();
        
    }}>
        <Icon name="angle-left" size={30} color={"white"} />
    </TouchableOpacity>

   {/* Upper Part */}
    <VerticalLayout style={{...customStyle.innerUpperCotainer}}>
        <HorizontalLayout style={{flex:1}}>
            <VerticalLayout style={{...customStyle.cardBalContainer,flex:0.43}}>
                <Text style={{...customStyle.textDebitStyle}}>Spending Limit</Text>
            </VerticalLayout>
            <VerticalLayout style={{flex:0.57}}>
            </VerticalLayout >
            </HorizontalLayout>
    </VerticalLayout>
    {/* Below Part */}
    <VerticalLayout style={{...customStyle.innerLowerContainer}}>
        <VerticalLayout style={{...customStyle.spendLimitCon}}>
        <Text style={{...customStyle.setSpendText}}>Set a weekly debit card spending limit</Text>
        </VerticalLayout>
         {/* Text input */}
        <HorizontalLayout style={{...customStyle.textInputWrapper}}>
            <VerticalLayout style={{marginLeft:'3%'}}>
                <DollerView />
            </VerticalLayout>
            <TextInput style={{width:'90%'}}  keyboardType="numeric" onChangeText={(text)=>{
                setSpend(text)
            }} value={spend?spend:sp_limit}/>
        </HorizontalLayout>

        <VerticalLayout style={{marginTop:'5%',marginLeft:'7%'}}>
            <Text style={{fontSize:12,color:color.DISABLE_COLOR}}>Here weekly means the last 7 days not the calendar week</Text>
        </VerticalLayout>

        {/* lower money button */}
        <HorizontalLayout style={{...customStyle.amountWrapper}}>
            <TouchableOpacity onPress={()=>{setSpend("5000")}}>
                <HorizontalLayout style={{...customStyle.spentLimitBrick}}>
                        <Text style={{...customStyle.dollerCurrenyStyle}}>$$</Text>
                        <Text style={{...customStyle.dollerCurrenyStyle,marginLeft:10}}>5000</Text>
                </HorizontalLayout>
            </TouchableOpacity>

            <TouchableOpacity onPress={()=>{setSpend("10000")}}>
            <HorizontalLayout style={{...customStyle.spentLimitBrick}}>
                <Text style={{...customStyle.dollerCurrenyStyle}}>$$</Text>
                <Text style={{...customStyle.dollerCurrenyStyle,marginLeft:10}}>10,000</Text>
            </HorizontalLayout>
            </TouchableOpacity>

            <TouchableOpacity onPress={()=>{setSpend("20000")}}>
               <HorizontalLayout style={{...customStyle.spentLimitBrick}}>
                <Text style={{...customStyle.dollerCurrenyStyle}}>$$</Text>
                <Text style={{...customStyle.dollerCurrenyStyle,marginLeft:10}}>20,000</Text>
            </HorizontalLayout>
            </TouchableOpacity>
        </HorizontalLayout>
  

        <VerticalLayout style={{...customStyle.buttonWrapper}}>
            <Button title="save" color={spend?color.PRIMARY_COLOR:color.DISABLE_COLOR} style={{color:'red'}} onPress={()=>{
                spendLimit(spend)
                props.navigation.goBack();
            }}/>
        </VerticalLayout>
    </VerticalLayout>
</VerticalLayout>
)

}


const stateToProps = (state) => {

    return{
     basic: state.basic,
 };
 }

export default connect(stateToProps, actions)(SpendLimit)

const customStyle = StyleSheet.create({

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
    cardBalContainer:{
        marginTop:'5%',
        height:'60%',
        marginLeft:'7%',
        justifyContent:'space-around'
    },
    textDebitStyle:{
        fontSize:20,
        fontWeight:'bold',
        color:'white',
    },
    dollerCurrenyStyle:{
        fontSize:12,
        fontWeight:'bold',
        color:color.SECOND_PRIMARY_COLOR,

    },
    spentLimitBrick:{
        height:40,
        width:100,
        backgroundColor:color.THRID_PRIMARY_COLOR,
        justifyContent:'center',
        alignItems:'center'
    },
    spendLimitCon:{
        marginTop:'8%',
        marginLeft:'7%'
    },
    setSpendText:{
        color:color.DARK_TEXT
    },
    amountWrapper:{
        marginLeft:'2%',
        marginTop:'5%',
        justifyContent:'space-around'
    },
    textInputWrapper:{
        marginLeft:'7%',
        marginTop:'3%',
        justifyContent:'center',
        alignItems:'center',
        width:'88%',
        borderBottomColor:color.DISABLE_COLOR,
        borderBottomWidth:0.4
    },
    buttonWrapper:{
        width:'80%',
        marginLeft:'10%',
        position:'absolute',
        bottom:20
    },
    arrowLeft:{
        position:'absolute',
        top:20,
        left:20
    }
})