import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { VGap } from '@/Components'

type Props = {
    navigation: any,
}

const ResetPassScreen = ({ navigation }: Props) => {
    return (
        <View style={[{ flex: 1, justifyContent: 'center', }]} >
            <Text>ResetPassScreen Is Here</Text>
            <Button title="Forgot Screen" onPress={() => navigation.navigate('ForgotPassScreen')} />
            <VGap />
            <Button title="Login Screen" onPress={() => navigation.navigate('SampleScreen')} />
        </View>
    )
}

export default ResetPassScreen

const styles = StyleSheet.create({})