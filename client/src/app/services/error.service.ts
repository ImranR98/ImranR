import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material';

@Injectable({
  providedIn: 'root'
})
export class ErrorService {

  constructor(private snackBar: MatSnackBar) { }
  showSimpleError(message: string) {
    this.snackBar.dismiss();
    this.snackBar.open(message, 'Dismiss');
  }
}
