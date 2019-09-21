import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { DynamicFormQuestionService } from './dynamic-form-question.service';
import { QuestionFormControl } from '../../../core/models/question-form-control';
import { FormControlType } from '../../../core/enum/form-control-type';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form-question.component.html',
  styleUrls: ['./dynamic-form-question.component.scss']
})
export class DynamicFormQuestionComponent implements OnInit {

  @Input() questionFormControls: QuestionFormControl[];

  form: FormGroup;
  formControlType = FormControlType;

  constructor(private fb: FormBuilder,
              private dynamicFormService: DynamicFormQuestionService) {
  }

  ngOnInit() {
    this.initForm();

    this.form.valueChanges.subscribe((data) => {
      console.log(data); // TODO remove console.log
      console.log(this.form.valid); // TODO remove console.log
    });
  }

  initForm() {
    this.form = this.toFormGroup(this.questionFormControls);
    console.log(this.form); // TODO remove console.log
  }

  private toFormGroup(formControls: QuestionFormControl[]) {
    const group: any = {};

    formControls.forEach(control => {

      if (control.controlType === this.formControlType.checkBox) {
        group[control.name] = this.createCheckBoxInputControl(control);
      } else {
        group[control.name] = control.required ? new FormControl(control.value || '', Validators.required)
          : new FormControl(control.value || '');
      }

    });

    return new FormGroup(group);
  }

  private createCheckBoxInputControl(control) {
    return control.required ? new FormControl(control.value || '', [Validators.required, Validators.pattern('true')])
      : new FormControl(control.value || '', Validators.pattern('true'));
  }

}
