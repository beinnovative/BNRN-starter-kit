import { StatusBar, StyleSheet, Text, View } from 'react-native'
import React, { ReactNode } from 'react'
import { useTheme } from '@/Hooks'
import { ImgBadge } from '../Common'
import { Clickable, CText } from '@/UiLib'
import { IconButton } from '../Buttons'
import { ScrollView } from 'react-native'
import { goBack } from '@/Navigators/utils'

type Props = {
    children ?: ReactNode,
    style ?: any,
    onBackPress ?: () => void,
    hideBack ?: boolean,
    noScroll ?: boolean,
}

const FullScreenLayout = ({
    children,
    style,
    onBackPress,
    hideBack,
    noScroll

}: Props) => {
  const { Layout, Colors, MetricsSizes, Gutters } = useTheme()
  return (
    <View style={[Layout.fill,{backgroundColor: Colors.BGCOLOR,} ]} >
        <StatusBar translucent backgroundColor={Colors.TRANSPARENT} barStyle="dark-content" />
     {/* TODO: Match the status bar with design and do the required. */}

      {noScroll ? children : <ScrollView style={[Layout.fill]}>{children}</ScrollView>}

      <View style={[styles.fixed,Gutters.REGULARHPadding,Gutters.LARGETPadding]}>
         <IconButton 
          iconName="keyboard-backspace"
          iconType="MaterialCommunityIcons"
         iconSize={MetricsSizes.LARGE} 
         rounded
         color={Colors.DARK}
         bgColor={Colors.TRANSLUCENT_LIGHT}
         onPress={onBackPress || goBack} />
      </View>
    </View>
  )
}

export default FullScreenLayout

const styles = StyleSheet.create({
    fixed: {
        position: 'absolute',
        top: 0,
        left: 0,
    }
})