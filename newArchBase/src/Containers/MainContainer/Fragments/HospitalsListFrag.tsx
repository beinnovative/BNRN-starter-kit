import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { HGap, HospitalCard, RatingsComp, SectionHeader, VGap } from '@/Components'
import { adjustString, showToast } from '@/Shared/utils'
import { useTheme } from '@/Hooks'
import { HospitalsList, IHospital } from '../Res'
import { Clickable, CText } from '@/UiLib'
import { Colors, MetricsSizes } from '@/Theme/Variables'
import { navigateToSibling } from '@/Navigators/utils'
import { FlatList } from 'react-native-gesture-handler'
import { useDispatch } from 'react-redux'
import { setHospital } from '@/Store/App'

type Props = {}


const HospitalsListFrag = (props: Props) => {
  const { Layout, Colors, Fonts, MetricsSizes,Gutters,Images } = useTheme()
  const dispatch = useDispatch()

  const handleSelect = (item : IHospital) => {
      dispatch(setHospital(item))
      navigateToSibling('HospitalNav', 'HospitalDetailsScreen')
  }

  return (
      <View style={[Gutters.MEDIUMVPadding]} >
          <View style={[Gutters.REGULARHPadding]}>
            <SectionHeader 
            onPress={() => showToast('We will See All', 'success')} 
            title="Recommended Hospitals" />

          </View>
          <VGap />

          <FlatList
            data={HospitalsList}
            renderItem={({item,index}) => <HospitalCard onPress={() => handleSelect(item)} key={index} {...item} /> }
            keyExtractor={(item,index) => index.toString()}
            showsVerticalScrollIndicator={false}
            ItemSeparatorComponent={() => <VGap />}
            />
         
         
      </View>
  )
}

export default HospitalsListFrag

const styles = StyleSheet.create({
    
})