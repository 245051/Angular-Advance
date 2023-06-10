import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-dynamic-table',
  templateUrl: './dynamic-table.component.html',
  styleUrls: ['./dynamic-table.component.css']
})
export class DynamicTableComponent {
  
  items = ['Emmanuel'];
  @Input() parentdata6!:string; 
  addItem(parentdata6:string) {
    console.log("from dyamic-table-ts file");
    this.items.push(parentdata6);
  }

}
