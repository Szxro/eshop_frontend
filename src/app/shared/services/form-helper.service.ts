import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { IErrorDict } from 'src/app/core/models/errors.model';

@Injectable({
  providedIn: 'root',
})
export class FormHelperService {
  public isInputValid(field: string, form: FormGroup) {
    //check if the field have errors and was touch
    return form.get(field)!.errors && form.get(field)!.touched;
  }

  private getErrorDict(field: string) {
    const errorDict: IErrorDict = {
      required: `The field ${field} is required`,
      email: 'The email given is not valid',
    };

    return errorDict;
  }

  public getFieldError(field: string, form: FormGroup): string {
    if (!form.get(field) && !form.controls[field].errors) return '';
    //Initializing the error dictionary
    const errorDict = this.getErrorDict(field);

    //getting the errors(return an object)
    const errorsField = form.controls[field].errors;

    for (const key of Object.keys(errorsField!)) {
      return errorDict[key as keyof IErrorDict] ?? 'Unkown Validation';
    }

    return '';
  }
}
