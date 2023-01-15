import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  userLogin: boolean;
  constructor(private AuthService: AuthService, private router: Router) {
    this.userLogin = this.AuthService.isLoggedin;
  }


  loginFunc(username: string, password: string) {
    this.AuthService.login(username, password);
    this.userLogin = this.AuthService.isLoggedin;
    this.router.navigate(['home']);
    console.log({username: username, password: password});

  }



  ngOnInit(): void {
    this.AuthService.loggedInStatus.subscribe(status => {
      this.userLogin = status;
      console.log(this.userLogin)})
  }

}
