import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Colors } from '@/Theme/Variables';
import { useTheme } from '@/Hooks';
import Animated from 'react-native-reanimated';
import { TabItem } from '@/Components';
import { ImgIcon } from '@/UiLib';

type Props = {}

const tabs: any = {
  Home: {
    labelStyle: {
      color: '#5B37B7',
    },
    icon: {
      component: <Ionicons name="home" size={24} />,
      activeColor: '#5B37B7',
      inactiveColor: 'rgba(255,255,255,1)',
    },
    background: {
      activeColor: '#5B37B756',
      inactiveColor: '#fff',
    },
  },
  Progress: {
    labelStyle: {
      color: '#5B37B7',
    },
    icon: {
      component: <Ionicons name="bar-chart" size={24} />,
      activeColor: '#5B37B7',
      inactiveColor: 'rgba(255,255,255,1)',
    },
    background: {
      activeColor: '#5B37B756',
      inactiveColor: '#fff',
    },
  },
};




const TabBarFragment = (props: any) => {

    const {Images , MetricsSizes } = useTheme()

    const _renderIcon = (label:string,isFocused :boolean) => {
        let size = MetricsSizes.LARGE
        switch (label.toLowerCase()) {
            case 'home':
                return <ImgIcon icon={isFocused ? Images.homeIconActive  : Images.homeIcon} size={size} />
                break;
            case 'get care':
                return <ImgIcon icon={isFocused ? Images.getCareIconActive  : Images.getCareIcon} size={size} />;
                break;
            case 'account':
                return <ImgIcon icon={isFocused ? Images.accountIconActive  : Images.accountIcon} size={size} />;
                break;

        
            default:
                break;
        }
    };
  return (
    <View style={styles.container} > 
     {
        props?.state?.routes.map((route : any, index : number) => {
        return <TabItem key={index} {...props} route={route} _renderIcon={_renderIcon} index={index} />
        })
     }
    </View>
  )
}

export default TabBarFragment

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        flexDirection: 'row',
        borderTopWidth: 0.5,
        borderTopColor: '#ccc',
        justifyContent: 'space-around',
        alignItems: 'center',
        padding: 5,

    },
   
})