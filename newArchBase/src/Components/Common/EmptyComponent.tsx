import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import useTheme from '@/Hooks/useTheme'
import { MetricsSizes } from '@/Theme/Variables'
import { CText, ImgIcon } from '@/UiLib'
import ImageComp from '@/UiLib/atoms/ImageComp'

type Props = {
    text ? : string,
    inScrollView ?: boolean,
    icon ?: any,
}

const EmptyComponent = ({
  text,
  inScrollView,
  icon
}: Props) => {
    const {Layout} = useTheme()
  return (
    <View style={[Layout.fill , Layout.colCenter , Layout.justifyContentCenter, styles.scrollStyle]} >
      {
        !!icon &&
       <ImageComp 
       source={icon} 
       style={{width : MetricsSizes.SCREEN_WIDTH * 0.5 , height : MetricsSizes.SCREEN_WIDTH * 0.5,resizeMode : 'contain'}}
       />
      }
       <CText as="med_rg" style={{textAlign:'center'}}> {text || "No Data Found"} </CText>
    </View>
  )
}

export default EmptyComponent

const styles = StyleSheet.create({
   scrollStyle :{
        height : MetricsSizes.SCREEN_HEIGHT * 0.75,
   }
})