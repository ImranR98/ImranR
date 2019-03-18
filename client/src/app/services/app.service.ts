import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { CareerAPI, SkillsAPI, ContactAPI, AppError, AppLoadError, ErrorTypes, AppSaveError } from '../models';
import { MatSnackBar } from '@angular/material';

@Injectable({
  providedIn: 'root',
})
export class AppService {
  //API is located at localhost:8080 during development, but is located on the current domain in production
  constructor(private http: HttpClient) {
    if (window.location.hostname == "localhost") {
      environment.apiUrl = "http://localhost:8080";
    } else {
      environment.apiUrl = "";
    }
  }

  getExperience() {
    return this.http.get(environment.apiUrl + '/getExperience') as Observable<CareerAPI>;
  }

  getEducation() {
    return this.http.get(environment.apiUrl + '/getEducation') as Observable<CareerAPI>;
  }

  getSkills() {
    return this.http.get(environment.apiUrl + '/getSkill') as Observable<SkillsAPI>;
  }

  getContact() {
    return this.http.get(environment.apiUrl + '/getContact') as Observable<ContactAPI>;
  }
}

@Injectable({
  providedIn: 'root',
})
export class ErrorService {
  constructor(private snackBar: MatSnackBar) { }

  //This functions shows an Error message in a SnackBar and allows a callback function to be run
  showError = (error: AppError, callback: Function = null): void => {
    this.snackBar.dismiss();
    setTimeout(() => {
      this.snackBar
        .open(error.message, error.action, { duration: 10000 })
        .onAction()
        .subscribe(() => {
          this.snackBar.dismiss();
          if (callback) {
            callback();
          }
        });
    });
  };
}