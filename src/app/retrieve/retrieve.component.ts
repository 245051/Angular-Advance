import { Component, OnInit } from '@angular/core';
import { Product } from '../model/Product';
import { ProductService } from '../service/product.service';




@Component({
  selector: 'app-retrieve',
  templateUrl: './retrieve.component.html',
  styleUrls: ['./retrieve.component.css']
})
export class RetrieveComponent implements OnInit {
  constructor(private service:ProductService)
  {
    
  }
  products: Product[]=[];
  ngOnInit(): void {
    this.products = this.getProducts();
  }
  getProducts():any{
    this.service.getProducts().subscribe((products: Product[])=>{
    this.products = products;
  });

  }    
  // deleteById(id:number):void
  // {
  //   this.service.deleteProduct (id).subscribe(
  //     (response) => {
  //       console.log('deleted successfully');
  //     },
  //     (error) => {
  //       console.log('Error deleting the product:', error);
  //     }
  //   )
  // }
  deleteById(id:number)
  {
    this.service.deleteProduct (id).subscribe(
      (data) => {
        this.products=this.products.filter(item=>item.productId !== id)
        console.log('deleted successfully');
      },
      (error) => {
        console.log('Error deleting the product:', error);
      }
    )
  }
 

  
}

// deleteStudent(id:number){
//   this.service.deleteStudent(id)
//   .subscribe(data => {
//       this.students = this.students.filter(item => item.id !== id);
//       console.log('Product deleted successfully!');
//   }
//   , error => {
//       console.log(error.error.message);
//   }
//   );}