import { Component, Input } from '@angular/core';
import { Question } from '../../../core/models/question';
import { FormPositionType } from '../../../core/enum/form-postion-type';
import { QuestionsService } from '../../services/questions.service';
import { DynamicFormQuestionService } from '../form/dynamic-form-question/dynamic-form-question.service';
import { first } from 'rxjs/operators';
import { AnswersService } from '../../services/answers.service';

@Component({
  selector: 'app-question-form',
  templateUrl: './question-form.component.html',
  styleUrls: ['./question-form.component.scss']
})
export class QuestionFormComponent {

  @Input() question: Question;
  formPositionType = FormPositionType;

  constructor(private questionsService: QuestionsService,
              private formService: DynamicFormQuestionService,
              private answersService: AnswersService) {
  }

  get isFormInvalid() {
    return !this.formService.isFormValid();
  }

  next() {
    console.log('next'); // TODO remove console.log
  }

  submit() {
    this.questionsService.getAnswer(this.question.id, this.formService.getFormValue()).pipe(
      first()
    ).subscribe((data) => this.answersService.addAnswer(data));
  }

}
