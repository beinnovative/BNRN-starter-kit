import { Image, Keyboard, StatusBar, StyleSheet, Text, View } from 'react-native'
import React, { ReactNode } from 'react'
import { BaseButton, CText } from '@/UiLib'
import { useTheme } from '@/Hooks'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import ImageComp from '@/UiLib/atoms/ImageComp'
import { MetricsSizes } from '@/Theme/Variables'
import { navigateAndSimpleReset } from '@/Navigators/utils'

const RADIUS = MetricsSizes.BASE_RADIUS * 1.5

type Props = {
    children?: ReactNode
}

const AuthLayout = ({
    children
}: Props) : any => {
  const { Layout, Fonts, Colors, Images, MetricsSizes,Gutters } = useTheme()
  return(
    <View style={[Layout.fullSize]}>
      <StatusBar hidden backgroundColor={Colors.BRAND_COLOR} />
      <KeyboardAwareScrollView style={[Layout.fill]} >
          <View style={[Layout.fullWidth , styles.imgContainer]}>
            <ImageComp source={Images.loginBg} />
            <BaseButton variant="tagButton" 
             onPress={() => navigateAndSimpleReset('MainNav')}
             style ={[styles.fixedBtn]}  
            fontStyle={[Fonts.reg_rg, { color: Colors.TEXT }]} >
              Do It Later
            </BaseButton>

          </View>

          <View style={[Layout.fill, Gutters.REGULARHPadding]}>
           {children}
           </View>
      </KeyboardAwareScrollView>
    </View>
  )
}

export default AuthLayout

const styles = StyleSheet.create({
    imgContainer : {
        height : MetricsSizes.SCREEN_HEIGHT * 0.25,
        borderBottomLeftRadius : RADIUS ,
        borderBottomRightRadius : RADIUS ,
        overflow : 'hidden',
    },
    fixedBtn : {
        position : 'absolute',
        bottom : '30%',
        right : 0,
        margin : MetricsSizes.BASE_RADIUS,
    }
})