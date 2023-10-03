import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useTheme } from '@/Hooks'
import ImgBadge from './ImgBadge'
import { IReview, IActionButton } from '@/Containers/HospitalContainer/Res' //TODO: Make a common interface for this
import { BaseButton, CText } from '@/UiLib'
import { format } from 'date-fns'
import TapRating from './TapRating'
import { Hr, VGap } from './Seperators'
import { IconComp } from '.'
import { Colors } from '@/Theme/Variables'

type Props = {
  reviewObj : IReview,
  onLike ?: () => void,
  onDislike ?: () => void,
}

const ReviewCard = ({
  reviewObj,
  onLike = () => {},
  onDislike = () => {}
}: Props) => {
  const { Layout, Fonts, Colors, Images, MetricsSizes,Gutters } = useTheme()
  let { profile, rating, review , likes , dislikes,date } = reviewObj

  const _renderButton = ({title ,onPress , icon,variant } : IActionButton) =>{
    // TODO: Make a common button for this , It is used in many places
      const isSelected = variant === 'selected'
      const color = isSelected ? Colors.WHITE : Colors.TEXT

      return (
        <BaseButton variant="tagButton" onPress={onPress} 
          style={[Gutters.TINYRMargin, styles.defaultButton , isSelected && styles.selectedButton ]} >
          <View style={[Layout.rowHCenter]} >
            {
              !!icon ?
                <IconComp name={icon.name} type={icon.iconType} color={color} size={MetricsSizes.MEDIUM} />
                : null
            }
            <CText as="med_rg" color={color}  > {title}</CText>
          </View>
        </BaseButton>
      )
  }


  return (
    <View style={[Gutters.SMALLVPadding]} >

      {/* Headers Section Starts */}
      <View style={[Layout.rowHCenter, Layout.justifyContentBetween]} >
        <View style={[Layout.alignItemsCenter]} >
          <ImgBadge variant="profile" size={MetricsSizes.XXLARGE} source={{uri : profile.profileImg}} />
          <VGap />
          {/* Ratings Section Starts */}
          <TapRating rating={rating} width={MetricsSizes.RATING_SMALL} />
          {/* Ratings Section Ends */}
         
        </View>
        <View style={[Layout.fill,Layout.fullHeight,Gutters.REGULARHMargin,]} >
          <CText as="semi_bs" >{profile.name}</CText>
          <CText as="reg_sm" color={Colors.TEXT_LIGHT} >
            {format(new Date(date), 'dd MMM yyyy')}
          </CText>
        </View>
      </View>
      {/* Headers Section Ends */}
      <VGap />

      

      {/* Review Section Starts */}
      <CText as="reg_rg" >{review}</CText>
      {/* Review Section Ends */}
      <VGap />

      {/* Likes Section Starts */}
      <View style={[Layout.rowHCenter, ]} >
        {_renderButton({ title: 'Helpful', onPress: onLike, icon: { type: 'icon', name: 'thumbs-up' , iconType : 'Feather'},   })}

        {_renderButton({ title: 'Not Helpful', onPress: onDislike, icon: { type: 'icon', name: 'thumbs-down' , iconType : 'Feather'}})}
      </View>
      
      <Hr/>
    </View>
  )
}

export default ReviewCard

const styles = StyleSheet.create({
  defaultButton: {
    borderWidth: 1,
    borderColor: Colors.OUTLINE
  },
  selectedButton: {
    backgroundColor: Colors.BRAND_COLOR,
    borderWidth: 0,
  },
})