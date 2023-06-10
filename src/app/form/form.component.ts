import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
@Input() parentdata1!: string;
@Input() parentdata2!: string;
@Output() public sendData=new EventEmitter<string>();
printdata(){
  this.sendData.emit('Successfully Submitted');
}
}

