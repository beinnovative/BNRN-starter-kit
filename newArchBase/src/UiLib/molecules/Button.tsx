import { ActivityIndicator, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useTheme } from '@/Hooks'
import useStyles from '../Utils/useStyles'
import { CText, Clickable, IClickableProps } from '../atoms'
import { TouchableOpacity } from 'react-native-gesture-handler'

type Props = {
    variant ?: string,
    as ?: string,
    LeftComp ?: React.ReactNode,
    RightComp ?: React.ReactNode,
    children ?: React.ReactNode,
    fontStyle ?: any,
    loading ?: boolean,
}

const Button = ({
    variant = "primary",
    LeftComp,
    RightComp,
    children, 
    as,
    fontStyle,
    style : clickableStyle ,
    loading,
    disabled,
    ...clickableProps
}: Props & IClickableProps ) => {
  //here replicating the config file that will be used in the app
   let {viewStyle , textStyle} = useStyles({component : "Button" , variant})
   const isDisabled = disabled || loading
  return (
      <Clickable  {...clickableProps} 
      disabled={isDisabled} 
      style={[viewStyle, clickableStyle , isDisabled && styles.disabled]}>

        {!!LeftComp && LeftComp}
        {typeof children === "string" ? <CText style={[textStyle, fontStyle]} as={as || 'title'} >{children}</CText> : children }
          {loading && <ActivityIndicator  style={[{marginLeft:20,},]} /> }
        {!!RightComp && RightComp}
        
      </Clickable>
  )
}

export default Button

const styles = StyleSheet.create({
   
    
})