import { Platform, ScrollView, StatusBar, StyleSheet, Text, View } from 'react-native'
import React, { ReactNode } from 'react'
import { useTheme } from '@/Hooks'
import { Colors, MetricsSizes } from '@/Theme/Variables'
import { Clickable, CText } from '@/UiLib'
import { HGap, IconComp } from '../Common'
import { adjustString } from '@/Shared/utils'
import { Config } from '@/Config'
import { goBack } from '@/Navigators/utils'

type Props = {
    children?: React.ReactNode;
    style?: any;
    height?: number;
    onBackPress?: () => void;
    backColor?: string;
    headerTitle?: string;
    statusBarColor?: string;
    noScroll?: boolean;
    hideHeader?: boolean;
    hideOptions?: boolean,
}

//TOUPDATE: Update this Layout to your requirement
const DefaultLayout = ({
    children,
    style ,
    height,
    onBackPress,
    backColor,
    headerTitle,
    statusBarColor,
    noScroll,
    hideHeader,
    hideOptions
}: Props) => {
    const { Layout, Colors, Fonts, MetricsSizes, Gutters } = useTheme()
    return (
        <View style={[Layout.fill, { backgroundColor: Colors.BGCOLOR, }]} >
            <StatusBar backgroundColor={Colors.BRAND_COLOR} translucent />

            <View style={[Layout.fullWidth, styles.topContainer]}>
                {hideHeader ? null : <TopBar onBackPress={onBackPress} title={headerTitle} />}
            </View>
            {
                noScroll ?
                children
                :
                <ScrollView style={[Layout.fill]}>
                    {children}
                </ScrollView>

            }
        </View>
    )
}

export default DefaultLayout

type TopBarProps ={
    onBackPress ?: () => void,
    title ?: string,
}

const TopBar = ({
    onBackPress = goBack,
    title = 'Title',
} : TopBarProps) =>{
    const { Layout, Colors, Fonts, MetricsSizes, Gutters } = useTheme()
    const isIos = Platform.OS === 'ios';
    return(
        <View style={[Layout.fill, Layout.rowHCenter,{marginTop : isIos ? 0 : StatusBar.currentHeight }]}>
            {
                onBackPress ? 
                <Clickable onPress={onBackPress} style={[Gutters.REGULARHPadding,Layout.fullHeight,Layout.justifyContentCenter]} >
                    <IconComp 
                    onPress={onBackPress}
                    name="keyboard-backspace" 
                    type="MaterialCommunityIcons"
                    size={MetricsSizes.LARGE} 
                    color={Colors.WHITE} />
                </Clickable>
                 : <HGap />
            }
          
            <HGap gap={MetricsSizes.LARGE} />
            <CText as="med_md" color={Colors.WHITE} >{adjustString(title,Config.TITLE_LENGTH)}</CText>
        </View>
    )
}

const styles = StyleSheet.create({
    topContainer: {
        height: MetricsSizes.SCREEN_HEIGHT * 0.1,
        backgroundColor: Colors.BRAND_COLOR,
    }
})