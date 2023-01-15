import { Component, OnInit } from '@angular/core';
import { Iuser } from 'src/app/models/iuser';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  UsersList: Iuser[]=[];
  constructor(private apiServive: ApiService) { }

  ngOnInit(): void {
    this.apiServive.getUsers().subscribe(data => {
      this.UsersList = data;
    });
  }

  editUser(id: string){

  }

  deleteUser(id: string){
    this.apiServive.deleteUser(id).subscribe()
  }

}
