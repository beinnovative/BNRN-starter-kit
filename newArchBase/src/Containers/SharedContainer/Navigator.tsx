import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { CategoriesScreen, MapScreen, SearchScreen, SelectAddScreen } from './Screens';
import ExampleContainer from '../ExampleContainer';

export type SharedStackParamList = {
    MapScreen: undefined,
    SelectAddScreen: undefined,
    CategoryScreen: undefined,
    SearchScreen: undefined,
    
}

const Stack = createNativeStackNavigator();

const SharedNavigator = () => {
    return (
        <Stack.Navigator initialRouteName='CategoryScreen' screenOptions={{
            headerShown: false,
            animation: 'slide_from_right'
        }} >
            <Stack.Screen name="MapScreen" >
                {props => <MapScreen {...props}  />}
            </Stack.Screen>

            <Stack.Screen name="SelectAddScreen" component={SelectAddScreen} />
            <Stack.Screen name="CategoryScreen" component={CategoriesScreen} />
            <Stack.Screen name="SearchScreen" component={SearchScreen} />
           
        </Stack.Navigator>
    )
}



export default SharedNavigator;