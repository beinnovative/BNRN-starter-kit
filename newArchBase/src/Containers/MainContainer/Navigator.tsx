import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { TabBarFragment } from '@/Fragments';
import { View } from 'react-native';
import { BaseButton, CText } from '@/UiLib';
import { useDispatch } from 'react-redux';
import { logoutReducer } from '@/Store/Auth';
import { HomeScreen } from './Screens';


const TestTabScreen = ({value = "2",navigation} : {value ?: string,navigation : any}) => {
    const dispatch = useDispatch()
    const handleLogout = () => {
        dispatch(logoutReducer())
    }
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <CText as="title">Main Screen : {value} </CText>
            <BaseButton onPress={handleLogout} variant="base" > Logout</BaseButton>
        </View>
    )
}

// const Stack = createStackNavigator()
const Tab = createBottomTabNavigator();

//NOTE: Name Stacks as Screens and Tabs as Tabs
const MainNavigator = () => {
    return (
        <Tab.Navigator 
        screenOptions={{ headerShown: false, }}
            tabBar={props => <TabBarFragment {...props} />}
        >
            <Tab.Screen options={{ tabBarLabel: 'Home' }} name="HomeScreen" component={HomeScreen} />
            <Tab.Screen options={{ tabBarLabel: 'Get Care' }} name="GetCareTab" component={TestTabScreen} />
            <Tab.Screen options={{ tabBarLabel: 'Account' }} name="AccountTab" component={TestTabScreen} />
        </Tab.Navigator>
    );
}

export default MainNavigator
