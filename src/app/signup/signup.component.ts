import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {
  public firstname='Adebayozz'
  public lastname='peterzz'

  public signup(){
    console.log(this.firstname);
    console.log(this.lastname);

    

  }

}
