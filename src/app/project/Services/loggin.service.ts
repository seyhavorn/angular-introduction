import { Injectable } from '@angular/core';

// @Injectable({ providedIn: 'root' })
export class LogginService {
  lastLong!: string;

  printLog(message: string) {
    console.log(message);
    console.log(this.lastLong);
    this.lastLong = message;
  }
}
