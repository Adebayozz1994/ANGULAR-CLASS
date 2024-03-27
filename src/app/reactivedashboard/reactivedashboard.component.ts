import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ContactserviceService } from '../services/contactservice.service';


@Component({
  selector: 'app-reactivedashboard',
  standalone: true,
  imports: [],
  templateUrl: './reactivedashboard.component.html',
  styleUrl: './reactivedashboard.component.css'
})
export class ReactivedashboardComponent {
  user: any;

  constructor(private route: ActivatedRoute,public service: ContactserviceService) {}

  ngOnInit() {
    this.user = this.service.user;
  
}
}