import { Component, OnInit } from '@angular/core';
import { Iseller } from 'src/app/models/iseller';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-shops',
  templateUrl: './shops.component.html',
  styleUrls: ['./shops.component.scss']
})
export class ShopsComponent implements OnInit {
  ShopsList: Iseller[]=[];
  constructor(private apiServive: ApiService) { }

  ngOnInit(): void {
    this.apiServive.getSellers().subscribe(data => {
      this.ShopsList = data;
    });
  }

  editSeller(id: string){

  }

  deleteSeller(id: string){
    this.apiServive.deleteSeller(id).subscribe()
  }

}
