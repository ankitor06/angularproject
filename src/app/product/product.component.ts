import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl} from '@angular/forms';
import {products} from './products';
import { DataService } from '../data.service';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  form: FormGroup;
  product : any = [];
  constructor(private dataservice:DataService) { }
  getProductData(){
    this.dataservice.getData().subscribe((res)=>{
      this.product=res
    })
  }
  // addProduct()
  // {
  //   this.product.push(this.form.value);
  // }

  ngOnInit(): void {
  
    this.getProductData()
  //  this.form = new FormGroup
  //  ({
  //      product_name : new FormControl(""),
  //      product_price : new FormControl("")
       
  //  })
}
}
