import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
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
  imports: [FormsModule, CommonModule],
  templateUrl: './templatedrivenform.component.html',
  styleUrl: './templatedrivenform.component.css'
})
export class TemplatedrivenformComponent {
 public contact :ContactInterface ={
     firstname:'',
     lastname:'',
     email:'',
    password:'',
     gender:''
   
  }
    
    contactarray:any=[]
submit(){
  localStorage.setItem('contact',JSON.stringify(this.contactarray))
  this.contactarray.push(this.contact)
  
  // console.log('contactarray');
  console.log(this.contact);
  

}

}
