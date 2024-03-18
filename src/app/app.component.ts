import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LandingpageComponent } from './landingpage/landingpage.component';
import { NavbarpageComponent } from './navbarpage/navbarpage.component';
import { SignupComponent } from './signup/signup.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,CommonModule, LandingpageComponent,NavbarpageComponent, SignupComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'First_Project';
  // public,private,protected
  // object: property and function
  // typescript
}
