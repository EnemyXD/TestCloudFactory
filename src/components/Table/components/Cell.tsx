import React, {FC, memo, useEffect} from 'react';
import {StyleSheet, Text} from 'react-native';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import {usePrevious} from '../../../utils/usePrevious';
import {colors} from '../../ThemeProvider';

interface ICellProps {
  value: string;
}

const animationConfig = {duration: 1000};

export const Cell: FC<ICellProps> = memo(({value}) => {
  const prev = usePrevious(Number(value));
  const color = useSharedValue(colors.white);

  useEffect(() => {
    if (value > prev) {
      color.value = withTiming(
        colors.green,
        animationConfig,
        finished =>
          finished && (color.value = withTiming(colors.white, animationConfig)),
      );
    } else if (value < prev) {
      color.value = withTiming(
        colors.red,
        animationConfig,
        finished =>
          finished && (color.value = withTiming(colors.white, animationConfig)),
      );
    }
  }, [color, prev, value]);

  const animatedColor = useAnimatedStyle(() => ({
    backgroundColor: color.value,
  }));

  return (
    <Animated.View style={[SS.container, animatedColor]}>
      <Text>{value}</Text>
    </Animated.View>
  );
});

const SS = StyleSheet.create({
  container: {
    width: 150,
    borderWidth: 1,
    borderColor: 'black',
    paddingHorizontal: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
