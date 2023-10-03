import { StyleSheet, View } from 'react-native'
import React from 'react'
import { useTheme } from '@/Hooks'
import { DefaultLayout, SearchInput } from '@/Components'
import { BaseButton, CText } from '@/UiLib'
import { goBack } from '@/Navigators/utils'
import { SearchFrag, SearchRespFrag } from '../Fragments'
import { HospitalsList } from '@/ApiServices/data'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import { IHospital } from '@/ApiServices/interfaces'

type Props = {}

const SearchScreen = (props: Props) => {
  const { Layout, Fonts, Colors, Images, MetricsSizes, Gutters } = useTheme()
  const {category} = useSelector((state : any ) => state.app)

  const [searchText, setSearchText] = React.useState('')
  const [recommendHospitals , setRecommendedHospitals] = useState(HospitalsList)
  const [searchResults, setSearchResults] = React.useState<IHospital[]>() //TODO: Provide it with the interface

  let headerTitle = !!category ? category.name : 'Search'
  let searchRespTitle = searchResults?.length ? 'Search Results' : 'Recommended'

  return (
     <DefaultLayout headerTitle={headerTitle} onBackPress={goBack} noScroll >
      
      <SearchFrag />
      <SearchRespFrag title={'Recommended'} recommendedHospitals={recommendHospitals} searchResult={searchResults} />
     </DefaultLayout>
  )
}

export default SearchScreen

const styles = StyleSheet.create({})