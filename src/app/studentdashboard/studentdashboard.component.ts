import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-studentdashboard',
  templateUrl: './studentdashboard.component.html',
  styleUrls: ['./studentdashboard.component.css']
})
export class StudentdashboardComponent implements OnInit {

  student:any=[]

  constructor(private dataservice:DataService) { }

  getStudentData(){
    this.dataservice.getData().subscribe((res)=>{
      this.student=res
    })
  }
  ngOnInit(): void {
    this.getStudentData()
  }
  }
  
