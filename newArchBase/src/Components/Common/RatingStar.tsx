import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Clickable } from '@/UiLib'
import IconComp from './IconComp'
import { useTheme } from '@/Hooks'

/**
 * TODO: Add description
 * @description shows rating stars in three states , empty , half , full
 * @param {number} rating - rating value can be 0 ,0.5 and 1
 * @param {boolean} outline - outline the container
 * @param {number} size - size of the star
 * @param {string} color - color of the star
 * @param {function} onPress - callback when star is pressed
 */

type Props = {
    rating : number,
    outline ?: boolean,
    size ?: number,
    color ?: string,
    onPress ?: () => void

}

const RatingStar = ({
    rating = 4.5,
    outline = false,
    size = 24,
    color ,
    onPress
}: Props) => {
  const { Layout, Colors, Fonts, MetricsSizes,Gutters,Images } = useTheme()
  
  
  return (
    <Clickable onPress={onPress} style={[{marginHorizontal : size/6}]} >
       <IconComp 
       name={!rating ? "star-o" : rating === 0.5 ? "star-half-o" : "star"} 
       type="FontAwesome"
       color={color || Colors.BASE_YELLOW} 
       size={size} />
    </Clickable>
  )
}

export default RatingStar

const styles = StyleSheet.create({})