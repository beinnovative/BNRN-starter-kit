import { Image, ScrollView, StyleSheet, View } from 'react-native'
import React from 'react'
import { useTheme } from '@/Hooks'
import { BaseButton, Clickable, CText } from '@/UiLib'
import { showToast } from '@/Shared/utils'
import { SectionHeader, VGap } from '@/Components'
import { CategoriesList, ICategory } from '../Res'
import { MetricsSizes } from '@/Theme/Variables'
import { navigateToSibling } from '@/Navigators/utils'
import { useDispatch } from 'react-redux'
import { setCategory } from '@/Store/App'

type Props = {}

const IMG_DIM = MetricsSizes.BASE100
const IMG_RADIUS = IMG_DIM / 5

const CategorySlideFrag = (props: Props) => {
  const { Layout, Colors, Fonts, MetricsSizes,Gutters,Images } = useTheme()
  const dispatch = useDispatch()

   const handleNavigation =  (category: ICategory) => {
      console.log('category', category)
      dispatch(setCategory(category))
      navigateToSibling('SharedNav','SearchScreen')
   }

  const _renderCategory = (item : ICategory) =>{
     let {name,img} = item
     let TEXT_LENGTH = 12
     let trimmedName = name.length > TEXT_LENGTH ? name.substring(0,TEXT_LENGTH) + '...' : name
     return (
        <Clickable style={[Gutters.REGULARRMargin]} onPress={() => handleNavigation(item)} >
            <Image source={{uri : img}} style={[styles.catImg]} /> 
            <VGap />
             <CText as="med_base" align="center"  >{trimmedName}</CText>
        </Clickable>
     )
  }
  return (
    <View style={[Gutters.MEDIUMVPadding]} >
       <SectionHeader onPress={() => navigateToSibling('SharedNav','CategoryScreen')} title="Categories" />
       <VGap />
       <ScrollView horizontal showsHorizontalScrollIndicator={false} >
          {CategoriesList.map((item) => _renderCategory(item))}
       </ScrollView>
    </View>
  )
}

export default CategorySlideFrag

const styles = StyleSheet.create({
    catImg : { //TODO: Work on the naming convention
        height : IMG_DIM,
        width : IMG_DIM,
        borderRadius : IMG_RADIUS,
        resizeMode : 'cover'
    }
})