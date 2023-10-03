import { StyleSheet, View } from 'react-native'
import React from 'react'
import { useTheme } from '@/Hooks'
import { HospitalCard, SectionHeader } from '@/Components'
import { FlatList } from 'react-native'
import { IHospital } from '@/ApiServices/interfaces'
import { HospitalDetailFrag } from '@/Containers/MainContainer/Fragments'
import { navigateToSibling } from '@/Navigators/utils'
import { CText } from '@/UiLib'

type Props = {
    title : string,
    resultsList : IHospital[],
    recommendedHospitals : IHospital[]
}

const SearchRespFrag = ({
    title,
    resultsList,
    recommendedHospitals
}: Props) => {

  const {Colors, Images, MetricsSizes,Gutters} = useTheme()
  const goToHospitalDetails = () => {
    navigateToSibling('HospitalNav', 'HospitalDetailsScreen')
    
  }
   
   const resultsLength = resultsList?.length

   title = resultsLength ? 'All Hospitals' : 'Recommended'
 
  return (
    <View>
      <SectionHeader 
      title={title} 
      RightComp ={resultsLength && <CText as="med_rg" >{resultsLength} Hospitals Found</CText>}
      style={[Gutters.REGULARMargin]} />
      <FlatList 
        data={resultsList || recommendedHospitals}
        renderItem={({item,index}) => <HospitalCard onPress={goToHospitalDetails}  {...item} key={index} />}
        keyExtractor={(item,index) => index.toString()}
        />

    </View>
  )
}

export default SearchRespFrag

const styles = StyleSheet.create({})