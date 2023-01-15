import { Component, OnInit } from '@angular/core';
import {
  faDashboard,
  faShop,
  faBox,
  faMoneyBill,
  faChartBar,
  faUser,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent implements OnInit {

  faDashboard = faDashboard;
  faShop = faShop;
  faBox = faBox;
  faMoneyBill = faMoneyBill;
  faChartBar = faChartBar;
  faUser = faUser;

  constructor() { }

  ngOnInit(): void {
  }

}
