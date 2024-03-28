import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reactiveform',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './reactiveform.component.html',
  styleUrl: './reactiveform.component.css'
})
export class ReactiveformComponent {
  constructor(public formbuider: FormBuilder, public router:Router) { }
  public bootstrap ='form-control my-2'
public one=this.formbuider.group({
  fname:'',
  lname:'',
  em:'',
  pass:''
})
public reactivearray:any =[]
public message=''
submit(){
  if (localStorage['reactiveform']){
    this.reactivearray=JSON.parse(localStorage['reactiveform'])
    const emailExists = this.reactivearray.find((item: any) => item.em === this.one.value.em);
    if (emailExists) {
      this.message = "Email already exists";
      setTimeout(() => {
          this.message = ''; 
      }, 1000);
    }else{

      this.reactivearray.push(this.one.value)
      localStorage.setItem('reactiveform',JSON.stringify(this.reactivearray))
      console.log(localStorage['reactiveform']);
      this.one.controls['fname'].setValue('')
      this.one.controls['lname'].setValue('')
      this.one.controls['em'].setValue('')
      this.one.controls['pass'].setValue('')
     
      this.router.navigate(['/reactivesignin'])
      // console.log(this.reactivearray);
      
      // console.log(this.one.value);
      
      // console.log(this.one.value['fname']);
      // console.log(this.one.get('fname')?.value);
      
    // console.log(1234);
    }
  }
}

}
