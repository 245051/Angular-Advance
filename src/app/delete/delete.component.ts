import { Component, OnInit } from '@angular/core';
import { ProductService } from '../service/product.service';
@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {
  productId: number = 0;
  product: any;
  constructor(private productService: ProductService) { }
  ngOnInit(): void {
  }
retrieveProductById(): void {
  this.productService.getProductById(this.productId).subscribe(
    (product) => {
      this.product = product;
    },
    (error) => {
      console.log('Error retrieving product:', error);
    }
  );
}
deleteProductId(): void {
  this.productService.deleteProduct(this.product).subscribe(
    (product) => {
      this.product = product;
    },
    (error) => {
      console.log('Error deleting product:', error);
    }
  );
}
}

  
  
  
  



















  

 

  

  



