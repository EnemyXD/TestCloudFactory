import React, {FC, memo, useMemo} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {IQuotation} from '../../../store/QuotationStore/types';
import {Cell} from './Cell';

interface IRow {
  name: string;
  quotation: IQuotation;
}

export const Row: FC<IRow> = memo(({name, quotation}) => {
  const renderName = useMemo(() => {
    return <Text style={SS.text}>{name}</Text>;
  }, [name]);

  return (
    <View style={SS.container}>
      {renderName}
      <Cell value={quotation.last} />
      <Cell value={quotation.highestBid} />
      <Cell value={quotation.percentChange} />
    </View>
  );
});

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
