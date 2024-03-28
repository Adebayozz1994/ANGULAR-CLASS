import { Routes } from '@angular/router';
import { LandingpageComponent } from './landingpage/landingpage.component';
import { SignupComponent } from './signup/signup.component';
import { NavbarpageComponent } from './navbarpage/navbarpage.component';
import { LoginComponent } from './login/login.component';
import { DisplaycontactComponent } from './displaycontact/displaycontact.component';
import { ReactiveformComponent } from './reactiveform/reactiveform.component';
import { ReactivesigninComponent } from './reactivesignin/reactivesignin.component';
import { ReactivedashboardComponent } from './reactivedashboard/reactivedashboard.component';
import { ErrorpageComponent } from './errorpage/errorpage.component';


export const routes: Routes = [
    {path:'signup', children:[
        {path:'', component:SignupComponent},
        {path:':firstname', component:DisplaycontactComponent},
    ]},
    {path:'login', component: LoginComponent},
    {path:'reactiveform', component: ReactiveformComponent},
    {path:'reactivesignin', component: ReactivesigninComponent},
    {path:'dashboard', component: ReactivedashboardComponent },
    { path: 'error', component: ErrorpageComponent },
    { path: '**', redirectTo: '/error' },


    {path:'', component: NavbarpageComponent},
    {path:'home',redirectTo:'',pathMatch:'full'},
    {path:'dashboard', children:[
        {path:'', component:SignupComponent}
    ]}, 
    {path:'details', children:[
        {path:'', component:NavbarpageComponent}, 
        {path:':index', component:LandingpageComponent}
    ]}
    
];
