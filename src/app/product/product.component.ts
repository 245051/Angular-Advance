import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
@Input() parentdata3!: string;
@Input() parentdata4!: string;
@Input() parentdata5!: string;

@Output() 
public sendData2=new EventEmitter<string>();

printproduct(){
  this.sendData2.emit("The entered data is stored in the table successfully.");
}
}
