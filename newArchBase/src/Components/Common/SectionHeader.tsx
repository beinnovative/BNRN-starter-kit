import { StyleSheet, Text, View } from 'react-native'
import React, { ReactNode } from 'react'
import { useTheme } from '@/Hooks'
import { BaseButton, CText } from '@/UiLib'

type Props = {
    title : string,
    onPress?: () => void,
    actionText ?: string,
    hideAction ?: boolean,
    style ?: any,
    RightComp ?: ReactNode
}

const SectionHeader = ({
    title,
    onPress,
    actionText = 'See All',
    hideAction,
    style,
    RightComp
}: Props) => {
    const { Layout, Colors, Fonts, MetricsSizes,Gutters,Images } = useTheme()
  return (
      <View style={[Layout.rowHCenter, Layout.justifyContentBetween , style]}>
          <CText as="sectionTitle"  >{title}</CText>
          {
            hideAction || !!RightComp ? null : 
            <BaseButton onPress={onPress} variant="plain" >
                <CText as="med_rg" color={Colors.TEXT_LIGHT} >{actionText}</CText>
            </BaseButton>
          }

         {RightComp}
        
      </View>
  )
}

export default SectionHeader

const styles = StyleSheet.create({})