import {Pizza} from './pizza';

export class OrderItem {
    public pizza: Pizza;
    public db: number;
    constructor(p: Pizza){
        this.pizza = p;
        this.db =1;
    }
}
