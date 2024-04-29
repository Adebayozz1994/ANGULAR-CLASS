import { Injectable } from '@angular/core';
import { HttpClient,HttpClientModule } from '@angular/common/http';


@Injectable({
  providedIn: 'root',
  
})
export class MyApicallsService {

  constructor(
    public http: HttpClient
  ) { };
  getUsers(){
    return this.http.get('https://jsonplaceholder.typicode.com/users')
  }
  getTodos(){
    return this.http.get('https://jsonplaceholder.typicode.com/todos')
  }
  registerUser(data: any){
    return this.http.post('http://localhost/level4/oopFolder/frontendconnection.php', data);
  }
}
