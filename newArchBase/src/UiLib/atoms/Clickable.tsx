import { Pressable, PressableProps, StyleSheet, Text, TouchableOpacity, TouchableOpacityProps, View } from 'react-native'
import React from 'react'

export interface IClickableProps extends TouchableOpacityProps {

}

const Clickable = (props: IClickableProps) => {

  return (
    <TouchableOpacity activeOpacity={0.7}  {...props}>
        {props.children}
    </TouchableOpacity>
  )
}

export default Clickable

const styles = StyleSheet.create({})