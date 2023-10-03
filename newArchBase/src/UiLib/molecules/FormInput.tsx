import {StyleSheet, View} from 'react-native';
import React, {ReactNode, useEffect, useState} from 'react';
import {TextInput} from 'react-native-gesture-handler';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import {Colors, MetricsSizes} from '@/Theme/Variables';
import {useTheme} from '@/Hooks';
import { CText, InputWrapper } from '@/UiLib';
import { IconComp } from '@/Components';
import { IFormInput } from './Res';



const InputComp = ({
  style,
  placeholderTextColor = Colors.GRAY,
  RightComp,
  required,
  label,
  parentStyle,
  LeftComp,
  editable,
  as = 'med_rg',
  color = Colors.WHITE,
  textColor = Colors.font,
  error,
  ...restProps
}: IFormInput) => {
  const [isFocused, setIsFocused] = useState(false);
  
  const {Fonts} = useTheme();

  let opacity = useSharedValue(0);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      opacity: opacity.value,
    };
  });

  useEffect(() => {
    opacity.value = withTiming(1, {duration: 500});
  }, []);

  const toggleFocus = () =>  setIsFocused(!isFocused);

  return (
    <Animated.View style={[animatedStyle]}>
      <InputWrapper
        required={required}
        parentStyle={[parentStyle ]}
        childStyle={[!!error && {borderColor: Colors.ERROR} , isFocused && {borderColor: Colors.BRAND_COLOR} ]}
        label={label}>
        <View
          style={[
            styles.inputRow,
            editable == false && styles.disabledInput,
            {backgroundColor: color},
          ]}>
          {LeftComp && LeftComp}
          <TextInput
            style={[Fonts?.[as], styles.input, style, {color: textColor}]}
            placeholderTextColor={placeholderTextColor}
            editable={editable}
            onFocus={toggleFocus}
            onBlur={toggleFocus}
            {...restProps}
          />
          {RightComp && RightComp}
          {error && <IconComp name="exclamationcircleo" type="AntDesign" size={MetricsSizes.REGULAR} color={Colors.ERROR} />}
        </View>
      </InputWrapper>
        {error && 
        <CText as="pMed" color={Colors.ERROR}>{error+ "  "}
        <IconComp name="exclamationcircleo" type="AntDesign" size={MetricsSizes.REGULAR} color={Colors.ERROR} />
        </CText> }
    </Animated.View>
  );
};

export default InputComp;

const styles = StyleSheet.create({
  inputRow: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
    borderRadius: MetricsSizes.SMALL,
    paddingHorizontal: MetricsSizes.REGULAR,
  },
  input: {
    backgroundColor: Colors.WHITE,
    flex: 1,
    color: Colors.TEXT,
    marginLeft : MetricsSizes.SMALL,
    letterSpacing : 1,
  },
  disabledInput: {
    backgroundColor: Colors.primaryBg,
  },
});
