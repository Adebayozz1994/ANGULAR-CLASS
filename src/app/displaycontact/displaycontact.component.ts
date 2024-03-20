import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-displaycontact',
  standalone: true,
  imports: [],
  templateUrl: './displaycontact.component.html',
  styleUrl: './displaycontact.component.css'
})
export class DisplaycontactComponent {
  constructor(public Activatedr:ActivatedRoute){}
  public contactobj:any={}
  ngOnInit(){
    console.log(this.Activatedr.snapshot.params['index']);
    let index= this.Activatedr.snapshot.params['index'];
    console.log(index);
    
    let contactarray=JSON.parse(localStorage["contacts_details"])
    // console.log(contactarray);
    console.log(contactarray[index]);
    this.contactobj=contactarray[index];
    console.log(this.contactobj);
    
  }

}
