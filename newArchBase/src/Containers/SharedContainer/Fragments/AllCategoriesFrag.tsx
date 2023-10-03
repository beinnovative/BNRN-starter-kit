import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useTheme } from '@/Hooks'
import { IconComp, SectionHeader } from '@/Components'
import { Clickable, CText, ImageComp } from '@/UiLib'
import { CategoriesList, ICategory } from '@/Containers/MainContainer/Res' //get this list from api call then through react query cache.
import { FlatList } from 'react-native'
import { Colors, MetricsSizes } from '@/Theme/Variables'



type Props = {
  onPress ?: (item : ICategory) => void
}

const AllCategoriesFrag = ({
  onPress
}: Props) => {
  const {Layout, Colors,  MetricsSizes,Gutters } = useTheme()

    const _renderCategory = ({item} : {item : ICategory}) => {
        const description = item?.count ? `${item.count} ${item?.count > 1 ? 'Hospitals' : 'Hospital'} available` : ''
        return (
            <Clickable onPress={() => onPress && onPress(item)} 
            style={[Layout.rowHCenter,Gutters.TINYVMargin,Gutters.REGULARPadding,styles.container]} >
              
            <ImageComp source={{uri : item.img}} style={[styles.img]} />
            <View style={[Gutters.SMALLHMargin,Layout.fill]}>
                <CText as="med_rg" >{item.name}</CText>
                <CText as="sm_rg" color={Colors.TEXT_LIGHT} >{description}</CText>
            </View>

            <IconComp name="chevron-forward" color={Colors.TEXT_LIGHT} size={MetricsSizes.MEDIUM} />
            </Clickable>
        )
    }

  return (
    <View style={[Layout.fill]} >
      <FlatList 
        data={CategoriesList as ICategory[]}
        renderItem={_renderCategory}
        keyExtractor={(item) => item.id.toString()}
        ListHeaderComponent={<SectionHeader title="All Categories" hideAction style={[Gutters.REGULARHMargin]} />}
        />
      
    </View>
  )
}

export default AllCategoriesFrag

const styles = StyleSheet.create({
    img: { 
        width: MetricsSizes.XXLARGE, 
        height: MetricsSizes.XXLARGE,
        borderRadius: MetricsSizes.REGULAR,
        overflow: 'hidden',
    },
    container : {
        backgroundColor: Colors.WHITE,
    }
})