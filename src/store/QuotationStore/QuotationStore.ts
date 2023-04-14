import {Inject, Injectable} from '../../IoC';
import {makeAutoObservable, observable, runInAction} from 'mobx';
import {IQuotationResponse} from './types';
import {IApiService, IApiServiceTid} from '../../services/ApiService';
import {POLOENIX} from './constants';

export const IQuotationStoreTid = Symbol.for('IQuotationStoreTid');

export interface IQuotationStore {
  readonly quotation: IQuotationResponse;
  readonly isError: boolean;
  readonly isLoading: boolean;

  getQuotation(): Promise<void>;
}

@Injectable()
export class QuotationStore implements IQuotationStore {
  @observable quotation: IQuotationResponse = {};
  @observable isError: boolean = false;
  @observable isLoading: boolean = false;

  constructor(
    @Inject(IApiServiceTid) private readonly _apiService: IApiService,
  ) {
    makeAutoObservable(this);
  }

  async getQuotation() {
    runInAction(() => {
      return (this.isLoading = true);
    });
    const res = await this._apiService.get(POLOENIX);

    runInAction(() => {
      this.isLoading = false;
      if (typeof res !== 'string') {
        this.isError = false;
        this.quotation = res;
      } else {
        this.quotation = {};
        this.isError = true;
      }
    });
  }
}
