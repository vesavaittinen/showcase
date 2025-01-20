import { Injectable } from '@angular/core';
import { Question } from '../Models/question';

@Injectable({
  providedIn: 'root'
})
export class QuestionsService {
  questions: Array<Question>;

  constructor() {
    this.questions = [new Question('Is it a good day today?'), new Question('How do you feel now?'),
       new Question('How was your lunch?'), new Question('How is the weather?')]
  }

  getQuestions() {
    return this.questions;
  }
}
