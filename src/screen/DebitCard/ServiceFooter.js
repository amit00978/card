import React,{useState} from "react";
import { Text ,StyleSheet,ScrollView,Switch} from "react-native"
import { color} from "card/src/theme/color"
import { connect } from 'react-redux';
import * as actions from '../../redux/actions/index';
import  Icon from 'react-native-vector-icons/FontAwesome';
import { VerticalLayout,HorizontalLayout,Card } from "../../components/index"


const ServiceFooter = (props)=>{
    const { sp_limit } = props.basic
    const data=[
        {
        id:'1',
        icon:'upload',
        name:'Top-up Account',
        title:'Deposit money to your account to use with card',
        isSwitch:false,
        switch:false
    
        },
        {   
            id:'2',
            icon:'money',
            name:'Weekly spending limit',
            title:"You haven't set any spending limit on card",
            isSwitch:true,
            switch:sp_limit?true:false
    
        },
        {
            id:'3',
            icon:'map-marker',
            name:'Freeze Card',
            title:"You debit card is currently active",
            isSwitch:true,
            switch:false
    
        },
        {
            id:'4',
            icon:'diamond',
            name:'Get a new Card',
            title:"This deactivates your current debit card",
            isSwitch:false,
            switch:false
    
    
        },
        {
            id:'5',
            icon:'credit-card',
            name:'Deactivated Card',
            title:"Your previously yout current Deacivated Cards",
            isSwitch:false,
            switch:false
    
        },
        
        
    ]

    const list =(item,index)=>{
        const [count,setCount] = useState(0)
        const { spendLimit } = props

        const onChangeSwitchCase =(item,index)=>{
            if(data[index].switch){
                spendLimit(0)
            }else{
                if(index==1){
                    props.navigation.navigate("SpendLimit")
                }
            }
          
            setCount(count+1)
        }
            return(      
            <HorizontalLayout style={{...customStyle.container}} key={item.id}>
               
                <VerticalLayout style={{flex:0.1}}>
                    <VerticalLayout style={{...customStyle.leftCircle}}>
                        <Icon name={item.icon} size={15} color={"white"} />
                    </VerticalLayout>
                </VerticalLayout>

                <VerticalLayout style={{flex:0.8}}>
                    <VerticalLayout style={{...customStyle.titleContainer}}>
                        <Text style={{...customStyle.titleHeader}}>{item.name}</Text>
                        <Text style={{...customStyle.titleText}}>{item.title}</Text>
                    </VerticalLayout>
                </VerticalLayout>

                <VerticalLayout style={{flex:0.2,flex:0.2}}>
                   {
                       item.isSwitch?
                       <Switch
                       trackColor={{ false: color.DISABLE_COLOR, true: color.SECOND_PRIMARY_COLOR }}
                       thumbColor={item.switch? "white": "white"}
                       ios_backgroundColor="#3e3e3e"
                       onValueChange={()=>{
                          onChangeSwitchCase(item,index)
                       }}
                       value={item.switch}
                   />
                   :null
                   }
                </VerticalLayout>
            </HorizontalLayout>
            )
    }
    return(
        <VerticalLayout>
            <ScrollView scrollEnabled={true} style={{...customStyle.scrollViewStyle}}>
                {data.map(list)}
            </ScrollView>
        </VerticalLayout>
    )
}


const stateToProps = (state) => {

    return{
     basic: state.basic,
 };
 }
export default  connect(stateToProps,actions)( ServiceFooter)
const customStyle=StyleSheet.create({
    container:{
        width:'90%',
        height:50,
        marginLeft:'5%',
        marginTop:10
    },
    titleHeader:{
        color:color.PRIMARY_COLOR,
        fontSize:13,
        fontWeight:"500"
    },
    titleText:{
        color:color.DISABLE_COLOR,
        fontSize:13,
        fontWeight:"500"
    },
    leftCircle:{
        height:35,
        width:35,
        backgroundColor:color.SERVICES,
        borderRadius:50,
        justifyContent:'center',
        alignItems:'center'
    },
    titleContainer:{
    marginLeft:'5%'
    },
    scrollViewStyle:{
        height:"45%"
    }
})