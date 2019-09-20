import { FormControl } from './form-control';

export class Question {
  id: number;
  title: string;
  htmlLeftQuestionContent: string;
  htmlRightQuestionContent: string;
  formPosition: string;
  formControl: FormControl[] = [];
}
