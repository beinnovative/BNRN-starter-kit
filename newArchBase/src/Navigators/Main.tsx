import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { ExampleContainer } from '@/Containers'
import { TabBarFragment } from '@/Fragments';


const Tab = createBottomTabNavigator();

const MainNavigator = () => {
  return (
    <Tab.Navigator screenOptions={{headerShown: true}}
    tabBar = {props => <TabBarFragment {...props} />}
    
         >
      <Tab.Screen name="Home" component={ExampleContainer} />
      <Tab.Screen name="Progress" component={ExampleContainer} />
      <Tab.Screen name="LeaderBoard" component={ExampleContainer} />
      <Tab.Screen name="User" component={ExampleContainer} />
    </Tab.Navigator>
  );
}

export default MainNavigator
