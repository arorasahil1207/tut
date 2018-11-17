import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class HotelService {
hospitalUrl="http://localhost:3000/view"
  constructor(private http:HttpClient) { }

  getHospitalQuiz(){
    return this.http.get(this.hospitalUrl)
  }
}
