import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Product } from '../model/Product';
import { ProductService } from '../service/product.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit{
  // @ViewChild('myForm') myForm!: NgForm;
  product:Product=new Product();
  constructor(private productService:ProductService){}
  ngOnInit(): void {
    
  }
 
onSubmit():void{
  this.saveProduct();
  console.log(this.product);
}

saveProduct(){
  // if (this.myForm.valid){
  this.productService.saveProduct(this.product).subscribe(data =>{
    console.log(data);
  },
  error=>console.log(error));
  
  }
  // else {
  //   console.log('Please fill in all the fields.');
  // }
  
}






