import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpClientService {

  constructor(private http: HttpClient) { };
//lode
  getApi(url: string){
    return this.http.get(url);
  };
//add
  postApi(url: string, postData: any){
    return this.http.post(url, postData);
  };
//up date
  putApi(url: string, putData: any){
    return this.http.put(url, putData);
  };
//delete
  delApi(url: string){
    return this.http.delete(url)
  };


}
