import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useTheme } from '@/Hooks'
import { CText } from '@/UiLib'
import { VGap } from '@/Components'
// import {LinearGradient} from 'rnx-gradient'
import { adjustString } from '@/Shared/utils'
import { Config } from '@/Config'

type Props = {
    name : string,
    status : 'open' | 'closed',
    distance ?: string, //TODO: Can be number, decide at API level
    address ?: string,
    variant ? : 'home' | 'hospital'
}

//TODO: Move this to a right place. 
const HospitalDetailFrag = ({
    name,
    status,
    distance,
    address='',
    variant = 'home'
}: Props) => {
  const { Layout, Colors, MetricsSizes,Gutters } = useTheme()
  const isFromHome = variant === 'home'

  const {titleFont , restFont} = {
                                    titleFont : isFromHome ? "med_bs" : "semi_md" , 
                                    restFont : isFromHome ? "med_sm" : "med_bs"
                                }

  return (
    //TODO: Add Linear Gradient here that will merge with the background
    <View 
    // colors={Colors.GRADIENT_IMGMASK}
    style={[Gutters.REGULARHPadding,Gutters.REGULARBPadding, styles.gradient]} >
        <View style={[Layout.rowHCenter,Layout.justifyContentBetween]}>
            <CText as={titleFont} color={Colors.WHITE} >{name}</CText>
            <CText as={restFont} color={Colors.BASE_YELLOW} >{status}</CText>
        </View>

        <VGap gap={MetricsSizes.TINY} />

        <View style={[Layout.rowHCenter, Layout.justifyContentBetween]}>
            <CText as={restFont} color={Colors.WHITE} >{adjustString(address,Config.TOP_ADDRESS_LENGTH)}</CText>
            <CText as={restFont} color={Colors.WHITE} >{distance}</CText>
        </View>
      </View>
  )
}

export default HospitalDetailFrag

const styles = StyleSheet.create({
    gradient : {
        ...StyleSheet.absoluteFillObject,
        justifyContent: 'flex-end',
    }
})