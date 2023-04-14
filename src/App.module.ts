import {IoCModule, Container} from './IoC';
import {ServiceModule} from './services/service.module';
import {AppVM, IAppVM, IAppVMTid} from './app/App.vm';
import {StoreModule} from './store/store.module';

export class AppModule implements IoCModule {
  public Configure(ioc: Container): void {
    ioc.bind<IAppVM>(IAppVMTid).to(AppVM).inSingletonScope();

    const imports: IoCModule[] = [new ServiceModule(), new StoreModule()];

    imports.forEach(i => {
      i.Configure(ioc);
    });
  }
}
