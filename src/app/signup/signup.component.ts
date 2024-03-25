import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import {ContactserviceService} from '../services/contactservice.service';
 interface ContactInterface{
  firstname:string,
  lastname:string,
  email:string,
  address:string,
  phone:string
}
@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {
  constructor(public rout:Router, public contractserv: ContactserviceService){}
  public firstname=''
  public lastname=''
  public email=''
  public address=''
  public phone=''

  public contactarray:ContactInterface[] = [];
  public info=''
  ngOnInit(){
    console.log(this.contractserv.getcontact());
    console.log(this.contractserv.returninfo());
    this.info = this.contractserv.returninfo();
    console.log(this.info);
    
    if(localStorage['contacts_details']){
      this.contactarray = this.contractserv.getcontact();
    }
  }

  public signup(){
  //  console.log('how are you');
  let contactObj = {
    firstname:this.firstname,
    lastname:this.lastname,
    email:this.email,
    phone:this.phone,
    address:this.address

  }
  
  this.contactarray.push(contactObj)
  localStorage.setItem('contacts_details',JSON.stringify(this.contactarray))
  console.log(this.contactarray);
  this.address=''
  this.firstname=''
  this.lastname=''
  this.phone=''
  this.email=''
  }

 view(i: any) { 
    this.rout.navigate([`signup/${i}`]); 
    console.log(i);
}

public deleteContact(i: number) {
  if (confirm('ALAYE MAKE I DELETE AM?')) {
    this.contactarray = this.contactarray.filter((contact, index) =>  i!== index); 
console.log(this.contactarray);

    localStorage.setItem('contacts_details', JSON.stringify(this.contactarray));
    window.location.reload();
  }
}

public editContact(contact: ContactInterface) {

}




}
