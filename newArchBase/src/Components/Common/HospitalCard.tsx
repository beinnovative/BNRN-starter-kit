import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Clickable, CText } from '@/UiLib'
import { navigateToSibling } from '@/Navigators/utils'
import { useTheme } from '@/Hooks'
import { IHospital } from '@/ApiServices/interfaces'
import { Image } from 'react-native'
import { HGap, RatingsComp } from '.'
import { adjustString } from '@/Shared/utils'
import { Colors, MetricsSizes } from '@/Theme/Variables'

type Props = {
    onPress : () => void
}


const IMG_DIM = MetricsSizes.BASE100 * 1.2
const IMG_RADIUS = IMG_DIM / 6

const HospitalCard = ({
    name,
    address,
    rating,
    img,
    facilities,
    id,
    distance,
    status,
    onPress
}: Props & IHospital) => {
    const { Layout, Fonts, Colors, Images, MetricsSizes, Gutters } = useTheme()
    const TEXT_LENGTH = 30
    return (
        <Clickable  onPress={onPress}
            style={[Gutters.SMALLBMargin, Gutters.SMALLHPadding, { backgroundColor: Colors.WHITE, }]} >
            <View style={[Layout.rowHCenter, Layout.justifyContentBetween, Gutters.REGULARVPadding]} >
                <Image source={{ uri: img }} style={[styles.hospitalImg]} />
                <HGap />
                <View style={[Layout.fill, Layout.fullHeight, Gutters.TINYVPadding,]} >
                    <CText as="semi_rg" >{adjustString(name, TEXT_LENGTH * 0.7)}</CText>
                    <CText as="med_sm" >{adjustString(address, TEXT_LENGTH)}</CText>

                    <View style={[Layout.rowHCenter, Gutters.TINYVPadding]} >
                        {facilities.map((item, index) =>
                            <View style={[Gutters.SMALLHPadding, styles.pill]} key={index} >
                                <CText as="med_sm" >  {item}  </CText>
                            </View>
                        )}
                    </View>

                    <View style={[Layout.rowHCenter, Gutters.TINYVPadding, Layout.justifyContentBetween]} >
                        <CText as="med_sm" color={Colors.BASE_YELLOW}  >{status}</CText>
                        <CText as="med_sm" >{distance} km</CText>
                    </View>

                    <View style={[styles.topFixed]} >
                        <RatingsComp outline rating={rating} />
                    </View>
                </View>
            </View>
        </Clickable>
    )
  
}



export default HospitalCard

const styles = StyleSheet.create({
    hospitalImg: {
        height: IMG_DIM,
        width: IMG_DIM,
        borderRadius: IMG_RADIUS,
        resizeMode: 'cover',
        overflow: 'hidden'
    },
    topFixed: { //TODO: Declared at two places. DUPLICATE
        position: 'absolute',
        top: 0,
        right: 0,
        zIndex: 1,
        // padding: MetricsSizes.SMALL,

    },
    pill: { //TODO: Create separate component for this
        backgroundColor: Colors.WHITE,
        borderRadius: MetricsSizes.SMALL,
        marginHorizontal: MetricsSizes.TINY,
        borderWidth: 1,
        borderColor: Colors.OUTLINE,
    },
})