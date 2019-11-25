import { Component, OnInit } from '@angular/core';
import {Pizza} from '../pizza';
import {PizzaService} from '../pizza.service';

@Component({
  selector: 'app-pizza-list',
  templateUrl: './pizza-list.component.html',
  styleUrls: ['./pizza-list.component.css']
})
export class PizzaListComponent implements OnInit {
  private pizzas: Pizza[] = [];
  constructor(private pizzaService: PizzaService) { }

  public filteredPizza: Pizza[];
  public selectedTopping: string;
  public selectedPizza: Pizza;

  async ngOnInit(): Promise<void> {
    this.selectedTopping = '';
    this.pizzas = await this.pizzaService.getPizzas();
    this.filter();
  }

  onFilterChange(topping: string): void {
    this.selectedTopping = topping;
    this.filter();
  }

  onSelectPizza(pizza: Pizza): void {
    this.selectedPizza = pizza;
  }
  
  onAddClick(id: number) {
    //add to cart
  }

  private filter(): void {
    this.filteredPizza = this.selectedTopping === ''
    ? this.pizzas
    : this.pizzas.filter(pizza => pizza.feltetek === this.selectedTopping);
  }
}
