import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { Observable } from 'rxjs';

@Injectable()
export class HomeService {

  private userListUrl: string = "http://172.16.27.9:8090/api/userList";

  constructor() { }

  // getFullInfo(): Observable<any> {
  //   return this
  //     .http
  //     .get(this.userListUrl)
  //     .map((response: Response) => response.json())
  //     .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  // }

  getInfo() {
    return [
      {
        "id": 1,
        "firstName": "Shahzad",
        "lastName": "Hussain",
        "email": "shahzad@gmail.com",
        "mobile": "7828588330",
        "state": "Delhi",
        "city": "New DElhi",
        "pincode": "110092"
      }, {
        "id": 2,
        "firstName": "Gaurav",
        "lastName": "Bhoparia",
        "email": "gaurav@gmail.com",
        "mobile": "7828588330",
        "state": "Delhi",
        "city": "New DElhi",
        "pincode": "110092"
      }, {
        "id": 3,
        "firstName": "Ram",
        "lastName": "Nath",
        "email": "ram@gmail.com",
        "mobile": "7828588330",
        "state": "Delhi",
        "city": "New DElhi",
        "pincode": "110092"
      }, {
        "id": 2,
        "firstName": "Neha",
        "lastName": "Khanna",
        "email": "neha@gmail.com",
        "mobile": "7828588330",
        "state": "Delhi",
        "city": "New DElhi",
        "pincode": "110092"
      }
    ]
  }
}
