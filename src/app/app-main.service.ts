import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { GetModel, PostModel} from './app-model'

@Injectable({
  providedIn: 'root'
})
export class AppMainService {

  constructor(
    private httpClient: HttpClient
  ) { }

  getData(): Observable<GetModel> {
    return this.httpClient.get<GetModel>('url');
  }

  postData(model: PostModel) {
    return this.httpClient.post('url/', model).toPromise();
  }

}
