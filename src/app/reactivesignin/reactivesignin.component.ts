import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { ContactserviceService } from '../services/contactservice.service';

@Component({
  selector: 'app-reactivesignin',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './reactivesignin.component.html',
  styleUrl: './reactivesignin.component.css'
})

export class ReactivesigninComponent {
  constructor(public Router:Router,public service:ContactserviceService){}

public em=''
public pass=''
public message=''

public array:any=[]
ngOnInit(){
  this.array= JSON.parse(localStorage['reactiveform'])
  console.log(this.array);
  
}
signin(){
  let user = this.array.find((users:any, index:any)=>users.em===this.em && users.pass===this.pass )
if(user){
  this.service.user = user;
  this.Router.navigate(['/dashboard'], { state: { user } });
  console.log("login successfull");
  
}else{
  this.message="invalid username or password"
  console.log("login failed");
  
}


  console.log(user);
  
  // console.log(1234);
  
}

}
