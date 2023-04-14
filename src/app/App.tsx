import React, {useEffect} from 'react';
import {
  NavigationContainer,
  useNavigationContainerRef,
} from '@react-navigation/native';
import {
  CommonScreenName,
  ScreenParamsTypesMap,
} from '../constants/screen.types';
import {StatusBar} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {HomeScreen} from '../screens/Home';
import {useInject} from '../IoC';
import {IAppVM, IAppVMTid} from './App.vm';

const Stack = createNativeStackNavigator();

export const App = () => {
  const appVM = useInject<IAppVM>(IAppVMTid);
  const navigationRef = useNavigationContainerRef<ScreenParamsTypesMap>();

  useEffect(() => {
    appVM.init(navigationRef);
  }, [appVM, navigationRef]);

  return (
    <>
      <StatusBar translucent={true} barStyle="dark-content" />
      <NavigationContainer ref={navigationRef}>
        <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen name={CommonScreenName.Home} component={HomeScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};
