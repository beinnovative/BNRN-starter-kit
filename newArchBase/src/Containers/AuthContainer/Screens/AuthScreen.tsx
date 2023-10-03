import { StyleSheet, Text, View } from 'react-native'
import React, { useMemo, useState } from 'react'
import { useTheme } from '@/Hooks'
import { BaseButton, CText } from '@/UiLib'
import { AuthLayout, VGap } from '@/Components'
import { AuthWrapperFrag, EmailPassFrag, PhoneInputFrag, VerifyCodeFrag } from '../Fragments'
import { VerifyOtpFragment } from '@/Fragments'
import { useEmailAuth, usePhoneAuth } from '../Hooks'

type Props = {
  navigation: any,
  type ?: 'signup' | 'signin'
}



const AuthScreen = ({
  navigation,
  type = 'signin'
}: Props) => {
  const { Layout, Colors } = useTheme()
  const [mode, setMode] = useState<"email" | "phone">("email")
  const altMode = useMemo(() => mode === "email" ? "phone" : "email", [mode])

  //handle phone authentication 
  const {
    otp,
    setOtp,
    phone,
    setPhone,
    otpSent,
    setOtpSent,
    loadingSentOtp,
    loadingVerifyOtp,
    mutateSendOtp,
    mutateVerifyOtp,
    otpResponse
  } = usePhoneAuth()

  //handle email authentication
  const {
    values,
    setFieldValue,
    errors,
    touched,
    handleBlur,
    handleSubmit,
    isLoading: loadingEmailAuth
  } = useEmailAuth(type)

  const handleNavigation = (screenName: string) => {
    navigation.navigate(screenName)
  }

  const _renderFrag = (type: 'signup' | 'signin') => {
    switch (mode) {
      case "email":
        return <EmailPassFrag 
        values={values} 
        setValue={setFieldValue} 
        errors={errors}
        touched={touched}
        handleBlur={handleBlur}
        handleSubmit={handleSubmit}
        type={type} />
      case "phone":
        return <PhoneInputFrag value={phone} setValue={setPhone} type={type} />
      // default:
      //   return <EmailPassFrag type={type} />

    }
  }

  const handleModeChange = () => {
    setMode(altMode)
  }

  const handleTypeChange = () => {
    navigation.navigate(type === "signin" ? "SignUpScreen" : "SignInScreen")
  }

  const handleAction = () => {
    if (mode === "email") {
      handleSubmit()
    } else {
      //send otp to the phone
      mutateSendOtp()
      console.log("otpResponse", otpResponse)
      if(otpResponse) setOtpSent(true)
    }
  }

  const actionLoading = loadingSentOtp || loadingEmailAuth



  if (otpSent) return (
    <VerifyCodeFrag 
      reciepent={`+91 ${phone}`} 
      goBack={() => setOtpSent(false)}
      otp={otp}
      onOtpChange={setOtp}
      onVerify={mutateVerifyOtp}
      loading={loadingVerifyOtp}
      resendCode={mutateSendOtp}
      resendingOtp={loadingSentOtp}
      changePhone={() => setOtpSent(false)}
    />
  )

  return (
    <AuthLayout>

      <VGap />

      <AuthWrapperFrag 
      altMode={altMode} 
      type={type}
      actionValid={mode === "email" ? true : phone.length === 10}
      actionLoading={actionLoading}
      onAction={handleAction}
      changeType={handleTypeChange}
      changeMode={handleModeChange} >
        {_renderFrag(type)}
      </AuthWrapperFrag>

    </AuthLayout>
  )
}

export default AuthScreen

const styles = StyleSheet.create({})