import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {HomeScreenName} from '../../constants/screen.types';
import {AboutScreen, QuotationScreen} from '../../screens';
import {ScreenContainer} from '../../components/ScreenContainer';

const Tab = createMaterialTopTabNavigator();

export const HomeNavigator = () => {
  return (
    <ScreenContainer>
      <Tab.Navigator>
        <Tab.Screen name={HomeScreenName.About} component={AboutScreen} />
        <Tab.Screen
          name={HomeScreenName.Quotation}
          component={QuotationScreen}
        />
      </Tab.Navigator>
    </ScreenContainer>
  );
};
