import React from 'react';
import {App} from './app';
import {iocLoadModule, IoCProvider} from './IoC';
import {AppModule} from './App.module';

export function bootstrapper() {
  const startedModule = new AppModule();
  iocLoadModule(startedModule);

  return (props: any) => (
    <IoCProvider>
      <App {...props} />
    </IoCProvider>
  );
}
