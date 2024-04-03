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
    public firstname=''
    public lastname=''
    public email=''
    public password=''
    public gender = "";
    
    


}
