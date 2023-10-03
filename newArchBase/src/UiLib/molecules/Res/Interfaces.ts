import { ReactNode } from "react";
import { TextInput } from "react-native";

export interface IFormInput extends React.ComponentProps<typeof TextInput> {
    required?: boolean;
    label?: string;
    RightComp?: ReactNode;
    parentStyle?: any;
    LeftComp?: ReactNode;
    as?: string;
    color?: string;
    textColor?: string;
    error?: string
}