import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  ImagePath: string;

  constructor(private router: Router) {
    //image location
    this.ImagePath = '/assets/type-2-diabetes.png'
  }

  ngOnInit(): void {
  }
}
