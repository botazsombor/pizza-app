import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { Pizza } from '../pizza';
import { OrderItem } from '../orderItem';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  private orders: OrderItem[];
  constructor(private cartService: CartService) { }

  ngOnInit() {
    this.orders = this.cartService.getOrders();
  }

  increase(p: Pizza){
    this.cartService.increaseById(p.id);
  }
  decrease(p: Pizza){
    this.cartService.decreaseById(p.id);
    this.orders = this.cartService.getOrders();
  }

}
