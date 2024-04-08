import { Component } from '@angular/core';
import { ContactserviceService } from '../services/contactservice.service';

@Component({
  selector: 'app-updatebehaviour',
  standalone: true,
  imports: [],
  templateUrl: './updatebehaviour.component.html',
  styleUrl: './updatebehaviour.component.css'
})
export class UpdatebehaviourComponent {
  constructor(public behaviour: ContactserviceService){
 

  }
public message = 'this is SQI college of ICT'
mes(){
  this.behaviour.behavioursubject.next(this.message)
  
}
}
