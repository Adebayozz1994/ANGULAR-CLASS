import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { MyApicallsService } from '../services/my-apicalls.service';
import { HttpClientModule } from '@angular/common/http';



interface ContactInterface{
  firstname:string,
  lastname:string,
  email:string,
  password:string
  address: string 
}
@Component({
  selector: 'app-templatedrivenform',
  standalone: true,
  imports: [FormsModule, CommonModule,ReactiveFormsModule, HttpClientModule],
  templateUrl: './templatedrivenform.component.html',
  styleUrl: './templatedrivenform.component.css'
})
export class TemplatedrivenformComponent {

  constructor(public Router:Router,public MyApi:MyApicallsService,public formBuilder:FormBuilder){}
message:any=''
 public contact :ContactInterface ={
     firstname:'',
     lastname:'',
     email:'',
    password:'',
     address:''
   
  }
    
    contactarray:any=[]
    submit() {

      const UserDetails = {
        name: this.contact.firstname,
        last_name: this.contact.lastname,
        email: this.contact.email,
        password: this.contact.password,
        address: this.contact.address
      }
      console.log(UserDetails);
      
      this.MyApi.registerUser(UserDetails).subscribe((res:any)=>{
        // console.log(res);
        if(res.status==false){
          console.log(res.message);
          this.message=res.message
        }
        if(res.status==true){
          console.log(res.message);
          this.message=res.message
          
        }
    })
      
      // const storedContacts = localStorage.getItem('contact');
      // if (storedContacts) {
      //   this.contactarray = JSON.parse(storedContacts);
      // }
      // this.contactarray.push(this.contact);
      // localStorage.setItem('contact', JSON.stringify(this.contactarray));
      // this.Router.navigate(['/reactivedashboard']);
    }
  

}
