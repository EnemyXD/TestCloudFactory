import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export const Header = () => {
  return (
    <View style={SS.container}>
      <Text style={SS.text}>Name</Text>
      <Text style={SS.text}>last</Text>
      <Text style={SS.text}>highestBid</Text>
      <Text style={SS.text}>percentChange</Text>
    </View>
  );
};

const SS = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingVertical: 5,
  },
  text: {
    width: 150,
    borderWidth: 1,
    borderColor: 'black',
    paddingHorizontal: 2,
  },
});
