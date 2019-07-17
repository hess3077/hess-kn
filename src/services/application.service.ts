import { Subject } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ApplicationService {
    public applications = [];
    appareilsSubject = new Subject<any[]>();

    constructor(private http: HttpClient) { }

    getApplications() {
        this.http
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