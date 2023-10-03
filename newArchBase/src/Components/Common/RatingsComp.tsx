import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useTheme } from '@/Hooks'
import IconComp from './IconComp'
import { CText } from '@/UiLib'
import { Colors, MetricsSizes } from '@/Theme/Variables'
import { HGap } from './Seperators'

type Props = {
    rating : number,
    outline ?: boolean
}

const RatingsComp = ({
    rating = 4.5,
    outline = false
}: Props) => {
  const { Layout, Colors, Fonts, MetricsSizes,Gutters,Images } = useTheme()
  return (
    <View  style={[Layout.rowHCenter,Gutters.SMALLHPadding,Gutters.TINYVPadding,styles.container,outline && styles.outline]}>
        <IconComp name="star" type="FontAwesome" color={Colors.BASE_YELLOW} size={MetricsSizes.REGULAR} />
        <HGap />
        <CText as="semi_bs" >{String(rating)} </CText>
    </View>
  )
}

export default RatingsComp

const styles = StyleSheet.create({
    container : {
        backgroundColor : Colors.WHITE,
        borderRadius : MetricsSizes.SMALL,
    },
    outline : {
        borderWidth : 1,
        borderColor : Colors.OUTLINE
    }
})