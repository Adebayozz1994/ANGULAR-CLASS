import { Component } from '@angular/core';
import { ContactserviceService } from '../services/contactservice.service';

@Component({
  selector: 'app-behavioursubject',
  standalone: true,
  imports: [],
  templateUrl: './behavioursubject.component.html',
  styleUrl: './behavioursubject.component.css'
})
export class BehavioursubjectComponent {
  constructor(public behaviour:ContactserviceService){
  };
  public behobj: any =[]
public array =  [
  {name:'ade',address:'ogbomosho',age:34},
  {name:'sola',address:'oyo',age:76},
  {name:'gbogo',address:'ife',age:101},
  {name:'peter',address:'lagos',age:20}
  ]
  senditem(item:any){
    this.behaviour.behavioursubject.next(item)
  }
  ngOnInit(){
    this.behaviour.behavioursubject.subscribe((data:any)=>{
      // console.log(data)
      this.behobj.push(data)
      console.log(this.behobj);
      
    }
  )};
};
