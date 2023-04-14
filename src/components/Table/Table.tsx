import React, {useCallback} from 'react';
import {observer} from 'mobx-react';
import {useInject} from '../../IoC';
import {IQuotationStore, IQuotationStoreTid} from '../../store/QuotationStore';
import {Row} from './components';
import {ActivityIndicator, ScrollView, StyleSheet} from 'react-native';
import {IQuotation} from '../../store/QuotationStore/types';
import {Header} from './components/Header';
import {Error} from './components/Error';

export const Table = observer(() => {
  const quotationStore = useInject<IQuotationStore>(IQuotationStoreTid);

  const renderItem = useCallback(
    ({name, data}: {name: string; data: IQuotation}) => (
      <Row name={name} quotation={data} key={data.id} />
    ),
    [],
  );

  return (
    <ScrollView horizontal={true} style={SS.container}>
      <ScrollView style={SS.container}>
        {quotationStore.isError && <Error />}
        <Header />
        {Object.entries(quotationStore.quotation).map(el => {
          return renderItem({name: el[0], data: el[1]});
        })}
        {quotationStore.isLoading &&
          Object.keys(quotationStore.quotation).length === 0 && (
            <ActivityIndicator size="large" color="black" style={SS.loader} />
          )}
      </ScrollView>
    </ScrollView>
  );
});

const SS = StyleSheet.create({
  container: {flex: 1, backgroundColor: 'gray'},
  loader: {marginTop: 100},
});
