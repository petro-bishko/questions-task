import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { QuestionsService } from './questions.service';
import { Subscription } from 'rxjs';
import { Question } from '../core/models/question';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.scss']
})
export class QuestionsComponent implements OnInit, OnDestroy {

  currentQuestion: Question;
  questionList: Question[] = [];
  private subscription: Subscription = new Subscription();

  constructor(private route: ActivatedRoute,
              private questionsService: QuestionsService) {
  }

  ngOnInit() {
    this.getCurrentQuestion();
    this.getQuestionsList();
  }

  getQuestionsList() {
    const sub = this.questionsService.getQuestions().subscribe((data) => this.questionList = data);
    this.subscription.add(sub);
  }

  getCurrentQuestion() {
    const sub = this.route.params.pipe(
      switchMap((params) => this.questionsService.getQuestionByID(+params.id))
    ).subscribe((data) => this.currentQuestion = data);
    this.subscription.add(sub);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
