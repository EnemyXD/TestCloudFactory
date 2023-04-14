import React, {FC, useEffect, useState} from 'react';
import {StatusBar, StyleSheet, View} from 'react-native';
import {currentInsets} from '@delightfulstudio/react-native-safe-area-insets';

interface IScreenContainerProps {
  children: JSX.Element;
}

type TInsets = Awaited<ReturnType<typeof currentInsets>>;

export const ScreenContainer: FC<IScreenContainerProps> = ({children}) => {
  const [insets, setInsets] = useState<TInsets>({
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
  });

  useEffect(() => {
    const getInsets = async () => {
      const _inset = await currentInsets();

      setInsets({..._inset, top: _inset.top + (StatusBar.currentHeight || 0)});
    };

    getInsets();
  }, []);

  return (
    <View
      style={[
        SS.container,
        {paddingTop: insets.top, paddingBottom: insets.bottom},
      ]}>
      {children}
    </View>
  );
};

const SS = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
