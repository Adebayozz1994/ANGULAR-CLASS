import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
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
  constructor(public rout:Router){}
  public firstname=''
  public lastname=''
  public email=''
  public address=''
  public phone=''

  public contactarray:ContactInterface[] = [];
  ngOnInit(){
    if(localStorage['contacts_details']){
      this.contactarray = JSON.parse(localStorage['contacts_details'])
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

  

  }

  view(i:any){
    this.rout.navigate([`signup/${i}`])
    console.log(i);
    

  }

}
