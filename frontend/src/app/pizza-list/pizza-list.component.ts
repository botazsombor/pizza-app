import { Component, OnInit } from '@angular/core';
import {Pizza} from '../pizza';
import {PizzaService} from '../pizza.service';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-pizza-list',
  templateUrl: './pizza-list.component.html',
  styleUrls: ['./pizza-list.component.css']
})
export class PizzaListComponent implements OnInit {
  private pizzas: Pizza[] = [];
  constructor(private pizzaService: PizzaService, private cartService: CartService) { }

  public filteredPizza: Pizza[];
  public selectedTopping: string;

  async ngOnInit(): Promise<void> {
    this.selectedTopping = '';
    this.pizzas = await this.pizzaService.getPizzas();
    this.filter();
  }

  onFilterChange(topping: string): void {
    this.selectedTopping = topping;
    this.filter();
  }
  
  onAddClick(p: Pizza) {
    this.cartService.addPizza(p);
  }

  private filter(): void {
    this.filteredPizza = this.selectedTopping === ''
    ? this.pizzas
    : this.pizzas.filter(pizza => pizza.feltetek === this.selectedTopping);
  }
}
