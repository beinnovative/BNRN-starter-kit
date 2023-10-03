import {ActivityIndicator, PermissionsAndroid, StyleSheet, Text, TouchableOpacityProps, Vibration, View} from 'react-native';
import React, {useRef, useState} from 'react';
import {useTheme} from '@/Hooks';
import {FlatList, TouchableOpacity} from 'react-native-gesture-handler';
import {Colors, MetricsSizes} from '@/Theme/Variables';
import {
  Cardwrapper,
  FullScreenLoader,
  HGap,
  IconComp,
  LayoutDefault,
  PrimaryButton,
  CText as TxtComp,
  VGap,
  AuthLayout,
} from '@/Components';
import { runOnJS } from 'react-native-reanimated';
import { useEffect } from 'react';
import Lottie from 'lottie-react-native';
import { LottieScanner } from '@/Assets/Lottie/lottiefiles';
import PopupWrapper from '@/Components/Wrappers/PopUpWrapper';
import {Loader} from '@/Components';
import { AutoImage, WithLoading, CText, BaseButton, FormInput, ImgIcon, OtpInput } from '@/UiLib';

type Props = {};

const CARD_DIM = MetricsSizes.SCREEN_WIDTH * 0.85;

const ExampleFragment = (props: Props) => {
  const {Layout, Colors, Images,Common,Fonts,Gutters,MetricsSizes} = useTheme();

  return(
     <View style={[Layout.fill ,Gutters.SMALLHPadding ,{backgroundColor: Colors.BGCOLOR,}]}>
       {/* <CText as="bold_md"> Hello World </CText> */}
       {/* <OtpInput /> */}
       <Text>hello here we go</Text>
     </View>
  )
};


const InlineButton = ({ onPress } : any) => (
  <CText style={styles.text}>
    Don't have an account?
    <TouchableOpacity onPress={onPress}>
      <CText style={styles.buttonText}> Create </CText>
    </TouchableOpacity>
  </CText>
);


export default WithLoading(ExampleFragment) ;

const styles = StyleSheet.create({
  mainContainer: {
    paddingHorizontal: MetricsSizes.MEDIUM,
    height: MetricsSizes.SCREEN_HEIGHT,
  },
  listContainer: {
    backgroundColor: Colors.WHITE,
    padding: MetricsSizes.TINY,
  },
  scanContainer:{
    height: MetricsSizes.SCREEN_HEIGHT,
    width: MetricsSizes.SCREEN_WIDTH,
    // backgroundColor: Colors.TRANSLUSCENT_WHITE,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: 0,
    left: 0,

  },
 
  scanBox: {
    height: MetricsSizes.BASE100*2.5,
    width: MetricsSizes.BASE100*2.5,
    borderWidth: 2,
    borderRadius: MetricsSizes.LARGE,
    borderColor: Colors.WHITE,
    backgroundColor: Colors.TRANSPARENT,
    
  },
  floatbtn: {
    position: 'absolute',
    bottom: MetricsSizes.XXLARGE,
    right: 10,
    backgroundColor: Colors.LIGHT_GRAY,
    height: MetricsSizes.XXLARGE,
    width: MetricsSizes.XXLARGE,
    borderRadius: MetricsSizes.XXLARGE/2,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 4,
  },

  text: {
    fontSize: 16,
  },
  buttonText: {
    fontSize: 16,
    color: 'blue',
    textDecorationLine: 'underline'
  },
});
