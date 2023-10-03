import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useTheme } from '@/Hooks'
import { CText } from '@/UiLib'
import { VGap } from '@/Components'
import { StackNavigationProp } from '@react-navigation/stack'

type Props = {
    
}

const MapScreen = (props: any) => { //TODO: Fix this type . It is because of navigation
    const { Layout, Colors, Fonts, MetricsSizes,Gutters,Images } = useTheme()
  return (
    <View style={[Layout.fill,{backgroundColor: 'teal',}]} >
      <VGap />
      <CText as="h1" color={Colors.WHITE} >Map Screen</CText>
    </View>
  )
}

export default MapScreen

const styles = StyleSheet.create({})