import { Component, OnInit } from '@angular/core';
import {Student} from './student';
import {FormGroup,FormControl} from '@angular/forms';
import { DataService } from '../data.service';

@Component({
  selector: 'app-studentregform',
  templateUrl: './studentregform.component.html',
  styleUrls: ['./studentregform.component.css']
})
export class StudentregformComponent implements OnInit {

  form:FormGroup

  register(){
    this.dataservice.saveData(this.form.value).subscribe((res)=>{
      alert("data saved successfully")
    })
  }
 
  constructor(private dataservice:DataService) { }

  // graduation_stream:string[]=["mechanical","ct","civil","aero"]
  ngOnInit(): void {
  
    this.form= new FormGroup(
      {
      student_name:new FormControl(""),
      student_password:new FormControl(""),
      student_email:new FormControl(""),
      student_age:new FormControl(""),
     
      student_address:new FormControl("")
    })
  }
}
