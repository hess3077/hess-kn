import { Subject } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ApplicationService {
    public applications = [];

    constructor(private http: HttpClient) { }

    getApplications() {
        return this.http
          .get<any[]>("http://localhost:1094/api/applications")
          .subscribe(
            (response) => {
              this.applications = response;

              console.log(response);
            },
            (error) => {
              console.log('Erreur ! : ' + error);
            }
        );
    }
}