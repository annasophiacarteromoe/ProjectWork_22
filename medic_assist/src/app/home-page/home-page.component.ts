import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  ImagePath: string;
  
  constructor() { 
    //image location
    this.ImagePath = '/assets/type-2-diabetes.png'
  }

  ngOnInit(): void {
  }

}
