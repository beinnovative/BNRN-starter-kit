import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useTheme } from '@/Hooks'
import { Clickable, CText } from '@/UiLib'
import { HGap, ImgBadge, VGap } from '@/Components'
import { INotification } from '../Res'
import { adjustString } from '@/Shared/utils'

type Props = {
  notifications ?: INotification[],
}

//Fragment for showing address lists
const NotificationListFrag = ({
  notifications 
}: Props) => {
  const { Layout, Colors, Fonts, MetricsSizes,Gutters,Images } = useTheme()

  const getIcons = (type : string) => {
    switch(type){
      case 'notification' : 
        return { icon: Images.locationIcon, color: Colors.SUCCESS }
      case 'message' :
        return { icon: Images.logo , color : Colors.SUCCESS}
      case 'alert' :
        return { icon: Images.locationIcon , color : Colors.ALERT}
     
    }
  }
  
  const _renderNotification = (notification : INotification , index : number) => {
    
    const {id , title, description='' , type , dateTime} = notification
    //remove white spaces at the start and end of the string
    const message = adjustString(description, 75)
    const {icon , color} = getIcons(type)

    return (
      <Clickable key={index}  
      style={[Layout.rowHCenter,Layout.fill,Layout.justifyContentBetween,Gutters.REGULARTMargin]}>
        <ImgBadge source={icon} size={MetricsSizes.XLARGE} color={color} />
        {/* ImgBadge Uses CardWrapper , TODO: Bring Card Wrapper to Format */}
        <HGap />
        <View style={[Layout.fill,Layout.justifyContentCenter]} >
        <CText as="med_rg"  >{message}</CText>
        </View>

        <HGap />

        <View style={[Gutters.SMALLLMargin,Layout.fullHeight,]} >
          <CText as="reg_sm" color={Colors.TEXT_LIGHT}  >{index+1+' hr'}</CText>
        </View>
      </Clickable>
    )
  }
  return (
    <View style={[Layout.fill,]} >
       <FlatList
        data={notifications}
        renderItem={({item,index}) => _renderNotification(item,index)}
        />
    </View>
  )
}

export default NotificationListFrag

const styles = StyleSheet.create({})