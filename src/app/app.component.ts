import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'loginform';
  entername=" ";
  enteraddress=" ";
  productname=" ";
  productdesc=" ";
  productId=" ";
  newitem="";
  parentdata1="";
  parentdata2="";
  parentdata3="";
  parentdata4="";
  parentdata5="";
  
  parentdata6="";
  viewdata(){
    this.parentdata1=this.entername;
    this.parentdata2=this.enteraddress;
  }
  value=""
  sendData(value:string){
    this.value=value;
  }
  productdata(){
    this.parentdata3=this.productId;
    this.parentdata4=this.productname;
    this.parentdata5=this.productdesc;
  }
  value2=""
  sendData2(value2:string){
    this.value2=value2;}
  

  //   items = ['Emmanuel'];

  // addItem(newItem: string) {
  //   this.items.push(newItem);
  // }
  addNewItem(){
    this.parentdata6=this.newitem;
  }
}
