import { Injectable } from '@angular/core';
import { Question } from '../../core/models/question';
import { FormPositionType } from '../../core/enum/form-postion-type';
import { FormControlType } from '../../core/enum/form-control-type';
import { Observable, of } from 'rxjs';
import { Answer } from '../../core/models/answer';
import { AnswersService } from './answers.service';

@Injectable()
export class QuestionsService {

  private questions: Question[] = [
    {
      id: 1,
      title: 'Question 1',
      htmlLeftQuestionContent: '<div><img src="./assets/img/questions/question-1.png"></div>',
      htmlRightQuestionContent: '<p>What area for work would you choose?</p>',
      formPosition: FormPositionType.right,
      questionFormControls: [
        {
          id: 1,
          controlType: FormControlType.radioButton,
          required: true,
          htmlContent: 'Region 1',
          name: 'questionOne',
          value: 1
        },
        {
          id: 2,
          controlType: FormControlType.radioButton,
          required: true,
          htmlContent: 'Region 1',
          name: 'questionOne',
          value: 2
        },
        {
          id: 3,
          controlType: FormControlType.radioButton,
          required: true,
          htmlContent: 'Region 3',
          name: 'questionOne',
          value: 3
        },
        {
          id: 4,
          controlType: FormControlType.radioButton,
          required: true,
          htmlContent: 'Region 4',
          name: 'questionOne',
          value: 4
        }
      ]

    },
    {
      id: 2,
      title: 'Question 2',
      htmlLeftQuestionContent: null,
      htmlRightQuestionContent: '<p>What would you to do first?</p>',
      formPosition: FormPositionType.left,
      questionFormControls: [
        {
          id: 1,
          controlType: FormControlType.radioButton,
          required: true,
          htmlContent: '<img src="./assets/img/questions/extra.png">',
          name: 'questionTwo',
          value: 1
        },
        {
          id: 2,
          controlType: FormControlType.radioButton,
          required: true,
          htmlContent: '<img src="./assets/img/questions/fridge.png">',
          name: 'questionTwo',
          value: 2
        },
        {
          id: 3,
          controlType: FormControlType.radioButton,
          required: true,
          htmlContent: '<img src="./assets/img/questions/interior.png">',
          name: 'questionTwo',
          value: 3
        },
        {
          id: 4,
          controlType: FormControlType.radioButton,
          required: true,
          htmlContent: '<img src="./assets/img/questions/party.png">',
          name: 'questionTwo',
          value: 4
        }
      ]

    },
    {
      id: 3,
      title: 'Question 3',
      // tslint:disable-next-line:max-line-length
      htmlLeftQuestionContent: `<div><video width="400" controls><source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4"></video></div>`,
      htmlRightQuestionContent: '<p>What would you to do first?</p>',
      formPosition: FormPositionType.right,
      questionFormControls: [
        {
          id: 1,
          controlType: FormControlType.checkBox,
          htmlContent: 'Answer 1',
          name: 'questionThree1',
        },
        {
          id: 2,
          controlType: FormControlType.checkBox,
          htmlContent: 'Answer 2',
          name: 'questionThree2',
        },
        {
          id: 3,
          controlType: FormControlType.checkBox,
          htmlContent: 'Answer 3',
          name: 'questionThree3',
        },
        {
          id: 4,
          controlType: FormControlType.checkBox,
          htmlContent: 'Answer 4',
          name: 'questionThree4',
        }
      ]

    }
  ];

  private answers: Answer[] = [
    {
      questionId: 1,
      correctAnswer: {questionOne: 4}
    },
    {
      questionId: 2,
      correctAnswer: {questionTwo: 2}
    },
    {
      questionId: 3,
      correctAnswer: {questionThree2: true, questionThree4: true}
    }
  ];

  constructor(private answersService: AnswersService) {
  }

  getQuestions(): Observable<Question[]> {
    return of(this.questions);
  }

  getQuestionByID(id: number): Observable<Question> {
    return of(this.questions.find((value) => value.id === id));
  }

  getAnswer(questionID, userAnswer) {
    const answer = this.answers.find((value) => value.questionId === questionID);
    answer.userAnswer = userAnswer;
    answer.complete = this.isAnswerComplete(answer);
    return of(answer);
  }

  getNextQuestion(questionId: number) {
    const questionIndex = this.questions.findIndex((value) => value.id === questionId);
    if ((this.questions.length - 1) === questionIndex) {
      return;
    }


    return this.questions[questionIndex + 1];
  }


  private isAnswerComplete(answer: Answer) {
    return JSON.stringify(answer.correctAnswer) === JSON.stringify(answer.userAnswer);
  }

}
