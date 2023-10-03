import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useTheme } from '@/Hooks'
import { CText } from '@/UiLib'
import { DefaultLayout, EmptyComponent, VGap } from '@/Components'
import { StackNavigationProp } from '@react-navigation/stack'
import { goBack } from '@/Navigators/utils'
import { NotificationListFrag } from '../Fragments'
import { notificationsList as notifications } from '../Res'

type Props = {
    
}

const EMPTY_NOTIFICATION_TEXT = "Notifications about hospitals listing, services and medical care will be show up here."
//TODO: Move it to a common file

const NotificationScreen = (props: any) => { //TODO: Fix this type . It is because of navigation
    const { Layout, Colors, Fonts, MetricsSizes,Gutters,Images } = useTheme()
    const notificationsList = notifications 
  return (
    <DefaultLayout noScroll headerTitle="Notifications" onBackPress={goBack} >
      <View style={[Layout.fill,Gutters.REGULARHPadding]}>
        <VGap />
        <CText as="sectionTitle" >All Notifications</CText>
        {
          notificationsList?.length ?
          <NotificationListFrag notifications={notificationsList} />
          :
          <EmptyComponent icon={Images.nullNotificationIcon} text={EMPTY_NOTIFICATION_TEXT} />
        }
      </View>
    </DefaultLayout>
  )
}

export default NotificationScreen

const styles = StyleSheet.create({})