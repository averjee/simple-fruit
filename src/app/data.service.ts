import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import data from '../app/data/data.json';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  data: any;
  total: number = 0;
  private messageSource = new BehaviorSubject(0);
  currentMessage = this.messageSource.asObservable();

  constructor() { }

  getFruits(value: string): any{
    if (value){
      let result = data.find(result => result.id == value);
      return result;
    } else {
      return data;
    }
  }

  updateBasket(price: number){
    this.total = this.total + price;
    this.messageSource.next(this.total);
  }

  getBasketTotal() {
    return this.total;
  }
}
