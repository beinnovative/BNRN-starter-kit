import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { DefaultLayout, IconComp, SearchInput, VGap } from '@/Components'
import { BaseButton, CText, FormInput, ImgIcon } from '@/UiLib'
import { goBack, navigate } from '@/Navigators/utils'
import { useFetchData, usePost, useTheme } from '@/Hooks'
import { AddressListFrag } from '../Fragments'
import { IAddress, IPredection, recentAddress, recommendedAddress } from '../Res'
import { IPlacesAutocomplete } from '@/ApiServices/interfaces'
import { getPlacesAutoComplete } from '@/ApiServices'
import { showToast } from '@/Shared/utils'
import { useDispatch, useSelector } from 'react-redux'
import { setLocation } from '@/Store/App'

type Props = {}

const SelectAddScreen = (props: Props) => {
  const { Layout, Colors, Fonts, MetricsSizes, Gutters,Images } = useTheme()
  const [searchText, setSearchText] = React.useState('')
  const { recentLocations} = useSelector((state : any ) => state.app)
  const dispatch = useDispatch()

  const goToMap = () => showToast('We will go to Map', 'success')
  
  const selectLocation = (location : IPredection | IAddress  ) => {
    dispatch(setLocation(location))
    navigate('MainNav') 
  }

  const {data , isLoading , error} = useFetchData(['placesAutoComplete',searchText],() => getPlacesAutoComplete({input:searchText}),{
                                      enabled: searchText.length > 2
                                    })
   
  const handleSearch = (text: string) => {
    console.log(text)
    setSearchText(text)
  }

  return (
    <DefaultLayout headerTitle='Change Address' onBackPress={goBack} noScroll >
       <View style={[Layout.fill,Gutters.REGULARHPadding]}>


        {/* Search Input Starts */}
            <SearchInput 
            isSearching={isLoading && searchText.length > 2} 
            onChangeText={handleSearch} 
            placeholder='Search street, area, landmark..' />

        {/* Search Input Ends */}

        {/* Current Location Starts */}

            <BaseButton onPress={goToMap} variant="outline" style={{borderColor : Colors.BASE_YELLOW,backgroundColor: Colors.WHITE,}} >
                <View style={[Layout.rowHCenter,Layout.fill,Layout.justifyContentBetween,]}>
                    <ImgIcon icon={Images.currentLocationIcon} size={MetricsSizes.MEDIUM} />
                    <CText as="semi_bs" color={Colors.BASE_YELLOW} >Use current location</CText>
                    <IconComp name="chevron-right" type="Feather" color={Colors.BASE_YELLOW} size={MetricsSizes.MEDIUM} />
                </View>
            </BaseButton>

        {/* Current Location Ends */}
        <VGap />
        {/* Address Lists Fragment */}
          <AddressListFrag 
          onLocationPress={selectLocation}
          recentLocations={recentLocations} 
          recommendedLocations={recommendedAddress} 
          searchResults={data?.predictions}
          />
       </View>
    </DefaultLayout>
  )
}

export default SelectAddScreen

const styles = StyleSheet.create({})