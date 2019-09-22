import { Component, Input, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { DynamicFormQuestionService } from './dynamic-form-question.service';
import { debounceTime } from 'rxjs/operators';
import { Subscription } from 'rxjs';
import { FormControlType } from '../../../../core/enum/form-control-type';
import { Question } from '../../../../core/models/question';
import { Answer } from '../../../../core/models/answer';
import { AnswersService } from '../../../services/answers.service';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form-question.component.html',
  styleUrls: ['./dynamic-form-question.component.scss']
})
export class DynamicFormQuestionComponent implements OnDestroy {

  @Input() set question(question: Question) {
    this._question = question;
    this.initForm(question.questionFormControls);
  }

  get question(): Question {
    return this._question;
  }

  get answer() {
    if (!this.question) {
      return;
    }
    return this.answersService.getAnswers().find((value) => value.questionId === this.question.id) || {} as Answer;
  }

  formControlType = FormControlType;
  form: FormGroup;

  private _question;
  private subscription: Subscription = new Subscription();

  constructor(private fb: FormBuilder,
              private formService: DynamicFormQuestionService,
              private answersService: AnswersService) {
  }

  formValueChanges() {
    const sub = this.form.valueChanges.pipe(
      debounceTime(500)
    ).subscribe((data) => {
      this.formService.setFormValid(this.form.valid);
      this.formService.setFormValue(data);
    });

    this.subscription.add(sub);
  }

  initForm(controls) {
    this.form = this.formService.toFormGroup(controls);
    this.formService.setFormValid(this.form.valid);

    if (this.answer && this.answer.userAnswer) {
      this.form.patchValue(this.answer.userAnswer);
    }

    this.formValueChanges();
  }



  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
