import { ImageBackground, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useTheme } from '@/Hooks'
import { CText, ImageComp } from '@/UiLib'
import { Colors, MetricsSizes } from '@/Theme/Variables'
import { RatingsComp, VGap } from '@/Components'
import { CAT_HEADER, CAT_SUB_HEADER } from '../Res'


type Props = {}

const CategoryTopFrag = (props: Props) => {
    const { Layout, Fonts, Colors, Images, MetricsSizes, Gutters } = useTheme()
    const img = 'https://picsum.photos/200/300'
    return (
        <View style={[Layout.fullWidth, Layout.row, Gutters.REGULARPadding, styles.header,]} >

          <View style={[Layout.fill,{flex:2}]} >
            <VGap gap={MetricsSizes.BASE80} />
            <CText as="reg_rg" color={Colors.BASE_YELLOW} >Categories</CText>
            <CText as="semi_lg" color={Colors.WHITE} >{CAT_HEADER}</CText>
            <CText as="reg_rg" color={Colors.WHITE} >{CAT_SUB_HEADER}</CText>
          </View>
          <View style={[{flex:1},Gutters.REGULARPadding]} >
            <ImageComp source={{uri:img}} style={[Layout.fullWidth,Layout.fullHeight,styles.img]} />
          </View>

        </View>
    )
}

export default CategoryTopFrag

const styles = StyleSheet.create({
    header: {
        backgroundColor: Colors.DARK,
        overflow: 'hidden',
        width: '100%',
        height: MetricsSizes.SCREEN_HEIGHT/3,
    },
  
    img: {
        resizeMode: 'cover',
        borderRadius: MetricsSizes.MEDIUM,
        overflow: 'hidden',
    }
})