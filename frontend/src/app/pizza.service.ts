import { Injectable } from '@angular/core';
import { Pizza } from "./pizza";
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({ 
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin':'*',
    //'Authorization': 'Basic dXNlcjpwYXNzd29yZA==', // pizza/password
  })
};

@Injectable({
  providedIn: 'root'
})
export class PizzaService {
  
  private pizzaUrl: string = 'http://localhost:8080/pizzak';

  constructor(
    private http: HttpClient
  ) { }

  getPizzas(): Promise<Pizza[]> {
    return this.http.get<Pizza[]>(`${this.pizzaUrl}`, httpOptions).toPromise();
  }
  /*
  getPizza(id: number): Promise<Pizza> {
    return this.http.get<Pizza>(`${this.pizzaUrl}/${id}`, httpOptions).toPromise();
  }

  createPizza(pizza: Pizza): Promise<Pizza> {
    return this.http.post<Pizza>(`${this.pizzaUrl}`, Pizza, httpOptions).toPromise();
  }

  updatePizza(pizza: Pizza): Promise<Pizza> {
    return this.http.put<Pizza>(`${this.pizzaUrl}/${pizza.id}`, pizza, httpOptions).toPromise();
  }

  deletePizza(id): Promise<Pizza> {
    return this.http.delete<Pizza>(`${this.pizzaUrl}/${id}`, httpOptions).toPromise();
  }*/
}