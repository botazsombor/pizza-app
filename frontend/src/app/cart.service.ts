import { Injectable } from '@angular/core';
import { OrderItem } from './orderItem';
import {Pizza} from './pizza';
import { isObject } from 'util';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private orders: OrderItem[];

  constructor() {
    this.orders = [];
  }
  public addPizza(p: Pizza){
    if( this.orders.filter(o=> o.pizza.id == p.id).length > 0){
      this.increaseById(p.id);
    } else{
      this.orders.push(new OrderItem(p));
    }
    console.log(this.orders);
  }

  public increaseById(id: number){
    for(let o of this.orders){
      o.db += o.pizza.id == id ? 1 : 0;
    }
  }

  public decreaseById(id: number){
    for(let o of this.orders){
      o.db += o.pizza.id == id ? -1 : 0;
    }
    this.orders = this.orders.filter(o => o.db != 0);
  }

  public getOrders(): OrderItem[] {
    return this.orders;
  }

  public getPizzaCount(): number{
    let counter = 0;
    for(let o of this.orders){
      counter += o.db
    }
    return counter;
  }

}
