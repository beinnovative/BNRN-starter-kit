import { StyleSheet, View } from 'react-native'
import React from 'react'
import { useTheme } from '@/Hooks'
import { FullScreenLayout, VGap } from '@/Components'
import { AllCategoriesFrag, CategoryTopFrag } from '../Fragments'
import { ICategory } from '@/ApiServices/interfaces'
import { useDispatch } from 'react-redux'
import { setCategory } from '@/Store/App'
import { navigate } from '@/Navigators/utils'

type Props = {}

const CategoriesScreen = (props: Props) => {
  const {Layout} = useTheme()
  const dispatch = useDispatch()

  const handleClick = (category : ICategory) => {
    console.log('category', category)
    dispatch(setCategory(category))
    navigate('SearchScreen')
  }

  return (
   <FullScreenLayout noScroll >
        <CategoryTopFrag />

        <View style={[Layout.fill , ]}>
            <VGap />
            {/* Categories list start */}
            <AllCategoriesFrag onPress={handleClick} />
            {/* Categories list end */}
           
        </View>
   </FullScreenLayout>
  )
}

export default CategoriesScreen