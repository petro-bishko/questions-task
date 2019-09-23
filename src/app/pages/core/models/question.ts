import { QuestionFormControl } from './question-form-control';

export class Question {
  id: number;
  title: string;
  htmlLeftQuestionContent: string;
  htmlRightQuestionContent: string;
  formPosition: string;
  questionFormControls: QuestionFormControl[] = [];
  answered?: boolean;
}
