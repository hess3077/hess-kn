import { Component, OnInit } from '@angular/core';
import { ApplicationService } from 'src/services/application.service';

@Component({
  selector: 'app-applications',
  templateUrl: './applications.component.html',
  styleUrls: ['./applications.component.css']
})
export class ApplicationsComponent implements OnInit {
  
  private applications = [];

  constructor(private ApplicationService: ApplicationService) { 
   //console.log(this.ApplicationService.getApplications());
  }

  ngOnInit() {
    console.log(this.ApplicationService.getApplications());
    console.log('test');
  }

  onEteindre() {
    if(confirm('Etes-vous sûr de vouloir éteindre tous vos appareils ?')) {
      this.ApplicationService.getApplications();
    } else {
      return null;
    }
  }

}
