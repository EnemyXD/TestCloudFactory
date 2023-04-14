import React, {useCallback} from 'react';
import {Text, View} from 'react-native';
import {useFocusEffect} from '@react-navigation/native';
import {POOLING_INTERVAL} from './constants';
import {useInject} from '../../IoC';
import {IQuotationStore, IQuotationStoreTid} from '../../store/QuotationStore';
import {Table} from '../../components/Table';

export const QuotationScreen = () => {
  const quotationStore = useInject<IQuotationStore>(IQuotationStoreTid);

  useFocusEffect(
    useCallback(() => {
      quotationStore.getQuotation();

      const intervalId = setInterval(
        () => quotationStore.getQuotation(),
        POOLING_INTERVAL,
      );

      return function clean() {
        clearInterval(intervalId);
      };
    }, [quotationStore]),
  );

  return (
    <View style={{flex: 1}}>
      <Text>Quotation</Text>
      <Table />
    </View>
  );
};
