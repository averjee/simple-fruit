import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  total: number;

  constructor(public dataService: DataService) {}

  ngOnInit() {
    // dynamically updating basket total amount
    this.dataService.currentMessage.subscribe(message => this.total = message);  
  }
}
