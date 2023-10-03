import { Image, ImageProps, StyleSheet, Text, View } from 'react-native'
import React, { useMemo } from 'react'
import { useTheme } from '@/Hooks'
import { MetricsSizes } from '@/Theme/Variables'

type Props = {
    height ?: number,
    width ?: number,
}

//TODO: This component is used for displaying cover images in the app, so rename it to CoverImage
const ImageComp = ({ source, style,height ,width , ...restProps }: Props & ImageProps) => {
    //Here images will be resized according to the screen size
    //and will be cached for future use
    
    const {Layout, Fonts, Colors, Images, MetricsSizes } = useTheme()

  return (
     <Image source={source} style={[styles.imgStyle,style]} {...restProps} />
  )
}

export default ImageComp

const styles = StyleSheet.create({
    imgStyle : {
        resizeMode : 'cover',
        width : MetricsSizes.SCREEN_WIDTH,
        height : MetricsSizes.SCREEN_HEIGHT * 0.3,
    }
})