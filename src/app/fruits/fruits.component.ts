import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from "@angular/router";

@Component({
  selector: 'app-fruits',
  templateUrl: './fruits.component.html',
  styleUrls: ['./fruits.component.scss']
})
export class FruitsComponent implements OnInit {

  fruits: any;
  sortPrice: boolean = false;
  sortAlpha: boolean = false;

  constructor(private dataService: DataService, private router: Router) { }

  ngOnInit() {
    this.fruits = this.dataService.getFruits('');
  }

  fruitSelected(item: any) {
    let id: number;
    console.log(item);
    id = item.id;
    
    this.router.navigate(["fruit-detail", id]);
  }

  addToBasket(price: string){
    this.dataService.updateBasket(parseFloat(price));
  }

  toggleSortPrice(){
    this.sortPrice = !this.sortPrice;
    if (this.sortPrice) {
      this.fruits = this.fruits.sort((low, high) => high.price - low.price);
    } else {
      this.fruits = this.fruits.sort((low, high) => low.price - high.price);
    }
  }

  toggleSortAlpha(){
    this.sortAlpha = !this.sortAlpha;
    if (this.sortAlpha) {
      this.fruits = this.fruits.sort((low, high) => low.title > high.title ? 1 : -1);
    } else {
      this.fruits = this.fruits.sort((low, high) => low.title < high.title ? 1 : -1);
    }
  }

}
