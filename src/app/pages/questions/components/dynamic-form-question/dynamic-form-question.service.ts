import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable()
export class DynamicFormQuestionService {

  formValid: BehaviorSubject<boolean> = new BehaviorSubject(null);
  formValid$ = this.formValid.asObservable();
  formValue;

  constructor() {
  }

  setFormValid(formValid: boolean) {
    this.formValid.next(formValid);
  }

  isFormValid(): Observable<boolean> {
    return this.formValid$;
  }

  setFormValue(formValue) {
    this.formValue = formValue;
  }

  getFormValue() {
    return this.formValue;
  }

}
