import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QuestionsRoutingModule } from './questions-routing.module';
import { QuestionsComponent } from './questions.component';
import { QuestionListComponent } from './components/question-list/question-list.component';
import { QuestionFormComponent } from './components/question-form/question-form.component';
import { ProgressBarComponent } from './components/progress-bar/progress-bar.component';
import { DynamicFormComponent } from './components/dynamic-form/dynamic-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DynamicFormService } from './components/dynamic-form/dynamic-form.service';
import { QuestionsService } from './questions.service';


@NgModule({
  declarations: [
    QuestionsComponent,
    QuestionListComponent,
    QuestionFormComponent,
    ProgressBarComponent,
    DynamicFormComponent
  ],
  imports: [
    CommonModule,
    QuestionsRoutingModule,
    ReactiveFormsModule
  ],
  providers: [
    DynamicFormService,
    QuestionsService
  ]
})
export class QuestionsModule {
}
