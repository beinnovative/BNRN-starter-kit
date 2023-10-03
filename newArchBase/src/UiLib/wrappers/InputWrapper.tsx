import {StyleSheet, Text, View} from 'react-native';
import React, { useEffect } from 'react';
import { Colors, MetricsSizes } from '@/Theme/Variables';
import Animated, { useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated';
import { CText } from '@/UiLib';

type Props = {
  children: React.ReactNode;
  style?: any;
  label?: string;
  required?: boolean;
  parentStyle?: any;
  childStyle ?: any,
};

const InputWrapper = ({
  children,
  style,
  label,
  required,
  parentStyle,
  childStyle
}: Props) => {
  const yOffset =useSharedValue(30);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateY: yOffset.value }],
    };
  });

  useEffect(() => {
    yOffset.value = withTiming(0, { duration: 1000 });
  }, [])
  


  return (
    <View style={[styles.parent, parentStyle]}>
      {label && (
        <Animated.View style={[animatedStyle]} >
          <CText as="pMed">
            {label}
          </CText>
        </Animated.View>
      )}
      <View style={[styles.inputContainer,childStyle]}>{children}</View>
     </View>
  );
};

export default InputWrapper;

const styles = StyleSheet.create({
  parent: {
    marginVertical : MetricsSizes.SMALL,
    overflow: 'hidden',
  },
  
  active: {
    // position: 'relative',
  },
  inputContainer: {
    height : MetricsSizes.BASE_HEIGHT,
    borderRadius: MetricsSizes.BASE_RADIUS,
    borderWidth: 1.5,
    // backgroundColor: Colors.WHITE,
    borderColor: Colors.OUTLINE, 
    justifyContent: 'center',
    overflow: 'hidden',
  }
});
