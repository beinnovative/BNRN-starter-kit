import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NotificationScreen } from './Screens';
import ExampleContainer from '../ExampleContainer';


const Stack = createStackNavigator();

const NotificationNavigator = () => {
    return (
        <Stack.Navigator initialRouteName='NotificationScreen' screenOptions={{
            headerShown: false
        }} >
            <Stack.Screen name="NotificationScreen" >
                {props => <NotificationScreen {...props}  />}
            </Stack.Screen>

            {/* <Stack.Screen name="SelectAddScreen" component={SelectAddScreen} /> */}
           
        </Stack.Navigator>
    )
}



export default NotificationNavigator;