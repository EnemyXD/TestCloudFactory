import {NavigationContainerRef} from '@react-navigation/native';
import {ScreenParamsTypesMap} from '../constants/screen.types';
import {Inject, Injectable} from '../IoC';
import {
  INavigationService,
  INavigationServiceTid,
} from '../services/NaviagtionService';
import {RefObject} from 'react';

export const IAppVMTid = Symbol.for('AppVMTid');

export interface IAppVM {
  init(
    navigationRef: RefObject<NavigationContainerRef<ScreenParamsTypesMap>>,
  ): void;
}

@Injectable()
export class AppVM implements IAppVM {
  constructor(
    @Inject(INavigationServiceTid)
    private _navigationService: INavigationService,
  ) {}

  init(navigationRef: RefObject<NavigationContainerRef<ScreenParamsTypesMap>>) {
    this._navigationService.init(navigationRef);
  }
}
