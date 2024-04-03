import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
interface ContactInterface{
  firstname:string,
  lastname:string,
  email:string,
  address:string,
  phone:string
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
}
