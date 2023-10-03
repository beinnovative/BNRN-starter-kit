import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { useTheme } from '@/Hooks'
import { BaseButton, FormInput } from '@/UiLib'
import { IconComp } from '@/Components'

type Props = {
    type ?: 'signup' | 'signin',
    value ?: string,
    setValue ?: (value: string) => void
}


const PhoneInputFrag = ({
    type = 'signup',
    value = "",
    setValue,

}: Props) => {
    const [error , setError] = React.useState<string | undefined>(undefined)

    const { Layout, Colors,MetricsSizes } = useTheme()

    const handleCheck = () => {
        const regex = /^[0-9]{10}$/
        if(!regex.test(value) ){
            // if(value.length < 10) return;
            setError("Invalid mobile number")
        }else{
            setError(undefined)
        }
    }

    useEffect(() => {
        if(value.length === 10){
            handleCheck()
        }
    }, [value])
  return (
    <View  >
        <FormInput
            onChangeText={setValue}
            onBlur={handleCheck}
            error={error}
            maxLength={10}
            keyboardType='phone-pad'
            placeholder='Enter mobile number'
            LeftComp={<IconComp name="phone" type="SimpleLineIcons" size={MetricsSizes.BASE_RADIUS} color={Colors.TEXT_LIGHT} />}
        />

       
    </View>
  )
}

export default PhoneInputFrag

const styles = StyleSheet.create({})