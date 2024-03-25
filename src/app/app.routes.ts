import { Routes } from '@angular/router';
import { LandingpageComponent } from './landingpage/landingpage.component';
import { SignupComponent } from './signup/signup.component';
import { NavbarpageComponent } from './navbarpage/navbarpage.component';
import { LoginComponent } from './login/login.component';
import { DisplaycontactComponent } from './displaycontact/displaycontact.component';


export const routes: Routes = [
    {path:'signup', children:[
        {path:'', component:SignupComponent},
        {path:':firstname', component:DisplaycontactComponent},
    ]},
    {path:'login', component: LoginComponent},
    {path:'navbar', component: NavbarpageComponent},
    {path:'home',redirectTo:'',pathMatch:'full'},
    {path:'dashboard', children:[
        {path:'', component:SignupComponent}
    ]}, 
    {path:'details', children:[
        {path:'', component:NavbarpageComponent}, 
        {path:':index', component:LandingpageComponent}
    ]}
];
