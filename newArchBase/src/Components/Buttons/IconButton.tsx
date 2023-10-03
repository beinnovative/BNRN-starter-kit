import { ImageSourcePropType, StyleSheet,View } from 'react-native'
import React from 'react'
import {  IconComp, ImgIcon } from '../Common'
import { useTheme } from '@/Hooks'
import { MetricsSizes } from '@/Theme/Variables'
import { IconType } from '@/Types/Generaltypes'
import { Clickable } from '@/UiLib'

type Props = {
  imgIcon?: ImageSourcePropType,
  size?: number,
  onPress?: () => void,
  color?: string,
  bgColor ?: string,
  rounded?: boolean,
  style?: any
  children?: React.ReactNode,
  iconName?: string
  iconType?: IconType
  iconSize?: number

}

const { SMALL, TINY } = MetricsSizes
const DIM = SMALL * 5


const IconButton = ({
  onPress,
  imgIcon,
  size,
  color,
  bgColor,
  style,
  iconName,
  iconType = 'Ionicons',
  iconSize = DIM * 0.4
}: Props) => {
  const { Colors } = useTheme()
  return (
    <Clickable onPress={onPress}>
      <View style={[styles.icon, style,bgColor && {backgroundColor: bgColor,} ]}>
        {
          imgIcon ? (
            <ImgIcon icon={imgIcon} size={size || 30} />
          ) : (
            <IconComp
              type={iconType}
              name={iconName || 'ios-camera-outline'}
              size={iconSize}
              color={color || Colors.PRIMARY}
              onPress={onPress}
            />
          )}
      </View>
    </Clickable>
  );
}

export default IconButton

const styles = StyleSheet.create({
  icon: {
    padding: TINY,
    height: DIM,
    width: DIM,
    borderRadius: DIM / 2,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
    // borderWidth :0,
  }
})
