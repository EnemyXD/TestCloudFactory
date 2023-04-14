import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export const Error = () => {
  return (
    <View style={SS.container}>
      <Text style={SS.text}>Some Error Occurred</Text>
    </View>
  );
};

const SS = StyleSheet.create({
  container: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: 'red',
    fontSize: 20,
    fontWeight: '600',
  },
});
