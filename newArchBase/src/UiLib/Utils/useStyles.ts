import { useMemo } from 'react';
import { StyleSheet, TextStyle, ViewStyle } from 'react-native';
import { StylesFactory } from './UiConfig';
import { useTheme } from '@/Hooks';

interface StyleProps {
    component: string;
    variant: string;
}



const useStyles = ({ component, variant }: StyleProps) => {
    const theme = useTheme();

    const styles = useMemo(() => StylesFactory(component, variant,theme), [component, variant]);

    return styles;
};

export default useStyles;
