import { Text } from 'react-native'
import React from 'react'
import { Colors } from '@/Theme/Variables'
import { IStyleFactory } from '../Utils/UiConfig'
import {IFontVariants, useStyles} from '../Utils'

type Props = {
    children?: React.ReactNode,
    style?: any,
    as?: IFontVariants | string,
    size?: number,
    color?: string,
    align?: "left" | "right" | "center" | "justify" | "auto",
}

const TextComp = ({ children, as = 'p', style, size, color, align }: Props) => {
    let {textStyle}: IStyleFactory = useStyles({ component: "Text" , variant : as })
    return (
        <Text style={[textStyle , { color: color || Colors.TEXT, }, size && { fontSize: size }, align && { textAlign: align }, style]} >
            {children} 
        </Text>
    )
}

export default TextComp

