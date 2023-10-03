import { ScrollView, StatusBar, StyleSheet, Text, View } from 'react-native'
import React, { ReactNode } from 'react'
import { useTheme } from '@/Hooks'
import { Colors, MetricsSizes } from '@/Theme/Variables'

type Props = {
    children ?: ReactNode,
    topComponent ?: ReactNode //TODO: Match the nomeclature with other layouts
}

//TOUPDATE: Update this Layout to your requirement
const MainLayout = ({
    children,
    topComponent
}: Props) => {
  const { Layout, Colors, Fonts, MetricsSizes,Gutters } = useTheme()
  return (
    <View style={[Layout.fill,{backgroundColor: Colors.BGCOLOR,}]} >
        <StatusBar backgroundColor={Colors.BRAND_COLOR} translucent />

        <View style={[Layout.fullWidth , styles.topContainer]}>
            {topComponent}
        </View>
        <ScrollView style={[Layout.fill]}>
            {children}
        </ScrollView>
    </View>
  )
}

export default MainLayout

const styles = StyleSheet.create({
    topContainer : {
        height : MetricsSizes.SCREEN_HEIGHT * 0.25,
        backgroundColor : Colors.BRAND_COLOR,
    }
})