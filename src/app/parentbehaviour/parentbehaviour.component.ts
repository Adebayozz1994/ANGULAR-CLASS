import { Component } from '@angular/core';
import { UpdatebehaviourComponent } from '../updatebehaviour/updatebehaviour.component';
import { BehaviorSubject } from 'rxjs';
import { BehavioursubjectComponent } from '../behavioursubject/behavioursubject.component';

@Component({
  selector: 'app-parentbehaviour',
  standalone: true,
  imports: [UpdatebehaviourComponent,BehavioursubjectComponent],
  templateUrl: './parentbehaviour.component.html',
  styleUrl: './parentbehaviour.component.css'
})
export class ParentbehaviourComponent {

}
