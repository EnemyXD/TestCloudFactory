export enum CommonScreenName {
  Home = 'Home',
}

export interface CommonScreenNameMap {
  Home: undefined;
}

export enum HomeScreenName {
  About = 'About',
  Quotation = 'Quotation',
}

export interface HomeScreenNameMap {
  About: undefined;
  Quotation: undefined;
}

export type ScreenName = keyof typeof HomeScreenName | CommonScreenName;

export interface ScreenParamsTypesMap
  extends HomeScreenNameMap,
    CommonScreenNameMap {}
