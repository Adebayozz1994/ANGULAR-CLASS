import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output} from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule,FormsModule],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent {
  @Input() msgToChild= '';
  @Input() addItems =[];
  @Output() emitToParent = new EventEmitter();




  public response='';
constructor(){}
ngOnInit(): void {
  
}
sendMsgToParent(response:any){
  this.emitToParent.emit(response);
}
}
