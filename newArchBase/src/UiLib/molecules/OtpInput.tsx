import { StyleSheet, Text, TextInput, View } from 'react-native'
import React, { Component, useEffect } from 'react'

type Props = {
    lenght ?: number
}

const OtpInput = ({
    lenght = 6
}: Props) => {
    const [value , setValue] = React.useState<string>('')
    const [inputs , setInputs] = React.useState<Array<any>>([])

    const handleChnage = (text: string) => {
        console.log(text)
    }

    const validateFocus = (index: number) => {
        console.log(index)
        //if index matches with value.length then focus
        if(index === value.length) {
            inputs[index]?.focus()
        }
    }

    const getInputs = () => {
    let tempInputs = []
    for (let i = 0; i < lenght; i++) {
        tempInputs.push(
                 <TextInput 
                    key={i}
                    ref={(ref) => inputs[i] = ref}
                    onChangeText={handleChnage}
                    onFocus={() => validateFocus(i)}
                    style={{height: 40, width: 40, borderColor: 'gray', borderWidth: 1}}
                    keyboardType="number-pad"
                    maxLength={1}
                />

        )
    }
     setInputs(tempInputs)
    }

    useEffect(() => {
        getInputs()
    }, [])



  return (
    <View style={styles.container} >
      <Text>OtpInput : 123 : rendering</Text>
      <View style={styles.inputRow}>
        {inputs}

      </View>
    </View>
  )
}

export default OtpInput

const styles = StyleSheet.create({
    container: {
        flex:1,
        width : '100%',
    },
    inputRow: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        width: '100%',
        height: 50,
    }
})