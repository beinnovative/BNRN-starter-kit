import { Theme } from '@/Theme/theme';
import { StyleSheet, ViewStyle, TextStyle } from 'react-native';

export interface IStyleFactory {
    [variant : string] : any;
}

export interface IReturnType<T> {
    [component : string] : T;
}


interface CompStyle<T> {
    [variant: string]: T; // replace `object` with the type of your styles
}

export interface CommonStyles<T> {
    [component: string]: CompStyle<T>;
}

const getStyleSheet = (styles: object) => StyleSheet.create(styles);

export const StylesFactory = <F, G, I, L, C>(component: string, variant: string, theme: Theme<F, G, I, L, C>):any  => {
    let  {Common , Fonts , Layout , Gutters,Colors }= theme;
    let  common = Common as CommonStyles<C> ;
    let fonts = Fonts as CommonStyles<F> ;

    switch (component) {
        case 'Button':
            const fontVariant =  variant.includes("pill") ? "med_rg" : variant.includes("small") ? "med_sm" :  "med_md";
            return {
                viewStyle: common.button[variant],
                textStyle: getStyleSheet({
                    ...fonts?.[fontVariant],
                    color: variant.includes("outline") || variant.includes("pill") ? Colors.TEXT  : Colors.WHITE, //TODO : change this to a more generic way
                }),
            };
            break;
        case 'Text':
            return{textStyle : fonts[variant]}
            break;
    }

   
    
}

