import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {ContactserviceService} from '../services/contactservice.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-displaycontact',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './displaycontact.component.html',
  styleUrl: './displaycontact.component.css'
})
export class DisplaycontactComponent {
  constructor(public Activatedr:ActivatedRoute, public contactService: ContactserviceService){}
  public contactobj:any={}
  public info2:any[]=[];
  
  ngOnInit(){
    console.log(this.contactService.getArray());
    this.info2 = this.contactService.getArray();
    
    console.log(this.Activatedr.snapshot.params['firstname']);
    let firstname= this.Activatedr.snapshot.params['firstname'];
    console.log(firstname);
    
    let contactarray=JSON.parse(localStorage["contacts_details"])
    console.log(contactarray);
    // console.log(contactarray[firstname]);
    this.contactobj = contactarray.find((contact: any) => contact.firstname === firstname);
    console.log(this.contactobj);
      // find by index//
    // this.contactobj=contactarray[index];
    // console.log(this.contactobj.firstname);
  }

}
