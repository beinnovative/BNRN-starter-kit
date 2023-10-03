import React, { useEffect } from 'react'
import { SafeAreaView, StatusBar } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { useTheme } from '@/Hooks'
// import MainNavigator from './Main'
import { navigationRef } from './utils'
import { useSelector } from 'react-redux'
import { FullScreenLoader } from '@/Components'
import SplashScreen from 'react-native-splash-screen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import { SharedNavigator } from '@/Containers'
import { AuthNavigator, ExampleContainer, MainNavigator, NotificationNavigator, SharedNavigator, StartupContainer } from '@/Containers'



const Stack = createNativeStackNavigator()
// const Stack = createStackNavigator()

// @refresh reset
const ApplicationNavigator = () => {
  const { Layout, darkMode, NavigationTheme } = useTheme()
  const { isLoading, loadingText } = useSelector((state: any) => state.general)
  const { isLoggedIn, } = useSelector((state: any) => state.auth)
  const { colors } = NavigationTheme

  useEffect(() => {
    SplashScreen.hide();
  }, [])


  return (
    <SafeAreaView style={[Layout.fill, {backgroundColor: colors.card}]}>
      <NavigationContainer theme={NavigationTheme} ref={navigationRef}>
        <StatusBar barStyle={darkMode ? 'light-content' : 'dark-content'} />
        <Stack.Navigator 
        initialRouteName='MainNav'
         screenOptions={{ headerShown: false, animation: 'slide_from_right' }}>
          <Stack.Group>
            <Stack.Screen name="Startup" component={ExampleContainer} />
            <Stack.Screen name="MainNav" component={MainNavigator} />
            <Stack.Screen name="SharedNav" component={SharedNavigator} />
            <Stack.Screen name="NotificatioinNav" component={NotificationNavigator} />
            <Stack.Screen
              name="Main"
              component={isLoggedIn ? MainNavigator : AuthNavigator}
             
            />
          </Stack.Group>
        </Stack.Navigator>
      </NavigationContainer>
      {isLoading && <FullScreenLoader loadingTxt={loadingText} />}
    </SafeAreaView>
  );
}

export default ApplicationNavigator
