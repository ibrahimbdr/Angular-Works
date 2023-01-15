import { Component, OnInit } from '@angular/core';
import { Iorder } from 'src/app/models/iorder';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit {
orderList: Iorder[]=[]
constructor(private apiServive: ApiService) { }

ngOnInit(): void {
  this.apiServive.getOrders().subscribe(data => {
    this.orderList = data;
  });
}

editProduct(id: string){

}

deleteProduct(id: string){
  this.apiServive.deleteOrder(id).subscribe()
}


}
