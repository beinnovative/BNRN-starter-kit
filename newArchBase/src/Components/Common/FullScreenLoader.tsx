import {  StyleSheet, View } from 'react-native'
import React from 'react'
import { useTheme } from '@/Hooks'
import Lottie from 'lottie-react-native'
import { Lottieloader } from '@/Assets/Lottie/lottiefiles'
import { CText } from '@/UiLib'
import { VGap } from './Seperators'

type Props = {
    loadingTxt ?: string
}

const FullScreenLoader = ({
    loadingTxt
}: Props) => {
    const {Colors,Layout ,MetricsSizes} = useTheme()
  return (
    <View style={[Layout.fill,Layout.justifyContentCenter,styles.overlayContainer,{backgroundColor: Colors.BRAND_COLOR,}]}   >
        <VGap gap={MetricsSizes.XXLARGE} />
        <CText as="med_rg" color={Colors.TEXT} align="center" >{loadingTxt || "Fetching..."}</CText>
         <Lottie source={Lottieloader} autoPlay loop />
          
    </View>
  )
}

export default FullScreenLoader

const styles = StyleSheet.create({
    container: {
       
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection : 'row',
    },
    overlayContainer: {
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
    },
})