import { Subject } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { ApplicationService } from 'src/services/application.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  title = 'hess-kn';

  constructor(private ApplicationService: ApplicationService) {
  }

  ngOnInit() {
    
  }

  onEteindre() {
    if(confirm('Etes-vous sûr de vouloir éteindre tous vos appareils ?')) {
      this.ApplicationService.getApplications();
    } else {
      return null;
    }
  }
}
