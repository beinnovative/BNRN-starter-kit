import { StyleSheet } from 'react-native'
import { CommonParams } from '@/Theme/theme'

export default function <C>({ Colors, Gutters, Layout,Fonts , MetricsSizes }: CommonParams<C>) {
  const base = {
    ...Layout.center,
    ...Layout.rowHCenter,
    borderRadius: MetricsSizes.BASE_RADIUS,
    height: MetricsSizes.BASE_HEIGHT,
    backgroundColor: Colors.ACTION,
  }
  const rounded = {
    ...base,
    borderRadius: MetricsSizes.LARGE,
  }

  const outline = {
    ...base,
    backgroundColor: Colors.TRANSPARENT,
    borderWidth: 2,
    borderColor: Colors.OUTLINE,
  }

  const plain = {
    padding : 0,
    margin:0,
    ...Layout.center
  }

  const tagButton = {
    borderRadius: MetricsSizes.BASE_RADIUS,
    borderWidth: 1,
    borderColor: Colors.WHITE+'80',
    backgroundColor: Colors.WHITE+'50',
    ...Gutters.TINYVPadding ,
    ...Gutters.REGULARHPadding,
    ...Layout.center,
  }

  const pill ={
    borderRadius: MetricsSizes.BASE_RADIUS,
    borderWidth: 1,
    borderColor: Colors.OUTLINE,
    backgroundColor: Colors.WHITE,
    ...Gutters.TINYTPadding,
    ...Gutters.REGULARHPadding,
    ...Layout.center,
  }




  return StyleSheet.create({
    base ,
    rounded ,
    plain,
    outline: {
      ...base,
      ...outline,
    },
    outlineRounded: {
      ...rounded,
      ...outline,
    },
    tagButton,
    pill
  })
}
