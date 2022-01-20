import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import {  Provider } from 'react-redux';
import {createStore} from 'redux';
import reducers from "./src/redux/reducers/index"
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Debit from "./src/index"
import SpendLimit from "./src/screen/spendLimit/SpendLimit"

const App = ()=>{
    const Stack = createNativeStackNavigator();
    return(
        <Provider store={createStore(reducers)}>
            <NavigationContainer >
                    <Stack.Navigator initialRouteName="Debit" > 
                        <Stack.Screen name="Debit" component={Debit} options={{ headerShown: false }}/>
                        <Stack.Screen name="SpendLimit" component={SpendLimit} options={{ headerShown: false }}/>
                    </Stack.Navigator>
            </NavigationContainer>
        </Provider>
    )
}

export default App