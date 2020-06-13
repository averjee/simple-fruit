import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-fruit-detail',
  templateUrl: './fruit-detail.component.html',
  styleUrls: ['./fruit-detail.component.scss']
})
export class FruitDetailComponent implements OnInit {

  fruit: any = {};
  id: any;

  constructor(private route: ActivatedRoute, private router: Router, private dataService: DataService) {}

  ngOnInit() {

    //since fruit id was passed through via fruitSelected function within fruits.component.ts
    //via navigation which is setup in the app-routing.module.ts, this id is then stored in the 
    //params of the route which then can be extracted so we can then call the getFruits method 
    //stored in the dataService data service
    this.route.paramMap.subscribe((params: ParamMap) => {
      let id: number = parseInt(params.get('id'));
      this.id = id;
    });

    this.fruit = this.dataService.getFruits(this.id);
  }

  addToBasket(price: string){
    this.dataService.updateBasket(parseFloat(price));
  }

  goBack() {
    this.router.navigate(['/fruits']);
  }
  

}
