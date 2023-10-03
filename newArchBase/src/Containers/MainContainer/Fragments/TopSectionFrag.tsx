import { StyleSheet, View } from 'react-native'
import React from 'react'
import { useTheme } from '@/Hooks'
import { HGap, IconButton, SearchInput, VGap } from '@/Components'
import { Clickable, CText, FormInput, ImgIcon } from '@/UiLib'
import { Colors, MetricsSizes } from '@/Theme/Variables'
import { navigateToSibling } from '@/Navigators/utils'
import { useSelector } from 'react-redux'
import { adjustString, showToast } from '@/Shared/utils'
import { Config } from '@/Config'

type Props = {}

const TopSectionFrag = (props: Props) => {
  const {location} = useSelector((state : any ) => state.app)
  const { Layout, Colors, Fonts, MetricsSizes,Gutters,Images } = useTheme()

  const goToLocation = () => navigateToSibling('SharedNav','SelectAddScreen')

  const goToNotifications = () => navigateToSibling('NotificatioinNav','NotificationsScreen')

  const address = location?.address || location?.description || 'Select Address'

  const handleSearchClick = (e : any) => {
    e.preventDefault()
    // showToast('Search Clicked','success')
    navigateToSibling('SharedNav','SearchScreen')
  }
  
  return (
    <View style={[Layout.fill , Gutters.SMALLVPadding , Gutters.SMALLHPadding]} >
      <VGap />
      <View style={[Layout.fill,Layout.row , Layout.center , Layout.justifyContentBetween]} >
        <Clickable onPress={goToLocation} >
            <View style={[Layout.rowHCenter]}>
                <ImgIcon icon={Images.locationIcon} size={MetricsSizes.MEDIUM} />
                <HGap />
                <CText as="semi_bs" color={Colors.BRAND_CONTRAST} >{adjustString(address,Config.TOP_ADDRESS_LENGTH)}</CText>
            </View>
        </Clickable>


        <IconButton 
        onPress={goToNotifications}
        style={[styles.notificationBtn]}  
        iconName="bell"
        iconType="Feather"
        />

      </View>


      <Clickable onPress={handleSearchClick} >
        <SearchInput onPressIn={handleSearchClick} keyboardAppearance="dark"  placeholder='Search hospitals, services..' />
      </Clickable>
      {/* <VGap /> */}
    </View>
  )
}

export default TopSectionFrag

const styles = StyleSheet.create({
    notificationBtn : {
        backgroundColor : Colors.BGCOLOR,
        height : MetricsSizes.XLARGE ,
        width : MetricsSizes.XLARGE ,
        justifyContent : 'center',
    }
})