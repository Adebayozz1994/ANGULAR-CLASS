import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ChildComponent } from '../child/child.component';

@Component({
  selector: 'app-parent',
  standalone: true,
  imports: [FormsModule,ChildComponent, ReactiveFormsModule,CommonModule],
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.css'
})
export class ParentComponent {
constructor(){}
public message = '';
public msgFromChild = '';
public items:any =[
  {id:1,name:'TShirt', price:1000},
  {id:2,name:'Shirt', price:2000},
  {id:3,name:'Jeans', price:3000},
  {id:4,name:'Trouser', price:4000},
  {id:5,name:'Pant', price:5000},
];
public cartItems:any =[];
ngOnInit(): void {
  
}
addToCart(item:any){
  this.cartItems.push(item);
}
receiveMsgFromChild($event:any){
this.msgFromChild = $event;
}
}
