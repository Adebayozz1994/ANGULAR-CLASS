import { Component } from '@angular/core';
import {MyApicallsService} from '../services/my-apicalls.service';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-apicals',
  standalone: true,
  imports: [HttpClientModule, ReactiveFormsModule,CommonModule],
  templateUrl: './apicals.component.html',
  styleUrl: './apicals.component.css'
})
export class ApicalsComponent {
  public usersArray:any=[]
  public photos :any=[]
  public loading = false;
   constructor (
    public apiservice: MyApicallsService
   ){}

   ngOnInit(): void{
    this.apiservice.getUsers().subscribe(data =>{
      console.log(data);
      this.usersArray = data;
    })
    this.apiservice.getTodos().subscribe(Todos =>{
      console.log(Todos);
      this.photos = Todos;
    })
   }

  user={
    completed: false
  }
  buttonColor = 'blue';

  change() {
    this.user.completed = !this.user.completed;
    this.buttonColor = this.user.completed ? 'red' : 'blue';
  }
}
