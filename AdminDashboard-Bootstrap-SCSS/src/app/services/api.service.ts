import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Iproduct } from '../models/iproduct';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Iuser } from '../models/iuser';
import { Iseller } from '../models/iseller';
import { Iorder } from '../models/iorder';
import { Iemployee } from '../models/iemployee';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private httpOptions ={}
  constructor(private httpClient: HttpClient) {
    this.httpOptions = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          'Authorization': `${localStorage.getItem('token')}`
        })
    }
   }



  getProducts(): Observable<Iproduct[]> {
    return this.httpClient.get<Iproduct[]>(`${environment.apiURL}/product`, this.httpOptions );
  }

  deleteProduct(id: string) {
    return this.httpClient.delete<any>(`${environment.apiURL}/product/${id}`, this.httpOptions );
  }

  getUsers(): Observable<Iuser[]> {
    return this.httpClient.get<Iuser[]>(`${environment.apiURL}/user`, this.httpOptions );
  }

  getSellers(): Observable<Iseller[]> {
    return this.httpClient.get<Iseller[]>(`${environment.apiURL}/seller`, this.httpOptions );
  }

  getOrders(): Observable<Iorder[]> {
    return this.httpClient.get<Iorder[]>(`${environment.apiURL}/order`, this.httpOptions );
  }

  postUsers(newUser: Iuser): Observable<Iuser[]> {
    return this.httpClient.post<Iuser[]>(`${environment.apiURL}/user`, JSON.stringify(newUser), this.httpOptions );
  }

  postSellers(newSeller: Iseller): Observable<Iseller[]> {
    return this.httpClient.post<Iseller[]>(`${environment.apiURL}/seller`, JSON.stringify(newSeller), this.httpOptions );
  }

  editUsers(updatedUser: Iuser): Observable<Iuser[]> {
    return this.httpClient.put<Iuser[]>(`${environment.apiURL}/user`, JSON.stringify(updatedUser), this.httpOptions );
  }

  editSellers(updatedSeller: Iseller): Observable<Iseller[]> {
    return this.httpClient.put<Iseller[]>(`${environment.apiURL}/seller`, JSON.stringify(updatedSeller), this.httpOptions );
  }

  deleteSeller(id: string) {
    return this.httpClient.delete<any>(`${environment.apiURL}/seller/${id}`, this.httpOptions );
  }

  deleteUser(id: string) {
    return this.httpClient.delete<any>(`${environment.apiURL}/user/${id}`, this.httpOptions );
  }

  deleteOrder(id: string) {
    return this.httpClient.delete<any>(`${environment.apiURL}/order/${id}`, this.httpOptions );
  }

  postEmployee(newSeller: Iemployee): Observable<Iseller[]> {
    return this.httpClient.post<Iseller[]>(`${environment.apiURL}/employee`,JSON.stringify(newSeller), this.httpOptions );
  }

  editEmployee(updatedEmp: Iemployee): Observable<Iuser[]> {
    return this.httpClient.put<Iuser[]>(`${environment.apiURL}/employee`,JSON.stringify(updatedEmp), this.httpOptions );
  }

  loginAdmin(adminCredintials: {}) {
    return this.httpClient.post<string>(`${environment.apiURL}/admin/login`, JSON.stringify(adminCredintials), this.httpOptions);
  }

}
