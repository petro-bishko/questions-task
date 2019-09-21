import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QuestionsRoutingModule } from './questions-routing.module';
import { QuestionsComponent } from './questions.component';
import { QuestionListComponent } from './components/question-list/question-list.component';
import { QuestionFormComponent } from './components/question-form/question-form.component';
import { ProgressBarComponent } from './components/progress-bar/progress-bar.component';
import { ReactiveFormsModule } from '@angular/forms';
import { QuestionsService } from './questions.service';
import { DynamicFormQuestionComponent } from './components/dynamic-form-question/dynamic-form-question.component';
import { DynamicFormQuestionService } from './components/dynamic-form-question/dynamic-form-question.service';


@NgModule({
  declarations: [
    QuestionsComponent,
    QuestionListComponent,
    QuestionFormComponent,
    ProgressBarComponent,
    DynamicFormQuestionComponent
  ],
  imports: [
    CommonModule,
    QuestionsRoutingModule,
    ReactiveFormsModule
  ],
  providers: [
    DynamicFormQuestionService,
    QuestionsService
  ]
})
export class QuestionsModule {
}
