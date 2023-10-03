import { Image, ImageBackground, ScrollView, StyleSheet, View } from 'react-native'
import React from 'react'
import { useTheme } from '@/Hooks'
import { BaseButton, Clickable, CText } from '@/UiLib'
import { adjustString, showToast } from '@/Shared/utils'
import { RatingsComp, SectionHeader, VGap } from '@/Components'
import { CategoriesList, HospitalsList, ICategory, IHospital } from '../Res'
import { MetricsSizes } from '@/Theme/Variables'
import HospitalDetailFrag from './HospitalDetailFrag'
import { navigateToSibling } from '@/Navigators/utils'

type Props = {}

const BASE_100 = MetricsSizes.BASE100
const {height : IMG_HEIGHT , width : IMG_WIDTH} =  {height : BASE_100*1.5, width : BASE_100*2.5}
const IMG_RADIUS = IMG_HEIGHT / 6
const TEXT_LENGTH = 12

const HospitalsSlideFrag = (props: Props) => {
    const { Layout, Colors, Fonts, MetricsSizes, Gutters, Images } = useTheme()
    
    const goToHospitalDetail = (item : IHospital) => { //make this function common 
        //Save selected hospital in redux store
        // showToast('We will go to Hospital Detail', 'success')
        navigateToSibling('HospitalNav','HospitalDetailScreen')
    }

    const _renderHospital = (item: IHospital) => {
        let { name, img,status ,distance , address  } = item
        
        return (
            <Clickable style={[Gutters.REGULARRMargin,]} onPress={() => goToHospitalDetail(item)} >
               <ImageBackground source={{ uri: img }} style={[styles.catImg]} >
                  <HospitalDetailFrag 
                  name={adjustString(name , TEXT_LENGTH)} 
                  status={status} distance={distance+ " Km"} 
                  address={adjustString(address,TEXT_LENGTH*2)} />

                  <View style={[styles.topFixed]} >
                    <RatingsComp rating={4.5} />
                  </View>
                </ImageBackground>
            </Clickable>
        )
    }
    return (
        <View style={[Gutters.MEDIUMVPadding]} >
            <SectionHeader onPress={() => showToast('We will See All', 'success')} title="Hospitals Near By" />
            <VGap />
            <ScrollView horizontal showsHorizontalScrollIndicator={false} >
                {HospitalsList.map((item) => _renderHospital(item))}
            </ScrollView>
        </View>
    )
}

export default HospitalsSlideFrag

const styles = StyleSheet.create({
    catImg: { //TODO: Work on the naming convention
        height: IMG_HEIGHT,
        width: IMG_WIDTH,
        borderRadius: IMG_RADIUS,
        resizeMode: 'cover',
        justifyContent: 'flex-end',
        overflow: 'hidden',
    },
    topFixed : {
        position : 'absolute',
        top : 0,
        right : 0,
        zIndex : 1,
        padding : MetricsSizes.SMALL,
    }
})