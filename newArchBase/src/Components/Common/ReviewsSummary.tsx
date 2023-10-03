import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useTheme } from '@/Hooks'
import { Colors, MetricsSizes } from '@/Theme/Variables'
import { BaseButton, CText } from '@/UiLib'
import RatingStar from './RatingStar'
import TapRating from './TapRating'
import { HGap, VGap } from './Seperators'

type Props = {
    rating : number,
    count ?: number
}

const ReviewsSummary = ({
    rating = 4.5,
    count 
}: Props) => {
  const { Layout, Fonts, Colors, Images, MetricsSizes,Gutters } = useTheme()
  return (
    <View style={[Gutters.REGULARPadding,styles.container,Layout.rowHCenter]} >
      <View style={[Layout.alignItemsCenter]}>
         <CText as="semi_xl" align="center" >{rating}</CText>
         <TapRating rating={rating} width={MetricsSizes.SCREEN_WIDTH/4} />
         <VGap gap={MetricsSizes.TINY} />
         <CText as="med_sm" align="center" >({count ? count.toLocaleString() : "No Ratings."})</CText>
      </View>

        <View style={[Layout.fill,Gutters.REGULARLMargin]} >
            <CText as="semi_md"  >Share Your Expeience.</CText>
            <BaseButton variant='rounded' style={{backgroundColor: Colors.TEXT,}} >Write A Review</BaseButton>
        </View>

        <HGap />
    </View>
  )
}

export default ReviewsSummary

const styles = StyleSheet.create({
    container: {
        borderWidth : 1,
        borderColor : Colors.OUTLINE,
        borderRadius : MetricsSizes.REGULAR,
        backgroundColor : Colors.WHITE
    }
})