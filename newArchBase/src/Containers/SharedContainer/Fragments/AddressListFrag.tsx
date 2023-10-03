import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { IAddress, IPredection } from '../Res'
import { useTheme } from '@/Hooks'
import { Clickable, CText } from '@/UiLib'
import { HGap, ImgBadge, VGap } from '@/Components'
import { adjustString } from '@/Shared/utils'

type Props = {
  recentLocations ?: IAddress[],
  recommendedLocations ?: IAddress[],
  searchResults : IPredection[],
  onLocationPress ?: (location : IAddress | IPredection) => void
}

//Fragment for showing address lists
const AddressListFrag = ({
  recentLocations,
  recommendedLocations,
  searchResults,
  onLocationPress
}: Props) => {
  const { Layout, Colors, Fonts, MetricsSizes,Gutters,Images } = useTheme()
  const [results , setResults] = React.useState<IPredection[]>(searchResults)
  
  const _renderLocation = (location : IAddress | IPredection , index : number) => {
    let address : string = ''; 
       //TODO: Check if location is IAddress or IPredection
    if('description' in location){
      address = location.description
    }else{
      address = location.address
    }
  
    return (
      <Clickable key={index}  onPress={() => onLocationPress && onLocationPress(location)}
      style={[Layout.rowHCenter,Layout.fill,Layout.justifyContentBetween,Gutters.REGULARTMargin]}>
        <ImgBadge source={Images.locationIcon} size={MetricsSizes.XLARGE} />
        {/* ImgBadge Uses CardWrapper , TODO: Bring Card Wrapper to Format */}
        <HGap />
        <View style={[Layout.fill,Layout.justifyContentCenter]} >
        <CText as="semi_bs"  >{adjustString(address,70)}</CText>
        </View>
      </Clickable>
    )
  }

  useEffect(() => {
    if (searchResults?.length > 0) setResults(searchResults)
  },[searchResults])
  return (
    <ScrollView style={[Layout.fill,]} showsVerticalScrollIndicator={false} >
      {
        results && results.length > 0 ?
        <View style={[Layout.fill,]} >
          <CText as="sectionTitle">Search Results</CText>
          {/* Search Results List */}
          {results.map((result,index) => _renderLocation(result,index))}
        </View>
        : null
      }
      <VGap />
      {
        recentLocations && recentLocations.length > 0 ?
        <View style={[Layout.fill,]} >
          <CText as="sectionTitle">Recent Locations</CText>
          {/* Recent Locations List */}
          {recentLocations.map(_renderLocation)}
        </View>
        : null
      }
      <VGap />
      {
        recommendedLocations && recommendedLocations.length > 0 ?
        <View style={[Layout.fill,]} >
          <CText as="sectionTitle">Recommended Location</CText>
          {/*  Locations List */}
          {recommendedLocations.map(_renderLocation)}
        </View>
        : null
      }
    </ScrollView>
  )
}

export default AddressListFrag

const styles = StyleSheet.create({})