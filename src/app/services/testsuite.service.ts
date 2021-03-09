import { TreeNode } from 'primeng/api';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TestsuiteService {
  constructor(private http: HttpClient) {}


  loginAuthentication(body:any) : Observable<any> {
    return this.http.post<any>('http://learning-app:8090/authenticate', body);
  }
 
  /*loginAuthentication1(body){
    return this.http
      .post<any>('http://localhost:8090/authenticate',body)
      .toPromise()
      .then( 
        response => response.json
      );
  }*/

  getTests() {
    return this.http
      .get<any>('assets/tests.json')
      .toPromise()
      .then((res) => <TreeNode[]>res.data);
  }

  getByEnviroment() {
    return this.http
      .get<any>('assets/byEnviroment.json')
      .toPromise()
      .then((res) => <TreeNode[]>res.data);
  }

  getByCountry() {
    return this.http
      .get<any>('assets/byCountry.json')
      .toPromise()
      .then((res) => <TreeNode[]>res.data);
  }

  getResults(url) {
    return this.http
      .get<any>(url)
      .toPromise()
      .then((res) => <any>res.data)
      .then((data) => {
        return data;
      });
  }
}
