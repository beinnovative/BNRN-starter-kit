import { Image, ImageSourcePropType, StyleSheet, Text, View } from 'react-native'
import React, { useMemo } from 'react'
import { Cardwrapper, GradientCard } from '../Wrappers'
import { useTheme } from '@/Hooks'
import { MetricsSizes } from '@/Theme/Variables'
import { CText } from '.'
import { ImgIcon } from '@/UiLib'

type Props = {
    size ?:number;
    variant ?: 'logo' | 'profile' ,
    source ?: ImageSourcePropType,
    factor ?: number,
    borderWidth ?: number,
    elevated ?: boolean,
    color ?: string,
}



const ImgBadge = ({ size, 
    variant , 
    source, 
    factor = 0.5, 
    borderWidth = 2, 
    elevated, 
    color }: Props) => {
    const {Images,Colors} = useTheme()

    const BADGE_DIM = useMemo(() => size || MetricsSizes.SMALL * 10 , [size])
    const ImgSource = useMemo(() =>  source ||  Images.logo , [variant, source])
    const FACTCOR = useMemo(() => variant === 'logo' ? 0.5  : variant === 'profile' ? 1:  factor, [variant])

    const styles = useMemo(() => StyleSheet.create({
        container: {
            width: BADGE_DIM,
            height: BADGE_DIM,
            borderRadius: BADGE_DIM / 2,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: color || Colors.BRAND_COLOR,
        },
        img: {
            width: BADGE_DIM * FACTCOR,
            height: BADGE_DIM * FACTCOR,
        }
    })
        , [BADGE_DIM, FACTCOR,color])
  return (
      <Cardwrapper elevated={elevated} style={styles.container}>
          <ImgIcon icon={ImgSource} style={styles.img} />
      </Cardwrapper>
  )
}

export default ImgBadge
