import { Injectable } from '@angular/core';
import { Answer } from '../../core/models/answer';

@Injectable()
export class AnswersService {

  private answers: Answer[] = [];

  constructor() {
  }

  addAnswer(answer: Answer) {
    if (this.answers.find((value) => value.questionId === answer.questionId)) {
      return;
    }

    this.answers.push(answer);
  }

  getAnswers() {
    return this.answers;
  }


}
