import { Component, OnInit } from '@angular/core';
import { Iorder } from '../IOrder';
import { OrderService } from '../services/order.service';

@Component({
  selector: 'app-ordergrid',
  templateUrl: './ordergrid.component.html',
  styleUrls: ['./ordergrid.component.css']
})
export class OrdergridComponent implements OnInit {
 title ="Order Details";
 orders : Iorder [] = [];
  constructor(private orderService: OrderService) { }

  ngOnInit(): void {
    this.getOrders();
  }

  getOrders(){
    this.orderService.getOrders().subscribe(allOrders => this.orders = allOrders );
  }
}
