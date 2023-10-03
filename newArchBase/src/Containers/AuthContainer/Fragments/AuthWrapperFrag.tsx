import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { useTheme } from '@/Hooks'
import { CText, Hr, VGap } from '@/Components'
import { BaseButton } from '@/UiLib'
import AltOptionsFrag from './AltOptionsFrag'



const texts = {
    signup: {
        title: "Create Account",
        subtitle: "Complete your account set-up and Care yourself.",
        actionText: "Create Account",
        actionSubText: "Already have an account? ",
        actionSubTextLink: "Sign In",
    },
    signin: {
        title: "Sign In",
        subtitle: "Enter your mobile number to access your account.",
        actionText: "Sign In",
        actionSubText: "Don't have an account? ",
        actionSubTextLink: "Create Account",
    },
    common: {
        phonePlaceholder: "Enter mobile number",
        phoneError: "Invalid mobile number",
        policyText: "By continuing, you agree to our ",
        privacyText: "Privacy Policy",
        termsText: "Terms of Conditions",
    }
}

type Props = {
    children  ?: React.ReactNode,
    type ?: 'signup' | 'signin',
    changeMode ?: () => void,
    altMode ?: 'email' | 'phone',
    changeType ?: () => void,
    onAction ?: () => void,
    actionLoading ?: boolean,
    actionValid ?: boolean,
}



const AuthWrapperFrag = ({
    children,
    type = 'signup',
    altMode = 'email',
    changeMode = () => {},
    changeType = () => {},
    onAction = () => {},
    actionLoading ,
    actionValid = true
}: Props) => {
  const [hidden , setHidden] = useState<boolean>(false)
  const { Layout, Colors, MetricsSizes } = useTheme()
  return (
    <View style={[Layout.fill]}>
        <View style={[Layout.fullWidth , {height : MetricsSizes.SCREEN_HEIGHT * 0.45,}]} >
            <CText as="title" >{texts[type].title}</CText>
            <VGap />
            <CText as="reg_bs"  >{texts[type].subtitle}</CText>
            <VGap />
            {children}
            <VGap />
            <CText as="reg_sm"  >
                {texts.common.policyText}
                <CText as="med_sm"  >{texts.common.privacyText}</CText>
                {" and "}
                <CText as="med_sm"  >{texts.common.termsText}</CText>
            </CText>

        </View>


        <View style={[Layout.fullWidth , {height : MetricsSizes.SCREEN_HEIGHT * 0.3}]} >

            <BaseButton disabled={!actionValid} loading={actionLoading} onPress={onAction} variant="base" >
                {texts[type].actionText}
            </BaseButton>
            <VGap  />

            <CText as="reg_rg" align="center"  >
                {texts[type].actionSubText}
                <CText onPress={changeType} 
                as="med_rg" color={Colors.BRAND_COLOR}  >{texts[type].actionSubTextLink}</CText>
            </CText>

            <VGap />

            <View style={[Layout.rowVCenter,]}>
                <Hr />
                <CText as="reg_md" color={Colors.BLACK} style={{marginTop : -5}} >  Or  </CText>
                <Hr />
            </View>
            <VGap />

            <AltOptionsFrag mode={altMode} changeMode={changeMode} />
        </View>
    </View>
  )
}

export default AuthWrapperFrag

const styles = StyleSheet.create({})