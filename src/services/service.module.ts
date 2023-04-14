import {IoCModule, Container} from '../IoC';
import {
  INavigationService,
  INavigationServiceTid,
  NavigationService,
} from './NaviagtionService';
import {ApiService, IApiService, IApiServiceTid} from './ApiService';

export class ServiceModule implements IoCModule {
  public Configure(ioc: Container) {
    ioc
      .bind<INavigationService>(INavigationServiceTid)
      .to(NavigationService)
      .inSingletonScope();
    ioc.bind<IApiService>(IApiServiceTid).to(ApiService).inSingletonScope();
  }
}
