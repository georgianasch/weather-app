import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ErrorHandlerService {
  constructor() {}

  /**
   * Handles an http error response to summarize it in a error message
   *
   * @param error - The http error response
   * @returns A error message
   *
   */
  handleHttpError(error: HttpErrorResponse): string {
    console.log(error);
    const genericErrorMessage = 'An error occured. Please contact support.';
    const forbiddenErrorMessage =
      'This action is forbidden. Please contact support.';

    switch (error.status) {
      case ErrorCodes.NotFound:
      case ErrorCodes.BadRequest:
        return error.error?.message || error.message || genericErrorMessage;
      case ErrorCodes.Forbidden:
        return forbiddenErrorMessage;
      case ErrorCodes.InternalServerError:
      default:
        return genericErrorMessage;
    }
  }
}

enum ErrorCodes {
  BadRequest = 400,
  Forbidden = 403,
  NotFound = 404,
  InternalServerError = 500,
}
