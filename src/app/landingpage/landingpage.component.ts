import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
interface Objectone{
    name:string,
    age:number
    school:string
    address:string
}
@Component({
  selector: 'app-landingpage',
  standalone: true,
  imports: [],
  templateUrl: './landingpage.component.html',
  styleUrl: './landingpage.component.css'
})
export class LandingpageComponent {
  // number,string,object,array,undefined
  // inference, union

  constructor(public actr:ActivatedRoute){}

  public firstname: string|number|boolean = 'Adebayo';
  public age: number = 56;
  public special : boolean = true;
  public x : undefined|number
  public age2:any
  public obj:Objectone = {
    name:'Adebayo',
    age:56,
    school:'futminna',
    address:'minna'
  }

  public arrayone : number[] = [1,2,3,4,5];
  public arraytwo : string[] = ['ade','bob','john'];
  public arraythree : (number|string)[] = [1,'ade',2,'bob',3,'john'];
  public arrayfour :{
    name:string,
    age:number,
    school:string,
    address:string
  }[]=[
    {
      name:'Adebayo', 
      age:56,
      school:'futminna',
      address:'minna'
    },
    {
      name:'Ade', 
      age:80,
      school:'lautech',
      address:'ogbomosho'
    }]

  ngOnInit(){
    console.log(this.obj);
    console.log(this.arraythree);
    console.log(this.arrayfour);
    console.log(this.actr.snapshot.params['index']);
    
    
    
    
    this.x = 5;
    this.firstname = 34;
    console.log(this.firstname);
    
  }
}
