import { ErrorHandler, Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class GlobalErrorHandler implements ErrorHandler {
  constructor() {}
  // better to use unknown to force narrowing
  handleError(error: unknown): void {
    console.error({ error }); // can do a snackbar to show when an error happen
  }
}
