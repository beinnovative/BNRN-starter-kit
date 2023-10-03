import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useTheme } from '@/Hooks'
import { BaseButton } from '@/UiLib'
import { HGap, IconComp, ImgIcon } from '@/Components'

type Props = {
    changeMode ?: () => void,
    mode ?: 'email' | 'phone'
}

let modeOptions = [
    {
        title : 'Google',
        value : 'google',
        icon : 'logo-google'
    },
    {
        title : "",
        value : 'google', // dummy : TODO: Find logic for this
        icon : ''
    },
    {
        title : 'Email',
        value : 'email',
        icon : 'mail'
    },
    {
        title : 'Phone',
        value : 'phone',
        icon: 'phone-portrait'
    },
]

const AltOptionsFrag = ({mode = 'email' , changeMode}: Props) => {
    const { Layout, Colors, Fonts, MetricsSizes } = useTheme()

    const activeActions  = modeOptions.filter(item => item.value === mode || item.value === "google")

    const handleAction = (value : string) => {
        console.log(value)
        if(value === "google"){
            alert("Google")
        }else{
           changeMode && changeMode()
        }
    }
  return (
      <View style={[Layout.rowHCenter, Layout.justifyContentBetween,]}>
          {
              activeActions.map((item, index) => {
                  if (item.title === "") return <HGap key={index} />
                  return (
                      <View key={index} style={[Layout.fill,]}>
                          <BaseButton
                              LeftComp={<IconComp name={item.icon} size={MetricsSizes.BASE_RADIUS} color={Colors.BLACK} />}
                              variant='outline'
                              fontStyle={{ ...Fonts.semi_rg }}
                              style={{ backgroundColor: Colors.WHITE, }}
                               onPress={() => handleAction(item.value)}
                          >
                              {"   " + item?.title + "   "}
                          </BaseButton>
                      </View>
                  )
              }
              )}
      </View>
  )
}

export default AltOptionsFrag

const styles = StyleSheet.create({})