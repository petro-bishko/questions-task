import { Injectable } from '@angular/core';
import { QuestionFormControl } from '../../../../core/models/question-form-control';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FormControlType } from '../../../../core/enum/form-control-type';

@Injectable()
export class DynamicFormQuestionService {

  formValid: boolean;
  formValue: any;

  constructor() {
  }

  setFormValid(formValid: boolean) {
    this.formValid = formValid;
  }

  isFormValid(): boolean {
    return this.formValid;
  }

  setFormValue(formValue) {
    this.formValue = formValue;
  }

  getFormValue() {
    return this.formValue;
  }


  toFormGroup(formControls: QuestionFormControl[]) {
    const group: any = {};
    const validators = [Validators.required];

    formControls.forEach(control => {
      if (control.controlType === FormControlType.checkBox) {
        validators.push(Validators.pattern('true'));
      }

      group[control.name] = control.required ? new FormControl(null, validators) : new FormControl(null);
    });

    return new FormGroup(group);
  }

}
