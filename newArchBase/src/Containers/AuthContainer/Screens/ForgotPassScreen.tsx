import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { CText } from '@/UiLib'
import { useTheme } from '@/Hooks'
import { DefaultLayout, FullScreenLayout } from '@/Components'

type Props = {
    navigation : any,
}

const ForgotPassScreen = ({navigation}: Props) => {
  const {Layout, Fonts, Colors, Images, MetricsSizes,Gutters } = useTheme()
  return (
    <FullScreenLayout>
    <View style={[Layout.fill , Layout.justifyContentCenter,Gutters.REGULARPadding]} >
          <CText as="sectionTitle" >ForgotPassScreen Is Here</CText>
          <Button title="ResetPassScreen Screen" onPress={() => navigation.navigate('ResetPassScreen')} />
    </View>
      </FullScreenLayout>
  )
}

export default ForgotPassScreen

const styles = StyleSheet.create({})