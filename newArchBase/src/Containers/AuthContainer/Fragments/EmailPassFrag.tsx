import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { Clickable, CText, FormInput, ImgIcon } from '@/UiLib'
import { IconComp } from '@/Components'
import { useTheme } from '@/Hooks'
import { FormikHelpers } from 'formik'

type Props = {
    type ?: 'signup' | 'signin',
    values : any,
    setValue: (field : string, value : any) => void,
    errors ?: any,
    touched ?: any,
    handleBlur ?: any,
    handleSubmit ?: any
}

const EmailPassFrag = ({
    type = 'signup',
    values,
    setValue,
    errors,
    touched,
    handleBlur,
    handleSubmit
}: Props) => {
    const [secureEntry , setSecureEntry] = useState<boolean>(true)
    const isSignup = type === 'signup'

    const { Layout, Colors, Fonts, MetricsSizes,Images } = useTheme()

    const EyeComp = () => {
        return (
            <IconComp
                onPress={() => setSecureEntry(!secureEntry)}
                name={secureEntry ? "eye-outline" : "eye-off-outline"}
                size={MetricsSizes.BASE_RADIUS}
                color={Colors.TEXT_LIGHT}
            />
        )
    }


  return (
      <View  >
          <FormInput
              value={values?.email}
              onChangeText={(text) => setValue('email', text)}
              error={touched?.email && errors?.email}
              onBlur={handleBlur('email')}
              placeholder='Enter your email'
              LeftComp={<ImgIcon icon={Images.emailIcon}  size={MetricsSizes.BASE_RADIUS}  />}
          />

           <FormInput
              value={values?.password}
              onChangeText={(text) => setValue('password', text)}
              error={touched?.password && errors?.password}
              onBlur={handleBlur('password')}
              secureTextEntry={secureEntry}
              placeholder='Enter your password'
              LeftComp={<IconComp name="lock" type="SimpleLineIcons" size={MetricsSizes.BASE_RADIUS} color={Colors.TEXT_LIGHT} />}
              RightComp={<EyeComp/>}
            />

           
            {
                isSignup ?
                (
                    <CText as="reg_sm" color={Colors.TEXT_LIGHT} >
                        Password must be 8 characters long
                    </CText>
                )
                : (
                    <Clickable  >
                        <CText style={[Fonts.semi_rg, { color: Colors.BRAND_COLOR, alignSelf: 'flex-end' }]} >
                            Forgot Password?
                        </CText>
                    </Clickable>
                )
            }

      </View>
  )
}

export default EmailPassFrag

const styles = StyleSheet.create({})