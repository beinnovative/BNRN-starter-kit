import { StyleSheet, Text, View } from 'react-native'
import React, { useCallback, useEffect } from 'react'
import { useTheme } from '@/Hooks'
import { BaseButton, CText } from '@/UiLib'
import { IconButton, VGap } from '@/Components'
import OTPTextView from 'react-native-otp-textinput'

//static const
const OTP_TIMER = 60;

type Props = {
    reciepent ?: string,
    codeLength ?: number,
    goBack ?: () => void,
    onVerify?: () => void;
    loading?: boolean;
    otp?: string;
    onOtpChange?: (value: string) => void;
    resendingOtp?: boolean;
    resendCode?: () => void;
    changePhone?: () => void;
}

const VerifyCodeFrag = ({
    reciepent = '+91 9876543210',
    codeLength = 6,
    goBack,
    onVerify,
    otp,
    loading,
    onOtpChange,
    resendingOtp,
    resendCode,
    changePhone
}: Props) => {
    const [countDown , setCountDown] = React.useState<number>(OTP_TIMER)
    const { Layout, Colors, Gutters, MetricsSizes,Common,Fonts } = useTheme()

    const timeOutCallback = useCallback(
        () => setCountDown((currTimer: number) => currTimer - 1),
        [],
    );

    useEffect(() => {
        (countDown > 0) && setTimeout(timeOutCallback, 1000);
    }, [countDown, timeOutCallback]);

    useEffect(() => {
        if (countDown === 0 && !resendingOtp) {
            setCountDown(OTP_TIMER);
        }
    }, [resendingOtp]);

    const helperText = `An ${codeLength} digit code has been sent to `

  return (
    <View style={[Layout.fill , Gutters.REGULARHPadding,{backgroundColor: Colors.BGCOLOR,}]} >
        <View style={[Layout.fill]}>

            <View style={[Layout.rowReverse]}>
                <IconButton onPress={goBack} iconName='close' iconSize={MetricsSizes.XLARGE} />
            </View> 
            <CText as="title">Verification</CText>
            <VGap />

            <View style={[styles.textContainer]}>
                <CText as="reg_rg">{helperText} 
                    <CText as="bold_rg">{reciepent}</CText>
                </CText>
            </View>

            <OTPTextView 
                handleTextChange={onOtpChange}
                inputCount={codeLength}
                keyboardType="numeric"
                tintColor={Colors.BRAND_COLOR}
                offTintColor={Colors.OUTLINE}
                inputCellLength={1}
                textInputStyle={Common.button.outline} //TODO: Figure out how to use common styles more efficiently
            />
            <VGap />
            {/* <CText as="reg_rg">Didn't recieve the code? <CText as="bold_rg">Resend</CText></CText> */}
            <View style={[Layout.row,Layout.justifyContentCenter,Layout.alignItemsCenter]}>
                {
                    countDown > 0 ? (
                        <CText as="reg_rg">Resend code in
                        <CText as="bold_rg" color={Colors.BRAND_COLOR} > {countDown} </CText>
                        seconds
                        </CText>
                    ):(
                        <BaseButton 
                        onPress={resendCode}
                        loading={resendingOtp}
                        variant="tagButton" 
                        style={{borderWidth:1,borderColor : Colors.TEXT_LIGHT}}
                        fontStyle={[Fonts.reg_md,{color : Colors.TEXT}]} >
                           {resendingOtp ? "Sending Again.."  :  "Resend Code"}
                        </BaseButton>
                    )
                }
            </View>
        </View>
        <View style={[Layout.justifyContentCenter,Gutters.REGULARVMargin ]}>
              <BaseButton onPress={onVerify} loading={loading} variant="base" style={[Layout.fullWidth]} >
                {loading ? "Verifying.." : "Submit OTP"}
            </BaseButton>
        </View>
    </View>
  )
}

export default VerifyCodeFrag

const styles = StyleSheet.create({
    textContainer : {
        flexDirection : 'row',
        justifyContent : 'center',
        alignItems : 'center',
        width : '70%'
    }
})