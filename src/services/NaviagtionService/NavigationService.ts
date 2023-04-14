import {Injectable} from '../../IoC';
import {RefObject} from 'react';
import {NavigationContainerRef} from '@react-navigation/native';
import {ScreenParamsTypesMap} from '../../constants/screen.types';

export const INavigationServiceTid = Symbol.for('INavigationServiceTid');

export interface INavigationService {
  init(
    navigationRef: RefObject<NavigationContainerRef<ScreenParamsTypesMap>>,
  ): void;
}

@Injectable()
export class NavigationService implements INavigationService {
  private _navigationRef?: RefObject<
    NavigationContainerRef<ScreenParamsTypesMap>
  >;

  init(navigationRef: RefObject<NavigationContainerRef<ScreenParamsTypesMap>>) {
    this._navigationRef = navigationRef;
  }

  // @action.bound
  // emitNavigationStateChange() {
  //   this.currentRoute = this._navigationRef?.current?.getCurrentRoute();
  // }
}
