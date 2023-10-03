import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { useTheme } from '@/Hooks'
import { CText } from '@/UiLib'
import RatingStar from './RatingStar'

/**
 * @description - This component  shows ratings stars and allows user to rate           
 * @param {boolean} disabled - disable the rating
 * @param {number} max - maximum rating
 * @param {number} rating - current rating
 * @param {function} onRate - callback when rating is changed
 * @param {number} size - size of the star
 */

type Props = {
    disabled ?: boolean,
    max ?: number,
    rating ?: number,
    onRate ?: () => void,
    size ?: number,
    width ?: number,
    gapFactor ?: number

}

const TapRating = ({
    disabled = false,
    max = 5,
    rating = 0,
    onRate,
    size,
    width,
    gapFactor = 0.5
}: Props) => { 
  const [ratingArr , setRatingArr] = React.useState<number[]>([])

  const { Layout, Colors, Fonts, MetricsSizes,Gutters,Images } = useTheme()
  size = size ? size :width ? width/(max*(1+gapFactor)) :  MetricsSizes.MEDIUM // default size
  width = width || MetricsSizes.SCREEN_WIDTH // default width

  useEffect(() => {
    const fullStar = Math.floor(rating)
    const halfStar = rating - fullStar > 0 ? 1 : 0
    const fullStarArr = Array(fullStar).fill(1)
    const halfStarArr = Array(halfStar).fill(0.5)
    const emptyStarArr = Array(max - fullStar - halfStar).fill(0)

    setRatingArr([...fullStarArr, ...halfStarArr, ...emptyStarArr])

    }, [rating])

  return (
    <View style={[Layout.rowHCenter,]} >
        {ratingArr.map((item,index) => <RatingStar key={index} size={size} rating={item} onPress={() => onRate && onRate()} />)}
    </View>
  )
}

export default TapRating

const styles = StyleSheet.create({})