import {Injectable} from '../../IoC';
import axios from 'axios';
import {IQuotationResponse} from '../../store/QuotationStore/types';

export const IApiServiceTid = Symbol.for('IApiServiceTid');

export interface IApiService {
  get(url: string): Promise<IQuotationResponse | string>;
}

@Injectable()
export class ApiService implements IApiService {
  async get(url: string) {
    try {
      const res = await axios.get(url);

      return res.data;
    } catch (e) {
      console.log(e);
      return 'error';
    }
  }
}
