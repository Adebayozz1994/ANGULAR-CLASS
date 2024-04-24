import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root',
  
})
export class MyApicallsService {

  constructor(
    private http: HttpClient
  ) { };
  getUsers(){
    return this.http.get('https://jsonplaceholder.typicode.com/users')
  }
  getTodos(){
    return this.http.get('https://jsonplaceholder.typicode.com/todos')
  }
  registerUser(data: any){
    return this.http.post('https://localhost/level4/oopFolder/frontendconnection.php', data);
  }
}
