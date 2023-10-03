import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { AuthScreen, ForgotPassScreen, ResetPassScreen } from './Screens';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Button, Text, View } from 'react-native';
import { VGap } from '@/Components';


const SampleScreen = ({ navigation }: any) => {
    return (
        <View style={[{ flex: 1, justifyContent: 'center', }]} >
            <Text>THIRD SCREEN Is Here</Text>
            <Button title="Forgot Screen" onPress={() => navigation.navigate('ForgotPassScreen')} />
            <VGap />
            <Button title="RESET PASS Screen" onPress={() => navigation.navigate('ResetPassScreen')} />
            <VGap />
            <Button title="Notification Screen" onPress={() => navigation.navigate('NotificationScreen')} />
        </View>
    )
}

const Stack = createNativeStackNavigator();

const AuthNavigator = () => {
    return (
        <Stack.Navigator screenOptions={{
            headerShown: false,
            animation: 'slide_from_right'
        }} >
            <Stack.Screen name="SampleScreen" component={SampleScreen} />
            <Stack.Screen name="ForgotPassScreen" component={ForgotPassScreen} />
            <Stack.Screen name="ResetPassScreen" component={ResetPassScreen} />
            {/* <Stack.Screen name="SignUpScreen" >
                {props => <AuthScreen {...props} type="signup" />}
            </Stack.Screen>
            <Stack.Screen name="SignInScreen">
                {props => <AuthScreen {...props} type="signin" />}
            </Stack.Screen> */}
        </Stack.Navigator>
    )
}

export default AuthNavigator;