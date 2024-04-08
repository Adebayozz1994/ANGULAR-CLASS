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
  constructor(public behaviour: ContactserviceService){}
  public obj:any={}
public message = 'this is SQI college of ICT'
ngOnInit(){
  this.behaviour.behavioursubject.subscribe(data=>{
    console.log(data);
    this.obj=data;
    
  })
  
}
}
