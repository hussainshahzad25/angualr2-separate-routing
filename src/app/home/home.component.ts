import { Component, OnInit } from '@angular/core';

//import {Http, Response, Headers, RequestOptions} from '@angular/http';
import { Http, Headers } from '@angular/http';
import { HomeService } from './home.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [HomeService, Http]
})
export class HomeComponent implements OnInit {


  shortInfo = [];
  fullInfo = [];
  constructor(private homeService: HomeService) { }

  ngOnInit() {
    this.shortInfo = this.homeService.getInfo();

    // this
    //   .homeService
    //   .getFullInfo()
    //   .subscribe(response => this.fullInfo = response);
  }

}
