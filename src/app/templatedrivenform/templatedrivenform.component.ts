import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
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

  constructor(public Router:Router){}

 public contact :ContactInterface ={
     firstname:'',
     lastname:'',
     email:'',
    password:'',
     gender:''
   
  }
    
    contactarray:any=[]
    submit() {
      // Retrieve existing contacts from localStorage
      const storedContacts = localStorage.getItem('contact');
      if (storedContacts) {
        this.contactarray = JSON.parse(storedContacts);
      }
  
      // Add the new contact to the array
      this.contactarray.push(this.contact);
  
      // Store the updated contact array back into localStorage
      localStorage.setItem('contact', JSON.stringify(this.contactarray));
  
      // Navigate to another route after submitting
      this.Router.navigate(['/reactivedashboard']);
    }
  

}
