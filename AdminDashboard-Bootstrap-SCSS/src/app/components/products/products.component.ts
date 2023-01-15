import { Component, OnInit } from '@angular/core';
import { Iproduct } from 'src/app/models/iproduct';
import { ApiService } from 'src/app/services/api.service';
import { DatePipe } from 'src/app/pipes/date.pipe';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
ProductList: Iproduct[]=[];
  constructor(private apiServive: ApiService) { }

  ngOnInit(): void {
    this.apiServive.getProducts().subscribe(data => {
      this.ProductList = data;
    });
  }

  editProduct(id: string){

  }

  deleteProduct(id: string){
    this.apiServive.deleteProduct(id).subscribe()
  }

}
