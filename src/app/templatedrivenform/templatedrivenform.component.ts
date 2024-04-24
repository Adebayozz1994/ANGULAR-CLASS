import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { MyApicallsService } from '../services/my-apicalls.service';
interface ContactInterface{
  firstname:string,
  lastname:string,
  email:string,
  password:string
  gender: string 
}
@Component({
  selector: 'app-templatedrivenform',
  standalone: true,
  imports: [FormsModule, CommonModule,ReactiveFormsModule],
  templateUrl: './templatedrivenform.component.html',
  styleUrl: './templatedrivenform.component.css'
})
export class TemplatedrivenformComponent {

  constructor(public Router:Router,public MyApi:MyApicallsService,public formBuilder:FormBuilder){}

 public contact :ContactInterface ={
     firstname:'',
     lastname:'',
     email:'',
    password:'',
     gender:''
   
  }
    
    contactarray:any=[]
    submit() {

      const UserDetails = {
        name: this.contact.firstname,
        last_name: this.contact.lastname,
        email: this.contact.email,
        password: this.contact.password,
        // gender: this.contact.gender
      }
      this.MyApi.registerUser(UserDetails).subscribe((res)=>{
        console.log(res);
        
      })
   
    }
  

}
