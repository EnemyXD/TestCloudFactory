import {IoCModule, Container} from '../IoC';
import {
  IQuotationStore,
  IQuotationStoreTid,
  QuotationStore,
} from './QuotationStore';

export class StoreModule implements IoCModule {
  public Configure(ioc: Container) {
    ioc
      .bind<IQuotationStore>(IQuotationStoreTid)
      .to(QuotationStore)
      .inSingletonScope();
  }
}
