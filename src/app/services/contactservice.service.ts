import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactserviceService {

  constructor() { }
  public behavioursubject = new BehaviorSubject<any>({
    name: 'adebayo',
    address: 'peter',
    age:0
  });
  public info = 'my name is adebayozz'
  


  public returninfo(){
    let infos = 'my name is peter'
    return infos;
  }

  public getcontact(){
    return JSON.parse(localStorage['contacts_details']);
  }


  public arrayone=[
    {name: 'ade', address:'ogbomosho', age: 23},
    {name: 'peter', address:'iwo', age: 43},
    {name: 'john', address:'oyo', age: 63},
  ]
  
  getArray(): any[] {
    return this.arrayone;
  }
  user: any;
}
