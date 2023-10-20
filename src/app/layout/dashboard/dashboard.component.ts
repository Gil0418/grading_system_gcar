import { Component, OnInit } from '@angular/core';
import { dashboard_data } from 'src/shared_data/dashboard_data';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  
  cardData = dashboard_data;

  constructor() {}

    ngOnInit(): void {
    //console.log(this.cardData)
    }
}
