import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

export enum SnackBarType {
  SUCCESS = 'custom-snackbar-success',
  ERROR = 'custom-snackbar-error',
  INFO = 'custom-snackbar-info'
}

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor(private snackBar: MatSnackBar) {}

  showSuccess(message: string): void {
    this.openSnackBar(message, SnackBarType.SUCCESS);
  }

  showError(message: string): void {
    this.openSnackBar(message, SnackBarType.ERROR);
  }

  showInfo(message: string): void {
    this.openSnackBar(message, SnackBarType.INFO);
  }

  private openSnackBar(message: string, panelClass: SnackBarType): void {
    this.snackBar.open(message, '', {
      panelClass: ['custom-snackbar', panelClass]
    });
  }
}
