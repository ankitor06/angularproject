import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { getLocaleDateFormat } from '@angular/common';

const api="http://localhost:2222/students/"

@Injectable({
  providedIn: 'root'
})
export class DataService {

  saveData(data){
    return this.httpclient.post(api,data)
  }
  getData(){
    return this.httpclient.get(api)
  }
  constructor(private httpclient:HttpClient) { }
  
  }

