import { ActivityIndicator, StyleSheet, View } from 'react-native'
import React from 'react'
import { FormInput, IFormInput, ImgIcon } from '@/UiLib'
import { useTheme } from '@/Hooks'

interface ISearchInput extends IFormInput {
    isSearching?: boolean,
}

const SearchInput = ({
    LeftComp,
    RightComp,
    isSearching,
    ...restProps
}: ISearchInput) => {
  const {Images,MetricsSizes,Colors} = useTheme()
  const LeftSide =  LeftComp ? LeftComp : <ImgIcon icon={Images.searchIcon} size={MetricsSizes.MEDIUM} />
  const RightSide = RightComp ? RightComp : isSearching ? <ActivityIndicator size="small" color={Colors.BRAND_COLOR} /> : null

  return (
      <FormInput  //TODO: This is a duplicate search also present in TopSectionFrag.tsx from home screen
        LeftComp={LeftSide}
         RightComp={RightSide}
        {...restProps}
        />
  )
}

export default SearchInput

const styles = StyleSheet.create({})