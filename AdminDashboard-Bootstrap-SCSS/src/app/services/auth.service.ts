import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isLoggedSubject: BehaviorSubject<boolean>;

  constructor(private apiService: ApiService) {
    this.isLoggedSubject = new BehaviorSubject<boolean>(this.isLoggedin);
   }

   login(username: string, password: string) {
    // console.log(JSON.stringify({username: username, password: password}));

    this.apiService.loginAdmin({username: username, password: password}).subscribe(token => {
      console.log(token);

      localStorage.setItem('token', token);
    })
    // // return 'nkajsfnlka15151';
    this.isLoggedSubject.next(true);
  }

  logout(){
    localStorage.removeItem('token');
    this.isLoggedSubject.next(false);
  }

  get isLoggedin(): boolean{
    if(localStorage.getItem('token')){
      return true;
    }else{
      return false;
    }
  }

  get loggedInStatus():Observable<boolean>{
    return this.isLoggedSubject.asObservable();
  }
}
