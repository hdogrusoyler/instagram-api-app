import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { BearerModel, TokenModel, PostModel, BearerResultModel, TokenResultModel} from './app-model';

@Injectable({
  providedIn: 'root',
})
export class AppMainService {
  constructor(private httpClient: HttpClient) {}

  getBearerData(model: BearerModel): Observable<BearerResultModel> {
    const url = 'https://graph.facebook.com/oauth/access_token?client_id=' + model.client_id +
      '&client_secret=' + model.client_secret + '&grant_type=client_credentials';
    return this.httpClient.get<BearerResultModel>(url);
  }

  getTokenData(model: TokenModel): Observable<TokenResultModel> {
    // const headers = new HttpHeaders().set('Authorization', `Bearer ${btoa(model.access_token)}`);
    const headers = new HttpHeaders().set('Authorization', `Bearer ${model.access_token}`);
    const url = 'https://graph.facebook.com/' + model.client_id + '/accounts';
    return this.httpClient.get<TokenResultModel>(url, { headers });
  }



  //
  //
  //
  postData(model: PostModel) {
    return this.httpClient.post('url/', model).toPromise();
  }
}
