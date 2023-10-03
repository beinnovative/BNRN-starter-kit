import { ScrollView, StyleSheet, View } from 'react-native'
import React from 'react'
import { MainLayout, VGap } from '@/Components'
import { TopSectionFrag } from '../Fragments'
import { useTheme } from '@/Hooks'

const HomeScreen = ({}) => {
  const { Layout } = useTheme()
 
  return (
     <MainLayout topComponent={<TopSectionFrag />} >
        <ScrollView style={[Layout.fill , ]}>
          <VGap />

          
        </ScrollView>
     </MainLayout>
  )
}

export default HomeScreen

const styles = StyleSheet.create({})