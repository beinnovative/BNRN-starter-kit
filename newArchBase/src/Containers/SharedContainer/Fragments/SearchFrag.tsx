import { FlatList, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { useTheme } from '@/Hooks'
import { SearchInput } from '@/Components'
import { BaseButton } from '@/UiLib'
import { ISearchFilter, SearchFilters } from '../Res'

type Props = {}


const SearchFrag = (props: Props) => {
  const { Layout, Fonts, Colors, Images, MetricsSizes, Gutters } = useTheme()
    const [filtersArr, setFiltersArr] = useState<Array<ISearchFilter>>(SearchFilters)

  
  return (
    <View style={[Gutters.SMALLVPadding]} >
         
         <SearchInput parentStyle={[Gutters.REGULARHPadding]} autoFocus={false} placeholder="Search for doctors, hospitals, clinics" />

         
         <FlatList
            data={filtersArr}
            renderItem={({item,index}) => <BaseButton as="med_lg" style={[Gutters.REGULARLMargin]} variant="pill" key={index} >{item?.title}</BaseButton>}
            keyExtractor={(item,index) => index.toString()}
            horizontal
            showsHorizontalScrollIndicator={false}
        />


    </View>
  )
}

export default SearchFrag

const styles = StyleSheet.create({})