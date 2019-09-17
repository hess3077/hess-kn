import { Component, OnInit } from '@angular/core';
import { ApplicationService } from 'src/services/application.service';

@Component({
  selector: 'app-applications',
  templateUrl: './applications.component.html',
  styleUrls: ['./applications.component.css']
})
export class ApplicationsComponent implements OnInit {
  
  private applications : [];

  constructor(private ApplicationService: ApplicationService) {
  }

  ngOnInit() {
    this.applications = this.ApplicationService.getApplications();
    
    console.log(this.applications);
    console.log('test');
  }
}
